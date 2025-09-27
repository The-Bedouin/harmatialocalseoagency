import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 md:p-12 shadow-[0_26px_60px_-24px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] uppercase tracking-wide text-neutral-600">
                get started
              </div>
              <h3 className="mt-3 text-[32px] leading-[38px] font-medium text-[rgb(28,28,28)]" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>Ready to win local search?</h3>
              <p className="mt-1 text-[16px] leading-[26px] text-[rgb(110,110,110)] max-w-xl" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>Book a free SEO audit and get an actionable plan for more calls, visits, and reviews.</p>
            </div>
            <div className="flex shrink-0 gap-3">
              <a href="https://calendly.com/harmatia/30min" target="_blank" rel="noreferrer" className="btn-green btn-green-lg">
                Book free audit
              </a>
              <Link href="/#projects" className="btn-outline">
                See our results
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[radial-gradient(rgba(0,0,0,0.06),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}