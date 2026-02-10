import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ",
    description:
        "Frequently asked questions about Canada e Academy — courses, tuition, OSSD requirements, Ministry inspection, transcripts, and more.",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
