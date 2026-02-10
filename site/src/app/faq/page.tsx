"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Search,
    ChevronDown,
    ChevronUp,
    HelpCircle,
    ArrowRight,
    Shield,
    BookOpen,
    CreditCard,
    Monitor,
    GraduationCap,
    Globe,
    Laptop,
} from "lucide-react";

const faqCategories = [
    {
        id: "about",
        icon: Shield,
        label: "About Us",
        questions: [
            {
                q: "What is Canada e Academy?",
                a: "Canada e Academy is an Ontario Ministry of Education inspected online high school (BSID #665804). We offer 170+ Ontario curriculum courses taught by OCT-certified teachers through interactive animated lessons.",
            },
            {
                q: "Is Canada e Academy accredited?",
                a: "Canada e Academy is inspected by the Ontario Ministry of Education. Our Board School Identification (BSID) number is 665804. This means our curriculum, assessment practices, and teaching standards meet Ontario's requirements. Credits earned at our school are fully recognized.",
            },
            {
                q: "Who teaches the courses?",
                a: "All of our courses are taught by Ontario College of Teachers (OCT) certified educators with real classroom experience. Our teachers provide personalized feedback and are available to support students throughout their learning journey.",
            },
        ],
    },
    {
        id: "enrolment",
        icon: CreditCard,
        label: "Enrolment & Pricing",
        questions: [
            {
                q: "How much do courses cost?",
                a: "Domestic students (Canadian citizens and permanent residents) pay $574 per course. International students pay $1,224 per course. There are no hidden fees — tuition includes all course materials, teacher support, and your Official Ontario Student Transcript.",
            },
            {
                q: "How do I register?",
                a: "You can register online through our Registration page. The process takes about 10 minutes. You'll need to provide student information, select your course(s), and complete payment.",
            },
            {
                q: "Are there any free courses?",
                a: "Yes! We offer select courses at no cost, including Career Studies (GLC2O) and Learning Strategies (GLS1O). Visit our Courses page to see all available free options.",
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, Amex) and debit cards through our secure online payment system. For alternative payment arrangements, please contact us.",
            },
        ],
    },
    {
        id: "experience",
        icon: Monitor,
        label: "Course Experience",
        questions: [
            {
                q: "What makes your courses different from other online schools?",
                a: "Our courses feature professional interactive animated lessons with narration, simulations, and engaging activities — not just PDF textbooks or walls of text. We use an ICE-based assessment model (Ideas, Communication, Expression) that provides meaningful, balanced evaluation.",
            },
            {
                q: "How long do I have to complete a course?",
                a: "Courses are self-paced, so you can study on your own schedule. Most students complete a course in 4–6 weeks, but you can take more or less time depending on your needs. There are no strict deadlines.",
            },
            {
                q: "How do assessments work?",
                a: "Assessments include a mix of assignments, quizzes, and a final summative evaluation (worth 30% of your final grade). All work is submitted online and evaluated by your OCT-certified teacher with detailed feedback.",
            },
        ],
    },
    {
        id: "ossd",
        icon: GraduationCap,
        label: "OSSD & Graduation",
        questions: [
            {
                q: "What is the OSSD?",
                a: "The Ontario Secondary School Diploma (OSSD) is the standard high school diploma issued by the province of Ontario, Canada. It is recognized by universities and colleges worldwide.",
            },
            {
                q: "Can I earn my full OSSD through Canada e Academy?",
                a: "Yes! You can earn your complete Ontario Secondary School Diploma entirely through Canada e Academy. You'll need 30 credits (18 compulsory + 12 elective), complete the Ontario Literacy requirement, and accumulate 40 hours of community involvement.",
            },
            {
                q: "Are your credits recognized by universities?",
                a: "Absolutely. Because we are inspected by the Ontario Ministry of Education, credits earned at Canada e Academy are fully recognized by universities and colleges across Canada, the United States, and internationally.",
            },
        ],
    },
    {
        id: "international",
        icon: Globe,
        label: "Transcripts & International",
        questions: [
            {
                q: "Can international students study at Canada e Academy?",
                a: "Yes! We serve students from over 30 countries worldwide. International students can earn Ontario high school credits and the OSSD from anywhere with an internet connection.",
            },
            {
                q: "How do I get my transcript?",
                a: "Your Official Ontario Student Transcript (OST) is maintained by our school and can be sent directly to universities, colleges, or other institutions upon request. Transcript requests are typically processed within 5–10 business days.",
            },
            {
                q: "Do you provide Letters of Acceptance for visa purposes?",
                a: "Yes, we provide official Letters of Acceptance that can be used for study permit and visa applications. This is included with international student registration.",
            },
        ],
    },
    {
        id: "technical",
        icon: Laptop,
        label: "Technical Requirements",
        questions: [
            {
                q: "What do I need to study online?",
                a: "You'll need a desktop or laptop computer (Windows, Mac, or Chromebook) with an up-to-date web browser (Chrome, Firefox, Safari, or Edge) and a stable internet connection with at least 5 Mbps download speed.",
            },
            {
                q: "Can I study on a tablet or phone?",
                a: "While you can access some course content on tablets, we recommend using a desktop or laptop computer for the best learning experience, especially for completing assessments and interactive activities.",
            },
        ],
    },
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const filteredCategories = faqCategories
        .filter((cat) => !activeCategory || cat.id === activeCategory)
        .map((cat) => ({
            ...cat,
            questions: cat.questions.filter(
                (faq) =>
                    !searchQuery ||
                    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        }))
        .filter((cat) => cat.questions.length > 0);

    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <HelpCircle className="w-4 h-4 text-secondary" />
                        <span>Get Answers</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Frequently Asked
                        <span className="text-secondary"> Questions</span>
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Find answers to common questions about Canada e Academy, our
                        courses, pricing, and the OSSD.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-foreground text-base focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ── Category Nav ── */}
            <section className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${!activeCategory
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-surface text-muted-foreground hover:bg-primary-50"
                                }`}
                        >
                            All
                        </button>
                        {faqCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() =>
                                    setActiveCategory(activeCategory === cat.id ? null : cat.id)
                                }
                                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeCategory === cat.id
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-surface text-muted-foreground hover:bg-primary-50"
                                    }`}
                            >
                                <cat.icon className="w-4 h-4" />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ Content ── */}
            <section className="bg-surface py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCategories.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-xl border border-border">
                            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                No Results Found
                            </h3>
                            <p className="text-muted-foreground">
                                Try a different search term or browse all categories.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {filteredCategories.map((cat) => (
                                <div key={cat.id}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                                            <cat.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h2 className="font-heading text-2xl font-bold text-primary">
                                            {cat.label}
                                        </h2>
                                    </div>
                                    <div className="space-y-3">
                                        {cat.questions.map((faq, i) => {
                                            const itemId = `${cat.id}-${i}`;
                                            const isOpen = openItems[itemId];
                                            return (
                                                <div
                                                    key={itemId}
                                                    className="bg-white rounded-xl border border-border overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => toggleItem(itemId)}
                                                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface transition-colors"
                                                    >
                                                        <span className="font-medium text-primary pr-4">
                                                            {faq.q}
                                                        </span>
                                                        {isOpen ? (
                                                            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                                        )}
                                                    </button>
                                                    {isOpen && (
                                                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
                                                            {faq.a}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-primary py-16 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl font-extrabold mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                        Our team is here to help. Reach out and we'll get back to you within
                        24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Contact Us
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
