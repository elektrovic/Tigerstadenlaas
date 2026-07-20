"use client";

import { useState, type FormEvent } from "react";

/* Kontaktskjema med backend: sender til /api/kontakt, som validerer og
   videresender henvendelsen som e-post (Resend). Honeypot-feltet «firma»
   er usynlig for mennesker og avslører roboter. */
export default function ContactForm({ successText }: { successText: string }) {
  const [status, setStatus] = useState<"klar" | "sender" | "sendt">("klar");
  const [feil, setFeil] = useState<string | null>(null);

  async function sendSkjema(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sender") return;
    setStatus("sender");
    setFeil(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      navn: data.get("navn"),
      telefon: data.get("telefon"),
      epost: data.get("epost"),
      beskrivelse: data.get("beskrivelse"),
      befaring: data.get("befaring") === "on",
      firma: data.get("firma"),
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sendt");
        return;
      }
      const svar = await res.json().catch(() => null);
      setFeil(svar?.feil ?? "Noe gikk galt. Prøv igjen, eller ring oss på 904 13 607.");
      setStatus("klar");
    } catch {
      setFeil("Fikk ikke kontakt med serveren. Prøv igjen, eller ring oss på 904 13 607.");
      setStatus("klar");
    }
  }

  if (status === "sendt") {
    return (
      <div className="form-success">
        <div className="title">Takk for henvendelsen</div>
        <p>{successText}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={sendSkjema}>
      <div className="row">
        <label className="field">
          <span className="field-label">Navn</span>
          <input name="navn" required type="text" autoComplete="name" maxLength={200} />
        </label>
        <label className="field">
          <span className="field-label">Telefon</span>
          <input name="telefon" required type="tel" autoComplete="tel" maxLength={50} />
        </label>
      </div>
      <label className="field">
        <span className="field-label">E-post</span>
        <input name="epost" required type="email" autoComplete="email" maxLength={254} />
      </label>
      <label className="field">
        <span className="field-label">Beskriv behovet</span>
        <textarea name="beskrivelse" rows={4} maxLength={5000} />
      </label>
      {/* Honeypot — skjult for mennesker, roboter fyller den ut */}
      <label className="hp-field" aria-hidden="true">
        Firma
        <input name="firma" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="check">
        <input name="befaring" type="checkbox" defaultChecked />
        <span>Jeg ønsker befaring</span>
      </label>
      {feil && (
        <p className="form-error" role="alert">
          {feil}
        </p>
      )}
      <button type="submit" disabled={status === "sender"}>
        {status === "sender" ? "Sender …" : "Send henvendelse"}
      </button>
    </form>
  );
}
