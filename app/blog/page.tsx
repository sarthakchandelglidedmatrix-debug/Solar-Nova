"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Leaf,
  Menu,
  Sun,
  Users,
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
    <main className="min-h-screen overflow-hidden bg-[#FBFAF5] text-[#3F4541]">
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#F6C85F]/12 blur-[120px]" />
        <div className="absolute right-[-8%] top-[35%] h-[480px] w-[480px] rounded-full bg-[#4F8A70]/10 blur-[140px]" />
        <div className="absolute bottom-[5%] left-[30%] h-[420px] w-[420px] rounded-full bg-[#E6A21A]/10 blur-[130px]" />
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#E4DED0] bg-[#FBFAF5]/90 px-5 py-3 shadow-[0_8px_30px_rgba(63,69,65,0.06)] backdrop-blur-xl">
          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
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

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm text-[#6F756F] transition hover:text-[#3F4541]"
            >
              Home
            </Link>

            <Link
              href="/solutions"
              className="text-sm text-[#6F756F] transition hover:text-[#3F4541]"
            >
              Solutions
            </Link>

            {/* ABOUT DROPDOWN */}
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

              <div className="pointer-events-none invisible absolute left-1/2 top-[62px] w-[245px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-[#E4DED0] bg-[#FBFAF5]/95 p-2 shadow-xl shadow-[#4F8A70]/10 backdrop-blur-xl">
                  {/* ABOUT US */}
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

                  {/* BOARD OF DIRECTORS */}
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

                  {/* AWARDS */}
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

            {/* BLOG ACTIVE */}
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#E6A21A]"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-[#E6A21A] px-5 py-2.5 text-sm font-semibold text-[#3F4541] shadow-sm transition hover:bg-[#D99512]"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4DED0] bg-white text-[#3F4541] md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-[#E4DED0] bg-[#FBFAF5]/95 p-4 shadow-[0_20px_50px_rgba(63,69,65,0.1)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-[#6F756F] hover:bg-[#F3EBD8]"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-[#6F756F] hover:bg-[#F3EBD8]"
              >
                Solutions
              </Link>

              {/* ABOUT US */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl bg-[#F3EBD8] px-4 py-3 text-sm font-medium text-[#3F4541]"
              >
                <div className="flex items-center gap-3">
                  <Leaf className="h-4 w-4 text-[#4F8A70]" />
                  <span>About Us</span>
                </div>
              </Link>

              {/* BOARD OF DIRECTORS */}
              <Link
                href="/about/board-of-directors"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 pl-8 text-sm text-[#6F756F] hover:bg-[#F3EBD8]"
              >
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-[#4F8A70]" />
                  <span>Board of Directors</span>
                </div>
              </Link>

              {/* AWARDS */}
              <Link
                href="/about/awards"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 pl-8 text-sm text-[#6F756F] hover:bg-[#F3EBD8]"
              >
                <div className="flex items-center gap-3">
                  <Award className="h-4 w-4 text-[#E6A21A]" />
                  <span>Awards & Certification</span>
                </div>
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl bg-[#E7F0EB] px-4 py-3 text-sm font-semibold text-[#4F8A70]"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-[#E6A21A] px-5 py-3 text-center text-sm font-semibold text-[#3F4541]"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#FBFAF5] pt-40">
        {/* BACKGROUND VIDEO */}
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

        {/* LIGHT VIDEO TREATMENT */}
        <div className="absolute inset-0 bg-[#FBFAF5]/76" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF5]/92 via-[#FBFAF5]/70 to-[#FBFAF5]/95" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#FBFAF5]/95 via-[#FBFAF5]/70 to-transparent" />

        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F6C85F]/25 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E6A21A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4F8A70]">
                SolarNova Journal
              </span>
            </div>

            <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#3F4541] sm:text-6xl lg:text-8xl">
              Ideas for a
              <span className="block text-[#E6A21A]">
                cleaner tomorrow.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#6F756F] sm:text-lg">
              Insights, ideas and perspectives on renewable energy,
              sustainability, technology and the future of clean power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="bg-[#FBFAF5] px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4F8A70]">
                Latest insights
              </p>

              <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#3F4541] sm:text-4xl">
                From the SolarNova team
              </h2>
            </div>

            <span className="hidden text-sm text-[#8A908A] sm:block">
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
                className="group overflow-hidden rounded-[28px] border border-[#E4DED0] bg-white shadow-sm transition hover:border-[#E6A21A]/60 hover:shadow-[0_18px_45px_rgba(63,69,65,0.08)]"
              >
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden bg-[#F3EBD8]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FBFAF5]/65 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-[#E4DED0] bg-[#FBFAF5]/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-[#4F8A70] shadow-sm backdrop-blur-md">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-xs text-[#8A908A]">{blog.date}</p>

                  <h3 className="mt-4 text-2xl font-medium leading-tight tracking-tight text-[#3F4541] transition group-hover:text-[#4F8A70]">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#6F756F]">
                    {blog.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#4F8A70]">
                      Read article
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4DED0] text-[#3F4541] transition group-hover:border-[#E6A21A] group-hover:bg-[#E6A21A]">
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
      <section className="bg-[#FBFAF5] px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4F8A70]">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#3F4541] sm:text-4xl">
              Featured story
            </h2>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-[560px] overflow-hidden rounded-[32px] border border-[#E4DED0] bg-[#F3EBD8] shadow-sm"
          >
            <Image
              src="/about/large solar landscape.jpg"
              alt="Future of solar energy"
              fill
              sizes="100vw"
              className="object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#FBFAF5]/95 via-[#FBFAF5]/45 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#E6A21A] px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#3F4541]">
                    FEATURED
                  </span>

                  <span className="text-xs text-[#6F756F]">
                    SolarNova Journal · September 2026
                  </span>
                </div>

                <h3 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-[#3F4541] sm:text-5xl lg:text-6xl">
                  The future of energy is
                  <span className="text-[#4F8A70]">
                    {" "}
                    cleaner, smarter and more connected.
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6F756F] sm:text-base">
                  As renewable technologies evolve, the opportunity is no
                  longer just about generating clean energy. It is about
                  building an energy ecosystem that is reliable, intelligent
                  and ready for the future.
                </p>

                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#E6A21A] px-6 py-3.5 text-sm font-semibold text-[#3F4541] shadow-sm transition hover:bg-[#D99512]"
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
      <section className="bg-[#FBFAF5] px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#E4DED0] bg-gradient-to-br from-[#F3EBD8] to-[#E7F0EB] shadow-sm">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6A21A] text-[#3F4541]">
                <Leaf size={23} />
              </div>

              <h2 className="text-3xl font-medium tracking-tight text-[#3F4541] sm:text-4xl">
                Building a cleaner future,
                <span className="text-[#4F8A70]">
                  {" "}
                  together.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#6F756F] sm:text-base">
                Discover more about SolarNova, our renewable energy
                solutions and our vision for a sustainable tomorrow.
              </p>
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E6A21A] px-7 py-4 text-sm font-semibold text-[#3F4541] shadow-sm transition hover:bg-[#D99512]"
            >
              Explore Solutions
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E4DED0] bg-[#FBFAF5]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr]">
            {/* BRAND */}
            <div>
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4DED0] bg-white">
                  <Sun className="h-5 w-5 text-[#E6A21A]" />
                </div>

                <span className="text-lg font-semibold text-[#3F4541]">
                  Solar<span className="text-[#4F8A70]">Nova</span>
                </span>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#6F756F]">
                Building renewable energy solutions for a cleaner,
                smarter and more sustainable future.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3">
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
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-[#E6A21A]"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Leadership
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Awards
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">
                Get in touch
              </h3>

              <div className="mt-5 space-y-3 text-sm text-[#6F756F]">
                <p>Renewable Energy Solutions</p>
                <p>India</p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-[#4F8A70]"
                >
                  Start a conversation
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-[#E4DED0] pt-6 text-xs text-[#8A908A] sm:flex-row">
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