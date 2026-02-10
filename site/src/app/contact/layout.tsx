import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Canada e Academy. Email info@canadaeacademy.com for questions about Ontario online courses, OSSD, registration, or transcripts.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
