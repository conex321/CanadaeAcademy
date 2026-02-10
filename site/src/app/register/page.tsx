import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    Shield,
    CheckCircle,
    ArrowRight,
    Users,
    BookOpen,
    Globe,
    GraduationCap,
    Clock,
    FileText,
    CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Register",
    description:
        "Register for Ontario high school courses at Canada e Academy. Domestic students $574/course, international students $1,224/course. Start earning OSSD credits today.",
};

export default function RegisterPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative min-h-[500px] text-white overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
                    alt="Student registering for courses"
                    fill
                    priority
                    className="object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-800/70" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <GraduationCap className="w-4 h-4 text-secondary" />
                            <span>Start Your Journey</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Register for
                            <span className="text-secondary"> Ontario Courses</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                            Enrol in Ontario curriculum courses and earn credits toward your
                            Ontario Secondary School Diploma. Registration takes about 10
                            minutes.
                        </p>
                        <Link
                            href="/courses"
                            className="btn-brand-primary inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Browse Courses First
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Trust Bar ── */}
            <section className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Shield, value: "BSID Pending", label: "Ontario Private School" },
                            { icon: BookOpen, value: "75+", label: "Courses Available" },
                            { icon: Users, value: "OCT", label: "Certified Teachers" },
                            { icon: Globe, value: "30+", label: "Countries Served" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center gap-2">
                                <stat.icon className="w-7 h-7 text-secondary" />
                                <span className="text-lg md:text-xl font-extrabold text-primary">
                                    {stat.value}
                                </span>
                                <span className="text-xs text-muted-foreground font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Step-by-Step Registration ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        How to Register
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        Follow these steps to complete your registration and start learning.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                icon: BookOpen,
                                title: "Choose Course(s)",
                                description:
                                    "Browse our catalogue and select the Ontario course(s) you want to take.",
                            },
                            {
                                step: "02",
                                icon: FileText,
                                title: "Complete Form",
                                description:
                                    "Fill out the online registration form with your personal and academic information.",
                            },
                            {
                                step: "03",
                                icon: CreditCard,
                                title: "Submit Payment",
                                description:
                                    "Pay securely online. Domestic $574/course, International $1,224/course.",
                            },
                            {
                                step: "04",
                                icon: GraduationCap,
                                title: "Start Learning",
                                description:
                                    "Receive your course access within 24 hours and begin your interactive lessons.",
                            },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-5 font-extrabold text-xl shadow-md">
                                    {item.step}
                                </div>
                                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-primary mb-2">
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

            {/* ── Tuition ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Tuition & Fees
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Transparent pricing with no hidden fees. Everything is included.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Domestic Students",
                                subtitle: "Canadian citizens & permanent residents",
                                price: "$574",
                                features: [
                                    "Full interactive course content",
                                    "OCT-certified teacher support",
                                    "All assessments and evaluations",
                                    "Official Ontario Student Transcript (OST)",
                                    "24/7 online course access",
                                    "Technical support",
                                ],
                                highlight: false,
                            },
                            {
                                title: "International Students",
                                subtitle: "Students outside of Canada",
                                price: "$1,224",
                                features: [
                                    "Everything in the domestic package",
                                    "International student support services",
                                    "Letter of Acceptance (for visa/study permit)",
                                    "Transcript courier to any country",
                                    "ESL course recommendations",
                                    "Priority email support",
                                ],
                                highlight: true,
                            },
                        ].map((plan) => (
                            <div
                                key={plan.title}
                                className={`rounded-2xl p-8 border ${plan.highlight
                                    ? "bg-primary text-white border-primary-600"
                                    : "bg-surface border-border"
                                    }`}
                            >
                                <h3
                                    className={`font-heading text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-primary"
                                        }`}
                                >
                                    {plan.title}
                                </h3>
                                <p
                                    className={`text-sm mb-6 ${plan.highlight ? "text-white/70" : "text-muted-foreground"
                                        }`}
                                >
                                    {plan.subtitle}
                                </p>
                                <div className="mb-6">
                                    <span
                                        className={`text-5xl font-extrabold ${plan.highlight ? "text-secondary" : "text-secondary"
                                            }`}
                                    >
                                        {plan.price}
                                    </span>
                                    <span
                                        className={`ml-2 ${plan.highlight ? "text-white/70" : "text-muted-foreground"
                                            }`}
                                    >
                                        / course
                                    </span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2">
                                            <CheckCircle
                                                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-secondary" : "text-success"
                                                    }`}
                                            />
                                            <span
                                                className={`text-sm ${plan.highlight ? "text-white/90" : "text-foreground"
                                                    }`}
                                            >
                                                {f}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`btn-brand-primary block text-center px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5 ${plan.highlight
                                        ? "bg-secondary hover:bg-secondary-600 text-white"
                                        : "bg-secondary hover:bg-secondary-600 text-white"
                                        }`}
                                >
                                    Register Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Requirements ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        What You'll Need
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Have the following information ready before starting your
                        registration.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {[
                            "Student's full legal name",
                            "Date of birth",
                            "Current mailing address",
                            "Parent/guardian information (if under 18)",
                            "Previous school transcript or Ontario Education Number (OEN)",
                            "Course selection(s)",
                            "Payment method (credit or debit card)",
                            "Valid email address for course access",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border"
                            >
                                <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative py-20 text-white overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1920&q=80"
                    alt="Start your journey"
                    fill
                    className="object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary-600/90" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                        Ready to Register?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Have questions before registering? Our team is happy to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn-brand-primary inline-flex items-center justify-center gap-2 bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/courses"
                            className="btn-brand-outline inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                        >
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
