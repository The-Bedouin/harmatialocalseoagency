"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] uppercase tracking-wide text-neutral-600">
              about us
            </div>
            <h2
              className="mt-4 text-[44px] leading-[46px] font-medium text-[rgb(110,110,110)]"
              style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
            >
              Our story
            </h2>
            <h3
              className="text-[44px] leading-[46px] font-medium text-[rgb(28,28,28)]"
              style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
            >
              Empowering businesses to thrive
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p
              className="text-[18px] leading-[29px] font-normal text-[rgb(110,110,110)] max-w-sm"
              style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
            >
              We believe local businesses are the heartbeat of every community. Our mission is to help them get found, chosen, and loved with honest, effective Local SEO.
            </p>
          </div>
        </div>

        {/* Content + visuals */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-[18px] leading-[29px] text-[rgb(110,110,110)]" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>
                Harmatia Local SEO Agency started with a simple idea: when people nearby are searching, your business should show up with confidence. We are a small, committed team that cares deeply about results and the people behind them. That means clear communication, measurable outcomes, and strategies built around your growth—not vanity metrics.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-neutral-900">Mission & philosophy</h4>
              <p className="text-[18px] leading-[29px] text-[rgb(110,110,110)]" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>
                Our mission is to deliver ethical, results‑driven SEO that compounds over time. We focus on tailored strategies, full transparency, and sustainable growth—so you know what we’re doing, why it matters, and how it moves the needle for your business.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-neutral-900">Our expertise</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[15px] text-neutral-700">
                <li className="rounded-xl border border-black/10 bg-white px-4 py-3">Google Business Profile optimization</li>
                <li className="rounded-xl border border-black/10 bg-white px-4 py-3">Local link building & citations</li>
                <li className="rounded-xl border border-black/10 bg-white px-4 py-3">On‑page SEO & technical cleanup</li>
                <li className="rounded-xl border border-black/10 bg-white px-4 py-3">Review strategy & reputation signals</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold text-neutral-900">Why we care</h4>
              <p className="text-[18px] leading-[29px] text-[rgb(110,110,110)]" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>
                Local businesses create jobs, support families, and shape neighborhoods. Helping you grow means strengthening the communities we all share. That’s why we show up with integrity, craftsmanship, and relentless focus on outcomes.
              </p>
            </div>
          </div>

          {/* Right visuals */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="col-span-2 sm:col-span-1 relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 ring-1 ring-black/5 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                  alt="Our team collaborating on local SEO strategy"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 ring-1 ring-black/5 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="Metrics dashboard showcasing business growth"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 ring-1 ring-black/5 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop"
                  alt="Planning session with customer journey mapping"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 680px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


