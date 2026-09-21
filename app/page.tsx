"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Leaf,
  Menu,
  ShieldCheck,
  Sun,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const images = {
  rooftop: "/solar/Solar Rooftop.jpg",
  home: "/solar/Solar Home.jpg",
  farm: "/solar/Solar Farm.jpg",
  installation: "/solar/Solar Installation.jpg",
};

const features: Feature[] = [
  {
    icon: Sun,
    title: "Clean Solar Energy",
    description:
      "Generate clean, renewable electricity directly from sunlight and reduce your dependence on conventional power.",
  },
  {
    icon: BatteryCharging,
    title: "Smart Energy Storage",
    description:
      "Store excess solar energy and use it when you need it, even when the sun goes down.",
  },
  {
    icon: ShieldCheck,
    title: "Built For Reliability",
    description:
      "Modern solar solutions designed for dependable performance, long-term savings and easy monitoring.",
  },
];

const stats = [
  { value: "25+", label: "Years Panel Life" },
  { value: "70%", label: "Potential Savings" },
  { value: "100%", label: "Clean Energy" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBFAF5] text-[#3F4541]">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-5 sm:py-5 md:px-8">
          <nav
            className={`relative z-[60] flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5 sm:py-4 ${
              menuOpen
                ? "border-[#E4DED0] bg-white/95"
                : "border-[#E4DED0] bg-white/85"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E6A21A] text-white shadow-[0_6px_20px_rgba(230,162,26,0.22)] sm:h-10 sm:w-10">
                <Sun size={21} strokeWidth={2.5} />
              </div>

              <div className="min-w-0 text-left">
                <div className="font-display text-lg font-semibold tracking-tight text-[#3F4541] sm:text-xl">
                  SolarNova
                </div>

                <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#6F756F] sm:text-[9px] sm:tracking-[0.25em]">
                  Clean Energy
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {/* Home */}
              <a
                href="/"
                className="text-sm font-medium text-[#3F4541] transition hover:text-[#E6A21A]"
              >
                Home
              </a>

              {/* Solutions */}
              <a
                href="/solutions"
                className="text-sm text-[#6F756F] transition hover:text-[#3F4541]"
              >
                Solutions
              </a>

              {/* About Dropdown */}
              <div className="group relative">
                <a
                  href="/about"
                  className="flex items-center gap-1 text-sm text-[#6F756F] transition hover:text-[#3F4541]"
                >
                  About

                  <span className="text-[9px] transition-transform duration-200 group-hover:rotate-180">
                    ▼
                  </span>
                </a>

                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-[#E4DED0] bg-white/95 p-2 shadow-[0_20px_50px_rgba(79,138,112,0.12)] backdrop-blur-xl">
                    <a
                      href="/about/board-of-directors"
                      className="block rounded-xl px-4 py-3 transition hover:bg-[#F3EBD8]"
                    >
                      <div className="text-sm font-semibold text-[#3F4541]">
                        Board of Directors
                      </div>

                      <div className="mt-1 text-xs text-[#6F756F]">
                        Meet our leadership
                      </div>
                    </a>

                    <a
                      href="/about/awards"
                      className="block rounded-xl bg-[#F3EBD8] px-4 py-3 transition hover:bg-[#E8DEC3]"
                    >
                      <div className="text-sm font-semibold text-[#3F4541]">
                        Awards & Certification
                      </div>

                      <div className="mt-1 text-xs text-[#6F756F]">
                        Our achievements & recognition
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog */}
              <a
                href="/blog"
                className="text-sm text-[#6F756F] transition hover:text-[#3F4541]"
              >
                Blog
              </a>

              {/* Get Started */}
              <a
                href="/contact"
                className="rounded-full bg-[#E6A21A] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.18)] transition hover:-translate-y-0.5 hover:bg-[#D8940F]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
                menuOpen
                  ? "border-[#D8CEB9] bg-[#F3EBD8] text-[#3F4541]"
                  : "border-[#E4DED0] text-[#3F4541]"
              }`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-[55] mt-2 rounded-2xl border border-[#E4DED0] bg-white/95 p-3 shadow-[0_20px_50px_rgba(79,138,112,0.12)] backdrop-blur-xl md:hidden sm:p-4"
            >
              <div className="flex flex-col gap-1.5">
                {/* Home */}
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-[#F3EBD8] px-4 py-3 text-left font-medium text-[#3F4541] transition hover:bg-[#E8DEC3]"
                >
                  Home
                </a>

                {/* Solutions */}
                <a
                  href="/solutions"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-left text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Solutions
                </a>

                {/* About */}
                <a
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-left text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  About
                </a>

                {/* Board */}
                <a
                  href="/about/board-of-directors"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-left text-sm text-[#7D857F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Board of Directors
                </a>

                {/* Awards */}
                <a
                  href="/about/awards"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-left text-sm text-[#7D857F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Awards & Certification
                </a>

                {/* Blog */}
                <a
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-left text-[#6F756F] transition hover:bg-[#F3EBD8] hover:text-[#3F4541]"
                >
                  Blog
                </a>

                {/* Get Started */}
                <a
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-xl bg-[#E6A21A] px-4 py-3 text-center font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.16)] transition hover:bg-[#D8940F]"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="solar-background solar-grid relative flex min-h-screen items-center bg-[#FBFAF5] pt-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#F6C85F]/25 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-2">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4DED0] bg-[#F3EBD8] px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E6A21A]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5D665F]">
                Powering a cleaner tomorrow
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-tight text-[#3F4541] sm:text-6xl md:text-7xl">
              Turn sunlight
              <br />
              into{" "}
              <span className="italic text-[#E6A21A]">
                possibility.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#6F756F] md:text-lg">
              Smart solar solutions for homes, businesses and large-scale
              projects. Generate clean energy while building a more
              sustainable future.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/solutions"
                className="solar-button inline-flex items-center justify-center gap-2 rounded-full bg-[#E6A21A] px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(230,162,26,0.18)] transition hover:bg-[#D8940F]"
              >
                Explore Solutions
                <ArrowRight size={18} />
              </a>

              <a
                href="/about"
                className="solar-button inline-flex items-center justify-center gap-2 rounded-full border border-[#DCD4C4] bg-white px-6 py-3.5 font-semibold text-[#3F4541] backdrop-blur transition hover:bg-[#F3EBD8]"
              >
                About SolarNova
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-[#E4DED0] pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl text-[#4F8A70] md:text-3xl">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-[10px] uppercase tracking-wider text-[#7D857F]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="solar-orbit absolute -inset-8 hidden md:block" />
            <div className="solar-orbit-dashed absolute -inset-16 hidden md:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#E4DED0] bg-white p-2 shadow-[0_25px_60px_rgba(79,138,112,0.12)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={images.rooftop}
                  alt="Solar rooftop"
                  className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 md:h-[540px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3F4541]/35 via-transparent to-transparent" />

                {/* Energy Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/90 p-4 text-[#3F4541] backdrop-blur-xl md:left-6 md:right-auto md:w-72">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-[#7D857F]">
                        Energy generated
                      </div>

                      <div className="mt-1 font-display text-2xl">
                        8.42{" "}
                        <span className="font-mono text-xs text-[#7D857F]">
                          kWh
                        </span>
                      </div>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E6A21A] text-white shadow-[0_6px_20px_rgba(230,162,26,0.20)]">
                      <Zap size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sun */}
            <div className="animate-sun-pulse absolute -right-5 -top-5 hidden h-16 w-16 items-center justify-center rounded-full bg-[#F6C85F] text-[#8A5B00] md:flex">
              <Sun size={30} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section
        id="solutions"
        className="relative bg-[#F3EBD8] py-24 text-[#3F4541]"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7D857F]">
              01 / Solar Solutions
            </div>

            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Energy solutions
              <br />
              <span className="italic text-[#4F8A70]">
                for every scale.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#6F756F]">
              From individual homes to massive solar farms, our systems are
              designed to make clean energy practical and accessible.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Solar Home */}
            <motion.a
              href="/solutions"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group block overflow-hidden rounded-[2rem] border border-[#E4DED0] bg-white text-[#3F4541] shadow-[0_15px_40px_rgba(79,138,112,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(79,138,112,0.14)] focus:outline-none focus:ring-2 focus:ring-[#E6A21A]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={images.home}
                  alt="Solar Home"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3F4541]/45 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[#4F8A70] shadow-sm">
                  Residential
                </div>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E6A21A] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight size={18} />
                </div>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-3xl">
                    Solar Home
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4DED0] text-[#4F8A70] transition group-hover:border-[#E6A21A] group-hover:text-[#E6A21A]">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <p className="leading-7 text-[#6F756F]">
                  Make your home energy independent with rooftop solar,
                  intelligent monitoring and efficient energy storage.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#4F8A70]">
                  <CheckCircle2 size={16} />
                  Reduce electricity costs
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9A8B6A] transition group-hover:text-[#E6A21A]">
                  Explore Solution
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>

            {/* Solar Farm */}
            <motion.a
              href="/solutions"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group block overflow-hidden rounded-[2rem] border border-[#D7E3DC] bg-[#E7F0EB] text-[#3F4541] shadow-[0_15px_40px_rgba(79,138,112,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(79,138,112,0.14)] focus:outline-none focus:ring-2 focus:ring-[#E6A21A]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={images.farm}
                  alt="Solar Farm"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#315B4A]/45 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[#4F8A70] shadow-sm">
                  Large Scale
                </div>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E6A21A] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight size={18} />
                </div>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-3xl">
                    Solar Farm
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9DCCF] text-[#4F8A70] transition group-hover:border-[#E6A21A] group-hover:text-[#E6A21A]">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <p className="leading-7 text-[#6F756F]">
                  Large-scale solar infrastructure engineered for efficient
                  energy generation and long-term performance.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#4F8A70]">
                  <CheckCircle2 size={16} />
                  High-capacity generation
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C9688] transition group-hover:text-[#E6A21A]">
                  Explore Solution
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section
        id="technology"
        className="solar-background bg-[#FFFDF7] py-24 text-[#3F4541]"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-[#F6C85F]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#E4DED0] bg-white p-2 shadow-[0_20px_50px_rgba(79,138,112,0.10)]">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={images.installation}
                    alt="Solar Installation"
                    className="h-[500px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3F4541]/35 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/85 p-5 text-[#3F4541] backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6A21A] text-white shadow-[0_6px_20px_rgba(230,162,26,0.18)]">
                        <Zap size={23} fill="currentColor" />
                      </div>

                      <div>
                        <div className="font-semibold">
                          Smart Solar System
                        </div>

                        <div className="mt-1 text-xs text-[#7D857F]">
                          Efficient. Intelligent. Sustainable.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8B918C]">
                02 / Technology
              </div>

              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                Built around
                <br />
                <span className="italic text-[#4F8A70]">
                  your energy.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-[#6F756F]">
                SolarNova combines modern photovoltaic technology, smart
                monitoring and energy storage to create a connected energy
                system.
              </p>

              <div className="mt-10 space-y-7">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex gap-5 border-b border-[#E4DED0] pb-7 last:border-0"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E4DED0] bg-[#F3EBD8] text-[#E6A21A]">
                        <Icon size={21} />
                      </div>

                      <div>
                        <div className="mb-1 flex items-center gap-3">
                          <span className="font-mono text-[9px] text-[#B1A890]">
                            0{index + 1}
                          </span>

                          <h3 className="font-semibold text-[#3F4541]">
                            {feature.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-6 text-[#7D857F]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section
        id="impact"
        className="bg-[#E7F0EB] py-24 text-[#3F4541]"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7D857F]">
                03 / Our Impact
              </div>

              <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none md:text-7xl">
                The future is
                <br />
                <span className="italic text-[#E6A21A]">
                  already shining.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#6F756F]">
                Every solar panel installed is another step toward cleaner
                energy, lower emissions and a more resilient energy future.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4F8A70] text-white shadow-[0_8px_20px_rgba(79,138,112,0.18)]">
                  <Leaf size={21} />
                </div>

                <span className="font-semibold text-[#3F4541]">
                  Better energy. Better planet.
                </span>
              </div>
            </div>

            {/* Impact Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#D7E3DC] bg-white p-2 shadow-[0_20px_50px_rgba(79,138,112,0.10)]">
                <img
                  src={images.farm}
                  alt="Large scale solar farm"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-5 text-[#3F4541] shadow-[0_15px_40px_rgba(79,138,112,0.14)]">
                <div className="font-display text-3xl text-[#E6A21A]">
                  24/7
                </div>

                <div className="mt-1 text-xs text-[#7D857F]">
                  Energy monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#F3EBD8] py-28 text-[#3F4541]"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C85F]/25 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#F6C85F] text-[#8A5B00] shadow-[0_0_60px_rgba(230,162,26,0.20)]">
            <Sun size={30} />
          </div>

          <h2 className="font-display text-5xl leading-none md:text-7xl">
            Ready to make the
            <br />
            <span className="italic text-[#E6A21A]">
              switch?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-[#6F756F]">
            Start your journey toward cleaner, smarter and more independent
            energy.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="solar-button inline-flex items-center gap-2 rounded-full bg-[#E6A21A] px-7 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(230,162,26,0.18)] transition hover:bg-[#D8940F]"
            >
              Talk To Us
              <ArrowRight size={18} />
            </a>

            <button
              onClick={() => scrollTo("home")}
              className="solar-button rounded-full border border-[#D8CEB9] bg-white px-7 py-4 font-semibold text-[#3F4541] transition hover:bg-[#FFFDF7]"
            >
              Back To Top
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E4DED0] bg-[#FBFAF5] text-[#3F4541]">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E6A21A] text-white shadow-[0_6px_18px_rgba(230,162,26,0.16)]">
                  <Sun size={19} />
                </div>

                <span className="font-display text-lg">
                  SolarNova
                </span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#7D857F]">
                Smart solar solutions for homes, businesses and large-scale
                projects. Building a cleaner and more sustainable future.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-[#6F756F]">
                <span className="h-2 w-2 rounded-full bg-[#E6A21A]" />
                Solar powered future
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7D857F]">
                Explore
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  Home
                </a>

                <a
                  href="/solutions"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  Solutions
                </a>

                <a
                  href="/about"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  About
                </a>

                <a
                  href="/about/board-of-directors"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  Board of Directors
                </a>

                <a
                  href="/about/awards"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  Awards & Certification
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7D857F]">
                Resources
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/blog"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  Blog
                </a>

                <a
                  href="/contact"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  Contact
                </a>

                <a
                  href="/solutions"
                  className="text-sm text-[#7D857F] transition hover:text-[#E6A21A]"
                >
                  Solar Solutions
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#E4DED0] pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-[#9A9F9B]">
              © {new Date().getFullYear()} SolarNova. Clean energy for a
              brighter future.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#6F756F] transition hover:text-[#E6A21A]"
            >
              Get Started
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}