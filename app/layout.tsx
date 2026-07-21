import type { Metadata, Viewport } from "next";
import TopBar from "@/components/TopBar";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

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
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
