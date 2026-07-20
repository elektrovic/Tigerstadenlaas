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

## Gjenstår / neste steg

- **Kontaktskjema-backend**: skjemaet viser i dag kun en takkemelding
  (ingen backend). Kobles til e-post/CRM ved lansering.
- **Google Reviews**: planlagt integrasjon mot Google Business Profile /
  Places API via backend-proxy — se `PROMPT - Google Business-integrasjon.md`
  i designpakken. Krever PLACE_ID og `GOOGLE_PLACES_API_KEY`.
- **Bilder**: Unsplash-URL-er er midlertidige plassholdere — bytt til egne
  prosjektfoto når de foreligger.
