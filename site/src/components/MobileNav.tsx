"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import type { NavItem } from "./Header";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: NavItem[];
    pathname: string;
}

export function MobileNav({ isOpen, onClose, navLinks, pathname }: MobileNavProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleExpand = (label: string) => {
        setExpandedItem((prev) => (prev === label ? null : label));
    };

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
                                <Image
                                    src="/images/CanadaeAcademy - Logo Only - 250 x 100 px.svg"
                                    alt="Canada e Academy"
                                    width={150}
                                    height={60}
                                    className="h-8 w-auto"
                                />
                                <button
                                    onClick={onClose}
                                    className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className="flex-1 py-4 overflow-y-auto">
                                {navLinks.map((item, i) => {
                                    const hasChildren = item.children && item.children.length > 0;
                                    const isActive = pathname === item.href;
                                    const isChildActive = item.children?.some(
                                        (c) => pathname === c.href
                                    );
                                    const isExpanded = expandedItem === item.label;

                                    return (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            {hasChildren ? (
                                                <>
                                                    <button
                                                        onClick={() => toggleExpand(item.label)}
                                                        className={`flex items-center justify-between w-full px-6 py-4 text-lg font-medium transition-colors ${isActive || isChildActive
                                                            ? "text-primary bg-primary-50 border-r-4 border-secondary"
                                                            : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                                            }`}
                                                    >
                                                        <span>{item.label}</span>
                                                        <ChevronDown
                                                            className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                                                                }`}
                                                        />
                                                    </button>
                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="overflow-hidden bg-slate-50/50"
                                                            >
                                                                {item.children!.map((child) => {
                                                                    const childActive =
                                                                        pathname === child.href;
                                                                    return (
                                                                        <Link
                                                                            key={child.href}
                                                                            href={child.href}
                                                                            onClick={onClose}
                                                                            className={`flex items-center gap-3 pl-10 pr-6 py-3 text-sm font-medium transition-colors ${childActive
                                                                                ? "text-primary bg-primary-50"
                                                                                : "text-slate-600 hover:text-primary hover:bg-slate-100"
                                                                                }`}
                                                                        >
                                                                            <child.icon className="w-4 h-4 flex-shrink-0" />
                                                                            <div>
                                                                                <span className="block">
                                                                                    {child.label}
                                                                                </span>
                                                                                <span className="block text-xs text-muted-foreground mt-0.5">
                                                                                    {child.description}
                                                                                </span>
                                                                            </div>
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    onClick={onClose}
                                                    className={`block px-6 py-4 text-lg font-medium transition-colors ${isActive
                                                        ? "text-primary bg-primary-50 border-r-4 border-secondary"
                                                        : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                                        }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* CTA */}
                            <div className="p-6 border-t border-border space-y-3">
                                <Link
                                    href="/contact"
                                    onClick={onClose}
                                    className="btn-brand-primary block w-full text-center bg-primary hover:bg-primary-600 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={onClose}
                                    className="btn-brand-primary block w-full text-center bg-secondary hover:bg-secondary-600 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-md"
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
