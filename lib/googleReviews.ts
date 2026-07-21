/* Henter anmeldelser fra Google Business Profile via Places API (Details).
   Kjører KUN på serveren — API-nøkkelen når aldri nettleseren. Svaret caches
   i 6 timer (jf. spesifikasjonen i designpakken) via Next.js fetch-revalidate.
   Uten GOOGLE_PLACES_API_KEY/GOOGLE_PLACE_ID i miljøet returneres null, og
   referanseseksjonen skjules — siden bygger og kjører helt uten oppsett. */

export type Anmeldelse = {
  navn: string;
  stjerner: number;
  tekst: string;
  tidspunkt: string;
};

export type AnmeldelsesData = {
  vurdering: number;
  antall: number;
  anmeldelser: Anmeldelse[];
  placeId: string;
  profilUrl: string | null;
};

const FELTER = "rating,user_ratings_total,reviews,url";
const MAKS_ANMELDELSER = 6;
const MAKS_TEGN = 220;

type PlacesReview = {
  author_name?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

export async function hentAnmeldelser(): Promise<AnmeldelsesData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  try {
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json" +
      `?place_id=${encodeURIComponent(placeId)}` +
      `&fields=${FELTER}&language=nb&reviews_sort=newest&key=${key}`;
    const res = await fetch(url, { next: { revalidate: 21600 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.status !== "OK" || !data.result) return null;

    const r = data.result;
    const anmeldelser: Anmeldelse[] = ((r.reviews ?? []) as PlacesReview[])
      .filter((a) => (a.rating ?? 0) >= 4 && a.text)
      .slice(0, MAKS_ANMELDELSER)
      .map((a) => ({
        navn: a.author_name ?? "Google-bruker",
        stjerner: a.rating ?? 5,
        tekst:
          (a.text as string).length > MAKS_TEGN
            ? (a.text as string).slice(0, MAKS_TEGN).trimEnd() + "…"
            : (a.text as string),
        tidspunkt: a.relative_time_description ?? "",
      }));

    if (typeof r.rating !== "number" || anmeldelser.length === 0) return null;

    return {
      vurdering: r.rating,
      antall: r.user_ratings_total ?? 0,
      anmeldelser,
      placeId,
      profilUrl: r.url ?? null,
    };
  } catch {
    return null;
  }
}
