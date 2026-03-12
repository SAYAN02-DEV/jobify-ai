"use client";

import { Grid2x2PlusIcon, Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = [
    {
        heading: "Product",
        links: [
            { label: "Features", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Changelog", href: "#" },
            { label: "Roadmap", href: "#" },
        ],
    },
    {
        heading: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },
];

const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer
            className={cn(
                "w-full border-t border-white/10 bg-gray-900 text-white",
                "supports-[backdrop-filter]:bg-gray-900/95 backdrop-blur-lg",
            )}
        >
            <div className="mx-auto w-full max-w-3xl px-4 py-12">
                {/* Top row */}
                <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <Grid2x2PlusIcon className="size-5" />
                            <span className="font-mono text-base font-bold">Jobify AI</span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-white/70">
                            AI-powered job matching that connects talent with opportunity. Smarter applications, faster results.
                        </p>
                        {/* Socials */}
                        <div className="flex items-center gap-3 mt-1">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="text-white/60 transition-colors hover:text-white"
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        {footerLinks.map((col) => (
                            <div key={col.heading} className="flex flex-col gap-3">
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
                                    {col.heading}
                                </p>
                                <ul className="flex flex-col gap-2">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-white/70 transition-colors hover:text-white"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
                    <p>© {new Date().getFullYear()} Jobify AI. All rights reserved.</p>
                    <p>Built with Next.js &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
