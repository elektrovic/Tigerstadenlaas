import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import TopBar from "@/components/TopBar";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

/* Google Analytics 4 — målings-ID fra Google-kontoen */
const GA_ID = "G-665BGLH7LK";

/* Fontene selvhostes via next/font — ingen forespørsler til Google Fonts i
   nettleseren, og dermed ingen render-blokkerende CSS på kritisk bane. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tigerstaden Lås & Sikkerhet",
  description:
    "Låsesmed, sikkerhet og dørinnsetting for hjem, borettslag og næring i Oslo, Asker og Bærum. Døgnvakt hele året — ring 904 13 607.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Google tag (gtag.js) — lastes etter at siden er interaktiv, så
            målingen ikke bremser sideinnlastingen. Gjelder alle sider. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
