"use client";

import Link from "next/link";
import { useState } from "react";
import {
    GraduationCap,
    BookOpen,
    FileText,
    Heart,
    CheckCircle,
    ArrowRight,
    Shield,
    Monitor,
    Users,
} from "lucide-react";

export default function OSSDRequirementsPage() {
    const [activeTab, setActiveTab] = useState<"current" | "future">("current");

    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <GraduationCap className="w-4 h-4 text-secondary" />
                            <span>Graduation Guide</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            OSSD
                            <span className="text-secondary"> Requirements</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            The Ontario Secondary School Diploma (OSSD) is one of the most
                            recognized high school diplomas worldwide. Here's everything you
                            need to know about earning yours.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Graduation at a Glance ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Graduation at a Glance
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        To earn your OSSD, you must complete three key requirements.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                value: "30",
                                unit: "Credits",
                                title: "Course Credits",
                                description:
                                    "18 compulsory credits + 12 optional credits across grades 9–12.",
                            },
                            {
                                icon: FileText,
                                value: "1",
                                unit: "Requirement",
                                title: "Literacy Requirement",
                                description:
                                    "Pass the Ontario Secondary School Literacy Test (OSSLT) or complete the Ontario Literacy Course (OLC4O).",
                            },
                            {
                                icon: Heart,
                                value: "40",
                                unit: "Hours",
                                title: "Community Involvement",
                                description:
                                    "Complete 40 hours of unpaid community involvement activities.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-surface rounded-2xl p-8 border border-border text-center"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="mb-3">
                                    <span className="text-4xl font-extrabold text-secondary">
                                        {item.value}
                                    </span>
                                    <span className="text-lg text-muted-foreground ml-2">
                                        {item.unit}
                                    </span>
                                </div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Detailed Requirements Tabs ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-12">
                        Credit Requirements
                    </h2>

                    {/* Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white rounded-xl p-1 border border-border inline-flex">
                            <button
                                onClick={() => setActiveTab("current")}
                                className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === "current"
                                        ? "bg-primary text-white shadow-md"
                                        : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                Current Requirements
                            </button>
                            <button
                                onClick={() => setActiveTab("future")}
                                className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === "future"
                                        ? "bg-primary text-white shadow-md"
                                        : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                Updated Requirements (2024+)
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                        {activeTab === "current" ? (
                            <div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-6">
                                    Compulsory Credits (18 Credits)
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    {[
                                        "4 credits in English (1 per grade)",
                                        "3 credits in Mathematics (at least 1 in Grade 11 or 12)",
                                        "2 credits in Science",
                                        "1 credit in French as a Second Language",
                                        "1 credit in Canadian History (Grade 10)",
                                        "1 credit in Canadian Geography (Grade 9)",
                                        "1 credit in the Arts",
                                        "1 credit in Health and Physical Education",
                                        "0.5 credit in Civics (Grade 10)",
                                        "0.5 credit in Career Studies (Grade 10)",
                                        "Plus 3 additional compulsory credits from designated groups",
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                                    Optional Credits (12 Credits)
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    The remaining 12 credits may be earned through courses of your
                                    choice from the full Ontario curriculum catalogue. These
                                    electives allow you to explore interests and meet prerequisites
                                    for post-secondary programs.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-6">
                                    Updated OSSD Requirements (Effective 2024)
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    The Ontario Ministry of Education has introduced updates to
                                    OSSD graduation requirements for students entering Grade 9 in
                                    2024 and beyond. Key changes include:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        "2 credits in online learning (fulfilled through Canada e Academy courses)",
                                        "Updated Literacy requirement options",
                                        "Revised compulsory credit groupings",
                                        "New digital literacy and technological education components",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                                    <p className="text-sm text-primary">
                                        <strong>Note:</strong> Students who started Grade 9 before
                                        2024 follow the current requirements. Canada e Academy
                                        supports both frameworks.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Literacy, Online Learning, Community ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: FileText,
                                title: "Literacy Requirement",
                                description:
                                    "Students must demonstrate literacy proficiency by passing the Ontario Secondary School Literacy Test (OSSLT). Alternatively, students can fulfill this requirement by successfully completing the Ontario Literacy Course (OLC4O), which Canada e Academy offers.",
                            },
                            {
                                icon: Monitor,
                                title: "Online Learning Requirement",
                                description:
                                    "Starting with the 2024–25 school year, students must earn at least 2 credits through online learning. Since all Canada e Academy courses are online, every credit you earn with us automatically counts toward this requirement.",
                            },
                            {
                                icon: Users,
                                title: "Community Involvement",
                                description:
                                    "Students must complete 40 hours of unpaid community involvement before graduation. Activities can include volunteering with charities, community organizations, sports teams, or religious institutions. Hours can be completed at any time during high school.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-surface rounded-2xl p-8 border border-border"
                            >
                                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {item.description}
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
                        Start Earning Your OSSD Credits
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Browse our catalogue of 75+ courses and start working toward your
                        Ontario Secondary School Diploma today.
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
                            href="/register"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
