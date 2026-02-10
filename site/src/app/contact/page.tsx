"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MessageCircle,
    ArrowRight,
    Send,
    Clock,
    CheckCircle,
    AlertCircle,
    Shield,
    User,
    FileText,
    Calendar,
    Globe,
    MapPin,
} from "lucide-react";
import { getSupabase } from "@/lib/supabase";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        studentType: "domestic",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [currentStep, setCurrentStep] = useState(1);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const { error } = await getSupabase()
                .from("contact_submissions")
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        student_type: formData.studentType,
                        message: formData.message,
                        created_at: new Date().toISOString(),
                    },
                ]);

            if (error) throw error;
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                studentType: "domestic",
                message: "",
            });
        } catch {
            setStatus("error");
        }
    };

    const steps = [
        { num: 1, label: "Your Info", icon: User },
        { num: 2, label: "Details", icon: FileText },
        { num: 3, label: "Message", icon: MessageCircle },
    ];

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative min-h-[400px] text-white overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80"
                    alt="Academic advisor ready to help"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-primary-800/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <MessageCircle className="w-4 h-4 text-secondary" />
                            <span>We&apos;re Here to Help</span>
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                            Have questions about courses, registration, or the OSSD? Our team
                            is ready to assist you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Contact Form + Sidebar ── */}
            <section className="bg-surface py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
                        {/* Form Column (2/3 width) */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-6 sm:p-8 md:p-12">
                                {/* Progress Steps */}
                                <div className="mb-12">
                                    <div className="flex items-center justify-between max-w-md mx-auto mb-4">
                                        {steps.map((step, i) => (
                                            <div key={step.num} className="flex items-center flex-1">
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentStep(step.num)}
                                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                        currentStep === step.num
                                                            ? "bg-secondary text-white shadow-md scale-105"
                                                            : currentStep > step.num
                                                                ? "bg-secondary/10 text-secondary"
                                                                : "bg-surface text-muted-foreground border border-border"
                                                    }`}
                                                >
                                                    <step.icon className="w-4 h-4" />
                                                    <span className="hidden sm:inline">{step.label}</span>
                                                    <span className="sm:hidden">{step.num}</span>
                                                </button>
                                                {i < steps.length - 1 && (
                                                    <div className="flex-1 h-0.5 mx-3 bg-border rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-secondary rounded-full transition-all duration-500 ease-out"
                                                            style={{ width: currentStep > step.num ? '100%' : '0%' }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="max-w-md mx-auto">
                                        <div className="h-1 bg-border rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-secondary to-secondary-400 rounded-full transition-all duration-500 ease-out"
                                                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="text-center py-16"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                            className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                                        >
                                            <CheckCircle className="w-10 h-10 text-green-500" />
                                        </motion.div>
                                        <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                                            Message Sent!
                                        </h3>
                                        <p className="text-muted-foreground max-w-md mx-auto mb-6">
                                            Thank you for reaching out. Our team will review your
                                            message and respond within 24 business hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setStatus("idle");
                                                setCurrentStep(1);
                                            }}
                                            className="text-secondary font-bold hover:text-secondary-600 transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <AnimatePresence mode="wait">
                                            {/* Step 1: Your Info */}
                                            {currentStep === 1 && (
                                                <motion.div
                                                    key="step-1"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className="space-y-5"
                                                >
                                                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                                        Your Information
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mb-6">
                                                        Tell us a bit about yourself so we can direct your
                                                        inquiry to the right team.
                                                    </p>
                                                    <div>
                                                        <label
                                                            htmlFor="name"
                                                            className="block text-sm font-semibold text-foreground mb-2.5 tracking-wide"
                                                        >
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            required
                                                            value={formData.name}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, name: e.target.value })
                                                            }
                                                            className="input-brand-focus w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                            placeholder="Enter your full name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="email"
                                                            className="block text-sm font-semibold text-foreground mb-2.5 tracking-wide"
                                                        >
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, email: e.target.value })
                                                            }
                                                            className="input-brand-focus w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                            placeholder="your.email@example.com"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => setCurrentStep(2)}
                                                        className="btn-brand-primary w-full bg-secondary hover:bg-secondary-600 text-white py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                                                    >
                                                        Continue
                                                        <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </motion.div>
                                            )}

                                            {/* Step 2: Details */}
                                            {currentStep === 2 && (
                                                <motion.div
                                                    key="step-2"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className="space-y-5"
                                                >
                                                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                                        Inquiry Details
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mb-6">
                                                        Help us understand your situation so we can provide the
                                                        best assistance.
                                                    </p>
                                                    <div>
                                                        <label
                                                            htmlFor="subject"
                                                            className="block text-sm font-semibold text-foreground mb-2.5 tracking-wide"
                                                        >
                                                            Subject *
                                                        </label>
                                                        <select
                                                            id="subject"
                                                            required
                                                            value={formData.subject}
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    subject: e.target.value,
                                                                })
                                                            }
                                                            className="input-brand-focus w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                        >
                                                            <option value="">Select a subject</option>
                                                            <option value="course-info">
                                                                Course Information
                                                            </option>
                                                            <option value="registration">Registration</option>
                                                            <option value="international">
                                                                International Students
                                                            </option>
                                                            <option value="transcript">
                                                                Transcript Request
                                                            </option>
                                                            <option value="technical">Technical Support</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label
                                                            htmlFor="studentType"
                                                            className="block text-sm font-semibold text-foreground mb-2.5 tracking-wide"
                                                        >
                                                            Student Type
                                                        </label>
                                                        <select
                                                            id="studentType"
                                                            value={formData.studentType}
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    studentType: e.target.value,
                                                                })
                                                            }
                                                            className="input-brand-focus w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                                                        >
                                                            <option value="domestic">
                                                                Canadian Resident
                                                            </option>
                                                            <option value="international">
                                                                International Student
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="flex gap-4 pt-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => setCurrentStep(1)}
                                                            className="flex-1 bg-surface hover:bg-border text-primary py-3.5 rounded-xl font-bold transition-colors border border-border"
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => setCurrentStep(3)}
                                                            className="btn-brand-primary flex-1 bg-secondary hover:bg-secondary-600 text-white py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            Continue
                                                            <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}

                                            {/* Step 3: Message */}
                                            {currentStep === 3 && (
                                                <motion.div
                                                    key="step-3"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className="space-y-5"
                                                >
                                                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                                                        Your Message
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mb-6">
                                                        Tell us how we can help. The more detail you provide,
                                                        the better we can assist you.
                                                    </p>
                                                    <div>
                                                        <label
                                                            htmlFor="message"
                                                            className="block text-sm font-semibold text-foreground mb-2.5 tracking-wide"
                                                        >
                                                            Message *
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            required
                                                            rows={6}
                                                            maxLength={2000}
                                                            value={formData.message}
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    message: e.target.value,
                                                                })
                                                            }
                                                            className="input-brand-focus w-full px-4 py-3 rounded-xl border border-border bg-surface text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
                                                            placeholder="Describe your question or inquiry in detail..."
                                                        />
                                                        <div className="flex justify-between items-center mt-1.5">
                                                            <span className="text-xs text-muted-foreground">
                                                                Be as detailed as possible
                                                            </span>
                                                            <span className={`text-xs transition-colors ${
                                                                formData.message.length > 1500
                                                                    ? "text-secondary font-medium"
                                                                    : "text-muted-foreground"
                                                            }`}>
                                                                {formData.message.length} / 2,000
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {status === "error" && (
                                                        <div className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-xl border border-red-100">
                                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                                            <p className="text-sm">
                                                                Something went wrong. Please try again or email us
                                                                directly.
                                                            </p>
                                                        </div>
                                                    )}

                                                    <div className="flex gap-4 pt-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => setCurrentStep(2)}
                                                            className="flex-1 bg-surface hover:bg-border text-primary py-3.5 rounded-xl font-bold transition-colors border border-border"
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            disabled={status === "submitting"}
                                                            className="btn-brand-primary flex-1 bg-secondary hover:bg-secondary-600 disabled:opacity-60 text-white py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                                                        >
                                                            {status === "submitting" ? (
                                                                <>
                                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                    Sending...
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Send className="w-4 h-4" />
                                                                    Send Message
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Sidebar (1/3 width) */}
                        <div className="space-y-6">
                            {/* Response Times Card */}
                            <div className="bg-primary-900 text-white rounded-2xl p-8">
                                <h3 className="font-heading text-lg font-bold mb-6">
                                    Response Times
                                </h3>
                                <div className="space-y-5">
                                    {[
                                        {
                                            icon: Mail,
                                            label: "Email",
                                            time: "Within 24 hours",
                                        },
                                        {
                                            icon: Phone,
                                            label: "Phone",
                                            time: "Mon–Fri, 9 AM–5 PM EST",
                                        },
                                        {
                                            icon: MessageCircle,
                                            label: "Live Chat",
                                            time: "Available on portal",
                                        },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-secondary" />
                                            </div>
                                            <div>
                                                <span className="block text-white font-medium text-sm">
                                                    {item.label}
                                                </span>
                                                <span className="text-white/60 text-sm">
                                                    {item.time}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links Card */}
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <h3 className="font-heading text-lg font-bold text-primary mb-6">
                                    Quick Links
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Registration Guide", href: "/register", icon: FileText },
                                        { label: "OSSD Requirements", href: "/ossd-requirements", icon: Shield },
                                        { label: "FAQ", href: "/faq", icon: MessageCircle },
                                        { label: "Course Catalogue", href: "/courses", icon: Globe },
                                    ].map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface hover:border-l-3 hover:border-secondary transition-all group"
                                        >
                                            <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                                {link.label}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Office Info Card */}
                            <div className="bg-white rounded-2xl p-8 border border-border">
                                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                                    Office Hours
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-muted-foreground" />
                                        <span className="text-muted-foreground">
                                            Mon – Fri: 9:00 AM – 5:00 PM EST
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-muted-foreground" />
                                        <span className="text-muted-foreground">
                                            Toronto, Ontario, Canada
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-muted-foreground" />
                                        <a
                                            href="mailto:info@canadaeacademy.com"
                                            className="text-secondary hover:text-secondary-600 transition-colors"
                                        >
                                            info@canadaeacademy.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Guidance Counselor Booking ── */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary-50 rounded-2xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center border border-primary-100">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                                <Calendar className="w-4 h-4" />
                                Free Consultation
                            </div>
                            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-primary mb-4">
                                Need Personalized Guidance?
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Book a free 15-minute consultation with one of our guidance
                                counselors. We&apos;ll help you choose the right courses and
                                create a study plan tailored to your academic goals.
                            </p>
                            <ul className="space-y-2 mb-8">
                                {[
                                    "Course selection advice",
                                    "University pathway planning",
                                    "Credit transfer guidance",
                                    "International student support",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2 text-sm text-muted-foreground"
                                    >
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/register"
                                className="btn-brand-primary inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                            >
                                <Calendar className="w-5 h-5" />
                                Book a Free Session
                            </Link>
                        </div>
                        <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                                alt="Guidance counselor"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
