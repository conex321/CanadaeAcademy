import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sample Lessons",
    description:
        "Preview interactive animated lessons from Canada e Academy. See how our narrated simulations and built-in quizzes make online learning engaging and effective.",
};

export default function SampleLessonsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
