import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SlimFooter from "@/components/SlimFooter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt oss — Tigerstaden Lås & Sikkerhet | Låsesmed i Oslo, Asker og Bærum",
  description:
    "Kontakt Tigerstaden Lås & Sikkerhet. Besøk oss i Sandakerveien 138, Oslo, ring 904 13 607 eller send en henvendelse — vi svarer raskt. Døgnvakt hele året.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <SiteHeader active="kontakt" ctaHref="#skjema" />

      <section className="page-hero">
        <div className="container">
          <div className="inner">
            <div className="hero-label">
              <span className="rule" />
              <span className="eyebrow">Kontakt oss</span>
            </div>
            <h1>Vi hører gjerne fra deg</h1>
            <p className="lead">
              Fortell oss kort om eiendommen og behovet, så tar vi kontakt for å avtale en
              befaring. Haster det, ringer du døgnvakten direkte.
            </p>
          </div>
        </div>
      </section>

      <section id="skjema" className="contact-band">
        <div className="container contact-band-inner">
          <div>
            <h2>Kontaktinformasjon</h2>
            <div className="fact-list">
              <div className="fact-row">
                <span className="label">Telefon / døgnvakt</span>
                <a href="tel:+4790413607" className="value">904 13 607</a>
              </div>
              <div className="fact-row">
                <span className="label">E-post</span>
                <a href="mailto:post@tigerstadenlas.no" className="value">post@tigerstadenlas.no</a>
              </div>
              <div className="fact-row">
                <span className="label">Besøksadresse</span>
                <a
                  href="https://maps.google.com/?q=Sandakerveien+138,+0484+Oslo"
                  target="_blank"
                  rel="noopener"
                  className="value"
                  style={{ textAlign: "right" }}
                >
                  Sandakerveien 138, 0484 Oslo
                </a>
              </div>
              <div className="fact-row">
                <span className="label">Dekningsområde</span>
                <span className="value">Oslo · Asker · Bærum</span>
              </div>
              <div className="fact-row">
                <span className="label">Selskap</span>
                <span className="value">Halland Gruppen AS · Org.nr 932 726 025</span>
              </div>
            </div>
            <p className="note">
              Vi svarer på henvendelser innen én virkedag. Ved akutt behov — ring døgnvakten, så er
              hjelpen på vei.
            </p>
          </div>
          <div>
            <h2>Send en henvendelse</h2>
            <ContactForm successText="Vi tar kontakt innen kort tid." />
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container map-section-inner">
          <div className="map-head">
            <div>
              <div className="eyebrow">Her finner du oss</div>
              <h2>Sandakerveien 138, Oslo</h2>
            </div>
            <a
              href="https://maps.google.com/?q=Sandakerveien+138,+0484+Oslo"
              target="_blank"
              rel="noopener"
              className="link-underline"
            >
              Åpne i Google Maps
            </a>
          </div>
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps?q=Sandakerveien+138,+0484+Oslo&output=embed"
              title="Kart — Sandakerveien 138, 0484 Oslo"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SlimFooter />
    </>
  );
}
