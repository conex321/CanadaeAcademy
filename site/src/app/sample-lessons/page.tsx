"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Monitor,
    Volume2,
    FlaskConical,
    CheckSquare,
    BookOpen,
    ArrowRight,
    Shield,
    Play,
    Star,
    Users,
    Clock,
    Award,
} from "lucide-react";

const subjects = [
    { id: "all", label: "All Subjects" },
    { id: "math", label: "Mathematics" },
    { id: "science", label: "Science" },
    { id: "english", label: "English" },
    { id: "business", label: "Business" },
    { id: "social", label: "Social Science" },
];

const sampleCourses = [
    { code: "MHF4U", name: "Advanced Functions", subject: "math", grade: "12" },
    { code: "MCV4U", name: "Calculus and Vectors", subject: "math", grade: "12" },
    { code: "SCH4U", name: "Chemistry", subject: "science", grade: "12" },
    { code: "SPH4U", name: "Physics", subject: "science", grade: "12" },
    { code: "SBI4U", name: "Biology", subject: "science", grade: "12" },
    { code: "ENG4U", name: "English", subject: "english", grade: "12" },
    { code: "ENG3U", name: "English", subject: "english", grade: "11" },
    { code: "BOH4M", name: "Business Leadership", subject: "business", grade: "12" },
    { code: "CIA4U", name: "Economics", subject: "social", grade: "12" },
    { code: "MCR3U", name: "Functions", subject: "math", grade: "11" },
    { code: "SCH3U", name: "Chemistry", subject: "science", grade: "11" },
    { code: "SPH3U", name: "Physics", subject: "science", grade: "11" },
];

export default function SampleLessonsPage() {
    const [activeSubject, setActiveSubject] = useState("all");

    const filtered =
        activeSubject === "all"
            ? sampleCourses
            : sampleCourses.filter((c) => c.subject === activeSubject);

    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Play className="w-4 h-4 text-secondary" />
                            <span>Preview Our Courses</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Sample
                            <span className="text-secondary"> Lessons</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                            Experience our interactive animated lessons before you enrol. See
                            why Canada e Academy is different from every other online school.
                        </p>
                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            View Full Course Catalogue
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Feature Cards ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        What Makes Our Lessons Different
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        Our lessons go far beyond PDFs and text-heavy modules. Here's what
                        you can expect.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Volume2,
                                title: "Professional Narration",
                                description:
                                    "Every lesson is narrated by professional voice actors, making complex topics easy to follow.",
                            },
                            {
                                icon: FlaskConical,
                                title: "Interactive Simulations",
                                description:
                                    "Science labs, math visualizations, and interactive diagrams bring concepts to life.",
                            },
                            {
                                icon: CheckSquare,
                                title: "Built-In Quizzes",
                                description:
                                    "Check your understanding with instant-feedback quizzes embedded throughout each lesson.",
                            },
                            {
                                icon: BookOpen,
                                title: "Study Guides",
                                description:
                                    "Downloadable study guides and summaries complement each unit for offline review.",
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-surface rounded-xl p-8 border border-border text-center hover:shadow-md hover:-translate-y-1 transition-all"
                            >
                                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Lesson Player Mockup ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
                        Interactive Lesson Experience
                    </h2>
                    <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden">
                        {/* Player Header */}
                        <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Monitor className="w-5 h-5" />
                                <span className="font-bold">MHF4U — Advanced Functions</span>
                            </div>
                            <span className="text-sm text-white/70">Unit 1, Lesson 3</span>
                        </div>
                        {/* Player Body */}
                        <div className="p-8 md:p-12">
                            <div className="bg-gradient-to-br from-primary-50 to-surface rounded-xl p-8 text-center mb-8">
                                <Play className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                    Polynomial Functions & Their Graphs
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    Interactive animated lesson with narration • ~15 minutes
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    {
                                        label: "Lesson Content",
                                        desc: "Narrated animation with interactive examples",
                                    },
                                    {
                                        label: "Practice Problems",
                                        desc: "Instant-feedback exercises",
                                    },
                                    {
                                        label: "Unit Summary",
                                        desc: "Key concepts and formulas",
                                    },
                                ].map((tab) => (
                                    <div
                                        key={tab.label}
                                        className="bg-surface rounded-lg p-4 border border-border"
                                    >
                                        <h4 className="font-bold text-primary text-sm mb-1">
                                            {tab.label}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">{tab.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Course Tabs ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Preview by Subject
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Select a subject area to see available sample lessons.
                    </p>

                    {/* Tabs */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 justify-center">
                        {subjects.map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => setActiveSubject(sub.id)}
                                className={`whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeSubject === sub.id
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-surface text-muted-foreground hover:bg-primary-50"
                                    }`}
                            >
                                {sub.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filtered.map((course, i) => (
                            <div
                                key={`${course.code}-${i}`}
                                className="bg-surface rounded-xl p-6 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="inline-block bg-primary-50 text-primary text-xs font-bold px-2.5 py-1 rounded-md">
                                        {course.code}
                                    </span>
                                    <span className="text-xs text-muted-foreground font-medium">
                                        Grade {course.grade}
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold text-primary mb-3">
                                    {course.name}
                                </h3>
                                <button className="text-sm text-secondary font-bold flex items-center gap-1 hover:text-secondary-600 transition-colors">
                                    <Play className="w-4 h-4" />
                                    Preview Lesson
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Comparison ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
                        Canada e Academy vs. Traditional Online Schools
                    </h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-6 py-4 text-left font-bold">Feature</th>
                                        <th className="px-6 py-4 text-center font-bold">
                                            Canada e Academy
                                        </th>
                                        <th className="px-6 py-4 text-center font-bold">
                                            Other Schools
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        {
                                            feature: "Interactive Animated Lessons",
                                            us: true,
                                            them: false,
                                        },
                                        {
                                            feature: "Professional Narration",
                                            us: true,
                                            them: false,
                                        },
                                        {
                                            feature: "Interactive Simulations",
                                            us: true,
                                            them: false,
                                        },
                                        {
                                            feature: "Ministry Inspected",
                                            us: true,
                                            them: "Varies",
                                        },
                                        {
                                            feature: "OCT-Certified Teachers",
                                            us: true,
                                            them: "Varies",
                                        },
                                        {
                                            feature: "Self-Paced Learning",
                                            us: true,
                                            them: true,
                                        },
                                        {
                                            feature: "24/7 Course Access",
                                            us: true,
                                            them: true,
                                        },
                                    ].map((row) => (
                                        <tr key={row.feature} className="hover:bg-surface">
                                            <td className="px-6 py-4 font-medium text-primary">
                                                {row.feature}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {row.us === true ? (
                                                    <Star className="w-5 h-5 text-secondary mx-auto fill-secondary" />
                                                ) : (
                                                    <span className="text-muted-foreground">—</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {row.them === true ? (
                                                    <Star className="w-5 h-5 text-muted-foreground mx-auto" />
                                                ) : row.them === false ? (
                                                    <span className="text-muted-foreground">—</span>
                                                ) : (
                                                    <span className="text-sm text-muted-foreground">
                                                        {row.them}
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-gradient-to-r from-secondary to-secondary-600 py-20 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                        Ready to Experience the Difference?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Join Canada e Academy and learn with interactive animated lessons
                        that make studying engaging and effective.
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
