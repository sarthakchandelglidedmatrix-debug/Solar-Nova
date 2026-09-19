"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Leaf,
  ShieldCheck,
  Sun,
  Users,
} from "lucide-react";

const directors = [
  {
    number: "01",
    name: "Rajiv Malhotra",
    designation: "Chairman & Managing Director",
    image: "/about/board/rajiv-malhotra.jpg",
    experience:
      "A senior business leader with extensive experience in renewable energy, infrastructure and long-term business development.",
  },
  {
    number: "02",
    name: "Arvind Mehra",
    designation: "Vice Chairman & Whole-Time Director",
    image: "/about/board/arvind-mehra.jpg",
    experience:
      "Brings decades of experience in strategy, operations, administration and organisational leadership across large-scale businesses.",
  },
  {
    number: "03",
    name: "Vikram Sethi",
    designation: "Chief Executive Officer & Director",
    image: "/about/board/vikram-sethi.jpg",
    experience:
      "Experienced corporate executive focused on business growth, operations, technology and strategic expansion.",
  },
  {
    number: "04",
    name: "Rakesh Kapoor",
    designation: "Non-Executive Independent Director",
    image: "/about/board/rakesh-kapoor.jpg",
    experience:
      "Provides independent oversight with experience across finance, consulting, corporate strategy and business transformation.",
  },
  {
    number: "05",
    name: "Meera Sharma",
    designation: "Non-Executive Independent Director",
    image: "/about/board/meera-sharma.jpg",
    experience:
      "Experienced leadership professional with a strong background in people strategy, organisational development and governance.",
  },
  {
    number: "06",
    name: "Sanjay Verma",
    designation: "Non-Executive Independent Director",
    image: "/about/board/sanjay-verma.jpg",
    experience:
      "Senior corporate and legal professional bringing expertise in governance, regulatory matters and responsible business practices.",
  },
];

export default function BoardOfDirectorsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F7F1] text-[#024827]">
      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="solar-background absolute inset-0 opacity-35" />
        <div className="solar-grid absolute inset-0 opacity-[0.035]" />

        <div className="absolute left-[-15%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#FDEC80]/30 blur-[120px]" />

        <div className="absolute right-[-15%] top-[45%] h-[400px] w-[400px] rounded-full bg-[#8EB568]/20 blur-[120px]" />
      </div>

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#D9E4D2] bg-[#F8F7F1]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F4C51F]/50 bg-[#FDEC80]">
              <Sun className="h-4 w-4 text-[#024827]" />
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

          {/* NAVIGATION */}

          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/solutions"
              className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
            >
              Solutions
            </Link>

            {/* ABOUT DROPDOWN */}

            <div className="group relative py-6">
              <Link
                href="/about"
                className="flex items-center gap-1.5 text-sm font-medium text-[#0A572A]"
              >
                About

                <span className="text-[9px] transition-transform duration-200 group-hover:rotate-180">
                  ▼
                </span>
              </Link>

              <div className="pointer-events-none invisible absolute left-1/2 top-[62px] w-[235px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border border-[#D9E4D2] bg-[#F3F6EE]/98 p-2 shadow-xl backdrop-blur-xl">
                  <Link
                    href="/about/board-of-directors"
                    className="block rounded-xl bg-[#E7EFE0] px-4 py-3 transition hover:bg-[#DCE9D5]"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-[#0A572A]" />

                      <div>
                        <div className="text-sm font-medium text-[#024827]">
                          Board of Directors
                        </div>

                        <div className="mt-0.5 text-[11px] text-[#6B7D70]">
                          Our leadership
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/about/awards"
                    className="block rounded-xl px-4 py-3 transition hover:bg-[#E7EFE0]"
                  >
                    <div className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-[#0A572A]" />

                      <div>
                        <div className="text-sm font-medium text-[#024827]">
                          Awards & Certification
                        </div>

                        <div className="mt-0.5 text-[11px] text-[#6B7D70]">
                          Recognition
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-sm text-[#45604D] transition hover:text-[#0A572A]"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#F4C51F]/50 bg-[#F4C51F] px-5 py-2.5 text-sm font-semibold text-[#024827] shadow-lg shadow-[#F4C51F]/20 transition-all duration-300 hover:bg-[#FDEC80] hover:shadow-[#F4C51F]/30"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* HERO WITH VIDEO */}
      {/* ========================================================= */}

      <section className="relative min-h-[650px] overflow-hidden px-6 pb-20 pt-36 lg:min-h-[700px] lg:px-8 lg:pb-24 lg:pt-44">
        {/* VIDEO BACKGROUND */}

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

          {/* Light overlay */}
          <div className="absolute inset-0 bg-[#F8F7F1]/55" />

          {/* Text readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F1]/95 via-[#F8F7F1]/70 to-[#F8F7F1]/20" />

          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#F8F7F1]/95 to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#F8F7F1] to-transparent" />

          {/* Solar glow */}
          <div className="absolute left-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#FDEC80]/25 blur-[120px]" />
        </div>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* BREADCRUMB */}

            <div className="mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6B7D70]">
              <Link
                href="/about"
                className="transition hover:text-[#0A572A]"
              >
                About
              </Link>

              <span>/</span>

              <span className="text-[#0A572A]">Leadership</span>
            </div>

            {/* BADGE */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#8EB568]/50 bg-[#FDEC80]/80 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#024827] backdrop-blur-md">
              <Users className="h-3 w-3" />

              Our Leadership
            </div>

            {/* HEADING */}

            <h1 className="text-4xl font-semibold leading-tight text-[#024827] sm:text-5xl lg:text-6xl">
              Board of{" "}
              <span className="text-[#0A572A]">Directors.</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#45604D] sm:text-lg">
              Meet the leadership team guiding SolarNova with experience,
              strategic vision and a commitment to building a cleaner
              energy future.
            </p>
          </motion.div>

          {/* HERO STATS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#D9E4D2] bg-[#F3F6EE]/90 backdrop-blur-lg md:grid-cols-4"
          >
            {[
              ["01", "Leadership"],
              ["02", "Experience"],
              ["03", "Governance"],
              ["04", "Vision"],
            ].map(([number, label], index) => (
              <div
                key={number}
                className={`px-5 py-5 ${
                  index !== 3
                    ? "border-b border-[#D9E4D2] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="text-[10px] tracking-[0.18em] text-[#0A572A]">
                  {number}
                </div>

                <div className="mt-2 text-sm font-medium text-[#024827]">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + DIRECTORS */}
      {/* ========================================================= */}

      <section className="px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* INTRO */}

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#0A572A]">
                Leadership
              </div>

              <h2 className="text-3xl font-semibold text-[#024827] sm:text-4xl">
                Experience that{" "}
                <span className="text-[#0A572A]">
                  moves us forward.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#5B6F62]">
              Our Board brings together professionals with experience across
              renewable energy, infrastructure, finance, administration,
              strategy, law and corporate governance. Together, they provide
              the direction and oversight that supports SolarNova&apos;s
              long-term vision.
            </p>
          </div>

          {/* DIRECTORS */}

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {directors.map((director, index) => (
              <motion.article
                key={director.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-3xl border border-[#D9E4D2] bg-[#F3F6EE] transition-all duration-300 hover:-translate-y-1 hover:border-[#8EB568] hover:bg-[#EEF3E8]"
              >
                {/* IMAGE */}

                <div className="relative h-[360px] overflow-hidden bg-[#E7EFE0]">
                  <Image
                    src={director.image}
                    alt={`${director.name} - SolarNova Board of Directors`}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#024827]/80 via-[#024827]/10 to-transparent opacity-90" />

                  {/* NUMBER */}

                  <div className="absolute left-5 top-5 rounded-full border border-[#F8F7F1]/60 bg-[#024827]/65 px-3 py-1.5 text-[10px] tracking-[0.18em] text-[#F8F7F1] backdrop-blur-md">
                    {director.number}
                  </div>

                  {/* NAME */}

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#FDEC80]">
                      SolarNova Leadership
                    </div>

                    <h3 className="mt-2 text-xl font-semibold leading-tight text-[#F8F7F1]">
                      {director.name}
                    </h3>
                  </div>
                </div>

                {/* CARD CONTENT */}

                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FDEC80] text-[#024827]">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7D70]">
                        Position
                      </div>

                      <p className="mt-1 text-sm font-medium leading-6 text-[#0A572A]">
                        {director.designation}
                      </p>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-[#D9E4D2]" />

                  <p className="text-sm leading-7 text-[#5B6F62]">
                    {director.experience}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[11px] text-[#6B7D70]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#0A572A]" />

                    Leadership & Governance
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GOVERNANCE */}
      {/* ========================================================= */}

      <section className="border-y border-[#D9E4D2] bg-[#EEF3E8] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#0A572A]">
                Our Approach
              </div>

              <h2 className="text-3xl font-semibold text-[#024827] sm:text-4xl">
                Strong leadership.
                <br />
                <span className="text-[#0A572A]">
                  Responsible growth.
                </span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Responsible Governance",
                  text: "Strong oversight and transparent decision-making.",
                },
                {
                  icon: Leaf,
                  title: "Sustainable Vision",
                  text: "Focused on long-term clean energy development.",
                },
                {
                  icon: Users,
                  title: "Experienced Leadership",
                  text: "Diverse expertise across multiple industries.",
                },
                {
                  icon: Sun,
                  title: "Future Focused",
                  text: "Building solutions for tomorrow's energy needs.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#D9E4D2] bg-[#F8F7F1] p-5 transition-all duration-300 hover:border-[#8EB568]"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FDEC80] text-[#024827]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <h3 className="text-sm font-semibold text-[#024827]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#5B6F62]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-[#F4C51F]/50 bg-[#FDEC80] px-6 py-12 text-center shadow-sm sm:px-10">
            <Sun className="mx-auto mb-4 h-7 w-7 text-[#024827]" />

            <h2 className="text-3xl font-semibold text-[#024827] sm:text-4xl">
              Building the future of clean energy.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#45604D]">
              Explore our solutions and discover how SolarNova is working
              towards a smarter and more sustainable energy future.
            </p>

            <Link
              href="/solutions"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#0A572A] bg-[#0A572A] px-6 py-3 text-sm font-semibold text-[#F8F7F1] shadow-lg shadow-[#0A572A]/15 transition-all duration-300 hover:bg-[#024827] hover:shadow-[#0A572A]/25"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-[#CBD9C5] bg-[#E7EFE0]">
        <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* BRAND */}

            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F4C51F]/50 bg-[#FDEC80]">
                  <Sun className="h-4 w-4 text-[#024827]" />
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

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#5B6F62]">
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
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
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
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  About SolarNova
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  Our Solutions
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#5B6F62] transition hover:text-[#0A572A]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM FOOTER */}

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#CBD9C5] pt-6 md:flex-row md:items-center">
            <div className="text-[11px] text-[#6B7D70]">
              © {new Date().getFullYear()} SolarNova. Clean energy for a
              brighter tomorrow.
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