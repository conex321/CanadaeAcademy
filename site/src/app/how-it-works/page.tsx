import type { Metadata } from "next";
import Link from "next/link";
import {
    BookOpen,
    UserPlus,
    Monitor,
    ClipboardCheck,
    GraduationCap,
    CheckCircle,
    ArrowRight,
    Shield,
    Clock,
    Globe,
    Laptop,
    Wifi,
    FileText,
} from "lucide-react";

export const metadata: Metadata = {
    title: "How It Works",
    description:
        "Learn how Canada e Academy works — from choosing courses to earning Ontario high school credits. Self-paced, interactive, and fully online with OCT-certified teachers.",
};

export default function HowItWorksPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield className="w-4 h-4 text-secondary" />
                            <span>Simple 6-Step Process</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            How Canada e Academy
                            <span className="text-secondary"> Works</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                            From registration to earning your Ontario high school credit —
                            here's exactly how our self-paced online learning process works.
                        </p>
                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Get Started Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Steps ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Your Learning Journey
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        Follow these six simple steps to earn Ontario high school credits
                        from anywhere in the world.
                    </p>

                    <div className="space-y-12">
                        {[
                            {
                                step: 1,
                                icon: BookOpen,
                                title: "Choose Your Course",
                                description:
                                    "Browse our catalogue of 170+ Ontario high school courses. Use course codes to find exactly what you need — from Grade 9 to Grade 12, across all pathways (University, College, Open, Workplace).",
                                details: [
                                    "Filter by grade level, subject, or pathway",
                                    "Review detailed course descriptions and outlines",
                                    "Check prerequisites before enrolling",
                                ],
                            },
                            {
                                step: 2,
                                icon: UserPlus,
                                title: "Register Online",
                                description:
                                    "Complete our online registration form with your student information and course selection. Payment is processed securely during registration.",
                                details: [
                                    "Domestic students: $574 per course",
                                    "International students: $1,224 per course",
                                    "Secure online payment processing",
                                ],
                            },
                            {
                                step: 3,
                                icon: Monitor,
                                title: "Start Learning",
                                description:
                                    "Once registered, you'll receive access to your course within 24 hours. All courses feature interactive animated lessons with professional narration — not just PDFs.",
                                details: [
                                    "24/7 access to course content",
                                    "Interactive animated lessons with audio",
                                    "Self-paced — study on your schedule",
                                ],
                            },
                            {
                                step: 4,
                                icon: ClipboardCheck,
                                title: "Submit Assessments",
                                description:
                                    "Complete assignments and assessments throughout the course. Our ICE-based evaluation model assesses your Ideas, Communication, and Expression for balanced, meaningful feedback.",
                                details: [
                                    "Regular formative assessments",
                                    "ICE-based evaluation framework",
                                    "Detailed feedback from OCT-certified teachers",
                                ],
                            },
                            {
                                step: 5,
                                icon: FileText,
                                title: "Final Evaluation",
                                description:
                                    "Complete your final summative assessment — typically worth 30% of your final grade. This may be a culminating activity, exam, or project depending on the course.",
                                details: [
                                    "30% of final grade",
                                    "Culminating activity or final exam",
                                    "Proctored as required by Ministry guidelines",
                                ],
                            },
                            {
                                step: 6,
                                icon: GraduationCap,
                                title: "Earn Your Credit",
                                description:
                                    "Upon successful completion, your Ontario credit is recorded on your Official Ontario Student Transcript (OST). Credits are recognized by all post-secondary institutions in Canada and worldwide.",
                                details: [
                                    "Official Ontario Student Transcript issued",
                                    "Credits recognized by universities worldwide",
                                    "Transcript sent directly to institutions upon request",
                                ],
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="flex gap-6 md:gap-10 items-start"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center font-extrabold text-xl shadow-md flex-shrink-0">
                                        {item.step.toString().padStart(2, "0")}
                                    </div>
                                    {item.step < 6 && (
                                        <div className="w-0.5 h-full min-h-16 bg-border mt-4 hidden md:block" />
                                    )}
                                </div>
                                <div className="flex-1 pb-4">
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {item.details.map((detail) => (
                                            <li key={detail} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-foreground">
                                                    {detail}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Course Timeline ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Course Timeline
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Here's what a typical course looks like from start to finish.
                    </p>
                    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-6 py-4 text-left font-bold">Phase</th>
                                        <th className="px-6 py-4 text-left font-bold">Duration</th>
                                        <th className="px-6 py-4 text-left font-bold">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        {
                                            phase: "Registration & Onboarding",
                                            duration: "1–2 Days",
                                            description:
                                                "Complete registration, receive course access, and orientation materials.",
                                        },
                                        {
                                            phase: "Units 1–4 (Coursework)",
                                            duration: "Self-Paced",
                                            description:
                                                "Work through interactive lessons and submit formative assessments.",
                                        },
                                        {
                                            phase: "Final Evaluation",
                                            duration: "1–2 Weeks",
                                            description:
                                                "Complete your summative assessment (30% of final grade).",
                                        },
                                        {
                                            phase: "Grading & Transcript",
                                            duration: "5–10 Days",
                                            description:
                                                "Final grade calculated and credit recorded on your OST.",
                                        },
                                    ].map((row) => (
                                        <tr key={row.phase} className="hover:bg-surface">
                                            <td className="px-6 py-4 font-medium text-primary whitespace-nowrap">
                                                {row.phase}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                                                {row.duration}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {row.description}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Technical Requirements ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Technical Requirements
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        All you need to get started is a computer and an internet connection.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                icon: Laptop,
                                title: "Computer",
                                description:
                                    "A desktop or laptop computer (Windows, Mac, or Chromebook) with an up-to-date web browser.",
                            },
                            {
                                icon: Wifi,
                                title: "Internet Connection",
                                description:
                                    "A stable internet connection with at least 5 Mbps download speed for streaming lessons.",
                            },
                            {
                                icon: Monitor,
                                title: "Web Browser",
                                description:
                                    "Latest version of Chrome, Firefox, Safari, or Edge. JavaScript and cookies must be enabled.",
                            },
                        ].map((req) => (
                            <div key={req.title} className="text-center">
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <req.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                                    {req.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {req.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-gradient-to-r from-secondary to-secondary-600 py-20 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                        Ready to Start?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Register today and begin your Ontario education journey. Your first
                        lesson is just a few clicks away.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="inline-flex items-center justify-center gap-2 bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Register Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                        >
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
