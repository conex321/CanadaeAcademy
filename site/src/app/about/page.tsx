import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    Quote,
} from "lucide-react";
import { BrandName } from "@/components/BrandName";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Canada e Academy — an online private Ontario high school providing global access to high-quality education. 75+ interactive OSSD courses with OCT-certified teachers. BSID Pending.",
};

export default function AboutPage() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="relative min-h-[500px] text-white overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80"
                    alt="Students collaborating"
                    fill
                    priority
                    className="object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-800/70" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield className="w-4 h-4 text-secondary" />
                            <span>Established 2025</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Shaping Futures at
                            {" "}<BrandName />
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            An online private Ontario school providing global access
                            to high-quality high school education. BSID Pending.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Our Story ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Side */}
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-6">
                                Our Story
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Founded in 2025, Canada e Academy was built with a clear
                                vision: to break geographical barriers and provide
                                high-quality, flexible Ontario education to
                                students anywhere in the world.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                As we launch globally in 2026, we are building a vibrant
                                community of local and international students, helping them
                                pursue admissions to the world&apos;s top universities through
                                a rigorous yet supportive virtual environment.
                            </p>
                            <blockquote className="border-l-4 border-secondary pl-6 py-2 bg-secondary-50 rounded-r-xl">
                                <p className="text-primary font-medium italic leading-relaxed">
                                    &ldquo;We don&apos;t just teach courses; we mentor the next
                                    generation of global leaders, ensuring every course is a
                                    stepping stone to their dream career.&rdquo;
                                </p>
                            </blockquote>
                        </div>
                        {/* Image Side */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] img-hover-zoom glow-on-hover">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                                alt="Students collaborating online"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Timeline ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
                        Our Journey
                    </h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                        Building the future of online education from Ontario to the world
                    </p>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                year: "2025",
                                title: "Founded",
                                description:
                                    "Established as an Ontario private school with a mission to deliver quality education globally.",
                                icon: Shield,
                            },
                            {
                                year: "2026",
                                title: "Global Launch",
                                description:
                                    "Opening doors to students worldwide with 75+ interactive OSSD courses.",
                                icon: Globe,
                            },
                            {
                                year: "2026",
                                title: "BSID Application",
                                description:
                                    "In the process of obtaining our Board School Identification (BSID) from the Ontario Ministry of Education.",
                                icon: Award,
                            },
                            {
                                year: "The Future",
                                title: "Worldwide Reach",
                                description:
                                    "Growing to serve students across every continent with recognized Ontario credits.",
                                icon: Star,
                            },
                        ].map((milestone, index) => (
                            <div key={milestone.year} className="relative text-center group">
                                {/* Connector line */}
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
                                )}
                                <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-extrabold text-sm shadow-md relative z-10 group-hover:scale-110 transition-transform">
                                    <milestone.icon className="w-7 h-7" />
                                </div>
                                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    {milestone.year}
                                </span>
                                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                                    {milestone.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {milestone.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What Makes Us Different ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
                            What Makes Us Different
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We combine traditional academic excellence with modern
                            technological delivery.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Monitor,
                                title: "Interactive Lessons",
                                description:
                                    "Engaging multimedia content that goes beyond simple PDFs and videos.",
                            },
                            {
                                icon: Users,
                                title: "OCT Teachers",
                                description:
                                    "All courses are taught and graded by certified Ontario educators.",
                            },
                            {
                                icon: BookOpen,
                                title: "75+ Courses",
                                description:
                                    "A wide variety of University and College preparation courses available.",
                            },
                            {
                                icon: Award,
                                title: "Varied Assessment",
                                description:
                                    "Balanced testing including projects, discussions, and proctored exams.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-surface rounded-xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all text-center"
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

            {/* ── Ontario Private School Banner ── */}
            <section className="relative py-20 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=60"
                    alt="Learning environment"
                    fill
                    className="object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-primary/90" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-white">
                                <Shield className="w-4 h-4 text-secondary" />
                                <span>BSID Pending</span>
                            </div>
                            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-6">
                                Ontario Private School
                            </h2>
                            <p className="text-white/80 leading-relaxed mb-6">
                                Canada e Academy follows the Ontario Ministry of Education
                                curriculum as a registered private school. Our courses are
                                designed to meet all requirements for credit granting upon
                                BSID authorization.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Official Ontario Student Transcripts (OST)",
                                    "Credits recognized by all Canadian universities",
                                    "OUAC/OCAS direct submission",
                                    "Letters of Acceptance for visa applications",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                        <span className="text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6 text-center">
                            {[
                                { value: "75+", label: "Courses" },
                                { value: "30+", label: "Countries" },
                                { value: "100%", label: "Online Learning" },
                                { value: "OCT", label: "Certified Teachers" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                                >
                                    <span className="text-3xl font-extrabold text-white block mb-1">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-white/70">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ── */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-10 shadow-sm border border-border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                                Our Mission
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To empower students globally by providing an accessible,
                                high-quality Ontario education that inspires lifelong learning,
                                academic integrity, and personal growth. We strive to create a
                                digital classroom that is as rigorous as it is supportive.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-10 shadow-sm border border-border hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                                Our Vision
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be the world&apos;s most trusted online high school,
                                recognized for our innovation in digital pedagogy and our
                                success in bridging the gap between high school and the
                                world&apos;s most prestigious universities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Voices of Success ── */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
                            Voices of Success
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Hear from our students across the globe
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah M.",
                                context: "Competitive Swimmer, Ontario",
                                quote:
                                    "The flexibility of Canada e Academy lets me work through my Grade 12 Advanced Functions while traveling for competitive swimming. My teacher is incredibly responsive!",
                                image:
                                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                            },
                            {
                                name: "James K.",
                                context: "International Student, South Korea",
                                quote:
                                    "As an international student, studying for my OSSD credits online is the best decision I've made. The platform is very easy to navigate and the content is very high quality.",
                                image:
                                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                            },
                            {
                                name: "Priya D.",
                                context: "Credit Upgrade, Toronto",
                                quote:
                                    "I'm upgrading my English mark for university applications. The feedback from my instructor is detailed and really helping me improve my writing style.",
                                image:
                                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                            },
                        ].map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="bg-surface rounded-2xl p-8 border border-border hover:shadow-lg transition-all relative"
                            >
                                <Quote className="w-10 h-10 text-primary-100 absolute top-6 right-6" />
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-secondary flex-shrink-0">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.context}
                                        </p>
                                        <div className="flex gap-0.5 mt-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed italic">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative py-20 text-white overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1920&q=80"
                    alt="Graduation celebration"
                    fill
                    className="object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary-600/90" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Join our global community of students and earn your Ontario
                        Secondary School Diploma with Canada e Academy.
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
                            href="/contact"
                            className="btn-brand-outline inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
