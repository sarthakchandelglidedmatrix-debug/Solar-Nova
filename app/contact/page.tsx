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
    <main className="min-h-screen bg-[#F8F7F1] text-[#024827]">
      {/* ================= NAVBAR ================= */}
      <nav className="border-b border-[#D9E4D2] bg-[#F8F7F1]/95 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDEC80] text-xl text-[#024827]">
              ☀
            </div>

            <div>
              <div className="text-xl font-semibold text-[#024827]">
                SolarNova
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#0A572A]">
                Clean Energy
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#D9E4D2] px-5 py-2.5 text-sm font-semibold text-[#45604D] transition hover:border-[#8EB568] hover:text-[#0A572A]"
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

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F7F1]/55 via-transparent to-transparent" />
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left Content */}
          <div className="flex max-w-2xl flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A572A]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.1] text-[#024827] md:text-5xl lg:text-6xl">
              Start your journey towards clean energy.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#45604D] md:text-lg">
              Have questions about solar panels, installation, savings or
              energy solutions? Our team is ready to help you find the right
              solar solution for your home or business.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6B7D70]">
                  Email
                </p>

                <p className="mt-2 text-sm text-[#45604D]">
                  hello@solarnova.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6B7D70]">
                  Phone
                </p>

                <p className="mt-2 text-sm text-[#45604D]">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6B7D70]">
                  Location
                </p>

                <p className="mt-2 text-sm text-[#45604D]">
                  Dehradun, India
                </p>
              </div>
            </div>

            <div className="mt-14 border-t border-[#D9E4D2] pt-8">
              <p className="text-sm leading-6 text-[#6B7D70]">
                From residential rooftops to large-scale solar projects,
                SolarNova helps turn sunlight into reliable and sustainable
                energy.
              </p>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-3xl border border-[#D9E4D2] bg-[#F3F6EE] p-6 shadow-xl md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A572A]">
              Contact Us
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#024827]">
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
                <label className="mb-2 block text-sm text-[#45604D]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#D9E4D2] bg-[#F8F7F1] px-4 py-3.5 text-sm text-[#024827] outline-none transition placeholder:text-[#6B7D70] focus:border-[#8EB568] focus:ring-1 focus:ring-[#8EB568]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-[#45604D]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-[#D9E4D2] bg-[#F8F7F1] px-4 py-3.5 text-sm text-[#024827] outline-none transition placeholder:text-[#6B7D70] focus:border-[#8EB568] focus:ring-1 focus:ring-[#8EB568]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm text-[#45604D]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="Phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#D9E4D2] bg-[#F8F7F1] px-4 py-3.5 text-sm text-[#024827] outline-none transition placeholder:text-[#6B7D70] focus:border-[#8EB568] focus:ring-1 focus:ring-[#8EB568]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm text-[#45604D]">
                  Location
                </label>

                <input
                  type="text"
                  name="Location"
                  required
                  placeholder="Enter your city / location"
                  className="w-full rounded-xl border border-[#D9E4D2] bg-[#F8F7F1] px-4 py-3.5 text-sm text-[#024827] outline-none transition placeholder:text-[#6B7D70] focus:border-[#8EB568] focus:ring-1 focus:ring-[#8EB568]"
                />
              </div>

              {/* Solar Requirement */}
              <div>
                <label className="mb-2 block text-sm text-[#45604D]">
                  Solar Requirement
                </label>

                <select
                  name="Solar Requirement"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[#D9E4D2] bg-[#F8F7F1] px-4 py-3.5 text-sm text-[#024827] outline-none transition focus:border-[#8EB568] focus:ring-1 focus:ring-[#8EB568]"
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
                <label className="mb-2 block text-sm text-[#45604D]">
                  Message
                </label>

                <textarea
                  name="Message"
                  required
                  rows={4}
                  placeholder="Tell us about your solar requirement..."
                  className="w-full resize-none rounded-xl border border-[#D9E4D2] bg-[#F8F7F1] px-4 py-3.5 text-sm text-[#024827] outline-none transition placeholder:text-[#6B7D70] focus:border-[#8EB568] focus:ring-1 focus:ring-[#8EB568]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#0A572A] px-6 py-4 font-semibold text-[#F8F7F1] transition hover:-translate-y-0.5 hover:bg-[#F4C51F] hover:text-[#024827]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA + CAROUSEL ================= */}
      <section className="border-t border-[#D9E4D2] bg-[#EEF3E8] px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* CTA Text */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0A572A]">
              SolarNova
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-[1.05] text-[#024827] md:text-5xl lg:text-6xl">
              Ready to make the switch to solar?
            </h2>

            <p className="mt-6 leading-7 text-[#45604D]">
              Build a cleaner, smarter and more sustainable energy future with
              SolarNova.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-[#0A572A] px-7 py-3.5 font-semibold text-[#F8F7F1] transition hover:scale-105 hover:bg-[#F4C51F] hover:text-[#024827]"
            >
              Explore SolarNova →
            </Link>
          </div>

          {/* Carousel */}
          <div className="w-full min-w-0">
            <div className="relative w-full overflow-hidden rounded-3xl border border-[#D9E4D2] bg-[#F3F6EE]">
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

                      <div className="absolute inset-0 bg-gradient-to-t from-[#024827]/45 via-transparent to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Previous */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F8F7F1]/60 bg-[#024827]/75 text-[#F8F7F1] backdrop-blur-md transition hover:scale-110 hover:border-[#FDEC80] hover:text-[#FDEC80] sm:left-4 sm:h-11 sm:w-11"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F8F7F1]/60 bg-[#024827]/75 text-[#F8F7F1] backdrop-blur-md transition hover:scale-110 hover:border-[#FDEC80] hover:text-[#FDEC80] sm:right-4 sm:h-11 sm:w-11"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-4 z-10 rounded-full bg-[#024827]/75 px-3 py-1.5 text-xs font-semibold text-[#F8F7F1] backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:py-2">
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
                      ? "w-8 bg-[#0A572A]"
                      : "w-2 bg-[#8EB568]/50 hover:bg-[#8EB568]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#D9E4D2] bg-[#E7EFE0]">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDEC80] text-xl text-[#024827]">
                  ☀
                </div>

                <div>
                  <div className="text-xl font-semibold text-[#024827]">
                    SolarNova
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#0A572A]">
                    Clean Energy
                  </div>
                </div>
              </Link>

              <p className="mt-4 max-w-xs text-xs leading-6 text-[#6B7D70]">
                Practical solar solutions for homes, businesses and
                large-scale energy projects.
              </p>
            </div>

            {/* Explore */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#0A572A]">
                Explore
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <Link
                  href="/"
                  className="text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Home
                </Link>

                <Link
                  href="/solutions"
                  className="text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Solutions
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#0A572A]">
                Company
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/about/board-of-directors"
                  className="flex items-center gap-2 text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  <Users className="h-3.5 w-3.5" />
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="flex items-center gap-2 text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  <Award className="h-3.5 w-3.5" />
                  Awards & Certification
                </Link>

                <Link
                  href="/about"
                  className="text-xs text-[#45604D] transition hover:text-[#0A572A]"
                >
                  About SolarNova
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#D9E4D2] pt-6 md:flex-row md:items-center">
            <p className="text-[11px] text-[#6B7D70]">
              © {new Date().getFullYear()} SolarNova. All rights reserved.
            </p>

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