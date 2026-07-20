import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Monogram from "@/components/Monogram";
import ContactForm from "@/components/ContactForm";
import RevealInit from "@/components/RevealInit";
import Referanser from "@/components/Referanser";
import { hentAnmeldelser } from "@/lib/googleReviews";

/* Regenerer forsiden hver 6. time så Google-vurderingen holdes fersk */
export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Låsesmed Oslo, Asker og Bærum — Døgnvakt hele året | Tigerstaden Lås & Sikkerhet",
  description:
    "Trenger du låsesmed i Oslo, Asker eller Bærum? Vi bytter låser, monterer sikkerhetsdører og branndører, og installerer adgangskontroll og alarm. Døgnvakt hele året — ring 904 13 607.",
  keywords:
    "låsesmed Oslo, låsesmed Asker, låsesmed Bærum, låsesmed døgnvakt, bytte lås Oslo, sikkerhetsdør Oslo, branndør Oslo, dørinnsetting, adgangskontroll Oslo, porttelefon borettslag, smartlås, låssystem sameie",
  openGraph: {
    title: "Låsesmed Oslo, Asker og Bærum — Døgnvakt hele året | Tigerstaden Lås & Sikkerhet",
    description:
      "Låsesmed, sikkerhet og dørinnsetting for hjem, borettslag og næring. Døgnvakt hele året — ring 904 13 607.",
    type: "website",
    locale: "nb_NO",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: "Tigerstaden Lås & Sikkerhet",
  description:
    "Låsesmed med døgnvakt i Oslo, Asker og Bærum. Låsbytte, låssystemer, smartlås, adgangskontroll, porttelefon, alarm og montering av sikkerhetsdører og branndører.",
  telephone: "+47 904 13 607",
  email: "post@tigerstadenlas.no",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sandakerveien 138",
    postalCode: "0484",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
  areaServed: [
    { "@type": "City", name: "Oslo" },
    { "@type": "City", name: "Asker" },
    { "@type": "City", name: "Bærum" },
  ],
  openingHours: "Mo-Su 00:00-24:00",
  parentOrganization: {
    "@type": "Organization",
    name: "Halland Gruppen AS",
    url: "https://www.hallandgroup.no",
  },
  knowsAbout: [
    "Låsbytte",
    "Låssystemer",
    "Smartlås",
    "Adgangskontroll",
    "Porttelefon",
    "Alarmsystemer",
    "Sikkerhetsdører",
    "Branndører",
    "Dørinnsetting",
  ],
};

export default async function Home() {
  const anmeldelser = await hentAnmeldelser();
  /* aggregateRating legges kun inn med ekte tall fra Google (bygg/revalidate),
     aldri hardkodet — jf. spesifikasjonen i designpakken */
  const schema = anmeldelser
    ? {
        ...jsonLd,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: anmeldelser.vurdering,
          reviewCount: anmeldelser.antall,
        },
      }
    : jsonLd;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <RevealInit />
      <SiteHeader active="hjem" ctaHref="#kontakt" />

      {/* Hero */}
      <section id="topp" className="home-hero">
        <img
          className="bg"
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=75&w=2200&auto=format&fit=crop"
          alt="Låsesmed i arbeid"
        />
        <div className="scrim-bottom" />
        <div className="scrim-left" />
        <div className="content-wrap">
          <div className="container">
            <div className="content">
              <div className="kicker">Låsesmed — Sikkerhet — Dørinnsetting</div>
              <h1>Sikkerhet i særklasse</h1>
              <p>
                Låsesmed for hjem, borettslag og næring i Oslo, Asker og Bærum. Vi bytter låser,
                monterer dører og installerer adgangskontroll — og har døgnvakt når det haster.
              </p>
              <div className="ctas">
                <a href="#kontakt" className="btn-solid-paper">Bli kontaktet</a>
                <a href="tel:+4790413607" className="btn-outline-light">Døgnvakt 904 13 607</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infostripe */}
      <div className="infostripe">
        <div className="container infostripe-inner">
          <span>En del av Halland Gruppen</span>
          <span>Fagbrev og FG-godkjente løsninger</span>
          <span className="gold">Døgnvakt hele året</span>
        </div>
      </div>

      {/* Statement */}
      <section className="statement">
        <div className="container">
          <div className="inner" data-reveal>
            <div className="hero-label">
              <span className="rule" />
              <span className="eyebrow">Tigerstaden Lås &amp; Sikkerhet</span>
            </div>
            <p>
              En dør er det første du tar i når du kommer hjem. Vi synes den fortjener skikkelig
              håndverk — ikke raske løsninger.
            </p>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="services">
        <div className="container services-inner">
          <div className="service" data-reveal>
            <div className="body">
              <div className="eyebrow">01 — Tjenester</div>
              <h2>Låsesmed</h2>
              <p>
                Skal du bytte lås, montere smartlås eller få på plass et nøkkelsystem? Vi gjør
                låsarbeid i hele Oslo, Asker og Bærum, og tilpasser alltid løsningen til døren den
                skal sitte i.
              </p>
              <div className="items">
                <div>Låsbytte og oppgradering</div>
                <div>Låssystemer</div>
                <div>Nøkkelsystemer</div>
                <div>Smartlås</div>
                <div>Dørautomatikk</div>
                <div>Åpning av safer og komplekse låser</div>
              </div>
              <a href="#kontakt" className="link-underline">Bli kontaktet</a>
            </div>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1677951570313-b0750351c461?q=75&w=1400&auto=format&fit=crop"
                alt="Nøkkel og sylinder"
                loading="lazy"
              />
            </div>
          </div>

          <div className="service" data-reveal>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1549109926-58f039549485?q=75&w=1400&auto=format&fit=crop"
                alt="Kamera og overvåkning"
                loading="lazy"
              />
            </div>
            <div className="body">
              <div className="eyebrow">02 — Tjenester</div>
              <h2>Sikkerhet</h2>
              <p>
                Vi installerer adgangskontroll, porttelefon, kamera og alarm i borettslag, sameier
                og næringsbygg. Gode sikkerhetsløsninger skal gjøre jobben sin uten å prege
                fasaden.
              </p>
              <div className="items">
                <div>Adgangskontroll</div>
                <div>Porttelefon</div>
                <div>Kamera og overvåkning</div>
                <div>Alarmsystemer</div>
                <div>Sikkerhetsbeslag</div>
                <div>FG-godkjente løsninger</div>
              </div>
              <a href="#kontakt" className="link-underline">Bli kontaktet</a>
            </div>
          </div>

          <div className="service" data-reveal>
            <div className="body">
              <div className="eyebrow">03 — Tjenester</div>
              <h2>Levering og montering av dører</h2>
              <p>
                Sliten inngangsdør, eller krav om nye branndører i bygget? Vi leverer og monterer
                sikkerhetsdører, leilighetsdører og inngangspartier i hele Oslo-området, uten å
                sette spor etter oss.
              </p>
              <div className="items">
                <div>Sikkerhetsdører</div>
                <div>Branndører</div>
                <div>Leilighetsdører</div>
                <div>Inngangspartier</div>
              </div>
              <a href="#kontakt" className="link-underline">Bli kontaktet</a>
            </div>
            <div className="image">
              <img
                src="https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a?q=75&w=1400&auto=format&fit=crop"
                alt="Montering av dør"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slik jobber vi */}
      <section id="prosess" className="process">
        <div className="container process-inner">
          <div className="process-head" data-reveal>
            <div>
              <div className="eyebrow">Prosess</div>
              <h2 className="display">Slik jobber vi</h2>
            </div>
            <p>Fire steg, én fast kontaktperson — fra første befaring til siste kvalitetskontroll.</p>
          </div>
          <div className="process-grid">
            <div className="process-step" data-reveal>
              <div className="meta">
                <span className="num">01</span>
                <span className="when">Første møte</span>
              </div>
              <h3>Befaring</h3>
              <p>Vi møter deg på stedet, ser på bygget og hører hva du trenger. Helt uforpliktende.</p>
            </div>
            <div className="process-step" data-reveal>
              <div className="meta">
                <span className="num">02</span>
                <span className="when">Innen få dager</span>
              </div>
              <h3>Løsningsforslag</h3>
              <p>Innen få dager får du et konkret forslag med anbefalte produkter og én fast pris.</p>
            </div>
            <div className="process-step" data-reveal>
              <div className="meta">
                <span className="num">03</span>
                <span className="when">Til avtalt tid</span>
              </div>
              <h3>Montering</h3>
              <p>Håndverkere med fagbrev gjør jobben til avtalt tid, og rydder etter seg.</p>
            </div>
            <div className="process-step" data-reveal>
              <div className="meta">
                <span className="num">04</span>
                <span className="when">I etterkant</span>
              </div>
              <h3>Oppfølging</h3>
              <p>
                Vi kvalitetssikrer og dokumenterer arbeidet. Trenger du oss senere, ringer du samme
                person som sist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Målgrupper */}
      <section id="malgrupper" className="audiences">
        <div className="container">
          <div className="audiences-head" data-reveal>
            <div className="eyebrow">For hvem</div>
            <h2 className="display">Skreddersydd for hver eiendom</h2>
          </div>
          <div className="audience-list">
            <a href="#kontakt" className="audience-row" data-reveal>
              <span className="roman">i.</span>
              <span className="name">Privat</span>
              <span className="desc">
                Vi sikrer hjem og fritidsbolig, fra smartlås til sikkerhetsdør. Diskret og pent
                utført.
              </span>
              <span className="arrow">→</span>
            </a>
            <a href="#kontakt" className="audience-row" data-reveal>
              <span className="roman">ii.</span>
              <span className="name">Borettslag &amp; sameie</span>
              <span className="desc">
                Låssystem, porttelefon og adgangskontroll. Styret får én kontaktperson å forholde
                seg til.
              </span>
              <span className="arrow">→</span>
            </a>
            <a href="#kontakt" className="audience-row" data-reveal>
              <span className="roman">iii.</span>
              <span className="name">Næring</span>
              <span className="desc">
                Adgangskontroll, dørautomatikk og sikkerhetsdører for kontor, butikk og eiendom.
              </span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Om oss */}
      <section id="om-oss" className="about">
        <div className="container about-inner">
          <div className="image" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1607710533910-d7cdffd9e593?q=75&w=1400&auto=format&fit=crop"
              alt="Håndverk i detalj"
              loading="lazy"
            />
          </div>
          <div className="text" data-reveal>
            <div className="eyebrow">Om oss</div>
            <h2 className="display">Håndverk med signatur</h2>
            <p style={{ marginTop: 26 }}>
              Tigerstaden Lås &amp; Sikkerhet ligger under samme paraply som Tigerstaden Elektro —
              begge er en del av Halland Gruppen AS. Derfor kan vi tilby lås og elektro samlet, fra
              ett og samme miljø.
            </p>
            <p className="last">
              Alle montørene våre har fagbrev, og du har én fast kontaktperson fra første befaring
              til jobben er overlevert.
            </p>
            <div className="fact-list">
              <div className="fact-row">
                <span className="label">Kompetanse</span>
                <span className="value">Fagbrev og dokumentert erfaring</span>
              </div>
              <div className="fact-row">
                <span className="label">Prosjektledelse</span>
                <span className="value">Én fast kontaktperson</span>
              </div>
              <div className="fact-row">
                <span className="label">Sertifisering</span>
                <span className="value">FG-godkjente produkter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lås + Elektro */}
      <section id="las-og-elektro" className="combo">
        <div className="container">
          <div className="combo-head" data-reveal>
            <div>
              <Monogram size={56} thin />
              <div className="eyebrow">Halland Gruppen</div>
              <h2 className="display">Låsesmed og elektriker — under samme tak</h2>
            </div>
            <div className="text">
              <p>
                Tigerstaden Lås &amp; Sikkerhet og Tigerstaden Elektro er søsterselskaper i Halland
                Gruppen. Adgangskontroll, dørautomatikk og porttelefon trenger strøm og kabling, og
                hos oss planlegges og monteres alt av ett fagmiljø i hele Oslo, Asker og Bærum.
              </p>
              <p className="last">
                For deg betyr det én befaring, ett løsningsforslag og ett ansvar. Det gjelder enten
                prosjektet er én dør eller et helt bygg.
              </p>
              <a href="#kontakt" className="btn-outline-dark">Bli kontaktet</a>
            </div>
          </div>
          <div className="combo-cols" data-reveal>
            <div className="combo-col">
              <div className="title">Lås &amp; Sikkerhet</div>
              <div className="item">Låssystemer og låsbytte</div>
              <div className="item">Adgangskontroll og porttelefon</div>
              <div className="item">Kamera, overvåkning og alarm</div>
              <div className="item">Sikkerhetsdører og branndører</div>
            </div>
            <div className="combo-col">
              <div className="title">Derfor trenger låsarbeid en elektriker</div>
              <div className="item">Dørautomatikk og motorlåser krever egen, fast strømkurs</div>
              <div className="item">Adgangskontroll og porttelefon trenger kabling og sikker strømforsyning</div>
              <div className="item">Magnetlåser må integreres med brannalarmen — med batteribackup</div>
              <div className="item">Kamera og alarm skal ha strøm og nettverk montert forskriftsmessig</div>
            </div>
          </div>
          <div className="combo-tagline" data-reveal>
            <span>Én befaring</span>
            <span className="dot">·</span>
            <span>Ett løsningsforslag</span>
            <span className="dot">·</span>
            <span>Ett ansvar</span>
          </div>
        </div>
      </section>

      {/* Referanser — vises når Google Business-profilen er koblet til */}
      {anmeldelser && <Referanser data={anmeldelser} />}

      {/* Døgnvakt */}
      <section id="dognvakt" className="emergency">
        <div className="inner" data-reveal>
          <div className="eyebrow">Døgnvakt</div>
          <h2>Døgnåpen låsesmed — hele året</h2>
          <p>
            Står du låst ute, eller har døren eller låsen blitt skadet? Ring oss, så kommer vi. Vi
            dekker hele Oslo, Asker og Bærum.
          </p>
          <a href="tel:+4790413607" className="phone">904 13 607</a>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="home-contact">
        <div className="container home-contact-inner">
          <div data-reveal>
            <div className="eyebrow">Kontakt</div>
            <h2 className="display">Bli kontaktet</h2>
            <p className="lead" style={{ marginTop: 22 }}>
              Fortell oss kort om eiendommen og hva du trenger, så ringer vi deg og avtaler
              befaring.
            </p>
            <div className="fact-list">
              <div className="fact-row">
                <span className="label">Telefon</span>
                <a href="tel:+4790413607" className="value">904 13 607</a>
              </div>
              <div className="fact-row">
                <span className="label">E-post</span>
                <a href="mailto:post@tigerstadenlas.no" className="value">post@tigerstadenlas.no</a>
              </div>
              <div className="fact-row">
                <span className="label">Dekningsområde</span>
                <span className="value">Oslo · Asker · Bærum</span>
              </div>
            </div>
          </div>
          <div data-reveal>
            <ContactForm successText="Vi tar kontakt innen kort tid for å avtale befaring." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="inner">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-name">
                <span className="primary">Tigerstaden</span>
                <span className="secondary">Lås &amp; Sikkerhet</span>
              </div>
              <p>
                En del av Halland Gruppen. Låsesmed, sikkerhet og dørinnsetting for Oslo, Asker og
                Bærum — med døgnvakt hele året.
              </p>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <span className="col-title">Tjenester</span>
                <Link href="/tjenester">Låsesmed</Link>
                <Link href="/tjenester">Sikkerhet</Link>
                <Link href="/tjenester">Dørinnsetting</Link>
              </div>
              <div className="footer-col">
                <span className="col-title">Selskap</span>
                <Link href="/om-oss">Om oss</Link>
                <a href="https://www.hallandgroup.no" target="_blank" rel="noopener">Halland Gruppen</a>
                <a href="#prosess">Slik jobber vi</a>
                <a href="#kontakt">Kontakt</a>
              </div>
              <div className="footer-col">
                <Link href="/dognvakt" className="col-title">Døgnvakt</Link>
                <a href="tel:+4790413607" className="phone-big">904 13 607</a>
                <a href="mailto:post@tigerstadenlas.no">post@tigerstadenlas.no</a>
              </div>
            </div>
          </div>
          <div className="footer-meta">
            <span>© 2026 Halland Gruppen AS · Org.nr 932 726 025</span>
            <span>Oslo · Asker · Bærum</span>
          </div>
        </div>
      </footer>
    </>
  );
}
