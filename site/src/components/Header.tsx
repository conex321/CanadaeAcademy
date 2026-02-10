"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { MobileNav } from "./MobileNav";

const navLinks = [
    { href: "/courses", label: "Courses" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex items-center justify-center w-10 h-10">
                                <Leaf className="w-8 h-8 text-secondary fill-secondary" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-primary font-extrabold text-xl leading-none tracking-tight">
                                    CANADA
                                </span>
                                <span className="text-primary font-medium text-sm leading-none">
                                    e ACADEMY
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-medium transition-colors ${isActive
                                                ? "text-primary border-b-2 border-primary"
                                                : "text-slate-600 hover:text-primary"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/register"
                                className="bg-secondary hover:bg-secondary-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:-translate-y-0.5"
                            >
                                Register Now
                            </Link>
                            <button
                                className="md:hidden p-2 text-slate-600 hover:text-primary"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <MobileNav
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                navLinks={navLinks}
                pathname={pathname}
            />
        </>
    );
}
