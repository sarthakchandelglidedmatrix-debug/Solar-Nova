"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Menu,
  Sun,
  X,
} from "lucide-react";
import { useState } from "react";

const blogs = [
  {
    category: "SOLAR ENERGY",
    date: "September 12, 2026",
    title: "How Solar Energy Is Shaping the Future of Clean Power",
    description:
      "Explore how modern solar projects are helping businesses and communities transition toward cleaner and more dependable energy.",
    image: "/about/large solar landscape.jpg",
  },
  {
    category: "RENEWABLE ENERGY",
    date: "September 08, 2026",
    title: "Building a More Sustainable Energy Future",
    description:
      "A look at the technologies, infrastructure and ideas driving the next generation of renewable energy.",
    image: "/about/solar farm aerial.jpg",
  },
  {
    category: "TECHNOLOGY",
    date: "September 02, 2026",
    title: "Why Energy Storage Matters for Renewable Power",
    description:
      "Battery storage is becoming an important part of modern energy systems. Here's how it supports renewable generation.",
    image: "/about/technicianinstallation.jpg",
  },
  {
    category: "SOLAR PROJECTS",
    date: "August 26, 2026",
    title: "From Project Development to Clean Energy Generation",
    description:
      "Understanding the journey of a renewable energy project from early planning and engineering to commissioning.",
    image: "/about/rooftop + persontechnology.jpg",
  },
  {
    category: "SUSTAINABILITY",
    date: "August 20, 2026",
    title: "The Role of Renewable Energy in a Low-Carbon Economy",
    description:
      "Renewable energy can play a central role in reducing dependence on conventional energy sources and supporting sustainable growth.",
    image: "/about/rooftop solar.jpg",
  },
  {
    category: "ENERGY INSIGHTS",
    date: "August 14, 2026",
    title: "What Makes a Renewable Energy Project Successful?",
    description:
      "From site selection and engineering to operations, several factors determine the long-term performance of a clean energy asset.",
    image: "/about/solar farm aerial.jpg",
  },
];

export default function BlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-neutral-200 bg-white/90 px-5 py-3 backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900">
              <Sun className="h-5 w-5 text-white" />
            </div>

            <span className="text-lg font-semibold tracking-tight">
              Solar<span className="text-neutral-500">Nova</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/solutions"
              className="text-sm text-neutral-600 transition hover:text-neutral-950"
            >
              Solutions
            </Link>

            <Link
              href="/about"
              className="text-sm text-neutral-600 transition hover:text-neutral-950"
            >
              About
            </Link>

            <Link href="/blog" className="text-sm text-neutral-950">
              Blog
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-neutral-200 bg-white/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-neutral-600 hover:bg-neutral-100"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-neutral-600 hover:bg-neutral-100"
              >
                About
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl bg-neutral-100 px-4 py-3 text-sm text-neutral-950"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* ================= HERO / HEADER ================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-neutral-950 pt-40">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/Vidoes/solar-bg.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

        {/* Neutral Glow */}
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-white" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
                SolarNova Journal
              </span>
            </div>

            <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Ideas for a
              <span className="block text-white">
                cleaner tomorrow.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Insights, ideas and perspectives on renewable energy,
              sustainability, technology and the future of clean power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="bg-white px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Latest insights
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                From the SolarNova team
              </h2>
            </div>

            <span className="hidden text-sm text-neutral-400 sm:block">
              06 Stories
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100"
              >
                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-md">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-neutral-400">{blog.date}</p>

                  <h3 className="mt-4 text-2xl font-medium leading-tight tracking-tight transition group-hover:text-neutral-600">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-neutral-500">
                    {blog.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-600 transition group-hover:text-neutral-950">
                      Read article
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition group-hover:border-neutral-400 group-hover:bg-neutral-900 group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED BLOG ================= */}
      <section className="bg-white px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Featured story
            </h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-[560px] overflow-hidden rounded-[32px] border border-neutral-200"
          >
            <Image
              src="/about/large solar landscape.jpg"
              alt="Future of solar energy"
              fill
              sizes="100vw"
              className="object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-neutral-900">
                    FEATURED
                  </span>

                  <span className="text-xs text-white/50">
                    SolarNova Journal · September 2026
                  </span>
                </div>

                <h3 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  The future of energy is
                  <span className="text-white">
                    {" "}
                    cleaner, smarter and more connected.
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  As renewable technologies evolve, the opportunity is no
                  longer just about generating clean energy. It is about
                  building an energy ecosystem that is reliable, intelligent
                  and ready for the future.
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
                >
                  Read featured story
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* ================= NEWSLETTER / CTA ================= */}
      <section className="bg-white px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                <Leaf size={23} />
              </div>

              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Building a cleaner future,
                <span className="text-neutral-500">
                  {" "}
                  together.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-neutral-500 sm:text-base">
                Discover more about SolarNova, our renewable energy
                solutions and our vision for a sustainable tomorrow.
              </p>
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-neutral-700"
            >
              Explore Solutions
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <Sun className="h-5 w-5 text-neutral-900" />
                </div>

                <span className="text-lg font-semibold text-white">
                  Solar<span className="text-neutral-400">Nova</span>
                </span>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
                Building renewable energy solutions for a cleaner,
                smarter and more sustainable future.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/solutions"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  Leadership
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  Awards
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-white/40 transition hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Get in touch
              </h3>

              <div className="mt-5 space-y-3 text-sm text-white/40">
                <p>Renewable Energy Solutions</p>
                <p>India</p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white"
                >
                  Start a conversation
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row">
            <p>
              © {new Date().getFullYear()} SolarNova. All rights reserved.
            </p>

            <p>Clean energy. Better tomorrow.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}