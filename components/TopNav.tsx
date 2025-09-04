import Link from "next/link";

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5 text-neutral-900 mb-0">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
          <span className="finance-logo inline-flex h-6 w-6 items-center justify-center rounded-md relative overflow-hidden">
            <svg viewBox="0 0 56 56" width="100%" height="100%" fill="none" aria-hidden="true" className="absolute inset-0">
              <path d="M8 40 L20 28 L24 32 L34 22 L38 26 L46 16" stroke="#ffffff" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="absolute"
              style={{
                right: 1,
                top: 1,
                color: "#D4AF37",
                fontSize: 5,
                lineHeight: 1,
                transform: "rotate(45deg)",
                transformOrigin: "50% 70%",
              }}
              aria-hidden="true"
            >
              ⚜
            </span>
          </span>
          HarmatiaLocal-SEOAgency
        </Link>
        <a
          href="https://calendly.com/ramish-design"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] hover:bg-neutral-800 transition"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}


