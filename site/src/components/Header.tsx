"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect } from "react";
import {
    Menu,
    ChevronDown,
    BookOpen,
    FileText,
    Monitor,
    GraduationCap,
    Rocket,
    UserPlus,
    HelpCircle,
    Mail,
    Info,
} from "lucide-react";
import { MobileNav } from "./MobileNav";
import Image from "next/image";

export interface NavChild {
    href: string;
    label: string;
    description: string;
    icon: React.ElementType;
}

export interface NavItem {
    href: string;
    label: string;
    children?: NavChild[];
}

const navLinks: NavItem[] = [
    {
        href: "/courses",
        label: "Courses",
        children: [
            {
                href: "/courses",
                label: "Course Catalogue",
                description: "Browse 75+ Ontario curriculum courses",
                icon: BookOpen,
            },
            {
                href: "/course-codes",
                label: "Course Codes",
                description: "Find courses by Ontario course code",
                icon: FileText,
            },
            {
                href: "/sample-lessons",
                label: "Sample Lessons",
                description: "Preview our interactive animated lessons",
                icon: Monitor,
            },
            {
                href: "/ossd-requirements",
                label: "OSSD Requirements",
                description: "Ontario diploma graduation requirements",
                icon: GraduationCap,
            },
        ],
    },
    {
        href: "/how-it-works",
        label: "How It Works",
        children: [
            {
                href: "/how-it-works",
                label: "Our Process",
                description: "From registration to earning your credit",
                icon: Rocket,
            },
            {
                href: "/register",
                label: "Register",
                description: "Enrol in Ontario courses — start in 24 hours",
                icon: UserPlus,
            },
        ],
    },
    {
        href: "/about",
        label: "About Us",
        children: [
            {
                href: "/about",
                label: "About Canada e Academy",
                description: "Our mission, team, and school credentials",
                icon: Info,
            },
            {
                href: "/faq",
                label: "FAQ",
                description: "Answers to common questions",
                icon: HelpCircle,
            },
            {
                href: "/contact",
                label: "Contact Us",
                description: "Get in touch with our team",
                icon: Mail,
            },
        ],
    },
];

function DropdownPanel({
    children,
    isOpen,
}: {
    children: NavChild[];
    isOpen: boolean;
}) {
    return (
        <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
        >
            <div className="bg-white rounded-xl shadow-xl border border-border p-2 min-w-[320px] dropdown-panel" style={{ transformOrigin: 'top center' }}>
                {/* Arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-border rotate-45" />
                {children.map((child) => (
                    <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors group/item"
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary-50 group-hover/item:bg-secondary-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <child.icon className="w-5 h-5 text-primary group-hover/item:text-secondary transition-colors" />
                        </div>
                        <div>
                            <span className="block font-semibold text-sm text-primary group-hover/item:text-primary-600 transition-colors">
                                {child.label}
                            </span>
                            <span className="block text-xs text-muted-foreground leading-relaxed mt-0.5">
                                {child.description}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = useCallback((label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpenDropdown(label);
    }, []);

    const handleMouseLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 150);
    }, []);

    // Close dropdown on route change
    useEffect(() => {
        setOpenDropdown(null);
    }, [pathname]);

    const isParentActive = (item: NavItem) => {
        if (pathname === item.href) return true;
        if (item.children) {
            return item.children.some((child) => pathname === child.href);
        }
        return false;
    };

    return (
        <>
            <header className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-28">
                        {/* Logo — favicon icon + words side by side */}
                        <Link href="/" className="flex items-center gap-2 sm:gap-3 group transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] shrink-0">
                            <Image
                                src="/images/CanadaeAcademy - Favicon - 48 x 48 px.svg"
                                alt=""
                                width={72}
                                height={72}
                                priority
                                className="h-14 sm:h-[72px] w-auto"
                            />
                            <Image
                                src="/images/CanadaeAcademy - Words Only - 250 x 100 px.svg"
                                alt="Canada e Academy"
                                width={300}
                                height={120}
                                priority
                                className="h-14 sm:h-20 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navLinks.map((item) => {
                                const active = isParentActive(item);
                                const hasChildren = item.children && item.children.length > 0;

                                return (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() =>
                                            hasChildren && handleMouseEnter(item.label)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`nav-link-underline inline-flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all ${active
                                                ? "text-primary bg-primary-50 nav-active"
                                                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                                }`}
                                        >
                                            {item.label}
                                            {active && (
                                                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                                            )}
                                            {hasChildren && (
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label
                                                        ? "rotate-180"
                                                        : ""
                                                        }`}
                                                />
                                            )}
                                        </Link>

                                        {hasChildren && (
                                            <DropdownPanel
                                                children={item.children!}
                                                isOpen={openDropdown === item.label}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact"
                                className="btn-brand-primary hidden md:inline-flex bg-primary hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:-translate-y-0.5"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/register"
                                className="btn-brand-primary hidden sm:inline-flex bg-secondary hover:bg-secondary-600 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md hover:-translate-y-0.5"
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
