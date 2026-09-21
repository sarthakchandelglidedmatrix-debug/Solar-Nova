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
    <main className="min-h-screen bg-white text-neutral-900">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <Sun size={23} strokeWidth={2.5} />
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight">
                SolarNova
              </div>

              <div className="text-[9px] uppercase tracking-[0.28em] text-neutral-500">
                Clean Energy
              </div>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            {/* HOME */}
            <Link
              href="/"
              className="transition hover:text-neutral-950"
            >
              Home
            </Link>

            {/* SOLUTIONS */}
            <Link
              href="/solutions"
              className="transition hover:text-neutral-950"
            >
              Solutions
            </Link>

            {/* ABOUT DROPDOWN */}
            <div className="group relative py-7">
              <Link
                href="/about"
                className="flex items-center gap-1 transition hover:text-neutral-950"
              >
                About
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                  ⌄
                </span>
              </Link>

              <div className="pointer-events-none invisible absolute left-1/2 top-full mt-1 w-60 -translate-x-1/2 translate-y-2 rounded-2xl border border-neutral-200 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {/* ABOUT US */}
                <Link
                  href="/about"
                  className="block rounded-xl px-4 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
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

                {/* BOARD OF DIRECTORS */}
                <Link
                  href="/about/board-of-directors"
                  className="block rounded-xl px-4 py-3 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
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

                {/* AWARDS */}
                <Link
                  href="/about/awards"
                  className="block rounded-xl bg-neutral-100 px-4 py-3 text-sm text-neutral-950 transition hover:bg-neutral-200"
                >
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-neutral-700" />

                    <div>
                      <div className="text-sm font-medium text-neutral-900">
                        Awards & Certifications
                      </div>

                      <div className="mt-0.5 text-[11px] text-neutral-400">
                        Recognition
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* BLOG */}
            <Link
              href="/blog"
              className="transition hover:text-neutral-950"
            >
              Blog
            </Link>

            {/* GET STARTED */}
            <Link
              href="/contact"
              className="rounded-full bg-neutral-900 px-5 py-2.5 font-semibold text-white transition hover:bg-neutral-700"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO WITH EXISTING SOLAR VIDEO */}
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

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              <Award size={15} />
              Awards & Recognition
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Recognition for
              <span className="block text-white">
                building a cleaner
              </span>
              future.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Our journey is shaped by innovation, sustainability and the
              people who believe renewable energy can create a better tomorrow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#recognition"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-neutral-900 transition hover:bg-neutral-200"
              >
                Explore recognition
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
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
            <div className="relative ml-auto max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/about/award/award-excellence.jpg"
                  alt="SolarNova award recognition"
                  fill
                  priority
                  sizes="450px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-white/70">
                    Featured Recognition
                  </div>

                  <h2 className="text-3xl font-semibold text-white">
                    Excellence in Solar Innovation
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-neutral-200 bg-neutral-100">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-neutral-200 lg:grid-cols-4">
          {[
            ["10+", "Years of Innovation"],
            ["50+", "Solar Projects"],
            ["25+", "Industry Partners"],
            ["100%", "Commitment to Sustainability"],
          ].map(([number, label]) => (
            <div key={label} className="px-6 py-10 text-center">
              <div className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
                {number}
              </div>

              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-neutral-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Why Recognition Matters
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Awards are milestones.
              <span className="block text-neutral-400">
                The work behind them matters more.
              </span>
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-neutral-600">
              Every recognition represents a step in our larger mission:
              helping businesses and communities move towards cleaner,
              smarter and more dependable energy.
            </p>

            <p className="mt-6 leading-8 text-neutral-500">
              From technology and engineering to sustainability and customer
              impact, we continue to build solutions designed for real-world
              renewable energy needs.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              What We Stand For
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Recognition starts with
              <span className="text-neutral-900"> meaningful work.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-neutral-100 p-8"
                >
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section
        id="recognition"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Certifications
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Credentials that
              <span className="text-neutral-400">
                {" "}
                support our journey.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-500">
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/75">
                    {certificate.year}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {certificate.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-neutral-100 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Recognition Timeline
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Milestones along the
              <span className="text-neutral-900">
                {" "}
                SolarNova journey.
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
                className="grid overflow-hidden rounded-3xl border border-neutral-200 bg-white md:grid-cols-[260px_1fr]"
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
                    <span className="text-sm font-semibold text-neutral-700">
                      {award.year}
                    </span>

                    <span className="h-px w-12 bg-neutral-300" />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    {award.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-neutral-500">
                    {award.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle2 size={17} />
                    Recognition milestone
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-12 rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-neutral-100 to-white p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:p-16">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white">
              <Users size={23} />
            </div>

            <h2 className="mt-8 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Behind every recognition is a team that keeps building.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-neutral-500">
              Engineers, designers, energy experts and partners work together
              to turn ambitious clean-energy ideas into practical solutions.
            </p>
          </div>

          <div className="flex items-end">
            <Link
              href="/about/board-of-directors"
              className="group inline-flex items-center gap-3 rounded-full border border-neutral-300 px-6 py-3.5 font-semibold transition hover:border-neutral-500 hover:bg-neutral-100"
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

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-neutral-200 py-28">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-neutral-200/60 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white">
            <Sun size={27} />
          </div>

          <h2 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build what comes next.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-500">
            Explore how SolarNova can help turn your clean-energy goals into
            measurable results.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 font-semibold text-white transition hover:bg-neutral-700"
          >
            Start a conversation

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
          {/* FOOTER GRID */}
          <div className="grid gap-10 md:grid-cols-3">
            {/* BRAND */}
            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900">
                  <Sun className="h-4 w-4 text-white" />
                </div>

                <div>
                  <div className="text-base font-bold tracking-wide text-white">
                    Solar<span className="text-neutral-300">Nova</span>
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.22em] text-white/35">
                    Clean Energy
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                Building a smarter and more sustainable energy future through
                clean solar solutions.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Explore
              </h3>

              <div className="mt-4 grid gap-3">
                <Link
                  href="/"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Company
              </h3>

              <div className="mt-4 grid gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  About SolarNova
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Our Solutions
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM FOOTER */}
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
            <div className="text-[11px] text-white/25">
              © {new Date().getFullYear()} SolarNova. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-5">
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
                href="/about/board-of-directors"
                className="text-[11px] text-white/30 transition hover:text-white"
              >
                Leadership
              </Link>

              <Link
                href="/about/awards"
                className="text-[11px] text-white/30 transition hover:text-white"
              >
                Awards
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