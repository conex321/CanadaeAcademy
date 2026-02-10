import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Quote,
  Play,
} from "lucide-react";
import { BrandName } from "@/components/BrandName";

export const metadata: Metadata = {
  title: "Ontario Online High School — OSSD Courses | Canada e Academy",
  description:
    "Canada e Academy is an online private Ontario high school providing global access to high-quality education. Earn your OSSD with 75+ interactive animated courses, OCT-certified teachers, and flexible self-paced learning. BSID Pending.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section with Photography ── */}
      <section className="relative min-h-[600px] md:min-h-[700px] text-white overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
          alt="Students studying together"
          fill
          priority
          className="object-cover animate-ken-burns"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-800/70" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Online Private Ontario School — BSID Pending</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Ontario High School
              <span className="text-secondary"> Diploma, Anywhere</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Canada e Academy is an online private Ontario high school
              providing global access to high-quality education. Earn your OSSD
              with interactive animated lessons, OCT-certified teachers, and
              flexible self-paced learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="btn-brand-primary inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-0.5"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="btn-brand-outline inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
              >
                <Play className="w-5 h-5" />
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
              { icon: BookOpen, value: "75+", label: "Courses Available" },
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
              Why Choose <BrandName />?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with Ontario-certified education
              to deliver a truly world-class online high school experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] img-hover-zoom glow-on-hover">
              <Image
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80"
                alt="Student learning on laptop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Monitor,
                  title: "Interactive Animated Lessons",
                  description:
                    "Engaging multimedia lessons with narration, simulations, and interactive quizzes — not just PDFs.",
                },
                {
                  icon: Shield,
                  title: "Ontario Private School",
                  description:
                    "An online private Ontario school providing global access to high-quality high school education. BSID Pending.",
                },
                {
                  icon: Users,
                  title: "OCT-Certified Teachers",
                  description:
                    "Every course is taught by Ontario College of Teachers certified educators.",
                },
                {
                  icon: Clock,
                  title: "Flexible Self-Paced",
                  description:
                    "Study on your schedule — day or night. Every course is available 24/7 with no strict deadlines.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row features */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
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
                className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all flex items-start gap-5"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
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
                  "Browse our 75+ course catalogue and select the credits you need.",
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
              <div key={item.step} className="text-center group">
                <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mx-auto mb-5 font-extrabold text-xl shadow-md group-hover:scale-110 transition-transform">
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
      <section className="bg-primary py-20 md:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=60"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-white/90 font-medium border border-white/10 hover:bg-white/20 transition-colors"
              >
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voices of Success (Testimonials) ── */}
      <section className="bg-surface py-20 md:py-28">
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
                rating: 5,
              },
              {
                name: "James K.",
                context: "International Student, South Korea",
                quote:
                  "As an international student, studying for my OSSD credits online is the best decision I've made. The platform is very easy to navigate and the content is very high quality.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                rating: 5,
              },
              {
                name: "Priya D.",
                context: "Credit Upgrade, Toronto",
                quote:
                  "I'm upgrading my English mark for university applications. The feedback from my instructor is detailed and really helping me improve my writing style.",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all relative"
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
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        )
                      )}
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

      {/* ── Solutions For Every Student ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Solutions for Every Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re a full-time student or looking to earn extra
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
                image:
                  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
              },
              {
                icon: Star,
                title: "Credit Recovery & Upgrades",
                description:
                  "Retake a course to improve your grade or earn missing credits to meet graduation or university requirements.",
                link: "/courses",
                linkLabel: "Browse Courses",
                image:
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
              },
              {
                icon: Globe,
                title: "International Students",
                description:
                  "Study from anywhere in the world and earn internationally recognized Ontario high school credits.",
                link: "/register",
                linkLabel: "Register Now",
                image:
                  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
              },
            ].map((path) => (
              <div
                key={path.title}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden shimmer-on-hover">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center">
                    <path.icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
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
            Join students from over 30 countries earning their Ontario Secondary
            School Diploma with Canada e Academy.
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
