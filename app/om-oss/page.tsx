import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SlimFooter from "@/components/SlimFooter";

export const metadata: Metadata = {
  title: "Om oss — Tigerstaden Lås & Sikkerhet | Låsesmed i Oslo, Asker og Bærum",
  description:
    "Tigerstaden Lås & Sikkerhet er en del av Halland Gruppen. Låsesmed med fagbrev, én fast kontaktperson og FG-godkjente løsninger i Oslo, Asker og Bærum.",
};

export default function OmOss() {
  return (
    <>
      <SiteHeader active="om-oss" />

      <section className="page-hero">
        <div className="container">
          <div className="inner">
            <div className="hero-label">
              <span className="rule" />
              <span className="eyebrow">Om oss</span>
            </div>
            <h1>Håndverk med signatur</h1>
            <p className="lead">
              Tigerstaden Lås &amp; Sikkerhet er låsesmeden for deg som stiller samme krav til
              dørene som til resten av bygget — i Oslo, Asker og Bærum.
            </p>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container story-inner">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1607710533910-d7cdffd9e593?q=75&w=1400&auto=format&fit=crop"
              alt="Håndverk i detalj"
              loading="lazy"
            />
          </div>
          <div className="text">
            <h2>En del av Halland Gruppen</h2>
            <p>
              Tigerstaden Lås &amp; Sikkerhet ligger under samme paraply som Tigerstaden Elektro —
              begge er en del av Halland Gruppen AS. Det gjør at vi kan tilby lås og elektro fra
              ett og samme miljø, med felles prosjektledelse og ett ansvar.
            </p>
            <p>
              Alle våre montører har fagbrev, og vi arbeider utelukkende med FG-godkjente
              produkter og løsninger. Hvert prosjekt følges av én fast kontaktperson — fra første
              befaring til overlevering og oppfølging.
            </p>
            <p>
              Vi rykker selvfølgelig ut når det haster. Men den beste jobben vi gjør, er den som
              gjør at du slipper å ringe oss igjen.
            </p>
          </div>
        </div>
      </section>

      <section className="facts-band">
        <div className="container facts-band-inner">
          <div className="facts-grid">
            <div className="fact-card">
              <div className="tag">Kompetanse</div>
              <p>Fagbrev og dokumentert erfaring hos alle montører.</p>
            </div>
            <div className="fact-card">
              <div className="tag">Prosjektledelse</div>
              <p>Én fast kontaktperson gjennom hele prosjektet.</p>
            </div>
            <div className="fact-card">
              <div className="tag">Sertifisering</div>
              <p>FG-godkjente produkter og forskriftsmessig montering.</p>
            </div>
            <div className="fact-card">
              <div className="tag">Beredskap</div>
              <p>Døgnvakt hele året i Oslo, Asker og Bærum.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="inner">
          <h2>Skal vi se på eiendommen din?</h2>
          <p>Fortell oss kort om behovet, så avtaler vi en uforpliktende befaring.</p>
          <div className="actions">
            <Link href="/kontakt" className="btn-solid-navy">Bli kontaktet</Link>
            <a href="tel:+4790413607" className="btn-outline-dark">Døgnvakt 904 13 607</a>
          </div>
        </div>
      </section>

      <SlimFooter />
    </>
  );
}
