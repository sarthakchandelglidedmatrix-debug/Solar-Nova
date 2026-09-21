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
    <main className="min-h-screen overflow-hidden bg-[#FBFAF5] text-[#3F4541]">
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="solar-background absolute inset-0 opacity-30" />
        <div className="solar-grid absolute inset-0 opacity-[0.035]" />

        <div className="absolute left-[-15%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#F6C85F]/20 blur-[120px]" />

        <div className="absolute right-[-15%] top-[45%] h-[400px] w-[400px] rounded-full bg-[#4F8A70]/15 blur-[120px]" />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
          menuOpen
            ? "border-[#E4DED0] bg-[#FBFAF5]/95"
            : "border-[#E4DED0]/80 bg-[#FBFAF5]/85"
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
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6A21A]/35 bg-[#F6C85F]/20">
                <Sun className="h-4 w-4 text-[#E6A21A]" />
              </div>

              <div>
                <div className="text-base font-bold tracking-wide text-[#3F4541]">
                  Solar<span className="text-[#E6A21A]">Nova</span>
                </div>

                <div className="text-[8px] uppercase tracking-[0.22em] text-[#8B908A]">
                  Clean Energy
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-7 md:flex">
              {/* Home */}
              <Link
                href="/"
                className="text-sm text-[#6F756F] transition hover:text-[#3F4541]"
              >
                Home
              </Link>

              {/* Solutions */}
              <Link
                href="/solutions"
                className="text-sm text-[#6F756F] transition hover:text-[#3F4541]"
              >
                Solutions
              </Link>

              {/* About Dropdown */}
              <div className="group relative py-6">
                <Link
                  href="/about"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#3F4541]"
                >
                  About

                  <span className="text-[9px] text-[#E6A21A] transition-transform duration-200 group-hover:rotate-180">
                    ▼
                  </span>
                </Link>

                {/* About Dropdown */}
                <div className="pointer-events-none invisible absolute left-1/2 top-[62px] w-[245px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-[#E4DED0] bg-[#FBFAF5]/95 p-2 shadow-xl shadow-[#4F8A70]/10 backdrop-blur-xl">
                    {/* About Us */}
                    <Link
                      href="/about"
                      className="block rounded-xl bg-[#F3EBD8] px-4 py-3 transition hover:bg-[#EDE2C8]"
                    >
                      <div className="flex items-center gap-3">
                        <Leaf className="h-4 w-4 text-[#4F8A70]" />

                        <div>
                          <div className="text-sm font-medium text-[#3F4541]">
                            About Us
                          </div>

                          <div className="mt-0.5 text-[11px] text-[#8B908A]">
                            About SolarNova
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Board */}
                    <Link
                      href="/about/board-of-directors"
                      className="block rounded-xl px-4 py-3 transition hover:bg-[#F3EBD8]"
                    >
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-[#4F8A70]" />

                        <div>
                          <div className="text-sm font-medium text-[#3F4541]">
                            Board of Directors
                          </div>

                          <div className="mt-0.5 text-[11px] text-[#8B908A]">
                            Our leadership
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Awards */}
                    <Link
                      href="/about/awards"
                      className="block rounded-xl px-4 py-3 transition hover:bg-[#F3EBD8]"
                    >
                      <div className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-[#E6A21A]" />

                        <div>
                          <div className="text-sm font-medium text-[#3F4541]">
                            Awards & Certification
                          </div>

                          <div className="mt-0.5 text-[11px] text-[#8B908A]">
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
                className="text-sm text-[#6F756F] transition hover:text-[#3F4541]"
              >
                Blog
              </Link>

              {/* Get Started */}
              <Link
                href="/contact"
                className="rounded-full border border-[#E6A21A] bg-[#E6A21A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#E6A21A]/20 transition-all duration-300 hover:bg-[#D49312] hover:shadow-[#E6A21A]/30"
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
                  ? "border-[#E6A21A]/40 bg-[#F3EBD8] text-[#3F4541]"
                  : "border-[#E4DED0] bg-white text-[#3F4541]"
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
              className="border-t border-[#E4DED0] py-3 md:hidden"
            >
              <div className="flex flex-col gap-1.5">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Home
                </Link>

                {/* Solutions */}
                <Link
                  href="/solutions"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Solutions
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-[#F3EBD8] px-4 py-3 text-sm font-medium text-[#3F4541]"
                >
                  About Us
                </Link>

                {/* Board */}
                <Link
                  href="/about/board-of-directors"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-sm text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Board of Directors
                </Link>

                {/* Awards */}
                <Link
                  href="/about/awards"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-sm text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Awards & Certification
                </Link>

                {/* Blog */}
                <Link
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Blog
                </Link>

                {/* Get Started */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-xl bg-[#E6A21A] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#D49312]"
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

          {/* Soft Solar Overlay */}
          <div className="absolute inset-0 bg-[#FBFAF5]/30" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FBFAF5]/80 via-[#FBFAF5]/40 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FBFAF5]/70 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FBFAF5] via-[#FBFAF5]/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E6A21A]/30 bg-[#FBFAF5]/75 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#4F8A70] shadow-sm backdrop-blur-md">
              <Leaf className="h-3 w-3" />
              About SolarNova
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-[#3F4541] sm:text-5xl lg:text-6xl">
              Powering a{" "}
              <span className="text-[#E6A21A]">cleaner tomorrow.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#4F514D] sm:text-lg">
              SolarNova creates practical solar solutions for homes,
              businesses and large-scale energy projects, combining clean
              energy with modern technology.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#E4DED0] bg-[#FBFAF5]/75 shadow-lg shadow-[#4F8A70]/10 backdrop-blur-lg md:grid-cols-4">
            {[
              "Clean Energy",
              "Smart Systems",
              "Reliable Solutions",
              "Future Ready",
            ].map((item, index) => (
              <div
                key={item}
                className="border-b border-[#E4DED0] px-5 py-5 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="text-[10px] tracking-[0.18em] text-[#E6A21A]">
                  0{index + 1}
                </div>

                <div className="mt-2 text-sm font-medium text-[#3F4541]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLAR SOLUTIONS ================= */}
      <section className="bg-[#FBFAF5] px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#4F8A70]">
              What We Do
            </div>

            <h2 className="text-3xl font-semibold text-[#3F4541] sm:text-4xl">
              Solar solutions built for{" "}
              <span className="text-[#4F8A70]">real needs.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#6F756F]">
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
                <div className="group relative h-[280px] overflow-hidden rounded-3xl border border-[#E4DED0] bg-[#F3EBD8] shadow-sm shadow-[#4F8A70]/10 sm:h-[340px]">
                  <Image
                    src={section.image}
                    alt={section.label}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F4541]/35 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-[#FBFAF5]/80 px-3 py-1.5 text-[10px] text-[#3F4541] shadow-sm backdrop-blur-md">
                    {section.number} / SolarNova
                  </div>
                </div>

                <div className="max-w-xl">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-xs tracking-[0.18em] text-[#E6A21A]">
                      {section.number}
                    </span>

                    <span className="h-px w-8 bg-[#E6A21A]/40" />

                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#8B908A]">
                      {section.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight text-[#3F4541] sm:text-3xl">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#6F756F]">
                    {section.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-[#4F8A70]">
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
      <section className="border-y border-[#E4DED0] bg-[#F3EBD8] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#4F8A70]">
              Our Values
            </div>

            <h2 className="text-3xl font-semibold text-[#3F4541] sm:text-4xl">
              What guides{" "}
              <span className="text-[#4F8A70]">our work.</span>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[#E4DED0] bg-[#FBFAF5] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E6A21A]/40 hover:shadow-md hover:shadow-[#E6A21A]/10"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7F0EB] text-[#4F8A70]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="text-sm font-semibold text-[#3F4541]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#6F756F]">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP & AWARDS ================= */}
      <section className="bg-[#FBFAF5] px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#4F8A70]">
              SolarNova
            </div>

            <h2 className="text-3xl font-semibold text-[#3F4541] sm:text-4xl">
              People & <span className="text-[#E6A21A]">progress.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/about/board-of-directors"
              className="group rounded-2xl border border-[#E4DED0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8A70]/40 hover:bg-[#F8FAF7] hover:shadow-md hover:shadow-[#4F8A70]/10"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E7F0EB] text-[#4F8A70]">
                <Users className="h-4 w-4" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#8B908A]">
                    Leadership
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-[#3F4541]">
                    Board of Directors
                  </h3>
                </div>

                <ArrowRight className="h-5 w-5 text-[#4F8A70] transition group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/about/awards"
              className="group rounded-2xl border border-[#E4DED0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E6A21A]/40 hover:bg-[#FFFDF7] hover:shadow-md hover:shadow-[#E6A21A]/10"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6C85F]/20 text-[#E6A21A]">
                <Award className="h-4 w-4" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#8B908A]">
                    Recognition
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-[#3F4541]">
                    Awards & Certification
                  </h3>
                </div>

                <ArrowRight className="h-5 w-5 text-[#E6A21A] transition group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#FBFAF5] px-6 pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#E4DED0] bg-[#F3EBD8] px-6 py-12 text-center shadow-sm sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C85F]/30 blur-3xl" />

            <Sun className="relative mx-auto mb-4 h-7 w-7 text-[#E6A21A]" />

            <h2 className="relative text-3xl font-semibold text-[#3F4541] sm:text-4xl">
              Ready for a cleaner energy future?
            </h2>

            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6F756F]">
              Let&apos;s explore the right solar solution for your energy
              needs.
            </p>

            <Link
              href="/contact"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-[#E6A21A] bg-[#E6A21A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E6A21A]/20 transition-all duration-300 hover:bg-[#D49312] hover:shadow-[#E6A21A]/30"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E4DED0] bg-[#FBFAF5] px-6 py-10 text-[#3F4541] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6A21A]/35 bg-[#F6C85F]/20">
                  <Sun className="h-4 w-4 text-[#E6A21A]" />
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#3F4541]">
                    Solar<span className="text-[#E6A21A]">Nova</span>
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.2em] text-[#8B908A]">
                    Clean Energy
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-xs text-xs leading-6 text-[#6F756F]">
                Practical solar solutions for homes, businesses and
                large-scale energy projects.
              </p>
            </div>

            {/* Explore */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#4F8A70]">
                Explore
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <Link
                  href="/"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#4F8A70]">
                Company
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="text-xs text-[#6F756F] transition hover:text-[#4F8A70]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-[#6F756F] transition hover:text-[#4F8A70]"
                >
                  About SolarNova
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#E4DED0] pt-6 md:flex-row md:items-center">
            <div className="text-[11px] text-[#8B908A]">
              © {new Date().getFullYear()} SolarNova. Clean energy for a
              brighter tomorrow.
            </div>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/"
                className="text-[11px] text-[#8B908A] transition hover:text-[#E6A21A]"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                className="text-[11px] text-[#8B908A] transition hover:text-[#E6A21A]"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                className="text-[11px] text-[#8B908A] transition hover:text-[#E6A21A]"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-[11px] text-[#8B908A] transition hover:text-[#E6A21A]"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-[11px] text-[#8B908A] transition hover:text-[#E6A21A]"
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