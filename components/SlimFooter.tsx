import Link from "next/link";

export default function SlimFooter() {
  return (
    <footer className="slim-footer">
      <div className="inner">
        <span>© 2026 Halland Gruppen AS · Org.nr 932 726 025</span>
        <Link href="/">← Til forsiden</Link>
        <span>Oslo · Asker · Bærum</span>
      </div>
    </footer>
  );
}
