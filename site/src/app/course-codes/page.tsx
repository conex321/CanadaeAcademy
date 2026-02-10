import type { Metadata } from "next";
import Link from "next/link";
import {
    BookOpen,
    ArrowRight,
    Shield,
    GraduationCap,
    CheckCircle,
    Info,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Course Codes",
    description:
        "Understand Ontario course codes — learn how to read course codes like MHF4U, what grade levels and pathways mean, and browse common subject prefixes.",
};

export default function CourseCodesPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Info className="w-4 h-4 text-secondary" />
                            <span>Reference Guide</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Understanding Ontario
                            <span className="text-secondary"> Course Codes</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            Every Ontario high school course has a unique code that tells you
                            the subject, grade level, and pathway. Here's how to read them.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Anatomy of a Course Code ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Anatomy of a Course Code
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        Let's break down the course code <strong>MHF4U</strong> as an
                        example.
                    </p>

                    <div className="bg-surface rounded-2xl p-8 md:p-12 border border-border">
                        {/* Course Code Display */}
                        <div className="flex justify-center mb-12">
                            <div className="flex items-center gap-1 md:gap-2">
                                {[
                                    { char: "M", color: "bg-primary", label: "Subject" },
                                    { char: "H", color: "bg-primary-600", label: "Discipline" },
                                    { char: "F", color: "bg-primary-700", label: "Course" },
                                    { char: "4", color: "bg-secondary", label: "Grade" },
                                    { char: "U", color: "bg-secondary-600", label: "Pathway" },
                                ].map((item) => (
                                    <div key={item.label} className="text-center">
                                        <div
                                            className={`${item.color} text-white w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center font-extrabold text-2xl md:text-4xl shadow-md`}
                                        >
                                            {item.char}
                                        </div>
                                        <span className="block text-xs md:text-sm font-medium text-muted-foreground mt-2">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    position: "1st Character (M)",
                                    meaning: "Subject Area",
                                    detail: "M = Mathematics",
                                },
                                {
                                    position: "2nd Character (H)",
                                    meaning: "Discipline",
                                    detail: "H = Functions (within Mathematics)",
                                },
                                {
                                    position: "3rd Character (F)",
                                    meaning: "Specific Course",
                                    detail: "F = Advanced Functions",
                                },
                                {
                                    position: "4th Character (4)",
                                    meaning: "Grade Level",
                                    detail: "4 = Grade 12 (1=Gr9, 2=Gr10, 3=Gr11, 4=Gr12)",
                                },
                                {
                                    position: "5th Character (U)",
                                    meaning: "Pathway Type",
                                    detail:
                                        "U = University Preparation (see pathway types below)",
                                },
                            ].map((item) => (
                                <div
                                    key={item.position}
                                    className="bg-white rounded-xl p-5 border border-border"
                                >
                                    <div className="text-sm font-bold text-secondary mb-1">
                                        {item.position}
                                    </div>
                                    <div className="font-bold text-primary mb-1">
                                        {item.meaning}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {item.detail}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Grade Level Mapping ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
                        Grade Level Mapping
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: "1", grade: "Grade 9" },
                            { number: "2", grade: "Grade 10" },
                            { number: "3", grade: "Grade 11" },
                            { number: "4", grade: "Grade 12" },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="bg-white rounded-xl p-6 border border-border text-center"
                            >
                                <div className="w-14 h-14 bg-secondary text-white rounded-xl flex items-center justify-center mx-auto mb-3 font-extrabold text-2xl shadow-md">
                                    {item.number}
                                </div>
                                <span className="font-bold text-primary">{item.grade}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pathways ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Course Pathways
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        The last character in a course code indicates the pathway — which
                        post-secondary destination the course prepares you for.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                code: "U",
                                name: "University Preparation",
                                description:
                                    "Designed for students planning to attend university. Focuses on theoretical and abstract concepts.",
                            },
                            {
                                code: "M",
                                name: "University / College",
                                description:
                                    "Prepares students for both university and college programs. Balanced theory and application.",
                            },
                            {
                                code: "C",
                                name: "College Preparation",
                                description:
                                    "Designed for students planning to attend college. Emphasizes practical, applied learning.",
                            },
                            {
                                code: "O",
                                name: "Open",
                                description:
                                    "Suitable for all students regardless of post-secondary plans. Not specific to any pathway.",
                            },
                            {
                                code: "E",
                                name: "Workplace Preparation",
                                description:
                                    "Designed for students planning to enter the workplace directly after high school.",
                            },
                            {
                                code: "W or D",
                                name: "De-streamed (Grades 9–10)",
                                description:
                                    "A single stream for all students in Grades 9 and 10, replacing the previous academic/applied split.",
                            },
                        ].map((pathway) => (
                            <div
                                key={pathway.code}
                                className="bg-surface rounded-xl p-6 border border-border"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-extrabold text-lg">
                                        {pathway.code}
                                    </span>
                                    <h3 className="font-heading font-bold text-primary">
                                        {pathway.name}
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {pathway.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Subject Prefixes ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
                        Common Subject Prefixes
                    </h2>
                    <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-6 py-4 text-left font-bold">Prefix</th>
                                        <th className="px-6 py-4 text-left font-bold">Subject</th>
                                        <th className="px-6 py-4 text-left font-bold">Examples</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        {
                                            prefix: "M",
                                            subject: "Mathematics",
                                            examples: "MHF4U, MCV4U, MDM4U",
                                        },
                                        {
                                            prefix: "S",
                                            subject: "Science",
                                            examples: "SCH4U, SPH4U, SBI4U",
                                        },
                                        {
                                            prefix: "E",
                                            subject: "English",
                                            examples: "ENG4U, ENG3U, ENG2D",
                                        },
                                        {
                                            prefix: "C",
                                            subject: "Canadian & World Studies",
                                            examples: "CHV2O, CIA4U, CPW4U",
                                        },
                                        {
                                            prefix: "B",
                                            subject: "Business Studies",
                                            examples: "BAF3M, BOH4M, BBB4M",
                                        },
                                        {
                                            prefix: "I",
                                            subject: "Computer Studies",
                                            examples: "ICS3U, ICS4U",
                                        },
                                        {
                                            prefix: "F",
                                            subject: "French",
                                            examples: "FSF1O, FSF2D, FSF3U",
                                        },
                                        {
                                            prefix: "G",
                                            subject: "Guidance & Career Ed",
                                            examples: "GLC2O, GLS1O",
                                        },
                                        {
                                            prefix: "H",
                                            subject: "Social Sciences & Humanities",
                                            examples: "HSB4U, HHS4U",
                                        },
                                        {
                                            prefix: "L",
                                            subject: "Languages (International)",
                                            examples: "LKBDU (Mandarin), LWSDU (Spanish)",
                                        },
                                    ].map((row) => (
                                        <tr key={row.prefix} className="hover:bg-surface">
                                            <td className="px-6 py-4">
                                                <span className="inline-block bg-primary-50 text-primary text-sm font-bold px-3 py-1 rounded-md">
                                                    {row.prefix}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-primary">
                                                {row.subject}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground text-sm">
                                                {row.examples}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Special Codes ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Special & Mandatory Course Codes
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Some courses are mandatory for graduation or follow special naming
                        conventions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                code: "CHV2O",
                                name: "Civics",
                                detail: "Half-credit (0.5) — mandatory for Grade 10",
                            },
                            {
                                code: "GLC2O",
                                name: "Career Studies",
                                detail: "Half-credit (0.5) — mandatory for Grade 10",
                            },
                            {
                                code: "ESLAO–ESLEO",
                                name: "ESL Levels 1–5",
                                detail:
                                    "English as a Second Language — progressive levels A through E",
                            },
                            {
                                code: "OLC4O",
                                name: "Ontario Literacy Course",
                                detail:
                                    "Alternative to the OSSLT for meeting the literacy graduation requirement",
                            },
                        ].map((item) => (
                            <div
                                key={item.code}
                                className="bg-surface rounded-xl p-6 border border-border flex items-start gap-4"
                            >
                                <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-md whitespace-nowrap">
                                    {item.code}
                                </span>
                                <div>
                                    <h3 className="font-bold text-primary mb-1">{item.name}</h3>
                                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-gradient-to-r from-secondary to-secondary-600 py-20 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                        Find the Right Course for You
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Now that you understand course codes, browse our full catalogue to
                        find the courses you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Browse Courses
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/ossd-requirements"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                        >
                            OSSD Requirements
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
