"use client";

import { useState, type FormEvent } from "react";

/* Ingen backend ennå — innsending viser takkemelding (jf. handoff-README:
   koble til e-post/CRM ved lansering). */
export default function ContactForm({ successText }: { successText: string }) {
  const [sendt, setSendt] = useState(false);

  function sendSkjema(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendt(true);
  }

  if (sendt) {
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
          <input name="navn" required type="text" autoComplete="name" />
        </label>
        <label className="field">
          <span className="field-label">Telefon</span>
          <input name="telefon" required type="tel" autoComplete="tel" />
        </label>
      </div>
      <label className="field">
        <span className="field-label">E-post</span>
        <input name="epost" required type="email" autoComplete="email" />
      </label>
      <label className="field">
        <span className="field-label">Beskriv behovet</span>
        <textarea name="beskrivelse" rows={4} />
      </label>
      <label className="check">
        <input name="befaring" type="checkbox" defaultChecked />
        <span>Jeg ønsker befaring</span>
      </label>
      <button type="submit">Send henvendelse</button>
    </form>
  );
}
