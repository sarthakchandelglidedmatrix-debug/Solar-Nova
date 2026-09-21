
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
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleBackToSolutions = () => {
    setSelectedSolution(null);

    setTimeout(() => {
      document
        .getElementById("solutions-list")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBFAF5] text-[#3F4541]">
      {/* Ambient Solar Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#F6C85F]/20 blur-3xl" />
        <div className="absolute -right-40 top-[35%] h-[28rem] w-[28rem] rounded-full bg-[#4F8A70]/10 blur-3xl" />
        <div className="absolute left-[40%] bottom-0 h-80 w-80 rounded-full bg-[#E6A21A]/10 blur-3xl" />
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#E4DED0] bg-[#FBFAF5]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6A21A] shadow-lg shadow-[#E6A21A]/20">
              <Sun className="h-5 w-5 text-white" />
            </div>

            <div>
              <div className="text-lg font-semibold tracking-tight text-[#3F4541]">
                Solar Nova
              </div>

              <div className="text-[10px] uppercase tracking-[0.28em] text-[#6F756F]">
                Renewable Energy
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
            >
              Home
            </Link>

            <Link
              href="/solutions"
              className="text-sm font-semibold text-[#E6A21A]"
            >
              Solutions
            </Link>

            <div className="group relative">
              <Link
                href="/about"
                className="flex items-center gap-1 text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
              >
                About
                <ChevronDown className="h-4 w-4" />
              </Link>

              <div className="invisible absolute left-0 top-full mt-4 w-52 translate-y-2 rounded-2xl border border-[#E4DED0] bg-white p-2 opacity-0 shadow-xl shadow-[#4F8A70]/10 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <Link
                  href="/about"
                  className="block rounded-xl px-4 py-3 text-sm text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
                >
                  About Us
                </Link>

                <Link
                  href="/about/board-of-directors"
                  className="block rounded-xl px-4 py-3 text-sm text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="block rounded-xl px-4 py-3 text-sm text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
                >
                  Awards
                </Link>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-[#E6A21A] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#E6A21A]/20 transition hover:-translate-y-0.5 hover:bg-[#D8920E]"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4DED0] bg-white text-[#3F4541] shadow-sm lg:hidden"
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
          <div className="border-t border-[#E4DED0] bg-[#FBFAF5] px-6 py-5 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl bg-[#E7F0EB] px-4 py-3 font-semibold text-[#4F8A70]"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
              >
                About
              </Link>

              <Link
                href="/about/board-of-directors"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 pl-8 text-sm text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
              >
                Board of Directors
              </Link>

              <Link
                href="/about/awards"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 pl-8 text-sm text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
              >
                Awards
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-[#6F756F] transition hover:bg-[#E7F0EB] hover:text-[#3F4541]"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-xl bg-[#E6A21A] px-4 py-3 text-center font-semibold text-white"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#F3EBD8] pt-20">
        <Image
          src="/about/large solar landscape.jpg"
          alt="Solar energy landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF5]/30 via-[#FBFAF5]/45 to-[#FBFAF5]/95" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F3EBD8]/65 via-transparent to-[#4F8A70]/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E6A21A]/30 bg-white/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#4F8A70] shadow-sm backdrop-blur-md">
              <Sun className="h-4 w-4 text-[#E6A21A]" />
              Our Solutions
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-[#3F4541] sm:text-6xl lg:text-8xl">
              Energy solutions
              <span className="block text-[#4F8A70]">
                for a cleaner future.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5F665F] sm:text-lg">
              From renewable generation to energy storage and lifecycle
              support, Solar Nova delivers integrated solutions designed for
              a more sustainable energy future.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="border-y border-[#E4DED0] bg-[#F3EBD8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4F8A70]">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#3F4541] sm:text-4xl">
              Building energy infrastructure that lasts.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#5F665F]">
              Solar Nova brings together renewable generation, engineering,
              storage, construction, and operations to create practical energy
              systems for a changing world.
            </p>

            <p className="mt-5 text-base leading-7 text-[#6F756F]">
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4F8A70]">
              Our capabilities
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3F4541] sm:text-5xl">
              Explore our solutions
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#6F756F]">
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
                className="group overflow-hidden rounded-[2rem] border border-[#E4DED0] bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#E6A21A]/50 hover:shadow-xl hover:shadow-[#4F8A70]/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#4F8A70] shadow-md backdrop-blur-md">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[#4F8A70] shadow-sm backdrop-blur-md">
                    {solution.number}
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#4F8A70]">
                    {solution.tag}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-[#3F4541]">
                    {solution.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#6F756F]">
                    {solution.shortDescription}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-[#E4DED0] pt-5">
                    <span className="text-sm font-medium text-[#4F8A70]">
                      Explore solution
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EBD8] text-[#4F8A70] transition group-hover:bg-[#E6A21A] group-hover:text-white">
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
          className="border-y border-[#E4DED0] bg-[#E7F0EB]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <button
              type="button"
              onClick={handleBackToSolutions}
              className="mb-10 flex items-center gap-2 text-sm text-[#6F756F] transition hover:text-[#4F8A70]"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to all solutions
            </button>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#E4DED0] bg-white shadow-xl shadow-[#4F8A70]/10">
                <Image
                  src={selectedSolution.image}
                  alt={selectedSolution.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3F4541]/30 to-transparent" />
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E6A21A] shadow-lg shadow-[#E6A21A]/20">
                    {(() => {
                      const Icon = selectedSolution.icon;
                      return <Icon className="h-5 w-5 text-white" />;
                    })()}
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4F8A70]">
                    {selectedSolution.tag}
                  </span>
                </div>

                <h2 className="text-4xl font-semibold tracking-tight text-[#3F4541] sm:text-5xl">
                  {selectedSolution.title}
                </h2>

                <p className="mt-6 text-base leading-8 text-[#5F665F]">
                  {selectedSolution.description}
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {selectedSolution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-[#E4DED0] bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4F8A70]" />

                      <span className="text-sm text-[#5F665F]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4F8A70]">
                    Applications
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedSolution.applications.map((application) => (
                      <span
                        key={application}
                        className="rounded-full border border-[#D7E3DC] bg-white px-4 py-2 text-xs text-[#5F665F]"
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
        <div className="rounded-[2.5rem] border border-[#E4DED0] bg-[#F3EBD8] p-8 shadow-sm sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4F8A70]">
                Our approach
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#3F4541] sm:text-5xl">
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
                  className="rounded-2xl border border-[#E4DED0] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-xs font-semibold text-[#E6A21A]">
                    {number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-[#3F4541]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6F756F]">
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#E4DED0] bg-[#E7F0EB] shadow-sm">
          <div className="px-8 py-14 text-[#3F4541] sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4F8A70]">
                Start a conversation
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build a{" "}
                <span className="text-[#E6A21A]">
                  cleaner energy future.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#6F756F]">
                Have a project in mind? Connect with our team to explore the
                right renewable energy solution for your needs.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex shrink-0 items-center gap-3 rounded-full bg-[#E6A21A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E6A21A]/20 transition hover:-translate-y-0.5 hover:bg-[#D8920E] lg:mt-0"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E4DED0] bg-[#FBFAF5]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6A21A] shadow-md shadow-[#E6A21A]/20">
                  <Sun className="h-5 w-5 text-white" />
                </div>

                <div>
                  <div className="text-lg font-semibold tracking-tight text-[#3F4541]">
                    Solar Nova
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#6F756F]">
                    Renewable Energy
                  </div>
                </div>
              </Link>

              <p className="mt-6 max-w-xs text-sm leading-6 text-[#6F756F]">
                Building cleaner, smarter, and more sustainable energy
                solutions for a better tomorrow.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  About Us
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/about"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  About Solar Nova
                </Link>

                <Link
                  href="/about/board-of-directors"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Awards
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Insights & Blog
                </Link>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">
                Solutions
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/solutions"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Solar Power
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Wind Energy
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Hybrid Energy
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Energy Storage
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  EPC Services
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-[#E4DED0] pt-7 text-xs text-[#8B918B] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Solar Nova. All rights reserved.</p>

            <div className="flex gap-6">
              <Link
                href="/"
                className="transition hover:text-[#E6A21A]"
              >
                Privacy
              </Link>

              <Link
                href="/"
                className="transition hover:text-[#E6A21A]"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-[#E6A21A]"
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
