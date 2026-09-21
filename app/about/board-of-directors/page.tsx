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
    <main className="min-h-screen overflow-hidden bg-[#FBFAF5] text-[#3F4541]">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="solar-background absolute inset-0 opacity-30" />
        <div className="solar-grid absolute inset-0 opacity-[0.035]" />

        <div className="absolute left-[-15%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#F6C85F]/20 blur-[120px]" />

        <div className="absolute right-[-15%] top-[45%] h-[400px] w-[400px] rounded-full bg-[#4F8A70]/15 blur-[120px]" />
      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#E4DED0]/80 bg-[#FBFAF5]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">
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

          {/* NAVIGATION */}

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
                    className="block rounded-xl px-4 py-3 transition hover:bg-[#F3EBD8]"
                  >
                    <div className="flex items-center gap-3">
                      <Sun className="h-4 w-4 text-[#E6A21A]" />

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
                    className="block rounded-xl bg-[#F3EBD8] px-4 py-3 transition hover:bg-[#EDE2C8]"
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
        </div>
      </nav>

      {/* ================= HERO WITH VIDEO ================= */}

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

          {/* Light solar overlays */}
          <div className="absolute inset-0 bg-[#FBFAF5]/30" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FBFAF5]/85 via-[#FBFAF5]/45 to-transparent" />

          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#FBFAF5]/75 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#FBFAF5] via-[#FBFAF5]/35 to-transparent" />

          <div className="absolute left-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#F6C85F]/25 blur-[120px]" />
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

            <div className="mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6F756F]">
              <Link
                href="/about"
                className="transition hover:text-[#E6A21A]"
              >
                About
              </Link>

              <span className="text-[#C5BDAA]">/</span>

              <span className="text-[#4F8A70]">Leadership</span>
            </div>

            {/* BADGE */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E6A21A]/30 bg-[#FBFAF5]/75 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[#4F8A70] shadow-sm backdrop-blur-md">
              <Users className="h-3 w-3" />
              Our Leadership
            </div>

            {/* HEADING */}

            <h1 className="text-4xl font-semibold leading-tight text-[#3F4541] sm:text-5xl lg:text-6xl">
              Board of <span className="text-[#E6A21A]">Directors.</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#4F514D] sm:text-lg">
              Meet the leadership team guiding SolarNova with experience,
              strategic vision and a commitment to building a cleaner energy
              future.
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
            className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#E4DED0] bg-[#FBFAF5]/75 shadow-lg shadow-[#4F8A70]/10 backdrop-blur-lg md:grid-cols-4"
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
                    ? "border-b border-[#E4DED0] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="text-[10px] tracking-[0.18em] text-[#E6A21A]">
                  {number}
                </div>

                <div className="mt-2 text-sm font-medium text-[#3F4541]">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO + DIRECTORS ================= */}

      <section className="bg-[#FBFAF5] px-6 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* INTRO */}

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#4F8A70]">
                Leadership
              </div>

              <h2 className="text-3xl font-semibold text-[#3F4541] sm:text-4xl">
                Experience that{" "}
                <span className="text-[#4F8A70]">moves us forward.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[#6F756F]">
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
                className="group overflow-hidden rounded-3xl border border-[#E4DED0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8A70]/40 hover:shadow-lg hover:shadow-[#4F8A70]/10"
              >
                {/* IMAGE */}

                <div className="relative h-[360px] overflow-hidden bg-[#F3EBD8]">
                  <Image
                    src={director.image}
                    alt={`${director.name} - SolarNova Board of Directors`}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F4541]/45 via-transparent to-transparent opacity-80" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-[#FBFAF5]/80 px-3 py-1.5 text-[10px] tracking-[0.18em] text-[#3F4541] shadow-sm backdrop-blur-md">
                    {director.number}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/85">
                      SolarNova Leadership
                    </div>

                    <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
                      {director.name}
                    </h3>
                  </div>
                </div>

                {/* CARD CONTENT */}

                <div className="bg-white p-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#E7F0EB] text-[#4F8A70]">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[#8B908A]">
                        Position
                      </div>

                      <p className="mt-1 text-sm font-medium leading-6 text-[#4F514D]">
                        {director.designation}
                      </p>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-[#E4DED0]" />

                  <p className="text-sm leading-7 text-[#6F756F]">
                    {director.experience}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[11px] text-[#6F756F]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#4F8A70]" />
                    Leadership & Governance
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GOVERNANCE ================= */}

      <section className="border-y border-[#E4DED0] bg-[#F3EBD8] px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#4F8A70]">
                Our Approach
              </div>

              <h2 className="text-3xl font-semibold text-[#3F4541] sm:text-4xl">
                Strong leadership.
                <br />
                <span className="text-[#4F8A70]">Responsible growth.</span>
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
                    className="rounded-2xl border border-[#E4DED0] bg-[#FBFAF5] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E6A21A]/40 hover:shadow-md hover:shadow-[#E6A21A]/10"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#E7F0EB] text-[#4F8A70]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <h3 className="text-sm font-semibold text-[#3F4541]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#6F756F]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#FBFAF5] px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#E4DED0] bg-[#F3EBD8] px-6 py-12 text-center shadow-sm sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C85F]/30 blur-3xl" />

            <Sun className="relative mx-auto mb-4 h-7 w-7 text-[#E6A21A]" />

            <h2 className="relative text-3xl font-semibold text-[#3F4541] sm:text-4xl">
              Building the future of clean energy.
            </h2>

            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6F756F]">
              Explore our solutions and discover how SolarNova is working
              towards a smarter and more sustainable energy future.
            </p>

            <Link
              href="/solutions"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-[#E6A21A] bg-[#E6A21A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E6A21A]/20 transition-all duration-300 hover:bg-[#D49312] hover:shadow-[#E6A21A]/30"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-[#E4DED0] bg-[#FBFAF5] px-6 py-10 text-[#3F4541] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            {/* BRAND */}

            <div>
              <Link href="/" className="flex items-center gap-3">
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

              <p className="mt-4 max-w-sm text-sm leading-6 text-[#6F756F]">
                Building a smarter and more sustainable energy future through
                clean solar solutions.
              </p>
            </div>

            {/* EXPLORE */}

            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">Explore</h3>

              <div className="mt-4 grid gap-3">
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
                  About
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

            {/* COMPANY */}

            <div>
              <h3 className="text-sm font-semibold text-[#3F4541]">Company</h3>

              <div className="mt-4 grid gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="text-sm text-[#6F756F] transition hover:text-[#4F8A70]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-[#6F756F] transition hover:text-[#4F8A70]"
                >
                  About SolarNova
                </Link>

                <Link
                  href="/solutions"
                  className="text-sm text-[#6F756F] transition hover:text-[#4F8A70]"
                >
                  Our Solutions
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM FOOTER */}

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#E4DED0] pt-6 md:flex-row md:items-center">
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