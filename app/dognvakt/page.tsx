import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SlimFooter from "@/components/SlimFooter";

export const metadata: Metadata = {
  title: "Døgnvakt — Låsesmed hele døgnet i Oslo, Asker og Bærum | Tigerstaden Lås & Sikkerhet",
  description:
    "Døgnåpen låsesmed i Oslo, Asker og Bærum. Utelåst, innbrudd eller skadet lås? Ring 904 13 607 — vi rykker ut hele døgnet, hele året. Fast utrykningspris, ingen skjulte tillegg.",
};

export default function Dognvakt() {
  return (
    <>
      <SiteHeader active="dognvakt" />

      <section className="page-hero emergency-hero">
        <div className="container">
          <div className="inner">
            <div className="hero-label">
              <span className="rule" />
              <span className="eyebrow">Døgnvakt — hele året</span>
            </div>
            <h1>Vi svarer når det haster</h1>
            <p className="lead">
              Står du låst ute, eller har døren eller låsen blitt skadet? Ring oss, så kommer vi.
              Vi dekker hele Oslo, Asker og Bærum — hele døgnet, hele året.
            </p>
            <a href="tel:+4790413607" className="phone">904 13 607</a>
          </div>
        </div>
      </section>

      <section className="facts-band">
        <div className="container facts-band-inner">
          <div className="band-head">
            <h2>Dette rykker vi ut på</h2>
            <p>Ingen jobb er for liten når du står i det. Vi kommer med fullt utstyrt bil.</p>
          </div>
          <div className="facts-grid wide">
            <div className="fact-card">
              <h3>Utelåst</h3>
              <p className="small">
                Vi åpner døren uten unødig skade på lås eller dørblad — og bytter sylinder på
                stedet om nøkkelen er tapt.
              </p>
            </div>
            <div className="fact-card">
              <h3>Etter innbrudd</h3>
              <p className="small">
                Vi sikrer boligen eller lokalet umiddelbart, dokumenterer for forsikringen og
                monterer ny lås samme besøk.
              </p>
            </div>
            <div className="fact-card">
              <h3>Skadet lås eller dør</h3>
              <p className="small">
                Låser som har låst seg, brukket nøkkel i sylinderen eller dør som ikke går i lås —
                vi løser det på stedet.
              </p>
            </div>
            <div className="fact-card">
              <h3>Tapte nøkler</h3>
              <p className="small">
                Mistet nøkler til bolig eller bygg? Vi bytter sylindere og omstiller låssystemer så
                gamle nøkler slutter å virke.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="container steps-grid">
          <div className="intro">
            <div className="eyebrow">Slik foregår det</div>
            <h2>Rolig og ryddig — også klokken tre om natten</h2>
            <p>
              En utrykning skal ikke føles som et overgrep på lommeboken. Du får pris før vi
              starter, og vi forlater aldri en dør usikret.
            </p>
          </div>
          <div className="step-list">
            <div className="step-row">
              <span className="num">01</span>
              <div>
                <h3>Du ringer 904 13 607</h3>
                <p>
                  Du snakker med en låsesmed, ikke et sentralbord. Vi avklarer situasjonen og gir
                  deg pris med en gang.
                </p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">02</span>
              <div>
                <h3>Vi rykker ut</h3>
                <p>
                  Du får beskjed om når vi er fremme. Bilen er fullt utstyrt med sylindere, beslag
                  og verktøy.
                </p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">03</span>
              <div>
                <h3>Døren sikres — samme besøk</h3>
                <p>
                  Vi åpner, reparerer eller bytter det som trengs, og dokumenterer arbeidet for
                  forsikringen der det er aktuelt.
                </p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">04</span>
              <div>
                <h3>Oppfølging ved behov</h3>
                <p>
                  Trenger døren en varig oppgradering, får du et løsningsforslag i etterkant — uten
                  mas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-band">
        <div className="container facts-band-inner">
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 48px)", marginBottom: "clamp(36px, 5vw, 56px)" }}>
            Godt å vite
          </h2>
          <div className="facts-grid wide">
            <div className="fact-card">
              <div className="tag">Pris</div>
              <p>
                Fast utrykningspris avtalt på telefon — ingen skjulte tillegg når vi står ved
                døren.
              </p>
            </div>
            <div className="fact-card">
              <div className="tag">Legitimasjon</div>
              <p>
                Av hensyn til din sikkerhet ber vi om legitimasjon før vi åpner en dør. Det bør du
                forvente av enhver låsesmed.
              </p>
            </div>
            <div className="fact-card">
              <div className="tag">Forsikring</div>
              <p>
                Etter innbrudd dokumenterer vi skader og utført arbeid, slik at forsikringsoppgjøret
                går smidig.
              </p>
            </div>
            <div className="fact-card">
              <div className="tag">Borettslag og næring</div>
              <p>
                Vi har beredskapsavtaler for sameier og bedrifter — med prioritert utrykning og
                fast kontaktperson.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="inner">
          <div className="eyebrow" style={{ marginBottom: 22 }}>Døgnvakt — hele året</div>
          <h2>Trenger du oss nå?</h2>
          <p>Ring, så er hjelpen på vei. Gjelder det et planlagt prosjekt, kan du heller be om befaring.</p>
          <div className="actions">
            <a href="tel:+4790413607" className="btn-solid-navy">Ring 904 13 607</a>
            <Link href="/kontakt" className="btn-outline-dark">Bli kontaktet</Link>
          </div>
        </div>
      </section>

      <SlimFooter />
    </>
  );
}
