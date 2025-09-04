export default function FloatingBadges() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://browsersupply.lemonsqueezy.com/buy/7de3278c-4e91-4ff6-a0a8-53a836efadcc"
        target="_blank"
        className="rounded-2xl bg-black text-white px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:bg-neutral-800 transition"
      >
        Buy template
      </a>
      <a
        href="https://www.framer.com"
        target="_blank"
        className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-2 shadow-md text-neutral-800"
        aria-label="Made in Framer"
      >
        <span className="inline-block h-3 w-3 rounded-sm bg-black" />
        <span className="text-sm text-neutral-700">Made in Framer</span>
      </a>
    </div>
  );
}


