import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ontario Online High School — OSSD Courses | Canada e Academy",
  description:
    "Canada e Academy is an Ontario Ministry of Education inspected online high school (BSID #665804). Earn your OSSD with 170+ interactive animated courses, OCT-certified teachers, and flexible self-paced learning.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Ministry of Education Inspected — BSID #665804</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Ontario High School
              <span className="text-secondary"> Diploma, Anywhere</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Canada e Academy is an Ontario Ministry of Education inspected
              online high school. Earn your OSSD with interactive animated
              lessons, OCT-certified teachers, and flexible self-paced learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: BookOpen, value: "170+", label: "Courses Available" },
              { icon: Globe, value: "30+", label: "Countries Served" },
              { icon: Users, value: "OCT", label: "Certified Teachers" },
              { icon: GraduationCap, value: "OSSD", label: "Ontario Diploma" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <stat.icon className="w-8 h-8 text-secondary" />
                <span className="text-2xl md:text-3xl font-extrabold text-primary">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Why Choose Canada e Academy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with Ontario-certified education
              to deliver a truly world-class online high school experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Interactive Animated Lessons",
                description:
                  "Engaging multimedia lessons with narration, simulations, and interactive quizzes — not just PDFs.",
              },
              {
                icon: Shield,
                title: "Ministry Inspected",
                description:
                  "Ontario Ministry of Education inspected school (BSID #665804). Your credits are fully recognized.",
              },
              {
                icon: Users,
                title: "OCT-Certified Teachers",
                description:
                  "Every course is taught by Ontario College of Teachers certified educators with real classroom experience.",
              },
              {
                icon: Clock,
                title: "Flexible Self-Paced Learning",
                description:
                  "Study on your schedule — day or night. Every course is available 24/7 with no strict deadlines.",
              },
              {
                icon: Globe,
                title: "Study From Anywhere",
                description:
                  "Whether you're in Ontario, across Canada, or anywhere in the world — earn your Ontario diploma online.",
              },
              {
                icon: Award,
                title: "University Recognized",
                description:
                  "Our Ontario credits are accepted by universities across Canada, the US, and worldwide.",
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

      {/* ── How It Works ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps to begin your
              Ontario education journey.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Course",
                description:
                  "Browse our 170+ course catalogue and select the credits you need.",
              },
              {
                step: "02",
                title: "Register Online",
                description:
                  "Complete registration and payment — domestic $574, international $1,224.",
              },
              {
                step: "03",
                title: "Start Learning",
                description:
                  "Access interactive animated lessons 24/7. Study at your own pace.",
              },
              {
                step: "04",
                title: "Earn Your Credit",
                description:
                  "Complete assessments and earn Ontario high school credits toward your OSSD.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-5 font-extrabold text-xl shadow-md">
                  {item.step}
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
          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-600 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── University Recognition ── */}
      <section className="bg-primary py-20 md:py-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
            Recognized by Universities Worldwide
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
            Our Ontario credits are accepted by top universities across Canada,
            the United States, the UK, Australia, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              "University of Toronto",
              "UBC",
              "McGill",
              "Waterloo",
              "Western",
              "Queen's",
            ].map((uni) => (
              <div
                key={uni}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-white/90 font-medium border border-white/10"
              >
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions For Every Student ── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Solutions for Every Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a full-time student or looking to earn extra
              credits, we have a path for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Full Diploma Students",
                description:
                  "Earn your full Ontario Secondary School Diploma (OSSD) entirely online with our comprehensive course catalogue.",
                link: "/ossd-requirements",
                linkLabel: "OSSD Requirements",
              },
              {
                icon: Star,
                title: "Credit Recovery & Upgrades",
                description:
                  "Retake a course to improve your grade or earn missing credits to meet graduation or university requirements.",
                link: "/courses",
                linkLabel: "Browse Courses",
              },
              {
                icon: Globe,
                title: "International Students",
                description:
                  "Study from anywhere in the world and earn internationally recognized Ontario high school credits.",
                link: "/register",
                linkLabel: "Register Now",
              },
            ].map((path) => (
              <div
                key={path.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-5">
                  <path.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {path.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {path.description}
                </p>
                <Link
                  href={path.link}
                  className="inline-flex items-center gap-2 text-secondary font-bold hover:text-secondary-600 transition-colors"
                >
                  {path.linkLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-r from-secondary to-secondary-600 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join students from over 30 countries earning their Ontario Secondary
            School Diploma with Canada e Academy.
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
