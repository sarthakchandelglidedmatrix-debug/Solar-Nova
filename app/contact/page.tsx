
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Award, Users } from "lucide-react";

const carouselImages = [
  "/solar/Solar Rooftop.jpg",
  "/solar/Solar Home.jpg",
  "/solar/Solar Farm.jpg",
];

export default function ContactPage() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FBFAF5] text-[#3F4541]">
      {/* Ambient Solar Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F6C85F]/20 blur-3xl" />
        <div className="absolute -right-32 top-[35%] h-96 w-96 rounded-full bg-[#4F8A70]/10 blur-3xl" />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="border-b border-[#E4DED0] bg-[#FBFAF5]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6A21A] text-xl text-white shadow-lg shadow-[#E6A21A]/20">
              ☀
            </div>

            <div>
              <div className="text-xl font-semibold text-[#3F4541]">
                SolarNova
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#6F756F]">
                Clean Energy
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#E4DED0] bg-white px-5 py-2.5 text-sm font-semibold text-[#4F8A70] transition hover:border-[#E6A21A] hover:bg-[#F6C85F]/10 hover:text-[#3F4541]"
          >
            Back To Home
          </Link>
        </div>
      </nav>

      {/* ================= TOP IMAGE ================= */}
      <section className="w-full">
        <div className="relative h-[280px] w-full overflow-hidden md:h-[420px]">
          <img
            src="/solar/Solar Contact.jpg"
            alt="Solar panels"
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FBFAF5]/65 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-5 md:bottom-12 md:left-8">
            <div className="rounded-2xl border border-white/60 bg-white/75 px-5 py-4 shadow-lg backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4F8A70]">
                SolarNova
              </p>

              <p className="mt-1 text-lg font-semibold text-[#3F4541] md:text-xl">
                Let&apos;s build a cleaner future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left Content */}
          <div className="flex max-w-2xl flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F8A70]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.1] text-[#3F4541] md:text-5xl lg:text-6xl">
              Start your journey towards{" "}
              <span className="text-[#E6A21A]">clean energy.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#6F756F] md:text-lg">
              Have questions about solar panels, installation, savings or
              energy solutions? Our team is ready to help you find the right
              solar solution for your home or business.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8B918B]">
                  Email
                </p>

                <p className="mt-2 text-sm text-[#3F4541]">
                  hello@solarnova.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8B918B]">
                  Phone
                </p>

                <p className="mt-2 text-sm text-[#3F4541]">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8B918B]">
                  Location
                </p>

                <p className="mt-2 text-sm text-[#3F4541]">
                  Dehradun, India
                </p>
              </div>
            </div>

            <div className="mt-14 border-t border-[#E4DED0] pt-8">
              <p className="text-sm leading-6 text-[#6F756F]">
                From residential rooftops to large-scale solar projects,
                SolarNova helps turn sunlight into reliable and sustainable
                energy.
              </p>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-3xl border border-[#E4DED0] bg-white p-6 shadow-xl shadow-[#4F8A70]/5 md:p-8">
            <div className="mb-1 h-1.5 w-14 rounded-full bg-[#E6A21A]" />

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#4F8A70]">
              Contact Us
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#3F4541]">
              Tell us about your project.
            </h3>

            <form
              action="mailto:hello@solarnova.com"
              method="POST"
              encType="text/plain"
              className="mt-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-[#6F756F]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#E4DED0] bg-[#FBFAF5] px-4 py-3.5 text-sm text-[#3F4541] outline-none transition placeholder:text-[#A1A59F] focus:border-[#4F8A70] focus:bg-white focus:ring-2 focus:ring-[#4F8A70]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-[#6F756F]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-[#E4DED0] bg-[#FBFAF5] px-4 py-3.5 text-sm text-[#3F4541] outline-none transition placeholder:text-[#A1A59F] focus:border-[#4F8A70] focus:bg-white focus:ring-2 focus:ring-[#4F8A70]/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm text-[#6F756F]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="Phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#E4DED0] bg-[#FBFAF5] px-4 py-3.5 text-sm text-[#3F4541] outline-none transition placeholder:text-[#A1A59F] focus:border-[#4F8A70] focus:bg-white focus:ring-2 focus:ring-[#4F8A70]/10"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm text-[#6F756F]">
                  Location
                </label>

                <input
                  type="text"
                  name="Location"
                  required
                  placeholder="Enter your city / location"
                  className="w-full rounded-xl border border-[#E4DED0] bg-[#FBFAF5] px-4 py-3.5 text-sm text-[#3F4541] outline-none transition placeholder:text-[#A1A59F] focus:border-[#4F8A70] focus:bg-white focus:ring-2 focus:ring-[#4F8A70]/10"
                />
              </div>

              {/* Solar Requirement */}
              <div>
                <label className="mb-2 block text-sm text-[#6F756F]">
                  Solar Requirement
                </label>

                <select
                  name="Solar Requirement"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[#E4DED0] bg-[#FBFAF5] px-4 py-3.5 text-sm text-[#3F4541] outline-none transition focus:border-[#4F8A70] focus:bg-white focus:ring-2 focus:ring-[#4F8A70]/10"
                >
                  <option value="" disabled>
                    Select your requirement
                  </option>

                  <option value="Residential Solar">
                    Residential Solar
                  </option>

                  <option value="Commercial Solar">
                    Commercial Solar
                  </option>

                  <option value="Industrial Solar">
                    Industrial Solar
                  </option>

                  <option value="Solar Installation">
                    Solar Installation
                  </option>

                  <option value="Solar Consultation">
                    Solar Consultation
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-[#6F756F]">
                  Message
                </label>

                <textarea
                  name="Message"
                  required
                  rows={4}
                  placeholder="Tell us about your solar requirement..."
                  className="w-full resize-none rounded-xl border border-[#E4DED0] bg-[#FBFAF5] px-4 py-3.5 text-sm text-[#3F4541] outline-none transition placeholder:text-[#A1A59F] focus:border-[#4F8A70] focus:bg-white focus:ring-2 focus:ring-[#4F8A70]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#E6A21A] px-6 py-4 font-semibold text-white shadow-lg shadow-[#E6A21A]/20 transition hover:-translate-y-0.5 hover:bg-[#D8920E]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA + CAROUSEL ================= */}
      <section className="border-t border-[#E4DED0] bg-[#F3EBD8] px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* CTA Text */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F8A70]">
              SolarNova
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.05] text-[#3F4541] md:text-5xl lg:text-6xl">
              Ready to make the switch to{" "}
              <span className="text-[#E6A21A]">solar?</span>
            </h2>

            <p className="mt-6 leading-7 text-[#6F756F]">
              Build a cleaner, smarter and more sustainable energy future with
              SolarNova.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-[#4F8A70] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#4F8A70]/20 transition hover:scale-105 hover:bg-[#42745E]"
            >
              Explore SolarNova →
            </Link>
          </div>

          {/* Carousel */}
          <div className="w-full min-w-0">
            <div className="relative w-full overflow-hidden rounded-3xl border border-[#E4DED0] bg-white shadow-xl shadow-[#4F8A70]/10">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <div
                  className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentImage * 100}%)`,
                  }}
                >
                  {carouselImages.map((image, index) => (
                    <div
                      key={image}
                      className="relative h-full w-full flex-[0_0_100%]"
                    >
                      <img
                        src={image}
                        alt={`Solar energy solution ${index + 1}`}
                        className="absolute inset-0 h-full w-full object-cover"
                        draggable="false"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#3F4541]/45 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Previous */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/80 text-[#3F4541] shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white sm:left-4 sm:h-11 sm:w-11"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/80 text-[#3F4541] shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-white sm:right-4 sm:h-11 sm:w-11"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#3F4541] shadow-md backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:py-2">
                  {currentImage + 1} / {carouselImages.length}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-5 flex justify-center gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-8 bg-[#E6A21A]"
                      : "w-2 bg-[#C9C3B5] hover:bg-[#4F8A70]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E4DED0] bg-[#FBFAF5]">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6A21A] text-xl text-white shadow-md shadow-[#E6A21A]/20">
                  ☀
                </div>

                <div>
                  <div className="text-xl font-semibold text-[#3F4541]">
                    SolarNova
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#6F756F]">
                    Clean Energy
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-xs text-xs leading-6 text-[#6F756F]">
                Practical solar solutions for homes, businesses and
                large-scale energy projects.
              </p>
            </div>

            {/* Explore */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#4F8A70]">
                Explore
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <Link
                  href="/"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#4F8A70]">
                Company
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="flex items-center gap-2 text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  <Users className="h-3.5 w-3.5" />
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="flex items-center gap-2 text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  <Award className="h-3.5 w-3.5" />
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-[#6F756F] transition hover:text-[#E6A21A]"
                >
                  About SolarNova
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#E4DED0] pt-6 md:flex-row md:items-center">
            <p className="text-[11px] text-[#8B918B]">
              © {new Date().getFullYear()} SolarNova. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/solutions"
                className="text-[11px] text-[#8B918B] transition hover:text-[#E6A21A]"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                className="text-[11px] text-[#8B918B] transition hover:text-[#E6A21A]"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-[11px] text-[#8B918B] transition hover:text-[#E6A21A]"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-[11px] text-[#8B918B] transition hover:text-[#E6A21A]"
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