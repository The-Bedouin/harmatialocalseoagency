"use client";

import Link from "next/link";

function ResourceIcon({ name }: { name: string }) {
    const base = "w-5 h-5";
    switch (name) {
        case "services":
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3H4V7Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 10v7a2 2 0 0 0 2 2h6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M16.5 16.5v4m2-2h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case "blog":
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M6 4h9a3 3 0 0 1 3 3v11a0 0 0 0 1 0 0H9a3 3 0 0 1-3-3V4a0 0 0 0 1 0 0Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 7h6M9 10h6M9 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case "contact":
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 5h18v10H3z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m3 5 9 7 9-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case "about":
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 20a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            );
        case "cases":
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 7h18v10H3z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 11h18" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            );
        case "guide":
        default:
            return (
                <svg className={base} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 3l7 4v10l-7 4-7-4V7l7-4Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
    }
}

export default function InternalLinks() {
    const internalLinks = [
        {
            title: "Local SEO Services",
            href: "/#services",
            description: "Professional Google Business Profile optimization and local search marketing",
            icon: "services"
        },
        {
            title: "Local SEO Blog",
            href: "/blog-home",
            description: "Expert tips and strategies for dominating local search results",
            icon: "blog"
        },
        {
            title: "Contact Local SEO Experts",
            href: "/contact",
            description: "Get a free consultation with our local SEO specialists",
            icon: "contact"
        },
        {
            title: "About Our SEO Agency",
            href: "/about",
            description: "Learn about Harmatia Local SEO Agency and our proven strategies",
            icon: "about"
        },
        {
            title: "Local SEO Case Studies",
            href: "/#projects",
            description: "View our successful local SEO results and client testimonials",
            icon: "cases"
        },
        {
            title: "What is Local SEO?",
            href: "/what-is-local-seo",
            description: "Complete guide to local search optimization for businesses",
            icon: "guide"
        }
    ];

    return (
        <section className="relative py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-white to-emerald-50/40">
            <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(closest-side,#000,transparent)]">
                <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl" />
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full" style={{ backgroundColor: "rgba(59,130,246,0.12)" }} />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] uppercase tracking-wide text-neutral-600">
                        resources
                    </div>
                    <h2 className="mt-3 text-[30px] sm:text-[34px] leading-[1.1] font-medium text-neutral-900" style={{ fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif' }}>
                        Explore Our Local SEO Resources
                    </h2>
                    <p className="mt-3 text-[16px] sm:text-[17px] leading-[28px] text-neutral-600 max-w-2xl mx-auto">
                        Discover everything you need to know about local SEO and how we can help your business grow online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {internalLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            title={link.description}
                            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 supports-[backdrop-filter]:bg-white/50 backdrop-blur-sm ring-1 ring-black/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_18px_50px_-12px_rgba(0,0,0,0.22)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-100/40 via-transparent to-blue-100/40" />
                            {/* Glass shine sweep */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-70 -skew-x-12 -translate-x-1/2 group-hover:translate-x-[180%] transition-transform duration-700 ease-out" />
                            </div>
                            <div className="relative p-5 sm:p-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20">
                                        <ResourceIcon name={link.icon as string} />
                                    </span>
                                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-neutral-900 tracking-tight">
                                        {link.title}
                                    </h3>
                                    <span className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-neutral-400 group-hover:text-emerald-600 transition-colors">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="mt-2 text-[13px] sm:text-[14px] leading-[22px] text-neutral-600">
                                    {link.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
