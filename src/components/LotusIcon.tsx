export default function LotusIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 44C24 44 10 36 10 24C10 24 18 26 24 34C30 26 38 24 38 24C38 36 24 44 24 44Z" fill="url(#lotusGrad)" />
      <path d="M24 32C24 32 16 26 16 16C16 16 21 18.5 24 24C27 18.5 32 16 32 16C32 26 24 32 24 32Z" fill="url(#lotusGrad2)" />
      <path d="M24 22C24 22 20 17 20 10C20 10 22.5 11.5 24 15C25.5 11.5 28 10 28 10C28 17 24 22 24 22Z" fill="#D4AF37" />
      <defs>
        <linearGradient id="lotusGrad" x1="10" y1="24" x2="38" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6E7B2" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="lotusGrad2" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F6E7B2" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}
