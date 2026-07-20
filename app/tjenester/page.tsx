import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SlimFooter from "@/components/SlimFooter";

export const metadata: Metadata = {
  title: "Våre tjenester — Låsesmed i Oslo, Asker og Bærum | Tigerstaden Lås & Sikkerhet",
  description:
    "Komplett oversikt over våre låsesmedtjenester i Oslo og omegn: akutt låsservice, låsbytte, elektroniske låssystemer, adgangskontroll, porttelefoni, dørautomatikk, innbruddssikring, sveis og metall, og nye dører.",
};

export default function Tjenester() {
  return (
    <>
      <SiteHeader active="tjenester" />

      <section className="page-hero on-navy">
        <div className="container">
          <div className="inner">
            <div className="hero-label">
              <span className="rule" />
              <span className="eyebrow">Våre tjenester i Oslo og omegn</span>
            </div>
            <h1>Alt innen lås, sikkerhet og dør</h1>
            <p className="lead">
              Fra akutt låsservice til komplette adgangsløsninger — utført av håndverkere med
              fagbrev, i Oslo, Asker og Bærum.
            </p>
            <div className="services-toc">
              <a href="#akutt">01 Akutt</a>
              <a href="#las-beslag">02 Lås og beslag</a>
              <a href="#elektronisk">03 Elektronisk</a>
              <a href="#dor">04 Dørmontering og metall</a>
            </div>
          </div>
        </div>
      </section>

      <section id="akutt" className="service-band">
        <div className="container grid">
          <div>
            <div className="eyebrow">01 — Akutt</div>
            <h2>Akutt låsservice</h2>
            <p className="desc">
              Utelåst, brukket nøkkel eller skade etter innbrudd — vi rykker ut hele døgnet.{" "}
              <Link href="/dognvakt">Les mer om døgnvakten</Link>.
            </p>
          </div>
          <div className="hairline-list">
            <div>Akutt låsservice — hele døgnet</div>
            <div>Låsservice til private</div>
            <div>Låsservice til virksomheter</div>
            <div>Innbruddssikring</div>
          </div>
        </div>
      </section>

      <section id="las-beslag" className="service-band on-bone">
        <div className="container grid">
          <div>
            <div className="eyebrow">02 — Lås og beslag</div>
            <h2>Lås og beslag</h2>
            <p className="desc">
              Klassisk låsarbeid utført presist — fra bytte av én sylinder til komplette
              låssystemer for hele bygg.
            </p>
          </div>
          <div className="hairline-list">
            <div>Bytte lås</div>
            <div>Ny lås</div>
            <div>Ekstra låser</div>
            <div>Låser til vinduer, dører og terrassedører</div>
            <div>Lås og beslag</div>
            <div>Låssystem</div>
          </div>
        </div>
      </section>

      <section id="elektronisk" className="service-band">
        <div className="container grid">
          <div>
            <div className="eyebrow">03 — Elektronisk sikkerhet</div>
            <h2>Elektroniske låssystemer og adgang</h2>
            <p className="desc">
              Adgang og trygghet, diskret integrert i bygget — installert og vedlikeholdt av ett
              fagmiljø, med elektriker i samme hus.
            </p>
          </div>
          <div className="hairline-list">
            <div>Installasjon av elektroniske låssystemer</div>
            <div>Reparasjon og omkoding av elektroniske låser</div>
            <div>Adgangskontroll</div>
            <div>Porttelefoni</div>
            <div>Dørautomatikk</div>
            <div>Alarmsystemer — Ajax</div>
          </div>
        </div>
      </section>

      <section id="dor" className="service-band on-bone">
        <div className="container grid">
          <div>
            <div className="eyebrow">04 — Dør, sveis og metall</div>
            <h2>Levering og montering av dører</h2>
            <p className="desc">
              Vi leverer, monterer og setter inn dører i alle typer bygg — fra én leilighetsdør til
              hele oppganger. Der standardløsninger ikke strekker til, utfører vi også sveis- og
              metallarbeid.
            </p>
          </div>
          <div className="hairline-list">
            <div>Levering og montering av dører</div>
            <div>Sikkerhetsdører</div>
            <div>Branndører</div>
            <div>Leilighetsdører</div>
            <div>Inngangspartier</div>
            <div>Sveis og metall</div>
          </div>
        </div>
      </section>

      <section className="cta-section on-navy">
        <div className="inner">
          <h2>Usikker på hva du trenger?</h2>
          <p>Fortell oss om eiendommen, så anbefaler vi riktig løsning etter en befaring.</p>
          <div className="actions">
            <Link href="/kontakt" className="btn-solid-paper">Bli kontaktet</Link>
            <a href="tel:+4790413607" className="btn-outline-light">Døgnvakt 904 13 607</a>
          </div>
        </div>
      </section>

      <SlimFooter />
    </>
  );
}
