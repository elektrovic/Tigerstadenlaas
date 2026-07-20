"use client";

import { useEffect, useRef, useState } from "react";
import type { AnmeldelsesData, Anmeldelse } from "@/lib/googleReviews";

/* Referanse-karusell etter spesifikasjonen i designpakken: Fraunces-sitat,
   gull stjerner, versal-etikett, bytte hvert 8. sekund, piler og
   gull-strek-indikatorer. Faller tilbake til designpakkens sitater hvis
   Google-kallet feiler etter at integrasjonen er konfigurert. */

const FALLBACK: Anmeldelse[] = [
  {
    navn: "Styreleder · Sameie på Frogner",
    stjerner: 5,
    tekst:
      "Fra befaring til ferdig montert låssystem tok det under to uker. Ryddig, presist og pent utført.",
    tidspunkt: "",
  },
  {
    navn: "Boligeier · Vinderen",
    stjerner: 5,
    tekst: "De behandlet vår gamle eikedør med en respekt vi ikke visste fantes i bransjen.",
    tidspunkt: "",
  },
  {
    navn: "Daglig leder · Lysaker",
    stjerner: 5,
    tekst: "Adgangskontroll over tre etasjer — levert uten at kontoret merket noe til arbeidet.",
    tidspunkt: "",
  },
];

export default function Referanser({ data }: { data: AnmeldelsesData | null }) {
  const fraGoogle = data !== null;
  const anmeldelser = data?.anmeldelser ?? FALLBACK;
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (anmeldelser.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % anmeldelser.length),
      8000
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [anmeldelser.length]);

  function bytt(delta: number) {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setIndex((i) => (i + delta + anmeldelser.length) % anmeldelser.length);
  }

  const aktiv = anmeldelser[index];
  const vurderingTekst = data
    ? `${data.vurdering.toLocaleString("nb-NO", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} av 5 — ${data.antall} anmeldelser på Google`
    : null;

  return (
    <section id="referanser" className="testimonials">
      <div className="container testimonials-inner">
        <div className="eyebrow">Referanser</div>
        <div className="stars" aria-label={`${aktiv.stjerner} av 5 stjerner`}>
          {"★".repeat(Math.round(aktiv.stjerner))}
        </div>
        <blockquote>
          <p>«{aktiv.tekst}»</p>
          <footer>
            <span className="who">{aktiv.navn}</span>
            {fraGoogle && (
              <span className="source">
                Google-anmeldelse{aktiv.tidspunkt ? ` · ${aktiv.tidspunkt}` : ""}
              </span>
            )}
          </footer>
        </blockquote>
        {anmeldelser.length > 1 && (
          <div className="controls">
            <button type="button" onClick={() => bytt(-1)} aria-label="Forrige referanse">
              ←
            </button>
            <div className="dots" role="presentation">
              {anmeldelser.map((_, n) => (
                <span key={n} className={n === index ? "dot active" : "dot"} />
              ))}
            </div>
            <button type="button" onClick={() => bytt(1)} aria-label="Neste referanse">
              →
            </button>
          </div>
        )}
        {data && (
          <div className="google-meta">
            <span>{vurderingTekst}</span>
            {data.profilUrl && (
              <a href={data.profilUrl} target="_blank" rel="noopener">
                Se våre anmeldelser på Google
              </a>
            )}
            <a
              href={`https://search.google.com/local/writereview?placeid=${encodeURIComponent(data.placeId)}`}
              target="_blank"
              rel="noopener"
            >
              Skriv en anmeldelse
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
