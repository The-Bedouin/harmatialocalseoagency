"use client";

import Link from "next/link";

export default function InternalLinks() {
    const internalLinks = [
        {
            title: "Local SEO Services",
            href: "/#services",
            description: "Professional Google Business Profile optimization and local search marketing"
        },
        {
            title: "Local SEO Blog",
            href: "/blog-home",
            description: "Expert tips and strategies for dominating local search results"
        },
        {
            title: "Contact Local SEO Experts",
            href: "/contact",
            description: "Get a free consultation with our local SEO specialists"
        },
        {
            title: "About Our SEO Agency",
            href: "/about",
            description: "Learn about Harmatia Local SEO Agency and our proven strategies"
        },
        {
            title: "Local SEO Case Studies",
            href: "/#projects",
            description: "View our successful local SEO results and client testimonials"
        },
        {
            title: "What is Local SEO?",
            href: "/what-is-local-seo",
            description: "Complete guide to local search optimization for businesses"
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Explore Our Local SEO Resources
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover everything you need to know about local SEO and how we can help your business grow online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {internalLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            title={link.description}
                            className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 hover:border-emerald-300"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                                {link.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {link.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
