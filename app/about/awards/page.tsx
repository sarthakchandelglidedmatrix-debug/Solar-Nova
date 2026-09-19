"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Sun,
  Users,
  Zap,
} from "lucide-react";

const awards = [
  {
    year: "2025",
    title: "Excellence in Solar Innovation",
    description:
      "Recognising our continued focus on dependable solar solutions, smart technology and sustainable energy adoption.",
    image: "/about/award/award-excellence.jpg",
  },
  {
    year: "2024",
    title: "Innovation in Clean Energy",
    description:
      "A visual showcase of our commitment to developing practical and future-ready renewable energy solutions.",
    image: "/about/award/award-innovation.jpg",
  },
  {
    year: "2023",
    title: "Sustainability Recognition",
    description:
      "Celebrating our contribution towards cleaner energy and a more sustainable future.",
    image: "/about/award/award-sustainability.jpg",
  },
];

const certificates = [
  {
    year: "2025",
    title: "Solar Excellence Certificate",
    image: "/about/award/certificate-2025.jpg",
  },
  {
    year: "2024",
    title: "Clean Energy Recognition",
    image: "/about/award/certificate-2024.jpg",
  },
  {
    year: "2023",
    title: "Sustainability Certificate",
    image: "/about/award/certificate-2023.jpg",
  },
];

const highlights = [
  {
    icon: Sun,
    title: "Solar First",
    text: "Focused on accelerating reliable and accessible solar energy adoption.",
  },
  {
    icon: Zap,
    title: "Smart Innovation",
    text: "Combining modern technology with practical renewable-energy solutions.",
  },
  {
    icon: Leaf,
    title: "Built for Sustainability",
    text: "Every solution is designed with long-term environmental impact in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Approach",
    text: "Transparent processes and dependable solutions remain central to our work.",
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F1] text-[#024827]">

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#D9E4D2] bg-[#F8F7F1]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8EB568]/40 bg-[#FDEC80]">
              <Sun
                size={23}
                strokeWidth={2.5}
                className="text-[#0A572A]"
              />
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight text-[#024827]">
                Solar<span className="text-[#0A572A]">Nova</span>
              </div>

              <div className="text-[9px] uppercase tracking-[0.28em] text-[#6B7D70]">
                Clean Energy
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-[#45604D] md:flex">

            <Link
              href="/Solution"
              className="transition hover:text-[#0A572A]"
            >
              Solutions
            </Link>

            <div className="group relative">
              <button className="flex items-center gap-1 text-[#024827] transition hover:text-[#0A572A]">
                About
                <span className="text-xs">⌄</span>
              </button>

              <div className="invisible absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-2xl border border-[#D9E4D2] bg-[#F3F6EE]/95 p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">

                <Link
                  href="/about/board-of-directors"
                  className="block rounded-xl px-4 py-3 text-sm text-[#45604D] transition hover:bg-[#E7EFE0] hover:text-[#0A572A]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="block rounded-xl bg-[#E7EFE0] px-4 py-3 text-sm font-medium text-[#0A572A]"
                >
                  Awards & Certifications
                </Link>

              </div>
            </div>

            <Link
              href="/blog"
              className="transition hover:text-[#0A572A]"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#0A572A]/30 bg-[#FDEC80] px-5 py-2.5 font-semibold text-[#024827] shadow-sm transition hover:bg-[#F4C51F]"
            >
              Get Started
            </Link>

          </nav>
        </div>
      </header>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative flex min-h-[760px] items-center overflow-hidden pt-20">

        <div className="absolute inset-0">

          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/Vidoes/solar-bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[#F8F7F1]/45" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F1]/95 via-[#F8F7F1]/70 to-[#F8F7F1]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F1] via-transparent to-[#F8F7F1]/25" />

          <div className="absolute left-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#FDEC80]/25 blur-[120px]" />

          <div className="absolute right-[-10%] top-[30%] h-[350px] w-[350px] rounded-full bg-[#8EB568]/15 blur-[120px]" />

        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F4C51F]/60 bg-[#FDEC80]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#024827] shadow-sm">
              <Award size={15} />
              Awards & Recognition
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#024827] sm:text-6xl lg:text-8xl">
              Recognition for
              <span className="block text-[#0A572A]">
                building a cleaner
              </span>
              future.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#45604D] sm:text-lg">
              Our journey is shaped by innovation, sustainability and the
              people who believe renewable energy can create a better tomorrow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="#recognition"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0A572A] px-6 py-3.5 font-semibold text-[#F8F7F1] shadow-md transition hover:bg-[#024827]"
              >
                Explore recognition

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#D9E4D2] bg-[#F3F6EE]/90 px-6 py-3.5 font-semibold text-[#024827] shadow-sm backdrop-blur-md transition hover:bg-[#E7EFE0]"
              >
                About SolarNova
              </Link>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="hidden lg:block"
          >

            <div className="relative ml-auto max-w-md overflow-hidden rounded-[2rem] border border-[#D9E4D2] bg-[#F3F6EE]/85 p-3 shadow-xl backdrop-blur-md">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">

                <Image
                  src="/about/award/award-excellence.jpg"
                  alt="SolarNova award recognition"
                  fill
                  priority
                  sizes="450px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#024827]/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[#FDEC80]">
                    Featured Recognition
                  </div>

                  <h2 className="text-3xl font-semibold text-[#F8F7F1]">
                    Excellence in Solar Innovation
                  </h2>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* STATS */}
      {/* ========================================================= */}

      <section className="border-y border-[#D9E4D2] bg-[#EEF3E8]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#D9E4D2] lg:grid-cols-4">

          {[
            ["10+", "Years of Innovation"],
            ["50+", "Solar Projects"],
            ["25+", "Industry Partners"],
            ["100%", "Commitment to Sustainability"],
          ].map(([number, label]) => (

            <div key={label} className="px-6 py-10 text-center">

              <div className="text-3xl font-semibold text-[#0A572A] sm:text-4xl">
                {number}
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#6B7D70]">
                {label}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO */}
      {/* ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

          <div>

            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
              Why Recognition Matters
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#024827] sm:text-5xl">
              Awards are milestones.
              <span className="block text-[#45604D]">
                The work behind them matters more.
              </span>
            </h2>

          </div>

          <div className="max-w-3xl">

            <p className="text-lg leading-8 text-[#45604D]">
              Every recognition represents a step in our larger mission:
              helping businesses and communities move towards cleaner,
              smarter and more dependable energy.
            </p>

            <p className="mt-6 leading-8 text-[#6B7D70]">
              From technology and engineering to sustainability and customer
              impact, we continue to build solutions designed for real-world
              renewable energy needs.
            </p>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* HIGHLIGHTS */}
      {/* ========================================================= */}

      <section className="border-y border-[#D9E4D2] bg-[#EEF3E8] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-2xl">

            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
              What We Stand For
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#024827] sm:text-5xl">
              Recognition starts with
              <span className="text-[#0A572A]">
                {" "}meaningful work.
              </span>
            </h2>

          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#D9E4D2] bg-[#D9E4D2] md:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-[#F8F7F1] p-8 transition hover:bg-[#F3F6EE]"
                >

                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7EFE0] text-[#0A572A]">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#024827]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#45604D]">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CERTIFICATES */}
      {/* ========================================================= */}

      <section
        id="recognition"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>

            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
              Certifications
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#024827] sm:text-5xl">
              Credentials that
              <span className="text-[#45604D]">
                {" "}support our journey.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-[#6B7D70]">
            A visual collection of certificates and recognition milestones
            representing our continued focus on quality and sustainability.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#D9E4D2] bg-[#E7EFE0] shadow-sm transition duration-300 group-hover:border-[#8EB568]">

                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#024827]/75 via-transparent to-transparent opacity-85" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <div className="text-xs uppercase tracking-[0.2em] text-[#FDEC80]">
                    {certificate.year}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-[#F8F7F1]">
                    {certificate.title}
                  </h3>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ========================================================= */}
      {/* AWARDS */}
      {/* ========================================================= */}

      <section className="border-y border-[#D9E4D2] bg-[#EEF3E8] py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-16">

            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A572A]">
              Recognition Timeline
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#024827] sm:text-6xl">
              Milestones along the
              <span className="text-[#0A572A]">
                {" "}SolarNova journey.
              </span>
            </h2>

          </div>

          <div className="space-y-5">

            {awards.map((award, index) => (

              <motion.div
                key={award.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid overflow-hidden rounded-3xl border border-[#D9E4D2] bg-[#F8F7F1] shadow-sm transition hover:border-[#8EB568] md:grid-cols-[260px_1fr]"
              >

                <div className="relative min-h-[240px]">

                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className="object-cover"
                  />

                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">

                  <div className="flex items-center gap-4">

                    <span className="text-sm font-semibold text-[#0A572A]">
                      {award.year}
                    </span>

                    <span className="h-px w-12 bg-[#8EB568]" />

                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-[#024827] sm:text-3xl">
                    {award.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-[#45604D]">
                    {award.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm text-[#0A572A]">
                    <CheckCircle2 size={17} />
                    Recognition milestone
                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PEOPLE */}
      {/* ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">

        <div className="grid gap-12 rounded-[2rem] border border-[#D9E4D2] bg-gradient-to-br from-[#E7EFE0] to-[#F3F6EE] p-8 shadow-sm md:p-12 lg:grid-cols-[1fr_auto] lg:p-16">

          <div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDEC80] text-[#0A572A]">
              <Users size={23} />
            </div>

            <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight text-[#024827] sm:text-5xl">
              Behind every recognition is a team that keeps building.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[#45604D]">
              Engineers, designers, energy experts and partners work together
              to turn ambitious clean-energy ideas into practical solutions.
            </p>

          </div>

          <div className="flex items-end">

            <Link
              href="/about/board-of-directors"
              className="group inline-flex items-center gap-3 rounded-full border border-[#0A572A]/30 bg-[#F8F7F1] px-6 py-3.5 font-semibold text-[#024827] transition hover:border-[#0A572A] hover:bg-[#E7EFE0]"
            >
              Meet our leadership

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-t border-[#D9E4D2] bg-[#F3F6EE] py-28">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FDEC80]/35 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDEC80] text-[#0A572A] shadow-sm">
            <Sun size={27} />
          </div>

          <h2 className="mt-8 text-4xl font-semibold tracking-tight text-[#024827] sm:text-6xl">
            Let&apos;s build what comes next.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#45604D]">
            Explore how SolarNova can help turn your clean-energy goals into
            measurable results.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#0A572A] px-7 py-4 font-semibold text-[#F8F7F1] shadow-md transition hover:bg-[#024827]"
          >
            Start a conversation

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-[#D9E4D2] bg-[#E7EFE0]">

        <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">

          <div className="grid gap-10 md:grid-cols-3">

            {/* BRAND */}

            <div>

              <Link href="/" className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8EB568]/40 bg-[#FDEC80]">
                  <Sun className="h-4 w-4 text-[#0A572A]" />
                </div>

                <div>

                  <div className="text-base font-bold tracking-wide text-[#024827]">
                    Solar<span className="text-[#0A572A]">Nova</span>
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.22em] text-[#6B7D70]">
                    Clean Energy
                  </div>

                </div>

              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#45604D]">
                Building a smarter and more sustainable energy future through
                clean solar solutions.
              </p>

            </div>

            {/* EXPLORE */}

            <div>

              <h3 className="text-sm font-semibold text-[#024827]">
                Explore
              </h3>

              <div className="mt-4 grid gap-3">

                <Link
                  href="/"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Contact
                </Link>

              </div>

            </div>

            {/* COMPANY */}

            <div>

              <h3 className="text-sm font-semibold text-[#024827]">
                Company
              </h3>

              <div className="mt-4 grid gap-3">

                <Link
                  href="/about/board-of-directors"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  About SolarNova
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Our Solutions
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Get Started
                </Link>

              </div>

            </div>

          </div>

          {/* BOTTOM FOOTER */}

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#D9E4D2] pt-6 md:flex-row md:items-center">

            <div className="text-[11px] text-[#6B7D70]">
              © {new Date().getFullYear()} SolarNova. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-5">

              <Link
                href="/solutions"
                className="text-[11px] text-[#6B7D70] transition hover:text-[#0A572A]"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                className="text-[11px] text-[#6B7D70] transition hover:text-[#0A572A]"
              >
                About
              </Link>

              <Link
                href="/about/board-of-directors"
                className="text-[11px] text-[#6B7D70] transition hover:text-[#0A572A]"
              >
                Leadership
              </Link>

              <Link
                href="/about/awards"
                className="text-[11px] text-[#6B7D70] transition hover:text-[#0A572A]"
              >
                Awards
              </Link>

              <Link
                href="/blog"
                className="text-[11px] text-[#6B7D70] transition hover:text-[#0A572A]"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-[11px] text-[#6B7D70] transition hover:text-[#0A572A]"
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