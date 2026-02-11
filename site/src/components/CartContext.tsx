"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

/* ── Types ── */
export type StudentType = "domestic" | "international";

export interface CartItem {
    courseCode: string;
    courseName: string;
    grade: string;
    pathway: string;
    priceDomestic: number;   // cents
    priceInternational: number; // cents
}

interface CartContextValue {
    items: CartItem[];
    studentType: StudentType;
    setStudentType: (type: StudentType) => void;
    addItem: (item: CartItem) => void;
    removeItem: (courseCode: string) => void;
    clearCart: () => void;
    isInCart: (courseCode: string) => boolean;
    itemCount: number;
    subtotal: number; // cents
    total: number;    // cents
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "cea_cart";
const STUDENT_TYPE_KEY = "cea_student_type";

/* ── Provider ── */
export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [studentType, setStudentTypeState] = useState<StudentType>("domestic");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    // Hydrate from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setItems(JSON.parse(stored));
            }
            const storedType = localStorage.getItem(STUDENT_TYPE_KEY);
            if (storedType === "domestic" || storedType === "international") {
                setStudentTypeState(storedType);
            }
        } catch {
            // Ignore parse errors
        }
        setHydrated(true);
    }, []);

    // Persist to localStorage on change
    useEffect(() => {
        if (!hydrated) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items, hydrated]);

    useEffect(() => {
        if (!hydrated) return;
        localStorage.setItem(STUDENT_TYPE_KEY, studentType);
    }, [studentType, hydrated]);

    const setStudentType = useCallback((type: StudentType) => {
        setStudentTypeState(type);
    }, []);

    const addItem = useCallback((item: CartItem) => {
        setItems((prev) => {
            if (prev.some((i) => i.courseCode === item.courseCode)) return prev;
            return [...prev, item];
        });
    }, []);

    const removeItem = useCallback((courseCode: string) => {
        setItems((prev) => prev.filter((i) => i.courseCode !== courseCode));
    }, []);

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    const isInCart = useCallback(
        (courseCode: string) => items.some((i) => i.courseCode === courseCode),
        [items]
    );

    const subtotal = items.reduce(
        (sum, item) =>
            sum + (studentType === "domestic" ? item.priceDomestic : item.priceInternational),
        0
    );

    const total = subtotal; // Can add tax/fees here later

    const openCart = useCallback(() => setIsCartOpen(true), []);
    const closeCart = useCallback(() => setIsCartOpen(false), []);
    const toggleCart = useCallback(() => setIsCartOpen((v) => !v), []);

    return (
        <CartContext.Provider
            value={{
                items,
                studentType,
                setStudentType,
                addItem,
                removeItem,
                clearCart,
                isInCart,
                itemCount: items.length,
                subtotal,
                total,
                isCartOpen,
                openCart,
                closeCart,
                toggleCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

/* ── Hook ── */
export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within a CartProvider");
    return ctx;
}

/* ── Utility ── */
export function formatPrice(cents: number): string {
    if (cents === 0) return "Free";
    return `$${(cents / 100).toLocaleString("en-CA", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}
