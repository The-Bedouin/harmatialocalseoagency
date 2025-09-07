import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] uppercase tracking-wide text-neutral-600">
                contact
              </div>
              <h2
                className="mt-4 text-[44px] leading-[46px] font-medium text-[rgb(110,110,110)]"
                style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
              >
                Let’s talk about growth
              </h2>
              <h3
                className="text-[44px] leading-[46px] font-medium text-[rgb(28,28,28)]"
                style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
              >
                Contact Harmatia Local SEO Agency
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p
                className="text-[18px] leading-[29px] font-normal text-[rgb(110,110,110)] max-w-sm"
                style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
              >
                Tell us about your goals and challenges. We’ll respond within one business day with next steps.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.25)]">
                {/* Subtle grey chartline background */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.70] z-0"
                  viewBox="0 0 400 240"
                >
                  <defs>
                    <linearGradient id="contact-info-g" x1="0" x2="1">
                      <stop offset="0" stopColor="#111827" stopOpacity="0.30" />
                      <stop offset="1" stopColor="#111827" stopOpacity="0.06" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M40 180 L140 100 L170 120 L240 60 L270 90 L360 20"
                    fill="none"
                    stroke="url(#contact-info-g)"
                    strokeWidth="18"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="relative z-10 space-y-3">
                  <div>
                    <div className="text-sm uppercase tracking-wide text-neutral-500">Email</div>
                    <a href="mailto:hello@harmatia.agency" className="text-neutral-900 hover:underline">hello@harmatia.agency</a>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wide text-neutral-500">Phone</div>
                    <a href="tel:+1234567890" className="text-neutral-900 hover:underline">+1 (234) 567-890</a>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wide text-neutral-500">Hours</div>
                    <div className="text-neutral-900">Mon–Fri, 9am–5pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


