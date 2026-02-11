"use client";

import { CartProvider } from "./CartContext";
import CartDrawer from "./CartDrawer";
import type { ReactNode } from "react";

export function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <CartProvider>
            {children}
            <CartDrawer />
        </CartProvider>
    );
}
