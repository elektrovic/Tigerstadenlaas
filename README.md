# Tigerstaden Lås & Sikkerhet — nettside

Fem-siders nettside for **Tigerstaden Lås & Sikkerhet** — låsesmed, sikkerhet og
dørinnsetting i Oslo, Asker og Bærum, en del av Halland Gruppen AS.
Implementert i **Next.js (App Router)** med statisk generering, etter
designpakken `design_handoff_tigerstaden_las` (Claude Design).

## Sider

| Route | Innhold |
|---|---|
| `/` | Forside: hero, tjenester, prosess, målgrupper, om oss, Lås+Elektro, døgnvakt, kontaktskjema |
| `/tjenester` | Navy hero med innholdsfortegnelse (01–04), fire tjenestegrupper, navy CTA |
| `/om-oss` | Intro, Halland Gruppen-historie, fire fakta-kolonner, CTA |
| `/dognvakt` | Hero med stort telefonnummer, utrykningstyper, 4-stegs forløp, «godt å vite», CTA |
| `/kontakt` | Kontaktinfo, skjema, Google Maps-embed (Sandakerveien 138, gråtone) |

## Kjøring

```bash
npm install
npm run dev     # utvikling — http://localhost:3000
npm run build   # produksjonsbygg (statisk generering)
npm start
```

Anbefalt hosting: **Vercel** (null konfigurasjon for Next.js).

## Design

Design tokens fra Tigerstaden Elektro Design System (bindende):
Paper `#F5F2EC`, Bone `#EBE6DC`, Ink `#1A1A1A`, Navy `#0A1F3D`,
Heritage Gold `#B8893B` (kun aksent). Typografi: Fraunces (display, 300) +
Inter (brødtekst, 300–500) fra Google Fonts. Ingen border-radius, ingen
skygger, 1px hårlinjer. Alt i `app/globals.css`.

## Google-anmeldelser (Google Business Profile)

Forsiden kan vise ekte Google-anmeldelser, samlet vurdering og
`aggregateRating` i SEO-schemaet. Integrasjonen er ferdig kodet
(`lib/googleReviews.ts` + `components/Referanser.tsx`) og aktiveres ved å
sette to miljøvariabler — uten dem skjules referanseseksjonen og siden
fungerer som før.

**Oppsett:**

1. Sørg for en verifisert bedriftsprofil på
   [business.google.com](https://business.google.com)
   (Tigerstaden Lås og Sikkerhet, Sandakerveien 138, 0484 Oslo).
2. I [Google Cloud Console](https://console.cloud.google.com): opprett
   prosjekt → aktiver **Places API** → opprett API-nøkkel. Begrens nøkkelen
   til Places API.
3. Finn **Place ID** via
   [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
4. Sett miljøvariablene (lokalt i `.env.local`, i produksjon under
   Vercel → Settings → Environment Variables) og redeploy:

   ```
   GOOGLE_PLACES_API_KEY=…
   GOOGLE_PLACE_ID=…
   ```

Nøkkelen brukes kun på serveren og når aldri nettleseren. Svar fra Google
caches i 6 timer. Kun anmeldelser med 4–5 stjerner vises (maks 6, tekster
over 220 tegn kuttes). Feiler kallet etter at integrasjonen er slått på,
viser karusellen designpakkens reservesitater i stedet for å stå tom.

## Gjenstår / neste steg

- **Kontaktskjema-backend**: skjemaet viser i dag kun en takkemelding
  (ingen backend). Kobles til e-post/CRM ved lansering.
- **Google-anmeldelser**: kodet ferdig — aktiveres med miljøvariablene
  over når bedriftsprofilen og API-nøkkelen er på plass.
- **Bilder**: Unsplash-URL-er er midlertidige plassholdere — bytt til egne
  prosjektfoto når de foreligger.
