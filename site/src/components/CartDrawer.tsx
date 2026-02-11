"use client";

import { useCart, formatPrice } from "./CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
    const {
        items,
        studentType,
        removeItem,
        clearCart,
        itemCount,
        total,
        isCartOpen,
        closeCart,
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                        onClick={closeCart}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-border">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                                    <ShoppingBag className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h2 className="font-heading font-bold text-primary text-lg">
                                        Your Cart
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        {itemCount} course{itemCount !== 1 ? "s" : ""} ·{" "}
                                        {studentType === "domestic"
                                            ? "Domestic"
                                            : "International"}{" "}
                                        pricing
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={closeCart}
                                className="w-10 h-10 rounded-xl bg-surface hover:bg-border flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center mb-4">
                                        <ShoppingBag className="w-10 h-10 text-muted-foreground/50" />
                                    </div>
                                    <h3 className="font-heading font-bold text-primary mb-2">
                                        Your cart is empty
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 max-w-[250px]">
                                        Browse our course catalogue and add courses to get started.
                                    </p>
                                    <Link
                                        href="/courses"
                                        onClick={closeCart}
                                        className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-6 py-3 rounded-xl font-bold transition-all text-sm"
                                    >
                                        Browse Courses
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {items.map((item) => {
                                        const price =
                                            studentType === "domestic"
                                                ? item.priceDomestic
                                                : item.priceInternational;

                                        return (
                                            <motion.div
                                                key={item.courseCode}
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                className="bg-surface rounded-xl p-4 border border-border"
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="inline-block bg-primary-50 text-primary text-xs font-bold px-2 py-0.5 rounded-md">
                                                                {item.courseCode}
                                                            </span>
                                                            <span className="text-xs text-muted-foreground">
                                                                {item.grade}
                                                            </span>
                                                        </div>
                                                        <h4 className="font-semibold text-primary text-sm truncate">
                                                            {item.courseName}
                                                        </h4>
                                                        <span className="text-xs text-muted-foreground">
                                                            {item.pathway}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-3 ml-3">
                                                        <span className="font-bold text-secondary whitespace-nowrap">
                                                            {formatPrice(price)}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                removeItem(item.courseCode)
                                                            }
                                                            className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4 text-red-500" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}

                                    {items.length > 1 && (
                                        <button
                                            onClick={clearCart}
                                            className="text-sm text-muted-foreground hover:text-red-500 transition-colors mt-2"
                                        >
                                            Clear all items
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-border p-6 space-y-4">
                                {/* Total */}
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground font-medium">
                                        Total
                                    </span>
                                    <span className="text-2xl font-extrabold text-primary">
                                        {formatPrice(total)}
                                    </span>
                                </div>

                                {/* CTAs */}
                                <div className="space-y-2">
                                    <Link
                                        href="/register"
                                        onClick={closeCart}
                                        className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-secondary-600 text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                                    >
                                        <Sparkles className="w-4 h-4" />
                                        Register & Pay
                                    </Link>
                                    <Link
                                        href="/checkout"
                                        onClick={closeCart}
                                        className="flex items-center justify-center gap-2 w-full bg-surface hover:bg-border text-primary py-3.5 rounded-xl font-bold transition-all border border-border"
                                    >
                                        Pay Now, Register Later
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                <p className="text-xs text-muted-foreground text-center">
                                    Secure payment powered by Stripe 🔒
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
