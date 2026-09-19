
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Menu,
  ShieldCheck,
  Sun,
  Wind,
  X,
  Zap,
} from "lucide-react";

type Solution = {
  id: string;
  number: string;
  tag: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: React.ElementType;
  features: string[];
  applications: string[];
};

const solutions: Solution[] = [
  {
    id: "solar",
    number: "01",
    tag: "CLEAN ENERGY",
    title: "Solar Power Solutions",
    shortDescription:
      "Reliable solar energy systems designed for homes, businesses, and large-scale applications.",
    description:
      "We design and deliver efficient solar power systems that help organizations reduce energy costs while moving toward a cleaner and more sustainable future.",
    image: "/about/large solar landscape.jpg",
    icon: Sun,
    features: [
      "Rooftop solar systems",
      "Ground-mounted solar plants",
      "Commercial & industrial solutions",
      "High-efficiency solar modules",
    ],
    applications: [
      "Residential",
      "Commercial",
      "Industrial",
      "Utility-scale",
    ],
  },
  {
    id: "wind",
    number: "02",
    tag: "RENEWABLE ENERGY",
    title: "Wind Energy",
    shortDescription:
      "Scalable wind energy solutions built for long-term renewable power generation.",
    description:
      "Our wind energy solutions combine modern technology, efficient planning, and dependable infrastructure to support large-scale renewable energy generation.",
    image: "/about/solar farm aerial.jpg",
    icon: Wind,
    features: [
      "Wind farm development",
      "Site assessment",
      "Project engineering",
      "Long-term energy generation",
    ],
    applications: [
      "Utility-scale",
      "Industrial",
      "Hybrid projects",
      "Large energy projects",
    ],
  },
  {
    id: "hybrid",
    number: "03",
    tag: "INTEGRATED ENERGY",
    title: "Hybrid Energy Systems",
    shortDescription:
      "Integrated renewable energy systems combining multiple clean-energy technologies.",
    description:
      "Hybrid systems combine renewable generation technologies to create a more flexible and dependable energy infrastructure for different operational requirements.",
    image: "/about/rooftop solar.jpg",
    icon: Leaf,
    features: [
      "Solar + wind integration",
      "Smart energy management",
      "Optimized energy generation",
      "Flexible system architecture",
    ],
    applications: [
      "Commercial",
      "Industrial",
      "Remote locations",
      "Large-scale projects",
    ],
  },
  {
    id: "storage",
    number: "04",
    tag: "ENERGY STORAGE",
    title: "Energy Storage",
    shortDescription:
      "Advanced battery storage solutions for reliable and flexible energy management.",
    description:
      "Energy storage helps businesses and communities store renewable energy and use it when demand requires, improving reliability and energy efficiency.",
    image: "/about/technicianinstallation.jpg",
    icon: BatteryCharging,
    features: [
      "Battery energy storage",
      "Peak-load management",
      "Backup power",
      "Renewable energy integration",
    ],
    applications: [
      "Commercial",
      "Industrial",
      "Microgrids",
      "Renewable projects",
    ],
  },
  {
    id: "epc",
    number: "05",
    tag: "PROJECT DELIVERY",
    title: "EPC Services",
    shortDescription:
      "End-to-end engineering, procurement, and construction for renewable energy projects.",
    description:
      "From project planning and engineering to procurement and construction, our EPC approach provides a coordinated path from concept to operational energy infrastructure.",
    image: "/about/rooftop + persontechnology.jpg",
    icon: Zap,
    features: [
      "Engineering & design",
      "Equipment procurement",
      "Project construction",
      "Testing & commissioning",
    ],
    applications: [
      "Solar projects",
      "Hybrid systems",
      "Industrial projects",
      "Large-scale infrastructure",
    ],
  },
  {
    id: "operations",
    number: "06",
    tag: "LIFECYCLE SUPPORT",
    title: "Operations & Maintenance",
    shortDescription:
      "Long-term monitoring, maintenance, and performance support for energy assets.",
    description:
      "Our operations and maintenance services help renewable energy assets remain reliable, efficient, and productive throughout their operational lifecycle.",
    image: "/about/technicianinstallation.jpg",
    icon: ShieldCheck,
    features: [
      "Preventive maintenance",
      "Performance monitoring",
      "Technical inspections",
      "Asset management",
    ],
    applications: [
      "Solar plants",
      "Wind projects",
      "Hybrid systems",
      "Commercial assets",
    ],
  },
];

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] =
    useState<Solution | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectSolution = (solution: Solution) => {
    setSelectedSolution(solution);

    setTimeout(() => {
      document
        .getElementById("solution-detail")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const handleBackToSolutions = () => {
    setSelectedSolution(null);

    setTimeout(() => {
      document
        .getElementById("solutions-list")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[#F7F8F2] text-[#16351F]">

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#0A572A]/10 bg-[#F7F8F2]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4C51F] text-[#024827]">
              <Sun className="h-5 w-5" />
            </div>

            <div>
              <div className="text-lg font-semibold tracking-tight text-[#024827]">
                Solar Nova
              </div>

              <div className="text-[10px] uppercase tracking-[0.28em] text-[#5E6F63]">
                Renewable Energy
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">

            <Link
              href="/"
              className="text-sm text-[#5E6F63] transition hover:text-[#0A572A]"
            >
              Home
            </Link>

            <Link
              href="/solutions"
              className="text-sm font-semibold text-[#0A572A]"
            >
              Solutions
            </Link>

            <div className="group relative">
              <Link
                href="/about"
                className="flex items-center gap-1 text-sm text-[#5E6F63] transition hover:text-[#0A572A]"
              >
                About
                <ChevronDown className="h-4 w-4" />
              </Link>

              <div className="invisible absolute left-0 top-full mt-4 w-52 translate-y-2 rounded-2xl border border-[#0A572A]/10 bg-[#EEF4E8] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

                <Link
                  href="/about"
                  className="block rounded-xl px-4 py-3 text-sm text-[#5E6F63] transition hover:bg-[#8EB568]/15 hover:text-[#0A572A]"
                >
                  About Us
                </Link>

                <Link
                  href="/about/board-of-directors"
                  className="block rounded-xl px-4 py-3 text-sm text-[#5E6F63] transition hover:bg-[#8EB568]/15 hover:text-[#0A572A]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="block rounded-xl px-4 py-3 text-sm text-[#5E6F63] transition hover:bg-[#8EB568]/15 hover:text-[#0A572A]"
                >
                  Awards
                </Link>

              </div>
            </div>

            <Link
              href="/blog"
              className="text-sm text-[#5E6F63] transition hover:text-[#0A572A]"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-[#F4C51F] px-5 py-2.5 text-sm font-semibold text-[#024827] transition hover:-translate-y-0.5 hover:bg-[#FDEC80]"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0A572A]/10 bg-[#EEF4E8] text-[#0A572A] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-[#0A572A]/10 bg-[#F7F8F2] px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-2">

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[#5E6F63] transition hover:bg-[#EEF4E8] hover:text-[#0A572A]"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl bg-[#EEF4E8] px-4 py-3 font-semibold text-[#0A572A]"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[#5E6F63] transition hover:bg-[#EEF4E8] hover:text-[#0A572A]"
              >
                About
              </Link>

              <Link
                href="/about/board-of-directors"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 pl-8 text-sm text-[#6E7D72] transition hover:bg-[#EEF4E8] hover:text-[#0A572A]"
              >
                Board of Directors
              </Link>

              <Link
                href="/about/awards"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 pl-8 text-sm text-[#6E7D72] transition hover:bg-[#EEF4E8] hover:text-[#0A572A]"
              >
                Awards
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[#5E6F63] transition hover:bg-[#EEF4E8] hover:text-[#0A572A]"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#F4C51F] px-4 py-3 text-center font-semibold text-[#024827]"
              >
                Contact
              </Link>

            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-20">

        <Image
          src="/about/large solar landscape.jpg"
          alt="Solar energy landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#024827]/10 via-[#024827]/35 to-[#F7F8F2]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">

          <div className="max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F4C51F]/50 bg-[#FDEC80]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#024827]">
              <Sun className="h-4 w-4" />
              Our Solutions
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-[#024827] sm:text-6xl lg:text-8xl">
              Energy solutions
              <span className="block text-[#0A572A]">
                for a cleaner future.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#304B39] sm:text-lg">
              From renewable generation to energy storage and lifecycle
              support, Solar Nova delivers integrated solutions designed for
              a more sustainable energy future.
            </p>

          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-y border-[#0A572A]/10 bg-[#EEF4E8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#024827] sm:text-4xl">
              Building energy infrastructure that lasts.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#304B39]">
              Solar Nova brings together renewable generation, engineering,
              storage, construction, and operations to create practical
              energy systems for a changing world.
            </p>

            <p className="mt-5 text-base leading-7 text-[#64756A]">
              Explore our core capabilities and discover how each solution can
              support residential, commercial, industrial, and large-scale
              energy requirements.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section
        id="solutions-list"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
              Our capabilities
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#024827] sm:text-5xl">
              Explore our solutions
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#64756A]">
            Select a solution to explore its capabilities, applications, and
            role in building a cleaner energy ecosystem.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.button
                key={solution.id}
                type="button"
                onClick={() => handleSelectSolution(solution)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-[2rem] border border-[#0A572A]/10 bg-[#EEF4E8] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#8EB568]/60 hover:shadow-xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#024827]/75 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#FDEC80]/50 bg-[#FDEC80] shadow-lg">
                    <Icon className="h-5 w-5 text-[#024827]" />
                  </div>

                  <div className="absolute right-5 top-5 text-xs font-semibold tracking-[0.2em] text-[#FDEC80]">
                    {solution.number}
                  </div>

                </div>

                <div className="p-7">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
                    {solution.tag}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-[#024827]">
                    {solution.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#64756A]">
                    {solution.shortDescription}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#0A572A]/10 pt-5">

                    <span className="text-sm font-medium text-[#3F5848]">
                      Explore solution
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDEC80] text-[#024827] transition group-hover:bg-[#F4C51F]">
                      <ArrowRight className="h-4 w-4" />
                    </span>

                  </div>

                </div>
              </motion.button>
            );
          })}

        </div>
      </section>

      {/* ================= DETAIL ================= */}
      {selectedSolution && (
        <section
          id="solution-detail"
          className="border-y border-[#0A572A]/10 bg-[#EEF4E8]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

            <button
              type="button"
              onClick={handleBackToSolutions}
              className="mb-10 flex items-center gap-2 text-sm text-[#64756A] transition hover:text-[#0A572A]"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to all solutions
            </button>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src={selectedSolution.image}
                  alt={selectedSolution.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#024827]/50 to-transparent" />
              </div>

              <div>

                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4C51F]">
                    {(() => {
                      const Icon = selectedSolution.icon;

                      return (
                        <Icon className="h-5 w-5 text-[#024827]" />
                      );
                    })()}
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
                    {selectedSolution.tag}
                  </span>

                </div>

                <h2 className="text-4xl font-semibold tracking-tight text-[#024827] sm:text-5xl">
                  {selectedSolution.title}
                </h2>

                <p className="mt-6 text-base leading-8 text-[#506458]">
                  {selectedSolution.description}
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">

                  {selectedSolution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-[#0A572A]/10 bg-[#F7F8F2] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0A572A]" />

                      <span className="text-sm text-[#4B6051]">
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                <div className="mt-10">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64756A]">
                    Applications
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {selectedSolution.applications.map((application) => (
                      <span
                        key={application}
                        className="rounded-full border border-[#8EB568]/40 bg-[#FDEC80]/45 px-4 py-2 text-xs font-medium text-[#245033]"
                      >
                        {application}
                      </span>
                    ))}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= APPROACH ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="rounded-[2.5rem] border border-[#8EB568]/30 bg-[#E8F0DF] p-8 sm:p-12 lg:p-16">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
                Our approach
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#024827] sm:text-5xl">
                Designed around your energy needs.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                [
                  "01",
                  "Understand",
                  "We begin by understanding your energy requirements, goals, and operating environment.",
                ],
                [
                  "02",
                  "Design",
                  "Our teams develop solutions that balance performance, reliability, and long-term value.",
                ],
                [
                  "03",
                  "Deliver",
                  "Engineering, procurement, and construction are coordinated for efficient project delivery.",
                ],
                [
                  "04",
                  "Support",
                  "We continue supporting assets through monitoring, maintenance, and lifecycle services.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-[#0A572A]/10 bg-[#F7F8F2] p-6 shadow-sm"
                >

                  <span className="text-xs font-semibold text-[#0A572A]">
                    {number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-[#024827]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#64756A]">
                    {text}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#FDEC80]">

          <div className="px-8 py-14 text-[#024827] sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0A572A]/70">
                Start a conversation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build a cleaner energy future.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#35543F]">
                Have a project in mind? Connect with our team to explore the
                right renewable energy solution for your needs.
              </p>

            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0A572A] px-6 py-3.5 text-sm font-semibold text-[#FDEC80] transition hover:-translate-y-0.5 hover:bg-[#024827] lg:mt-0"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#0A572A]/10 bg-[#E8F0DF]">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-1">

              <Link href="/" className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4C51F] text-[#024827]">
                  <Sun className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-lg font-semibold tracking-tight text-[#024827]">
                    Solar Nova
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#64756A]">
                    Renewable Energy
                  </div>
                </div>

              </Link>

              <p className="mt-6 max-w-xs text-sm leading-6 text-[#64756A]">
                Building cleaner, smarter, and more sustainable energy
                solutions for a better tomorrow.
              </p>

            </div>

            {/* Explore */}
            <div>

              <h3 className="text-sm font-semibold text-[#024827]">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3">

                <Link
                  href="/"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  About Us
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Contact
                </Link>

              </div>
            </div>

            {/* Company */}
            <div>

              <h3 className="text-sm font-semibold text-[#024827]">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-3">

                <Link
                  href="/about"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  About Solar Nova
                </Link>

                <Link
                  href="/about/board-of-directors"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Awards
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Insights & Blog
                </Link>

              </div>
            </div>

            {/* Solutions */}
            <div>

              <h3 className="text-sm font-semibold text-[#024827]">
                Solutions
              </h3>

              <div className="mt-5 flex flex-col gap-3">

                <Link
                  href="/solutions"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Solar Power
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Wind Energy
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Hybrid Energy
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  Energy Storage
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#64756A] transition hover:text-[#0A572A]"
                >
                  EPC Services
                </Link>

              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-[#0A572A]/10 pt-7 text-xs text-[#718176] sm:flex-row sm:items-center sm:justify-between">

            <p>
              © 2026 Solar Nova. All rights reserved.
            </p>

            <div className="flex gap-6">

              <Link
                href="/"
                className="transition hover:text-[#0A572A]"
              >
                Privacy
              </Link>

              <Link
                href="/"
                className="transition hover:text-[#0A572A]"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-[#0A572A]"
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
