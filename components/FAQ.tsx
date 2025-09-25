"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in local SEO strategies from website develoapment, on-page optimization, backlink building to content marketing to help businesses rank higher in local search results.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While results can vary, clients typically begin to see noticeable improvements in their search rankings and organic traffic within a month and sigificant changes in profits within  3-6 months.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by filling out our contact form or scheduling a free consultation through our website. We'll discuss your business goals and create a custom strategy.",
  },
  {
    question: "What are your pricing options?",
    answer:
      "We offer flexible packages tailored to your goals and market. After a quick discovery call, we’ll recommend the best plan for your budget and timeline.",
  },
  {
    question: "Do you work with my industry?",
    answer:
      "Yes. We support a wide range of local service businesses, including home services, healthcare, legal, and professional services.",
  },
  {
    question: "What does your audit include?",
    answer:
      "Our audit covers on-page SEO, technical issues, Google Business Profile, local citations, reviews, and content gaps—prioritized with a clear action plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] uppercase tracking-wide text-neutral-600">
              faq
            </div>
            <h2
              className="mt-4 text-[44px] leading-[46px] font-medium text-[rgb(110,110,110)]"
              style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
            >
              Answers you need
            </h2>
            <h3
              className="text-[44px] leading-[46px] font-medium text-[rgb(28,28,28)]"
              style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
            >
              Frequently asked questions
            </h3>
          </div>
          <div className="lg:col-span-5">
            <p
              className="text-[18px] leading-[29px] font-normal text-[rgb(110,110,110)] max-w-sm"
              style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}
            >
              Find quick answers about our SEO services, timelines, and how to begin.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-black/10 bg-white shadow-[0_18px_30px_-12px_rgba(0,0,0,0.28)] overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index)}
                >
                  <span className="text-base sm:text-lg font-medium text-neutral-900">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-neutral-900"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-neutral-600">
                        <p className="text-sm sm:text-base leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


