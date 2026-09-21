"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Leaf,
  Menu,
  ShieldCheck,
  Sun,
  Users,
  X,
  Zap,
} from "lucide-react";

const sections = [
  {
    number: "01",
    label: "Solar Rooftop",
    title: "Turning rooftops into clean energy.",
    description:
      "We help homes and businesses use their rooftop space to generate clean, reliable solar power while reducing dependence on conventional energy.",
    image: "/about/rooftop solar.jpg",
  },
  {
    number: "02",
    label: "Solar Installation",
    title: "Professional installation, built to last.",
    description:
      "Our installation process focuses on precision, safety and dependable performance, from system setup to final commissioning.",
    image: "/about/technicianinstallation.jpg",
  },
  {
    number: "03",
    label: "Solar Landscape",
    title: "Expanding solar beyond rooftops.",
    description:
      "Large-scale solar solutions help meet growing energy requirements while supporting a cleaner and more sustainable energy landscape.",
    image: "/about/large solar landscape.jpg",
  },
  {
    number: "04",
    label: "Solar Farm",
    title: "Powering a larger clean-energy future.",
    description:
      "Solar farms allow clean energy to be generated at scale, creating efficient infrastructure for long-term energy needs.",
    image: "/about/solar farm aerial.jpg",
  },
  {
    number: "05",
    label: "Smart Solar",
    title: "Technology that makes solar smarter.",
    description:
      "Modern solar technology makes it easier to monitor, manage and optimise energy systems for better everyday performance.",
    image: "/about/rooftop + persontechnology.jpg",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainable",
    text: "Clean energy designed for a better future.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    text: "Quality systems focused on long-term performance.",
  },
  {
    icon: Zap,
    title: "Smart",
    text: "Technology that makes energy simpler and efficient.",
  },
  {
    icon: Users,
    title: "People First",
    text: "Solutions designed around real customer needs.",
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-neutral-900">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="solar-background absolute inset-0 opacity-30" />
        <div className="solar-grid absolute inset-0 opacity-[0.04]" />

        <div className="absolute left-[-15%] top-[10%] h-[400px] w-[400px] rounded-full bg-neutral-200/50 blur-[120px]" />

        <div className="absolute right-[-15%] top-[45%] h-[400px] w-[400px] rounded-full bg-neutral-300/40 blur-[120px]" />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
          menuOpen
            ? "border-neutral-200 bg-white/95"
            : "border-neutral-200/80 bg-white/85"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100">
                <Sun className="h-4 w-4 text-neutral-800" />
              </div>

              <div>
                <div className="text-base font-bold tracking-wide">
                  Solar<span className="text-neutral-500">Nova</span>
                </div>

                <div className="text-[8px] uppercase tracking-[0.22em] text-neutral-400">
                  Clean Energy
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">
              {/* Home */}
              <Link
                href="/"
                className="text-sm text-neutral-500 transition hover:text-neutral-900"
              >
                Home
              </Link>

              {/* Solutions */}
              <Link
                href="/solutions"
                className="text-sm text-neutral-500 transition hover:text-neutral-900"
              >
                Solutions
              </Link>

              {/* About Dropdown */}
              <div className="group relative py-6">
                <Link
                  href="/about"
                  className="flex items-center gap-1.5 text-sm font-medium text-neutral-900"
                >
                  About

                  <span className="text-[9px] transition-transform duration-200 group-hover:rotate-180">
                    ▼
                  </span>
                </Link>

                {/* About Dropdown - 3 OPTIONS */}
                <div className="pointer-events-none invisible absolute left-1/2 top-[62px] w-[245px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-neutral-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl">
                    {/* About Us */}
                    <Link
                      href="/about"
                      className="block rounded-xl bg-neutral-100 px-4 py-3 transition hover:bg-neutral-200"
                    >
                      <div className="flex items-center gap-3">
                        <Leaf className="h-4 w-4 text-neutral-700" />

                        <div>
                          <div className="text-sm font-medium text-neutral-900">
                            About Us
                          </div>

                          <div className="mt-0.5 text-[11px] text-neutral-400">
                            About SolarNova
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Board */}
                    <Link
                      href="/about/board-of-directors"
                      className="block rounded-xl px-4 py-3 transition hover:bg-neutral-100"
                    >
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-neutral-700" />

                        <div>
                          <div className="text-sm font-medium text-neutral-900">
                            Board of Directors
                          </div>

                          <div className="mt-0.5 text-[11px] text-neutral-400">
                            Our leadership
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Awards */}
                    <Link
                      href="/about/awards"
                      className="block rounded-xl px-4 py-3 transition hover:bg-neutral-100"
                    >
                      <div className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-neutral-700" />

                        <div>
                          <div className="text-sm font-medium text-neutral-900">
                            Awards & Certification
                          </div>

                          <div className="mt-0.5 text-[11px] text-neutral-400">
                            Recognition
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog */}
              <Link
                href="/blog"
                className="text-sm text-neutral-500 transition hover:text-neutral-900"
              >
                Blog
              </Link>

              {/* Get Started */}
              <Link
                href="/contact"
                className="rounded-full border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-neutral-300/30 transition-all duration-300 hover:bg-neutral-700"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
                menuOpen
                  ? "border-neutral-300 bg-neutral-100 text-neutral-900"
                  : "border-neutral-200 bg-neutral-100 text-neutral-800"
              }`}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-neutral-200 py-3 md:hidden"
            >
              <div className="flex flex-col gap-1.5">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  Home
                </Link>

                {/* Solutions */}
                <Link
                  href="/solutions"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  Solutions
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-neutral-100 px-4 py-3 text-sm font-medium text-neutral-900"
                >
                  About Us
                </Link>

                {/* Board */}
                <Link
                  href="/about/board-of-directors"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-sm text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  Board of Directors
                </Link>

                {/* Awards */}
                <Link
                  href="/about/awards"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-sm text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  Awards & Certification
                </Link>

                {/* Blog */}
                <Link
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                  Blog
                </Link>

                {/* Get Started */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-xl bg-neutral-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-700"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* ================= HERO WITH SOLAR VIDEO ================= */}
      <section className="relative min-h-[650px] overflow-hidden px-6 pb-16 pt-32 lg:min-h-[700px] lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/Vidoes/solar-bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/35" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
              <Leaf className="h-3 w-3" />
              About SolarNova
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Powering a{" "}
              <span className="text-white">cleaner tomorrow.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              SolarNova creates practical solar solutions for homes,
              businesses and large-scale energy projects, combining clean
              energy with modern technology.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-lg md:grid-cols-4">
            {[
              "Clean Energy",
              "Smart Systems",
              "Reliable Solutions",
              "Future Ready",
            ].map((item, index) => (
              <div
                key={item}
                className="border-b border-white/10 px-5 py-5 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="text-[10px] tracking-[0.18em] text-white/60">
                  0{index + 1}
                </div>

                <div className="mt-2 text-sm font-medium text-white/90">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLAR SOLUTIONS ================= */}
      <section className="bg-white px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              What We Do
            </div>

            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Solar solutions built for{" "}
              <span className="text-neutral-500">real needs.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-500">
              From residential rooftops to large solar farms, our solutions
              focus on clean energy, reliable performance and smart
              technology.
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                <div className="group relative h-[280px] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 sm:h-[340px]">
                  <Image
                    src={section.image}
                    alt={section.label}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] text-white/75 backdrop-blur-md">
                    {section.number} / SolarNova
                  </div>
                </div>

                <div className="max-w-xl">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs tracking-[0.18em] text-neutral-500">
                      {section.number}
                    </span>

                    <span className="h-px w-8 bg-neutral-300" />

                    <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                      {section.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {section.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-neutral-600">
                    <CheckCircle2 className="h-4 w-4" />
                    Designed for long-term performance
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Our Values
            </div>

            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              What guides{" "}
              <span className="text-neutral-500">our work.</span>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="text-sm font-semibold text-neutral-900">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-neutral-500">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP & AWARDS ================= */}
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              SolarNova
            </div>

            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              People & <span className="text-neutral-500">progress.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/about/board-of-directors"
              className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-400 hover:bg-neutral-100"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                <Users className="h-4 w-4" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    Leadership
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                    Board of Directors
                  </h3>
                </div>

                <ArrowRight className="h-5 w-5 text-neutral-700 transition group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/about/awards"
              className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:border-neutral-400 hover:bg-neutral-100"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                <Award className="h-4 w-4" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                    Recognition
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                    Awards & Certification
                  </h3>
                </div>

                <ArrowRight className="h-5 w-5 text-neutral-700 transition group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white px-6 pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-100 px-6 py-12 text-center sm:px-10">
            <Sun className="mx-auto mb-4 h-7 w-7 text-neutral-700" />

            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Ready for a cleaner energy future?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500">
              Let&apos;s explore the right solar solution for your energy
              needs.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-300/30 transition-all duration-300 hover:bg-neutral-700"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-neutral-200 bg-neutral-950 px-6 py-10 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800">
                  <Sun className="h-4 w-4 text-white" />
                </div>

                <div>
                  <div className="text-sm font-semibold">
                    Solar<span className="text-neutral-400">Nova</span>
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    Clean Energy
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-xs text-xs leading-6 text-white/35">
                Practical solar solutions for homes, businesses and
                large-scale energy projects.
              </p>
            </div>

            {/* Explore */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Explore
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <Link
                  href="/"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Company
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-white/50 transition hover:text-white"
                >
                  About SolarNova
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
            <div className="text-[11px] text-white/25">
              © {new Date().getFullYear()} SolarNova. Clean energy for a
              brighter tomorrow.
            </div>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/"
                className="text-[11px] text-white/30 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                className="text-[11px] text-white/30 transition hover:text-white"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                className="text-[11px] text-white/30 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-[11px] text-white/30 transition hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-[11px] text-white/30 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}