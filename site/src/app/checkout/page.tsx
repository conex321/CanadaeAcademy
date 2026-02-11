"use client";

import { useState, FormEvent } from "react";
import { useCart, formatPrice } from "@/components/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingBag,
    ArrowRight,
    ArrowLeft,
    CreditCard,
    User,
    MapPin,
    Globe,
    Check,
    AlertCircle,
    Sparkles,
    BookOpen,
    Shield,
    Trash2,
} from "lucide-react";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    addressLine1: string;
    city: string;
    provinceState: string;
    postalCode: string;
    country: string;
    previousSchool: string;
    oen: string;
    currentGrade: string;
    parentName: string;
    parentEmail: string;
    parentPhone: string;
}

const initialFormData: RegistrationData = {
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    addressLine1: "",
    city: "",
    provinceState: "",
    postalCode: "",
    country: "Canada",
    previousSchool: "",
    oen: "",
    currentGrade: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
};

export default function CheckoutPage() {
    const {
        items,
        studentType,
        setStudentType,
        removeItem,
        total,
        itemCount,
    } = useCart();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<RegistrationData>(initialFormData);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const steps = [
        { num: 1, label: "Review Cart", icon: ShoppingBag },
        { num: 2, label: "Student Info", icon: User },
        { num: 3, label: "Payment", icon: CreditCard },
    ];

    const handleFieldChange = (field: keyof RegistrationData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        try {
            const supabase = getSupabase();

            // 1) Create student record
            const { data: student, error: studentError } = await supabase
                .from("students")
                .insert([{
                    student_type: studentType,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    date_of_birth: formData.dateOfBirth || null,
                    phone: formData.phone || null,
                    address_line1: formData.addressLine1 || null,
                    city: formData.city || null,
                    province_state: formData.provinceState || null,
                    postal_code: formData.postalCode || null,
                    country: formData.country,
                    previous_school: formData.previousSchool || null,
                    oen: formData.oen || null,
                    current_grade: formData.currentGrade || null,
                    parent_name: formData.parentName || null,
                    parent_email: formData.parentEmail || null,
                    parent_phone: formData.parentPhone || null,
                }])
                .select()
                .single();

            if (studentError) throw studentError;

            // 2) Create order
            const { data: order, error: orderError } = await supabase
                .from("orders")
                .insert([{
                    student_id: student.id,
                    student_type: studentType,
                    subtotal: total,
                    total: total,
                    status: "pending",
                }])
                .select()
                .single();

            if (orderError) throw orderError;

            // 3) Create order items
            const orderItems = items.map((item) => ({
                order_id: order.id,
                course_code: item.courseCode,
                course_name: item.courseName,
                unit_price:
                    studentType === "domestic"
                        ? item.priceDomestic
                        : item.priceInternational,
            }));

            const { error: itemsError } = await supabase
                .from("order_items")
                .insert(orderItems);

            if (itemsError) throw itemsError;

            setStatus("success");

            // TODO: Redirect to Stripe Checkout here
            // For now, show success state

        } catch (err) {
            console.error("Checkout error:", err);
            setErrorMsg(
                err instanceof Error ? err.message : "Something went wrong. Please try again."
            );
            setStatus("error");
        }
    };

    // Empty cart state
    if (items.length === 0 && status !== "success") {
        return (
            <section className="bg-surface min-h-screen py-20">
                <div className="max-w-lg mx-auto px-4 text-center">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-border">
                        <ShoppingBag className="w-12 h-12 text-muted-foreground/50" />
                    </div>
                    <h1 className="font-heading text-3xl font-extrabold text-primary mb-3">
                        Your Cart Is Empty
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Browse our course catalogue and add courses to get started.
                    </p>
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:-translate-y-0.5"
                    >
                        <BookOpen className="w-5 h-5" />
                        Browse Courses
                    </Link>
                </div>
            </section>
        );
    }

    // Success state
    if (status === "success") {
        return (
            <section className="bg-surface min-h-screen py-20">
                <div className="max-w-lg mx-auto px-4 text-center">
                    <div className="w-24 h-24 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-200">
                        <Check className="w-12 h-12 text-green-500" />
                    </div>
                    <h1 className="font-heading text-3xl font-extrabold text-primary mb-3">
                        Registration Submitted!
                    </h1>
                    <p className="text-muted-foreground mb-4">
                        Thank you for registering with Canada e Academy. We&apos;ve received your
                        course selections and student information.
                    </p>
                    <div className="bg-white rounded-xl p-6 border border-border mb-8 text-left">
                        <h3 className="font-bold text-primary mb-3">What Happens Next?</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                Our team will review your registration
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                You&apos;ll receive an email with payment instructions
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                Course access begins within 24 hours of payment confirmation
                            </li>
                        </ul>
                    </div>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:-translate-y-0.5"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white py-12 md:py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-2">
                        Register <span className="text-secondary">&amp; Checkout</span>
                    </h1>
                    <p className="text-white/80">
                        Complete your registration and secure your courses.
                    </p>
                </div>
            </section>

            <section className="bg-surface py-8 md:py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ── Step Progress ── */}
                    <div className="flex items-center justify-center gap-2 mb-10">
                        {steps.map((step, idx) => (
                            <div key={step.num} className="flex items-center">
                                <button
                                    onClick={() => {
                                        if (step.num < currentStep) setCurrentStep(step.num);
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${currentStep === step.num
                                            ? "bg-primary text-white shadow-md"
                                            : currentStep > step.num
                                                ? "bg-green-50 text-green-700 cursor-pointer hover:bg-green-100"
                                                : "bg-surface text-muted-foreground border border-border"
                                        }`}
                                >
                                    {currentStep > step.num ? (
                                        <Check className="w-4 h-4" />
                                    ) : (
                                        <step.icon className="w-4 h-4" />
                                    )}
                                    <span className="hidden sm:inline">{step.label}</span>
                                    <span className="sm:hidden">{step.num}</span>
                                </button>
                                {idx < steps.length - 1 && (
                                    <div
                                        className={`w-8 h-0.5 mx-1 ${currentStep > step.num ? "bg-green-300" : "bg-border"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {/* ── Step 1: Review Cart ── */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">
                                        <h2 className="font-heading text-xl font-bold text-primary mb-1">
                                            Review Your Courses
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            {itemCount} course{itemCount !== 1 ? "s" : ""} selected ·{" "}
                                            {studentType === "domestic" ? "Domestic" : "International"} pricing
                                        </p>

                                        {/* Student Type Toggle */}
                                        <div className="flex items-center gap-3 mb-6 p-4 bg-surface rounded-xl border border-border">
                                            <span className="text-sm font-medium text-primary">
                                                I am a:
                                            </span>
                                            <div className="flex items-center bg-white rounded-lg border border-border p-0.5">
                                                <button
                                                    type="button"
                                                    onClick={() => setStudentType("domestic")}
                                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold transition-all ${studentType === "domestic"
                                                            ? "bg-primary text-white shadow-sm"
                                                            : "text-muted-foreground hover:text-primary"
                                                        }`}
                                                >
                                                    <MapPin className="w-4 h-4" />
                                                    Domestic Student
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setStudentType("international")}
                                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold transition-all ${studentType === "international"
                                                            ? "bg-primary text-white shadow-sm"
                                                            : "text-muted-foreground hover:text-primary"
                                                        }`}
                                                >
                                                    <Globe className="w-4 h-4" />
                                                    International Student
                                                </button>
                                            </div>
                                        </div>

                                        {/* Items */}
                                        <div className="space-y-3 mb-6">
                                            {items.map((item) => {
                                                const price =
                                                    studentType === "domestic"
                                                        ? item.priceDomestic
                                                        : item.priceInternational;
                                                return (
                                                    <div
                                                        key={item.courseCode}
                                                        className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border"
                                                    >
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-0.5">
                                                                <span className="bg-primary-50 text-primary text-xs font-bold px-2 py-0.5 rounded-md">
                                                                    {item.courseCode}
                                                                </span>
                                                                <span className="text-xs text-muted-foreground">
                                                                    {item.grade}
                                                                </span>
                                                            </div>
                                                            <span className="font-semibold text-sm text-primary">
                                                                {item.courseName}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-bold text-secondary">
                                                                {formatPrice(price)}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeItem(item.courseCode)}
                                                                className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
                                                            >
                                                                <Trash2 className="w-4 h-4 text-red-500" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Total */}
                                        <div className="flex items-center justify-between p-4 bg-primary-50/50 rounded-xl mb-6">
                                            <span className="font-bold text-primary">Total</span>
                                            <span className="text-2xl font-extrabold text-primary">
                                                {formatPrice(total)}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            <Link
                                                href="/courses"
                                                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                                Add More Courses
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(2)}
                                                className="flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                                            >
                                                Continue
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* ── Step 2: Student Info ── */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">
                                        <h2 className="font-heading text-xl font-bold text-primary mb-1">
                                            Student Information
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            Please provide the student&apos;s details for registration.
                                        </p>

                                        {/* Student Details */}
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="font-semibold text-primary text-sm mb-3 flex items-center gap-2">
                                                    <User className="w-4 h-4" />
                                                    Personal Information
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            First Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.firstName}
                                                            onChange={(e) => handleFieldChange("firstName", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="Enter first name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Last Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            value={formData.lastName}
                                                            onChange={(e) => handleFieldChange("lastName", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="Enter last name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) => handleFieldChange("email", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="student@example.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Date of Birth
                                                        </label>
                                                        <input
                                                            type="date"
                                                            value={formData.dateOfBirth}
                                                            onChange={(e) => handleFieldChange("dateOfBirth", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            value={formData.phone}
                                                            onChange={(e) => handleFieldChange("phone", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="+1 (555) 000-0000"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Current Grade
                                                        </label>
                                                        <select
                                                            value={formData.currentGrade}
                                                            onChange={(e) => handleFieldChange("currentGrade", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                        >
                                                            <option value="">Select grade</option>
                                                            <option value="Grade 9">Grade 9</option>
                                                            <option value="Grade 10">Grade 10</option>
                                                            <option value="Grade 11">Grade 11</option>
                                                            <option value="Grade 12">Grade 12</option>
                                                            <option value="Graduate">Graduate</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-primary text-sm mb-3 flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    Address
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="md:col-span-2">
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.addressLine1}
                                                            onChange={(e) => handleFieldChange("addressLine1", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="Street address"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            City
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.city}
                                                            onChange={(e) => handleFieldChange("city", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="City"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Province/State
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.provinceState}
                                                            onChange={(e) => handleFieldChange("provinceState", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="Province or State"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Postal/Zip Code
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.postalCode}
                                                            onChange={(e) => handleFieldChange("postalCode", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="A1A 1A1"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Country
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.country}
                                                            onChange={(e) => handleFieldChange("country", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="Canada"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-primary text-sm mb-3 flex items-center gap-2">
                                                    <BookOpen className="w-4 h-4" />
                                                    Academic Information
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Previous School
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.previousSchool}
                                                            onChange={(e) => handleFieldChange("previousSchool", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="Name of previous school"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Ontario Education Number (OEN)
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.oen}
                                                            onChange={(e) => handleFieldChange("oen", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="9 digit number (if available)"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-primary text-sm mb-3 flex items-center gap-2">
                                                    <Shield className="w-4 h-4" />
                                                    Parent/Guardian
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Parent/Guardian Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={formData.parentName}
                                                            onChange={(e) => handleFieldChange("parentName", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="Full name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Parent/Guardian Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            value={formData.parentEmail}
                                                            onChange={(e) => handleFieldChange("parentEmail", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="parent@example.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                                                            Parent/Guardian Phone
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            value={formData.parentPhone}
                                                            onChange={(e) => handleFieldChange("parentPhone", e.target.value)}
                                                            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                            placeholder="+1 (555) 000-0000"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-4 mt-8">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(1)}
                                                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                                Back to Cart
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (!formData.firstName || !formData.lastName || !formData.email) {
                                                        setErrorMsg("Please fill in required fields (First Name, Last Name, Email).");
                                                        setStatus("error");
                                                        return;
                                                    }
                                                    setStatus("idle");
                                                    setErrorMsg("");
                                                    setCurrentStep(3);
                                                }}
                                                className="flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5"
                                            >
                                                Continue to Payment
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {status === "error" && errorMsg && (
                                            <div className="mt-4 flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                {errorMsg}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* ── Step 3: Payment ── */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">
                                        <h2 className="font-heading text-xl font-bold text-primary mb-1">
                                            Payment
                                        </h2>
                                        <p className="text-sm text-muted-foreground mb-6">
                                            Review your order and proceed to payment.
                                        </p>

                                        {/* Order Summary */}
                                        <div className="bg-surface rounded-xl p-6 border border-border mb-6">
                                            <h3 className="font-bold text-primary text-sm mb-4">Order Summary</h3>
                                            <div className="space-y-2 mb-4">
                                                {items.map((item) => (
                                                    <div key={item.courseCode} className="flex justify-between text-sm">
                                                        <span className="text-muted-foreground">
                                                            {item.courseCode} — {item.courseName}
                                                        </span>
                                                        <span className="font-semibold text-primary">
                                                            {formatPrice(
                                                                studentType === "domestic"
                                                                    ? item.priceDomestic
                                                                    : item.priceInternational
                                                            )}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="border-t border-border pt-3 flex justify-between">
                                                <span className="font-bold text-primary">Total</span>
                                                <span className="text-2xl font-extrabold text-secondary">
                                                    {formatPrice(total)}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Student Summary */}
                                        <div className="bg-surface rounded-xl p-6 border border-border mb-6">
                                            <h3 className="font-bold text-primary text-sm mb-2">Student</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {formData.firstName} {formData.lastName} · {formData.email}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {studentType === "domestic" ? "Domestic" : "International"} student
                                                {formData.currentGrade && ` · ${formData.currentGrade}`}
                                            </p>
                                        </div>

                                        {/* Stripe Placeholder */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6 text-center">
                                            <CreditCard className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                                            <h3 className="font-bold text-blue-800 mb-1">
                                                Secure Payment via Stripe
                                            </h3>
                                            <p className="text-sm text-blue-600">
                                                Clicking &ldquo;Complete Registration&rdquo; will save your information.
                                                Stripe payment processing will be activated soon.
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(2)}
                                                className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={status === "submitting"}
                                                className="flex items-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {status === "submitting" ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Sparkles className="w-4 h-4" />
                                                        Complete Registration
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        {status === "error" && errorMsg && (
                                            <div className="mt-4 flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                {errorMsg}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </section>
        </>
    );
}
