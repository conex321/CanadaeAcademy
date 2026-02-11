import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    FileText,
    Calendar,
    Play,
    Download,
    MessageSquare,
    Zap,
    Timer,
    Rocket,
} from "lucide-react";

export const metadata: Metadata = {
    title: "How It Works",
    description:
        "Learn how Canada e Academy works — from registration to earning Ontario high school credits. Interactive animated lessons, flexible scheduling, and OCT-certified teachers.",
};

export default function HowItWorksPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative min-h-[500px] text-white overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&q=80"
                    alt="Student studying online"
                    fill
                    priority
                    className="object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-800/70" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield className="w-4 h-4 text-secondary" />
                            <span>Simple 4-Step Process</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Your Path to an Ontario
                            <span className="text-secondary"> High School Diploma</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            From registration to earning credits — our streamlined process
                            makes it easy to study on your own schedule.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Step 1: Register ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-secondary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            Step 1
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
                            Register Online
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Select your course, complete registration, and gain access to our
                            Learning Management System within 24 hours.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                        {/* Canadian Students */}
                        <div className="bg-surface rounded-2xl p-8 border-2 border-border hover:border-primary transition-colors relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                Canadian Students
                            </h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-extrabold text-primary">$574</span>
                                <span className="text-muted-foreground">/course</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Includes all digital materials",
                                    "Ontario certified teachers",
                                    "OUAC/OCAS submission",
                                    "24/7 LMS access",
                                    "Personalized feedback",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/register"
                                className="btn-brand-primary block text-center bg-primary hover:bg-primary-600 text-white py-3 rounded-xl font-bold transition-colors"
                            >
                                Register Now
                            </Link>
                        </div>

                        {/* International Students */}
                        <div className="bg-surface rounded-2xl p-8 border-2 border-secondary shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                            <div className="absolute top-4 right-4">
                                <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    GLOBAL
                                </span>
                            </div>
                            <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                Global Students
                            </h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-extrabold text-primary">
                                    $1,224
                                </span>
                                <span className="text-muted-foreground">/course</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Global credit transfer support",
                                    "24/7 Portal Access",
                                    "Dedicated International Advisor",
                                    "Visa documentation support",
                                    "Online proctoring options",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/register"
                                className="btn-brand-primary block text-center bg-secondary hover:bg-secondary-600 text-white py-3 rounded-xl font-bold transition-colors"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Step 2: Start Learning ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block bg-secondary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                                Step 2
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
                                Start Learning
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Gain access to our state-of-the-art Learning Management System
                                (LMS) within 24 hours of registration. Your course content is
                                rich, engaging, and interactive.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        icon: Play,
                                        title: "Video Lessons",
                                        description: "HD instructional videos",
                                    },
                                    {
                                        icon: Zap,
                                        title: "Animations",
                                        description: "Visualizing complex concepts",
                                    },
                                    {
                                        icon: ClipboardCheck,
                                        title: "Quizzes",
                                        description: "Instant feedback on modules",
                                    },
                                    {
                                        icon: Download,
                                        title: "Downloads",
                                        description: "Offline study materials",
                                    },
                                ].map((feature) => (
                                    <div
                                        key={feature.title}
                                        className="bg-white rounded-xl p-5 border border-border"
                                    >
                                        <feature.icon className="w-6 h-6 text-secondary mb-2" />
                                        <h4 className="font-bold text-primary text-sm mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] img-hover-zoom glow-on-hover">
                            <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                                alt="Interactive online learning platform"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Step 3: Submit Assessments ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] order-2 lg:order-1 img-hover-zoom glow-on-hover">
                            <Image
                                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
                                alt="Student completing assessment"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="inline-block bg-secondary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                                Step 3
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
                                Submit Assessments
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Complete assignments and unit tests through the portal. Our
                                Ontario Certified Teachers provide comprehensive feedback and
                                grading within 24-48 business hours.
                            </p>
                            <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-5 flex items-start gap-4">
                                <MessageSquare className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-primary text-sm mb-1">
                                        Fast Feedback Loop
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        Personalized critiques to help you improve before the next
                                        assessment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Step 4: Final Evaluation ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-secondary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                            Step 4
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
                            Final Evaluation
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            All Ontario credit courses require a final evaluation. We make
                            this secure and accessible wherever you are located.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Shield,
                                title: "Proctoring",
                                description:
                                    "Final exams must be supervised by an approved proctor (teacher, librarian, or professional) to maintain academic integrity.",
                            },
                            {
                                icon: Calendar,
                                title: "Flexible Scheduling",
                                description:
                                    "Book your exam date at least 5 days in advance once you have completed all previous assessments in the course.",
                            },
                            {
                                icon: Globe,
                                title: "Remote Options",
                                description:
                                    "For students abroad, we offer online proctoring solutions through verified platforms to ensure global access.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-primary mb-3">
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

            {/* ── Earn Your Credit ── */}
            <section className="relative py-20 text-white overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=60"
                    alt="Graduation"
                    fill
                    className="object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-primary/90" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <GraduationCap className="w-16 h-16 text-secondary mx-auto mb-6" />
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                        Earn Your Credit
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Upon successful completion, we process your final grade and issue an
                        official report card. We handle the submission of your marks to the
                        appropriate institutions automatically.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            "Official Ontario Transcript",
                            "OUAC/OCAS Submission",
                            "Visa Letters Available",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/10"
                            >
                                <CheckCircle className="w-5 h-5 text-secondary" />
                                <span className="text-white/90 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Choose Your Pace ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
                            Choose Your Pace
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Flexible timelines to fit your lifestyle and deadlines
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Rocket,
                                title: "Sprint",
                                timeline: "4 Weeks",
                                description:
                                    "Ideal for students who need to earn credit quickly. Intensive study with daily engagement.",
                                color: "text-secondary",
                                bg: "bg-secondary-50",
                            },
                            {
                                icon: Timer,
                                title: "Standard",
                                timeline: "8–12 Weeks",
                                description:
                                    "Our most popular option. A balanced pace that allows for thorough learning.",
                                color: "text-primary",
                                bg: "bg-primary-50",
                                popular: true,
                            },
                            {
                                icon: Clock,
                                title: "Extended",
                                timeline: "Up to 12 Months",
                                description:
                                    "Maximum flexibility for students balancing work, travel, or other commitments.",
                                color: "text-primary-700",
                                bg: "bg-primary-50",
                            },
                        ].map((pace) => (
                            <div
                                key={pace.title}
                                className={`rounded-2xl p-8 border-2 hover:shadow-lg transition-all text-center relative ${pace.popular ? "border-primary bg-primary-50/30" : "border-border bg-surface"}`}
                            >
                                {pace.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                                        MOST POPULAR
                                    </span>
                                )}
                                <div
                                    className={`w-16 h-16 ${pace.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                                >
                                    <pace.icon className={`w-8 h-8 ${pace.color}`} />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-primary mb-1">
                                    {pace.title}
                                </h3>
                                <span className="text-secondary font-bold text-lg block mb-4">
                                    {pace.timeline}
                                </span>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {pace.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Guidance Booking CTA ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-10 md:p-14 shadow-sm border border-border grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-primary mb-4">
                                Need Personalized Guidance?
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Book a free 15-minute consultation with one of our academic
                                advisors. We&apos;ll help you choose the right courses and create a
                                study plan tailored to your goals.
                            </p>
                            <Link
                                href="/contact"
                                className="btn-brand-primary inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                            >
                                <Calendar className="w-5 h-5" />
                                Book a Free Consultation
                            </Link>
                        </div>
                        <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                                alt="Academic advisor"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
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
                        Ready to Start?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Join students from over 30 countries earning their Ontario diploma
                        with Canada e Academy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/register"
                            className="btn-brand-primary inline-flex items-center justify-center gap-2 bg-white text-secondary hover:bg-white/90 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Register Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/courses"
                            className="btn-brand-outline inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                        >
                            Browse Courses
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
