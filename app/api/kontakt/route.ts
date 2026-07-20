import { NextRequest, NextResponse } from "next/server";

/* Backend for kontaktskjemaet. Tar imot POST fra skjemaet, validerer,
   stopper spam (honeypot + takstbegrensning) og sender henvendelsen som
   e-post via Resend. Krever RESEND_API_KEY i miljøet — uten den svarer
   ruten 503 og skjemaet viser en feilmelding med telefon som alternativ.

   E-posten sendes som ren tekst, aldri HTML — brukerinput kan dermed ikke
   injisere markup i e-posten. */

export const runtime = "nodejs";

const MOTTAKER = process.env.KONTAKT_MOTTAKER ?? "post@tigerstadenlas.no";
/* Avsender må være et domene verifisert i Resend. Inntil tigerstadenlas.no
   er verifisert der, fungerer Resends testavsender for utprøving. */
const AVSENDER = process.env.KONTAKT_AVSENDER ?? "Tigerstaden nettside <onboarding@resend.dev>";

const MAKS_PER_VINDU = 5;
const VINDU_MS = 10 * 60_000;
const forsok = new Map<string, number[]>();

function forMangeForsok(ip: string): boolean {
  const na = Date.now();
  const nylige = (forsok.get(ip) ?? []).filter((t) => na - t < VINDU_MS);
  if (nylige.length >= MAKS_PER_VINDU) return true;
  nylige.push(na);
  forsok.set(ip, nylige);
  /* enkel opprydding så kartet ikke vokser ubegrenset */
  if (forsok.size > 5000) forsok.clear();
  return false;
}

function gyldigTekst(verdi: unknown, maksLengde: number, kreves: boolean): verdi is string {
  if (typeof verdi !== "string") return !kreves;
  if (kreves && verdi.trim().length === 0) return false;
  return verdi.length <= maksLengde;
}

export async function POST(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") ?? "ukjent").split(",")[0].trim();
  if (forMangeForsok(ip)) {
    return NextResponse.json(
      { feil: "For mange forsøk på kort tid. Vent litt og prøv igjen — eller ring oss på 904 13 607." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ feil: "Ugyldig forespørsel." }, { status: 400 });
  }

  const { navn, telefon, epost, beskrivelse, befaring, firma } = body ?? {};

  /* Honeypot: feltet er skjult for mennesker. Er det fylt ut, er avsenderen
     en robot — vi svarer «ok» uten å sende noe, så roboten ikke lærer. */
  if (typeof firma === "string" && firma.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    !gyldigTekst(navn, 200, true) ||
    !gyldigTekst(telefon, 50, true) ||
    !gyldigTekst(epost, 254, true) ||
    !gyldigTekst(beskrivelse, 5000, false) ||
    typeof epost !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)
  ) {
    return NextResponse.json(
      { feil: "Sjekk at navn, telefon og gyldig e-postadresse er fylt ut." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { feil: "Skjemaet er dessverre utilgjengelig akkurat nå. Ring oss på 904 13 607, eller send e-post til post@tigerstadenlas.no." },
      { status: 503 }
    );
  }

  const linjer = [
    `Navn: ${navn}`,
    `Telefon: ${telefon}`,
    `E-post: ${epost}`,
    `Ønsker befaring: ${befaring ? "Ja" : "Nei"}`,
    "",
    "Beskrivelse av behovet:",
    typeof beskrivelse === "string" && beskrivelse.trim() ? beskrivelse : "(ikke utfylt)",
    "",
    "— Sendt fra kontaktskjemaet på nettsiden",
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: AVSENDER,
        to: [MOTTAKER],
        reply_to: epost,
        subject: `Ny henvendelse fra ${navn} — nettsiden`,
        text: linjer.join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("Resend-feil:", res.status, await res.text());
      return NextResponse.json(
        { feil: "Noe gikk galt ved sending. Prøv igjen, eller ring oss på 904 13 607." },
        { status: 502 }
      );
    }
  } catch (e) {
    console.error("Resend-kall feilet:", e);
    return NextResponse.json(
      { feil: "Noe gikk galt ved sending. Prøv igjen, eller ring oss på 904 13 607." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
