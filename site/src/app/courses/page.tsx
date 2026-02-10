"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Search,
    BookOpen,
    ArrowRight,
    Shield,
    Globe,
    Filter,
    Sparkles,
} from "lucide-react";

const categories = [
    "All Courses",
    "Grade 12",
    "Grade 11",
    "Grade 10",
    "Grade 9",
    "ESL",
    "Free",
    "Languages",
];

const courses = [
    // Grade 12
    { code: "MHF4U", name: "Advanced Functions", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "MCV4U", name: "Calculus and Vectors", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "SCH4U", name: "Chemistry", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "SPH4U", name: "Physics", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "SBI4U", name: "Biology", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "ENG4U", name: "English", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "MDM4U", name: "Mathematics of Data Management", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "BOH4M", name: "Business Leadership", grade: "Grade 12", pathway: "University/College", category: "Grade 12" },
    { code: "CIA4U", name: "Economics", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    { code: "CPW4U", name: "Canadian & World Politics", grade: "Grade 12", pathway: "University", category: "Grade 12" },
    // Grade 11
    { code: "MCR3U", name: "Functions", grade: "Grade 11", pathway: "University", category: "Grade 11" },
    { code: "SPH3U", name: "Physics", grade: "Grade 11", pathway: "University", category: "Grade 11" },
    { code: "SCH3U", name: "Chemistry", grade: "Grade 11", pathway: "University", category: "Grade 11" },
    { code: "SBI3U", name: "Biology", grade: "Grade 11", pathway: "University", category: "Grade 11" },
    { code: "ENG3U", name: "English", grade: "Grade 11", pathway: "University", category: "Grade 11" },
    { code: "BAF3M", name: "Financial Accounting", grade: "Grade 11", pathway: "University/College", category: "Grade 11" },
    { code: "ICS3U", name: "Introduction to Computer Science", grade: "Grade 11", pathway: "University", category: "Grade 11" },
    // Grade 10
    { code: "MPM2D", name: "Principles of Mathematics", grade: "Grade 10", pathway: "De-streamed", category: "Grade 10" },
    { code: "SNC2D", name: "Science", grade: "Grade 10", pathway: "De-streamed", category: "Grade 10" },
    { code: "ENG2D", name: "English", grade: "Grade 10", pathway: "De-streamed", category: "Grade 10" },
    { code: "CHV2O", name: "Civics", grade: "Grade 10", pathway: "Open", category: "Grade 10" },
    { code: "GLC2O", name: "Career Studies", grade: "Grade 10", pathway: "Open", category: "Grade 10" },
    // Grade 9
    { code: "MTH1W", name: "Mathematics", grade: "Grade 9", pathway: "De-streamed", category: "Grade 9" },
    { code: "SNC1W", name: "Science", grade: "Grade 9", pathway: "De-streamed", category: "Grade 9" },
    { code: "ENG1W", name: "English", grade: "Grade 9", pathway: "De-streamed", category: "Grade 9" },
    // ESL
    { code: "ESLAO", name: "ESL Level 1", grade: "ESL", pathway: "Open", category: "ESL" },
    { code: "ESLBO", name: "ESL Level 2", grade: "ESL", pathway: "Open", category: "ESL" },
    { code: "ESLCO", name: "ESL Level 3", grade: "ESL", pathway: "Open", category: "ESL" },
    { code: "ESLDO", name: "ESL Level 4", grade: "ESL", pathway: "Open", category: "ESL" },
    { code: "ESLEO", name: "ESL Level 5", grade: "ESL", pathway: "Open", category: "ESL" },
    // Free
    { code: "GLC2O", name: "Career Studies", grade: "Grade 10", pathway: "Open", category: "Free" },
    { code: "GLS1O", name: "Learning Strategies", grade: "Grade 9", pathway: "Open", category: "Free" },
    // Languages
    { code: "FSF1O", name: "Core French", grade: "Grade 9", pathway: "Open", category: "Languages" },
    { code: "LKBDU", name: "Mandarin", grade: "Grade 12", pathway: "University", category: "Languages" },
];

export default function CoursesPage() {
    const [activeCategory, setActiveCategory] = useState("All Courses");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = courses.filter((course) => {
        const matchesCategory =
            activeCategory === "All Courses" || course.category === activeCategory;
        const matchesSearch =
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.code.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4 text-secondary" />
                            <span>170+ Ontario Courses</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Course
                            <span className="text-secondary"> Catalogue</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            Explore our full range of Ontario curriculum courses — from Grade 9
                            to Grade 12, ESL, and more. All taught by OCT-certified teachers
                            with interactive animated lessons.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Filter Bar ── */}
            <section className="sticky top-20 z-40 bg-white border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat
                                            ? "bg-primary text-white shadow-md"
                                            : "bg-surface text-muted-foreground hover:bg-primary-50 hover:text-primary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64 md:ml-auto">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Course Grid ── */}
            <section className="bg-surface py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-muted-foreground text-sm">
                        Showing {filteredCourses.length} course{filteredCourses.length !== 1 && "s"}
                        {activeCategory !== "All Courses" && ` in ${activeCategory}`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </div>

                    {filteredCourses.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-xl border border-border">
                            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                No Courses Found
                            </h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search or filter to find what you're looking
                                for.
                            </p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredCourses.map((course, i) => (
                                <div
                                    key={`${course.code}-${course.category}-${i}`}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-0.5 transition-all"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="inline-block bg-primary-50 text-primary text-xs font-bold px-2.5 py-1 rounded-md">
                                            {course.code}
                                        </span>
                                        <span className="text-xs text-muted-foreground font-medium">
                                            {course.grade}
                                        </span>
                                    </div>
                                    <h3 className="font-heading font-bold text-primary mb-2">
                                        {course.name}
                                    </h3>
                                    <span className="inline-block text-xs bg-surface text-muted-foreground px-2 py-1 rounded-md">
                                        {course.pathway}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── Tuition ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Transparent Tuition
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        No hidden fees. One price includes everything — course content,
                        teacher support, and your official Ontario transcript.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Domestic Students",
                                price: "$574",
                                description: "Canadian citizens & permanent residents",
                                features: [
                                    "Full course content & animated lessons",
                                    "OCT-certified teacher support",
                                    "Official Ontario Student Transcript",
                                    "24/7 course access",
                                ],
                            },
                            {
                                title: "International Students",
                                price: "$1,224",
                                description: "Students studying from outside Canada",
                                features: [
                                    "Everything in the domestic package",
                                    "International student support services",
                                    "Letter of Acceptance for visa purposes",
                                    "Transcript courier to any country",
                                ],
                            },
                        ].map((plan) => (
                            <div
                                key={plan.title}
                                className="bg-surface rounded-2xl p-8 border border-border"
                            >
                                <h3 className="font-heading text-xl font-bold text-primary mb-1">
                                    {plan.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {plan.description}
                                </p>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-secondary">
                                        {plan.price}
                                    </span>
                                    <span className="text-muted-foreground ml-2">/ course</span>
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2">
                                            <Shield className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-foreground">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/register"
                                    className="mt-8 block text-center bg-secondary hover:bg-secondary-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                                >
                                    Register Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-gradient-to-r from-secondary to-secondary-600 py-16 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl font-extrabold mb-4">
                        Don't See Your Course?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                        We're continuously adding new courses. Contact us for the latest
                        availability or to request a specific course.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    );
}
