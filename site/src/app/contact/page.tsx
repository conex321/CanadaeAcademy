"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const { error } = await getSupabase().from("contact_submissions").insert([
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

    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Mail className="w-4 h-4 text-secondary" />
                        <span>We're Here to Help</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Contact
                        <span className="text-secondary"> Us</span>
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Have questions about courses, registration, or the OSSD? Reach out
                        and our team will get back to you within 24 hours.
                    </p>
                </div>
            </section>

            {/* ── Contact Methods ── */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Mail,
                                title: "Email",
                                value: "info@canadaeacademy.com",
                                description: "Best for detailed inquiries",
                                href: "mailto:info@canadaeacademy.com",
                            },
                            {
                                icon: Phone,
                                title: "Phone",
                                value: "+1 (800) 555-0199",
                                description: "Mon–Fri, 9AM–5PM EST",
                                href: "tel:+18005550199",
                            },
                            {
                                icon: MessageCircle,
                                title: "Live Chat",
                                value: "Chat with us",
                                description: "Available during business hours",
                                href: "#",
                            },
                        ].map((method) => (
                            <a
                                key={method.title}
                                href={method.href}
                                className="flex items-center gap-4 bg-surface rounded-xl p-6 border border-border hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <method.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">{method.title}</h3>
                                    <p className="text-sm font-medium text-foreground">
                                        {method.value}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {method.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Form + Sidebar ── */}
            <section className="bg-surface py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            {status === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 mb-6 flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <div>
                                        <strong>Message sent!</strong> We'll get back to you within
                                        24 hours.
                                    </div>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 mb-6 flex items-center gap-3">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <div>
                                        <strong>Something went wrong.</strong> Please try again or
                                        email us directly.
                                    </div>
                                </div>
                            )}

                            <form
                                onSubmit={handleSubmit}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
                            >
                                <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                                    Send Us a Message
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({ ...formData, subject: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Student Type
                                        </label>
                                        <select
                                            value={formData.studentType}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    studentType: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            <option value="domestic">Domestic Student</option>
                                            <option value="international">
                                                International Student
                                            </option>
                                            <option value="parent">Parent / Guardian</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        placeholder="Tell us more about your question..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-600 disabled:opacity-50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:-translate-y-0.5"
                                >
                                    {status === "submitting" ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                                <h3 className="font-heading text-lg font-bold text-primary mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-secondary" />
                                    Response Times
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        { label: "Email", time: "Within 24 hours" },
                                        { label: "Phone", time: "Same day (business hours)" },
                                        { label: "Live Chat", time: "Instant (when available)" },
                                    ].map((item) => (
                                        <li
                                            key={item.label}
                                            className="flex justify-between text-sm"
                                        >
                                            <span className="text-muted-foreground">
                                                {item.label}
                                            </span>
                                            <span className="font-medium text-primary">
                                                {item.time}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                                    Quick Links
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        { href: "/faq", label: "FAQ" },
                                        { href: "/courses", label: "Course Catalogue" },
                                        { href: "/register", label: "Registration" },
                                        { href: "/how-it-works", label: "How It Works" },
                                    ].map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-primary hover:text-secondary font-medium flex items-center gap-2 py-1"
                                            >
                                                <ArrowRight className="w-3 h-3" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                                <Shield className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                                    Ministry Inspected
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Ontario Ministry of Education inspected school. BSID #665804.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
