import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OSSD Requirements",
    description:
        "Understand Ontario Secondary School Diploma (OSSD) graduation requirements — 30 credits, literacy test, and community involvement. Earn your OSSD with Canada e Academy.",
};

export default function OSSDLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
