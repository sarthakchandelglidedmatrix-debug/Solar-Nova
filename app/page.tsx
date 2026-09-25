
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BatteryCharging,
  CheckCircle2,
  Leaf,
  Menu,
  ShieldCheck,
  Sun,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const typewriterWord = "possibility";

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
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let delay = isDeleting ? 90 : 125;

    if (!isDeleting && typedWord === typewriterWord) {
      delay = 1400;
    } else if (isDeleting && typedWord === "") {
      delay = 600;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedWord === typewriterWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedWord === "") {
        setIsDeleting(false);
        return;
      }

      const nextLength = isDeleting
        ? Math.max(0, typedWord.length - 1)
        : typedWord.length + 1;

      setTypedWord(typewriterWord.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [typedWord, isDeleting]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFCFA] text-[#26352D]">

      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5 sm:py-4 md:px-8">
          <nav
            className={`relative z-[60] flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5 sm:py-4 ${
              menuOpen
                ? "border-[#E2E8E1] bg-white/95"
                : "border-[#E2E8E1] bg-white/85"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8B92E] text-white shadow-[0_6px_20px_rgba(230,162,26,0.22)] sm:h-10 sm:w-10">
                <Sun size={21} strokeWidth={2.5} />
              </div>

              <div className="min-w-0 text-left">
                <div className="font-display text-lg font-semibold tracking-tight text-[#3F4541] sm:text-xl">
                  Solar<span className="text-[#E6A21A]">Nova</span>
                </div>

                <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#69736D] sm:text-[9px] sm:tracking-[0.25em]">
                  Clean Energy
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="/"
                className="text-sm font-medium text-[#26352D] transition hover:text-[#E8B92E]"
              >
                Home
              </a>

              <a
                href="/solutions"
                className="text-sm text-[#69736D] transition hover:text-[#26352D]"
              >
                Solutions
              </a>

              {/* About Dropdown */}
              <div className="group relative py-6">
                <a
                  href="/about"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#3F4541]"
                >
                  About

                  <span className="text-[9px] text-[#E6A21A] transition-transform duration-200 group-hover:rotate-180">
                    ▼
                  </span>
                </a>

                <div className="pointer-events-none invisible absolute left-1/2 top-[62px] w-[245px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-[#E4DED0] bg-[#FBFAF5]/95 p-2 shadow-xl shadow-[#4F8A70]/10 backdrop-blur-xl">

                    {/* About Us */}
                    <a
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
                    </a>

                    {/* Board */}
                    <a
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
                    </a>

                    {/* Awards */}
                    <a
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
                    </a>

                  </div>
                </div>
              </div>

              <a
                href="/blog"
                className="text-sm text-[#69736D] transition hover:text-[#26352D]"
              >
                Blog
              </a>

              {/* Get Started -> Get Free Demo */}
              <a
                href="/get-free-demo"
                className="rounded-full bg-[#E8B92E] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.18)] transition hover:-translate-y-0.5 hover:bg-[#D49B16]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
                menuOpen
                  ? "border-[#D5DED5] bg-[#F3F7F1] text-[#26352D]"
                  : "border-[#E2E8E1] text-[#26352D]"
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
              className="relative z-[55] mt-2 rounded-2xl border border-[#E2E8E1] bg-white/95 p-3 shadow-[0_20px_50px_rgba(79,138,112,0.12)] backdrop-blur-xl md:hidden sm:p-4"
            >
              <div className="flex flex-col gap-1.5">
                <a
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-[#F3F7F1] px-4 py-3 text-left font-medium text-[#26352D] transition hover:bg-[#E7EBDD]"
                >
                  Home
                </a>

                <a
                  href="/solutions"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-left text-[#69736D] transition hover:bg-[#F3F7F1] hover:text-[#26352D]"
                >
                  Solutions
                </a>

                {/* About Us */}
                <a
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-[#F3EBD8] px-4 py-3 text-left text-[#3F4541] transition hover:bg-[#EDE2C8]"
                >
                  <div className="flex items-center gap-3">
                    <Leaf className="h-4 w-4 text-[#4F8A70]" />

                    <div>
                      <div className="text-sm font-medium">
                        About Us
                      </div>

                      <div className="mt-0.5 text-[11px] text-[#8B908A]">
                        About SolarNova
                      </div>
                    </div>
                  </div>
                </a>

                {/* Board of Directors */}
                <a
                  href="/about/board-of-directors"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-left text-sm text-[#737C76] transition hover:bg-[#F3F7F1] hover:text-[#26352D]"
                >
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-[#4F8A70]" />

                    <span>
                      Board of Directors
                    </span>
                  </div>
                </a>

                {/* Awards */}
                <a
                  href="/about/awards"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 pl-8 text-left text-sm text-[#737C76] transition hover:bg-[#F3F7F1] hover:text-[#26352D]"
                >
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-[#E6A21A]" />

                    <span>
                      Awards & Certification
                    </span>
                  </div>
                </a>

                <a
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-left text-[#69736D] transition hover:bg-[#F3F7F1] hover:text-[#26352D]"
                >
                  Blog
                </a>

                {/* Get Started -> Get Free Demo */}
                <a
                  href="/get-free-demo"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-xl bg-[#E8B92E] px-4 py-3 text-center font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.16)] transition hover:bg-[#D49B16]"
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
        className="solar-background solar-grid relative flex min-h-[100svh] items-center bg-[#FAFCFA] pt-24 pb-6 sm:pt-28 md:pt-28 md:pb-8"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-8 sm:gap-10 sm:py-10 md:px-8 md:py-8 lg:grid-cols-2 lg:gap-12">

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8E1] bg-[#F3F7F1] px-4 py-2 sm:mb-5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E8B92E]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#56635B] sm:text-[10px] sm:tracking-[0.2em]">
                Powering a cleaner tomorrow
              </span>
            </div>

            <h1 className="max-w-3xl font-display text-4xl leading-[0.95] tracking-tight text-[#26352D] sm:text-5xl md:text-6xl lg:text-7xl">
              Turn sunlight
              <br />

              <span className="inline-flex min-h-[1em] items-baseline gap-3 italic text-[#E8B92E]">
                <span className="text-[#2F7A4B]">into</span>
                <span>{typedWord}</span>

                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.08em] rounded-full bg-[#E8B92E]"
                />
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-[#69736D] sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
              Smart solar solutions for homes, businesses and large-scale
              projects. Generate clean energy while building a more
              sustainable future.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <a
                href="/solutions"
                className="solar-button inline-flex items-center justify-center gap-2 rounded-full bg-[#E8B92E] px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(230,162,26,0.18)] transition hover:bg-[#D49B16]"
              >
                Explore Solutions
                <ArrowRight size={18} />
              </a>

              <a
                href="/about"
                className="solar-button inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E2DA] bg-white px-6 py-3.5 font-semibold text-[#26352D] backdrop-blur transition hover:bg-[#F3F7F1]"
              >
                About SolarNova
              </a>
            </div>

            {/* Stats */}
            <div className="mt-7 grid max-w-lg grid-cols-3 gap-3 border-t border-[#E2E8E1] pt-5 sm:mt-8 sm:gap-4 sm:pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-xl text-[#2F7A4B] sm:text-2xl md:text-3xl">
                    {stat.value}
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-wider text-[#737C76] sm:text-[10px]">
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
            <div className="solar-orbit absolute -inset-6 hidden md:block lg:-inset-8" />
            <div className="solar-orbit-dashed absolute -inset-12 hidden md:block lg:-inset-16" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8E1] bg-white p-2 shadow-[0_25px_60px_rgba(79,138,112,0.12)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={images.rooftop}
                  alt="Solar rooftop"
                  className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[360px] md:h-[430px] lg:h-[min(62vh,540px)]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#26352D]/35 via-transparent to-transparent" />

                {/* Energy Card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/90 p-3.5 text-[#26352D] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-4 md:left-6 md:right-auto md:w-72">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[8px] uppercase tracking-widest text-[#737C76] sm:text-[9px]">
                        Energy generated
                      </div>

                      <div className="mt-1 font-display text-xl sm:text-2xl">
                        8.42{" "}
                        <span className="font-mono text-[10px] text-[#737C76] sm:text-xs">
                          kWh
                        </span>
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8B92E] text-white shadow-[0_6px_20px_rgba(230,162,26,0.20)] sm:h-11 sm:w-11">
                      <Zap size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sun */}
            <div className="animate-sun-pulse absolute -right-5 -top-5 hidden h-16 w-16 items-center justify-center rounded-full bg-[#F4D35E] text-[#735C0A] md:flex">
              <Sun size={30} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section
        id="solutions"
        className="relative bg-[#F3F7F1] py-24 text-[#26352D]"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#737C76]">
              01 / Solar Solutions
            </div>

            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Energy solutions
              <br />
              <span className="italic text-[#2F7A4B]">
                for every scale.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#69736D]">
              From individual homes to massive solar farms, our systems are
              designed to make clean energy practical and accessible.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Solar Home */}
            <motion.a
              href="/solutions"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group block overflow-hidden rounded-[2rem] border border-[#E2E8E1] bg-white text-[#26352D] shadow-[0_15px_40px_rgba(79,138,112,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(79,138,112,0.14)] focus:outline-none focus:ring-2 focus:ring-[#E8B92E]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={images.home}
                  alt="Solar Home"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#26352D]/45 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[#2F7A4B] shadow-sm">
                  Residential
                </div>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8B92E] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight size={18} />
                </div>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-3xl">
                    Solar Home
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8E1] text-[#2F7A4B] transition group-hover:border-[#E8B92E] group-hover:text-[#E8B92E]">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <p className="leading-7 text-[#69736D]">
                  Make your home energy independent with rooftop solar,
                  intelligent monitoring and efficient energy storage.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#2F7A4B]">
                  <CheckCircle2 size={16} />
                  Reduce electricity costs
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#85733A] transition group-hover:text-[#E8B92E]">
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
              className="group block overflow-hidden rounded-[2rem] border border-[#DCEBE1] bg-[#EAF4EC] text-[#26352D] shadow-[0_15px_40px_rgba(79,138,112,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(79,138,112,0.14)] focus:outline-none focus:ring-2 focus:ring-[#E8B92E]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={images.farm}
                  alt="Solar Farm"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1F5C3A]/45 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[#2F7A4B] shadow-sm">
                  Large Scale
                </div>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8B92E] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight size={18} />
                </div>
              </div>

              <div className="p-7">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-3xl">
                    Solar Farm
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CDE1D3] text-[#2F7A4B] transition group-hover:border-[#E8B92E] group-hover:text-[#E8B92E]">
                    <ArrowRight size={18} />
                  </div>
                </div>

                <p className="leading-7 text-[#69736D]">
                  Large-scale solar infrastructure engineered for efficient
                  energy generation and long-term performance.
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#2F7A4B]">
                  <CheckCircle2 size={16} />
                  High-capacity generation
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#708879] transition group-hover:text-[#E8B92E]">
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
        className="solar-background bg-[#FFFFFF] py-24 text-[#26352D]"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-[#F4D35E]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8E1] bg-white p-2 shadow-[0_20px_50px_rgba(79,138,112,0.10)]">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={images.installation}
                    alt="Solar Installation"
                    className="h-[500px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#26352D]/35 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/85 p-5 text-[#26352D] backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8B92E] text-white shadow-[0_6px_20px_rgba(230,162,26,0.18)]">
                        <Zap size={23} fill="currentColor" />
                      </div>

                      <div>
                        <div className="font-semibold">
                          Smart Solar System
                        </div>

                        <div className="mt-1 text-xs text-[#737C76]">
                          Efficient. Intelligent. Sustainable.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#848C87]">
                02 / Technology
              </div>

              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
                Built around
                <br />
                <span className="italic text-[#2F7A4B]">
                  your energy.
                </span>
              </h2>

              <p className="mt-6 leading-7 text-[#69736D]">
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
                      className="flex gap-5 border-b border-[#E2E8E1] pb-7 last:border-0"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E2E8E1] bg-[#F3F7F1] text-[#E8B92E]">
                        <Icon size={21} />
                      </div>

                      <div>
                        <div className="mb-1 flex items-center gap-3">
                          <span className="font-mono text-[9px] text-[#9BA38E]">
                            0{index + 1}
                          </span>

                          <h3 className="font-semibold text-[#26352D]">
                            {feature.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-6 text-[#737C76]">
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
        className="bg-[#EAF4EC] py-24 text-[#26352D]"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#737C76]">
                03 / Our Impact
              </div>

              <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none md:text-7xl">
                The future is
                <br />
                <span className="italic text-[#E8B92E]">
                  already shining.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#69736D]">
                Every solar panel installed is another step toward cleaner
                energy, lower emissions and a more resilient energy future.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2F7A4B] text-white shadow-[0_8px_20px_rgba(79,138,112,0.18)]">
                  <Leaf size={21} />
                </div>

                <span className="font-semibold text-[#26352D]">
                  Better energy. Better planet.
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#DCEBE1] bg-white p-2 shadow-[0_20px_50px_rgba(79,138,112,0.10)]">
                <img
                  src={images.farm}
                  alt="Large scale solar farm"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-5 text-[#26352D] shadow-[0_15px_40px_rgba(79,138,112,0.14)]">
                <div className="font-display text-3xl text-[#E8B92E]">
                  24/7
                </div>

                <div className="mt-1 text-xs text-[#737C76]">
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
        className="relative overflow-hidden bg-[#F3F7F1] py-28 text-[#26352D]"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4D35E]/25 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4D35E] text-[#735C0A] shadow-[0_0_60px_rgba(230,162,26,0.20)]">
            <Sun size={30} />
          </div>

          <h2 className="font-display text-5xl leading-none md:text-7xl">
            Ready to make the
            <br />
            <span className="italic text-[#E8B92E]">
              switch?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-[#69736D]">
            Start your journey toward cleaner, smarter and more independent
            energy.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="solar-button inline-flex items-center gap-2 rounded-full bg-[#E8B92E] px-7 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(230,162,26,0.18)] transition hover:bg-[#D49B16]"
            >
              Talk To Us
              <ArrowRight size={18} />
            </a>

            <button
              onClick={() => scrollTo("home")}
              className="solar-button rounded-full border border-[#D5DED5] bg-white px-7 py-4 font-semibold text-[#26352D] transition hover:bg-[#FFFFFF]"
            >
              Back To Top
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E2E8E1] bg-[#FAFCFA] text-[#26352D]">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="grid gap-10 md:grid-cols-4">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8B92E] text-white shadow-[0_6px_18px_rgba(230,162,26,0.16)]">
                  <Sun size={19} />
                </div>

                <span className="font-display text-lg">
                  SolarNova
                </span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#737C76]">
                Smart solar solutions for homes, businesses and large-scale
                projects. Building a cleaner and more sustainable future.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-[#69736D]">
                <span className="h-2 w-2 rounded-full bg-[#E8B92E]" />
                Solar powered future
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#737C76]">
                Explore
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Home
                </a>

                <a
                  href="/solutions"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Solutions
                </a>

                <a
                  href="/about"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  About
                </a>

                <a
                  href="/about/board-of-directors"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Board of Directors
                </a>

                <a
                  href="/about/awards"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Awards & Certification
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#737C76]">
                Resources
              </div>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/blog"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Blog
                </a>

                <a
                  href="/contact"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Contact
                </a>

                <a
                  href="/solutions"
                  className="text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Solar Solutions
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#E2E8E1] pt-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-[#929A95]">
              © {new Date().getFullYear()} SolarNova. Clean energy for a
              brighter future.
            </p>

            {/* Get Started -> Get Free Demo */}
            <a
              href="/get-free-demo"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#69736D] transition hover:text-[#E8B92E]"
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
