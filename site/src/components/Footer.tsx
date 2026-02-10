import Link from "next/link";
import { Leaf, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-900 text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Leaf className="w-7 h-7 text-secondary fill-secondary" />
                            <span className="font-bold text-xl tracking-tight">
                                CANADA e ACADEMY
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Your Path. Your Pace. Your Future.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            An Ontario Ministry of Education Inspected Private School providing
                            global access to high-quality high school education since 2010.
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
                        Canada e Academy BSID #665804. Inspected by the Ontario Ministry of
                        Education. Authorised to grant credits toward the Ontario Secondary
                        School Diploma (OSSD).
                    </p>
                    <p className="text-slate-500 text-xs">
                        © {currentYear} Canada e Academy. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
