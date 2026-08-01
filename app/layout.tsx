import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import TopBar from "@/components/TopBar";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

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
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
