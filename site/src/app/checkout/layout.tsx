import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout — Register & Pay",
    description:
        "Complete your registration and secure your Ontario high school courses with Canada e Academy. Review your cart, provide student details, and proceed to payment.",
};

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
