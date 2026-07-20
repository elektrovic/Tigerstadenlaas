/* «Nøkkelhull-T»-monogrammet: Didone-T med nøkkelhull skåret ut av stammen,
   gull topp- og bunnlinjer. Se TLS Monogram.dc.html i designpakken. */
export default function Monogram({ size = 40, thin = false }: { size?: number; thin?: boolean }) {
  const stroke = thin ? 1.5 : 3;
  return thin ? (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <line x1="60" y1="36" x2="140" y2="36" stroke="#B8893B" strokeWidth={stroke} />
      <g fill="#1A1A1A">
        <rect x="40" y="57" width="120" height="4" />
        <rect x="91" y="61" width="18" height="92" />
        <rect x="77" y="153" width="46" height="3.5" />
      </g>
      <circle cx="100" cy="91" r="7.5" fill="#F5F2EC" />
      <path d="M96,96 L104,96 L107.5,122 L92.5,122 Z" fill="#F5F2EC" />
      <line x1="60" y1="174" x2="140" y2="174" stroke="#B8893B" strokeWidth={stroke} />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <line x1="60" y1="36" x2="140" y2="36" stroke="#B8893B" strokeWidth={stroke} />
      <g fill="#1A1A1A">
        <rect x="40" y="57" width="120" height="5" />
        <rect x="90" y="62" width="20" height="91" />
        <rect x="76" y="153" width="48" height="4" />
      </g>
      <circle cx="100" cy="91" r="8" fill="#F5F2EC" />
      <path d="M95.5,96 L104.5,96 L108,124 L92,124 Z" fill="#F5F2EC" />
      <line x1="60" y1="174" x2="140" y2="174" stroke="#B8893B" strokeWidth={stroke} />
    </svg>
  );
}
