import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { BrandName } from "./BrandName";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-900 text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand — full logo with icon + text */}
                    <div className="space-y-6">
                        <Link href="/">
                            <Image
                                src="/images/CanadaeAcademy - Logo plus One Liner - 250 x 100 px.svg"
                                alt="Canada e Academy — Canadian Online High School"
                                width={200}
                                height={80}
                                className="h-14 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your Path. Your Pace. Your Future.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            An online private Ontario school providing global access to
                            high-quality high school education since 2025.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-white font-bold mb-6">Quick Links</h5>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li>
                                <Link href="/courses" className="hover:text-white transition-colors">
                                    Online Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="hover:text-white transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/ossd-requirements" className="hover:text-white transition-colors">
                                    OSSD Requirements
                                </Link>
                            </li>
                            <li>
                                <Link href="/sample-lessons" className="hover:text-white transition-colors">
                                    Sample Lessons
                                </Link>
                            </li>
                            <li>
                                <Link href="/course-codes" className="hover:text-white transition-colors">
                                    Course Codes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About & Policies */}
                    <div>
                        <h5 className="text-white font-bold mb-6">About</h5>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/register" className="hover:text-white transition-colors">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-white font-bold mb-6">Contact Us</h5>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                                <span>Ontario, Canada</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-secondary shrink-0" />
                                <a
                                    href="mailto:info@canadaeacademy.com"
                                    className="hover:text-white transition-colors"
                                >
                                    info@canadaeacademy.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-10 border-t border-white/10 text-center">
                    <p className="text-slate-500 text-xs mb-4">
                        Canada e Academy is an online private Ontario school. BSID Pending.
                    </p>
                    <p className="text-slate-500 text-xs">
                        © {currentYear} Canada e Academy. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
