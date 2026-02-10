import type { Metadata } from "next";
import Link from "next/link";
import {
    Shield,
    Users,
    Globe,
    BookOpen,
    Award,
    Monitor,
    CheckCircle,
    ArrowRight,
    Star,
    Heart,
    Target,
    Eye,
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Canada e Academy — an Ontario Ministry of Education inspected online high school (BSID #665804) offering 170+ interactive OSSD courses with OCT-certified teachers.",
};

export default function AboutPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Heart className="w-4 h-4 text-secondary" />
                            <span>Our Story</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Making Quality Ontario Education
                            <span className="text-secondary"> Accessible to All</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            Canada e Academy was founded with a simple mission: to provide
                            high-quality, accredited Ontario education to students everywhere —
                            without the barriers of geography, schedule, or circumstance.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-16">
                        Our Journey
                    </h2>
                    <div className="space-y-12">
                        {[
                            {
                                year: "Founded",
                                title: "A Vision Begins",
                                description:
                                    "Canada e Academy was established with the goal of bringing Ontario's world-class education online, making it accessible to students across the globe.",
                            },
                            {
                                year: "Inspected",
                                title: "Ministry of Education Inspection",
                                description:
                                    "Successfully inspected by the Ontario Ministry of Education, receiving our Board School Identification (BSID #665804) — confirming our curriculum meets Ontario standards.",
                            },
                            {
                                year: "Growing",
                                title: "Expanding Our Reach",
                                description:
                                    "Our catalogue has grown to 170+ courses serving students from over 30 countries. We continue to innovate with interactive animated lessons and ICE-based assessments.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 items-start">
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                                        {item.year}
                                    </div>
                                    {i < 2 && <div className="w-0.5 h-16 bg-border mt-4" />}
                                </div>
                                <div className="flex-1">
                                    <div className="md:hidden inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                                        {item.year}
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What Makes Us Different ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        What Makes Us Different
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        We're not your average online school. Here's what sets Canada e
                        Academy apart from the rest.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Monitor,
                                title: "Interactive Animated Lessons",
                                description:
                                    "Our lessons feature professional narration, simulations, and interactive elements — not boring PDFs or wall-of-text modules.",
                            },
                            {
                                icon: Shield,
                                title: "Ministry Inspected",
                                description:
                                    "We hold BSID #665804 following a thorough Ontario Ministry of Education inspection — your credits are fully recognized.",
                            },
                            {
                                icon: Users,
                                title: "OCT-Certified Teachers",
                                description:
                                    "Every instructor holds certification from the Ontario College of Teachers with real classroom experience.",
                            },
                            {
                                icon: BookOpen,
                                title: "ICE-Based Assessment",
                                description:
                                    "Our assessment model evaluates Ideas, Communication, and Expression — providing balanced, meaningful evaluation.",
                            },
                            {
                                icon: Globe,
                                title: "Global Accessibility",
                                description:
                                    "Students from 30+ countries study with us. All you need is a computer and internet connection.",
                            },
                            {
                                icon: Award,
                                title: "Transparent Pricing",
                                description:
                                    "No hidden fees. Domestic students pay $574 per course, international students $1,224 — all-inclusive.",
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all"
                            >
                                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                                    <feature.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Ministry Section ── */}
            <section className="bg-primary text-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Shield className="w-4 h-4 text-secondary" />
                                <span>Official Recognition</span>
                            </div>
                            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
                                Ontario Ministry of Education Inspected
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed mb-6">
                                Canada e Academy is inspected by the Ontario Ministry of
                                Education. Our Board School Identification (BSID) number is
                                665804. This means our curriculum, teaching standards, and
                                assessment practices meet the requirements set by the province
                                of Ontario.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Curriculum follows Ontario guidelines",
                                    "Credits recognized by all post-secondary institutions",
                                    "Regular Ministry compliance reviews",
                                    "Official Ontario Student Transcripts (OST) issued",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                        <span className="text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <div className="text-center">
                                <Shield className="w-20 h-20 text-secondary mx-auto mb-4" />
                                <h3 className="font-heading text-2xl font-bold mb-2">
                                    BSID #665804
                                </h3>
                                <p className="text-white/70 mb-6">
                                    Ontario Ministry of Education
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <span className="block text-2xl font-bold text-secondary">
                                            170+
                                        </span>
                                        <span className="text-sm text-white/70">Courses</span>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <span className="block text-2xl font-bold text-secondary">
                                            30+
                                        </span>
                                        <span className="text-sm text-white/70">Countries</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-surface rounded-2xl p-10 border border-border">
                            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                                Our Mission
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To provide accessible, high-quality Ontario education to every
                                student — regardless of their location, background, or
                                circumstances — through innovative technology and dedicated
                                OCT-certified teachers.
                            </p>
                        </div>
                        <div className="bg-surface rounded-2xl p-10 border border-border">
                            <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-secondary" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                                Our Vision
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be the most trusted and innovative online high school in
                                Canada — setting the standard for engaging digital education
                                that prepares students for success in university and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── By the Numbers ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-16">
                        By the Numbers
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "170+", label: "Courses Available" },
                            { value: "30+", label: "Countries Served" },
                            { value: "OCT", label: "Certified Teachers" },
                            { value: "24/7", label: "Course Access" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="text-center bg-white rounded-xl p-8 shadow-sm border border-border"
                            >
                                <span className="block text-3xl md:text-4xl font-extrabold text-secondary mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-muted-foreground font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Student Reviews ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-16">
                        What Students Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote:
                                    "The interactive animated lessons made learning so much more engaging than any other online school I tried. I actually looked forward to studying!",
                                name: "Sarah M.",
                                location: "Ontario, Canada",
                            },
                            {
                                quote:
                                    "As an international student, Canada e Academy made earning my OSSD straightforward and stress-free. The teachers were always available to help.",
                                name: "Ahmed R.",
                                location: "Dubai, UAE",
                            },
                            {
                                quote:
                                    "I needed to upgrade my marks for university applications. The flexible schedule let me work at my own pace and achieve the grades I needed.",
                                name: "Jessica L.",
                                location: "British Columbia, Canada",
                            },
                        ].map((review) => (
                            <div
                                key={review.name}
                                className="bg-surface rounded-xl p-8 border border-border"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                                    "{review.quote}"
                                </p>
                                <div>
                                    <span className="font-bold text-primary">{review.name}</span>
                                    <span className="block text-sm text-muted-foreground">
                                        {review.location}
                                    </span>
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
                        Ready to Join Canada e Academy?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Start your journey toward an Ontario Secondary School Diploma today.
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
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
