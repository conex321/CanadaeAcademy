"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf } from "lucide-react";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: { href: string; label: string }[];
    pathname: string;
}

export function MobileNav({ isOpen, onClose, navLinks, pathname }: MobileNavProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-[60]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-[70] shadow-2xl"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <Leaf className="w-6 h-6 text-secondary fill-secondary" />
                                    <span className="text-primary font-bold text-lg">CANADA e ACADEMY</span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className="flex-1 py-6">
                                {navLinks.map((link, i) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={onClose}
                                                className={`block px-6 py-4 text-lg font-medium transition-colors ${isActive
                                                        ? "text-primary bg-primary-50 border-r-4 border-primary"
                                                        : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* CTA */}
                            <div className="p-6 border-t border-border">
                                <Link
                                    href="/register"
                                    onClick={onClose}
                                    className="block w-full text-center bg-secondary hover:bg-secondary-600 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
