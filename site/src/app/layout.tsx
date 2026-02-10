import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Canada e Academy | Ontario Online High School — OSSD Courses",
    template: "%s | Canada e Academy",
  },
  description:
    "Canada e Academy is an online private Ontario high school providing global access to high-quality education. Earn your OSSD diploma with 75+ courses, OCT-certified teachers, and interactive animated lessons. BSID Pending.",
  keywords: [
    "OSSD",
    "Ontario online high school",
    "online high school Canada",
    "Ontario Secondary School Diploma",
    "Canada e Academy",
    "online courses Ontario",
    "international students Canada",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Canada e Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
