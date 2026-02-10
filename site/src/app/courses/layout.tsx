import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Course Catalogue",
    description:
        "Browse 170+ Ontario curriculum courses — Grade 9 to 12, ESL, and more. Interactive animated lessons with OCT-certified teachers at Canada e Academy.",
};

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
