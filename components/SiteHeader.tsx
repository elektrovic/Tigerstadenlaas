import Link from "next/link";
import Monogram from "./Monogram";

type PageKey = "hjem" | "tjenester" | "om-oss" | "dognvakt" | "kontakt";

const NAV: { key: PageKey; href: string; label: string }[] = [
  { key: "tjenester", href: "/tjenester", label: "Tjenester" },
  { key: "om-oss", href: "/om-oss", label: "Om oss" },
  { key: "dognvakt", href: "/dognvakt", label: "Døgnvakt" },
  { key: "kontakt", href: "/kontakt", label: "Kontakt oss" },
];

export default function SiteHeader({ active, ctaHref = "/kontakt#skjema" }: { active: PageKey; ctaHref?: string }) {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          <Monogram />
          <span className="brand-name">
            <span className="primary">Tigerstaden</span>
            <span className="secondary">Lås &amp; Sikkerhet</span>
          </span>
        </Link>
        <nav className="site-nav">
          {NAV.map((item) =>
            item.key === active ? (
              <span key={item.key} className="active">{item.label}</span>
            ) : (
              <Link key={item.key} href={item.href}>{item.label}</Link>
            )
          )}
          <Link href={ctaHref} className="cta">Bli kontaktet</Link>
        </nav>
      </div>
    </header>
  );
}
