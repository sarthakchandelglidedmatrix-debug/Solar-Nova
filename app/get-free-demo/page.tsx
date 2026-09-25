"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sun,
  Users,
  X,
} from "lucide-react";

type FormData = {
  customerName: string;
  mobileNumber: string;
  alternateMobile: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  companyName: string;
  referrer: string;

  fullAddress: string;
  areaLocality: string;
  city: string;
  state: string;
  pinCode: string;
  latitude: string;
  longitude: string;

  propertyType: string;
  installationType: string;
  insuranceType: string;
  solarRequirement: string;
  preferredPlan: string;
  policyNumber: string;
  coverageAmount: string;
  leadSource: string;
  priority: string;
  nextFollowUp: string;
  notes: string;

  preferredDate: string;
  timeSlot: string;
  contactMethod: string;
};

const steps = [
  {
    number: 1,
    title: "Customer Details",
    shortTitle: "Customer",
  },
  {
    number: 2,
    title: "Address & Location",
    shortTitle: "Location",
  },
  {
    number: 3,
    title: "Solar Requirements & Coverage",
    shortTitle: "Solar",
  },
  {
    number: 4,
    title: "Scheduled a Visit",
    shortTitle: "Visit",
  },
  {
    number: 5,
    title: "Review & Submit",
    shortTitle: "Review",
  },
];

export default function GetFreeDemoPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    mobileNumber: "",
    alternateMobile: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    companyName: "",
    referrer: "",

    fullAddress: "",
    areaLocality: "",
    city: "",
    state: "",
    pinCode: "",
    latitude: "",
    longitude: "",

    propertyType: "",
    installationType: "",
    insuranceType: "",
    solarRequirement: "",
    preferredPlan: "",
    policyNumber: "",
    coverageAmount: "",
    leadSource: "",
    priority: "",
    nextFollowUp: "",
    notes: "",

    preferredDate: "",
    timeSlot: "",
    contactMethod: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const nextStep = () => {
    if (activeStep < 5) {
      setActiveStep((previous) => previous + 1);
      scrollToTop();
    }
  };

  const previousStep = () => {
    if (activeStep > 1) {
      setActiveStep((previous) => previous - 1);
      scrollToTop();
    }
  };

  const submitForm = () => {
    setSubmitted(true);
    scrollToTop();
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (activeStep < 5) {
      nextStep();
    } else {
      submitForm();
    }
  };

  const mapQuery =
    formData.latitude.trim() && formData.longitude.trim()
      ? `${formData.latitude},${formData.longitude}`
      : [
          formData.fullAddress,
          formData.areaLocality,
          formData.city,
          formData.state,
          formData.pinCode,
        ]
          .filter(Boolean)
          .join(", ");

  const mapUrl = mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(
        mapQuery
      )}&output=embed`
    : "https://www.google.com/maps?q=India&output=embed";

  const customerReview = [
    { label: "Customer Name", value: formData.customerName },
    { label: "Mobile Number", value: formData.mobileNumber },
    { label: "Alternate Mobile", value: formData.alternateMobile },
    { label: "Email", value: formData.email },
    { label: "Gender", value: formData.gender },
    { label: "Date of Birth", value: formData.dateOfBirth },
    { label: "Company Name", value: formData.companyName },
    { label: "Referrer", value: formData.referrer },
  ].filter((item) => item.value.trim());

  const locationReview = [
    { label: "Full Address", value: formData.fullAddress },
    { label: "Area / Locality", value: formData.areaLocality },
    { label: "City", value: formData.city },
    { label: "State", value: formData.state },
    { label: "PIN Code", value: formData.pinCode },
    { label: "Latitude", value: formData.latitude },
    { label: "Longitude", value: formData.longitude },
  ].filter((item) => item.value.trim());

  const solarReview = [
    { label: "Property Type", value: formData.propertyType },
    { label: "Installation Type", value: formData.installationType },
    { label: "Insurance Type", value: formData.insuranceType },
    { label: "Solar Requirement", value: formData.solarRequirement },
    { label: "Preferred Plan", value: formData.preferredPlan },
    { label: "Policy Number", value: formData.policyNumber },
    { label: "Coverage Amount", value: formData.coverageAmount },
    { label: "Lead Source", value: formData.leadSource },
    { label: "Priority", value: formData.priority },
    { label: "Next Follow-up", value: formData.nextFollowUp },
    { label: "Notes", value: formData.notes },
  ].filter((item) => item.value.trim());

  const visitReview = [
    { label: "Preferred Date", value: formData.preferredDate },
    { label: "Time Slot", value: formData.timeSlot },
    { label: "Contact Method", value: formData.contactMethod },
  ].filter((item) => item.value.trim());

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAFCFA] text-[#26352D]">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-3 py-3 sm:px-5 sm:py-4 md:px-8">
          <nav
            className={`relative z-[60] flex items-center justify-between rounded-2xl border px-3 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5 sm:py-4 ${
              menuOpen
                ? "border-[#E2E8E1] bg-white/95"
                : "border-[#E2E8E1] bg-white/85"
            }`}
          >
            {/* LOGO */}
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              onClick={() => setMenuOpen(false)}
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
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/"
                className="text-sm font-medium text-[#26352D] transition hover:text-[#E8B92E]"
              >
                Home
              </Link>

              <Link
                href="/solutions"
                className="text-sm font-medium text-[#69736D] transition hover:text-[#26352D]"
              >
                Solutions
              </Link>

              {/* ABOUT DROPDOWN */}
              <div className="group relative py-6">
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-[#69736D] transition hover:text-[#26352D]"
                >
                  About
                  <ChevronDown
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div className="pointer-events-none absolute left-1/2 top-[62px] w-[245px] -translate-x-1/2 translate-y-2 rounded-2xl border border-[#E4DED0] bg-[#FBFAF5]/95 p-2 opacity-0 shadow-xl shadow-[#4F8A70]/10 backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href="/about"
                    className="flex items-center gap-3 rounded-xl bg-[#F3EBD8] px-3 py-3 transition hover:bg-[#EDE2C8]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#4F8A70]">
                      <Leaf size={18} />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#26352D]">
                        About Us
                      </div>
                      <div className="text-[11px] text-[#69736D]">
                        Our story & mission
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/about/board-of-directors"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-[#F3EBD8]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F3F7F1] text-[#4F8A70]">
                      <Users size={18} />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#26352D]">
                        Board of Directors
                      </div>
                      <div className="text-[11px] text-[#69736D]">
                        Leadership team
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/about/awards"
                    className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-[#F3EBD8]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF7DF] text-[#E6A21A]">
                      <Award size={18} />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#26352D]">
                        Awards & Certification
                      </div>
                      <div className="text-[11px] text-[#69736D]">
                        Recognition & trust
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <Link
                href="/blog"
                className="text-sm font-medium text-[#69736D] transition hover:text-[#26352D]"
              >
                Blog
              </Link>

              <Link
                href="/get-free-demo"
                className="rounded-full bg-[#E8B92E] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.18)] transition hover:-translate-y-0.5 hover:bg-[#D49B16]"
              >
                Get Started
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8E1] bg-[#F3F7F1] text-[#26352D] md:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* MOBILE MENU */}
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-2xl border border-[#E2E8E1] bg-white/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
              >
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[#26352D] transition hover:bg-[#F3F7F1]"
                  >
                    Home
                  </Link>

                  <Link
                    href="/solutions"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[#69736D] transition hover:bg-[#F3F7F1] hover:text-[#26352D]"
                  >
                    Solutions
                  </Link>

                  <div className="my-2 border-t border-[#E2E8E1]" />

                  <div className="px-4 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#69736D]">
                    About
                  </div>

                  <Link
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-[#F3EBD8]"
                  >
                    <Leaf size={17} className="text-[#4F8A70]" />
                    <span className="text-sm font-medium text-[#26352D]">
                      About Us
                    </span>
                  </Link>

                  <Link
                    href="/about/board-of-directors"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-[#F3EBD8]"
                  >
                    <Users size={17} className="text-[#4F8A70]" />
                    <span className="text-sm font-medium text-[#26352D]">
                      Board of Directors
                    </span>
                  </Link>

                  <Link
                    href="/about/awards"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-[#F3EBD8]"
                  >
                    <Award size={17} className="text-[#E6A21A]" />
                    <span className="text-sm font-medium text-[#26352D]">
                      Awards & Certification
                    </span>
                  </Link>

                  <div className="my-2 border-t border-[#E2E8E1]" />

                  <Link
                    href="/blog"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[#69736D] transition hover:bg-[#F3F7F1] hover:text-[#26352D]"
                  >
                    Blog
                  </Link>

                  <Link
                    href="/get-free-demo"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 block rounded-xl bg-[#E8B92E] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#D49B16]"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            )}
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <section
        id="free-demo-form"
        className="relative min-h-screen overflow-x-hidden px-3 pb-20 pt-28 sm:px-5 sm:pb-24 sm:pt-36 md:px-8 md:pt-40"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#F3EBD8]/60 blur-3xl" />
          <div className="absolute -left-40 top-[520px] h-[460px] w-[460px] rounded-full bg-[#F3F7F1] blur-3xl" />
          <div className="absolute left-1/2 top-[360px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#E8B92E]/[0.035] blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl min-w-0">
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E2E8E1] bg-white px-4 py-2 shadow-sm">
              <Sun size={15} className="text-[#E8B92E]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F8A70]">
                Get Free Demo
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[#26352D] sm:text-5xl md:text-6xl">
              Let&apos;s build{" "}
              <span className="text-[#E6A21A]">a cleaner future</span> together.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#69736D] sm:text-lg">
              Share a few details with us and our solar experts will help you
              explore the right clean-energy solution for your needs.
            </p>
          </motion.div>

          {/* FORM AREA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mx-auto mt-8 w-full max-w-5xl sm:mt-10 md:mt-12"
          >
            <div className="grid w-full min-w-0 overflow-hidden rounded-[30px] border border-[#E2E8E1] bg-white shadow-[0_28px_90px_rgba(47,122,75,0.08)] lg:grid-cols-[260px_minmax(0,1fr)]">
              {/* DESKTOP STEPPER */}
              <aside className="hidden border-r border-[#E2E8E1] bg-[#F3F7F1] lg:block">
                <div className="sticky top-32 flex min-h-[720px] flex-col justify-center px-8 py-10">
                  <div>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E6A21A]">
                      Your Journey
                    </span>

                    <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-[#26352D]">
                      Get started
                    </h2>

                    <p className="mt-2 text-xs leading-5 text-[#69736D]">
                      Complete each step to help us understand your
                      requirements.
                    </p>
                  </div>

                  <div className="relative mt-10">
                    <div className="absolute left-[20px] top-5 h-[calc(100%-40px)] w-px bg-[#DDE5DD]" />

                    <div
                      className="absolute left-[20px] top-5 w-px bg-[#4F8A70] transition-all duration-500"
                      style={{
                        height: `${
                          ((activeStep - 1) / (steps.length - 1)) * 100
                        }%`,
                      }}
                    />

                    <div className="relative space-y-7">
                      {steps.map((step) => {
                        const isActive = activeStep === step.number;
                        const isCompleted = activeStep > step.number;

                        return (
                          <button
                            key={step.number}
                            type="button"
                            onClick={() => {
                              if (step.number <= activeStep && !submitted) {
                                setActiveStep(step.number);
                                scrollToTop();
                              }
                            }}
                            className="group flex w-full items-center gap-4 text-left"
                          >
                            <div
                              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                                isActive
                                  ? "border-[#E8B92E] bg-[#E8B92E] text-white shadow-[0_8px_22px_rgba(230,162,26,0.22)]"
                                  : isCompleted
                                    ? "border-[#4F8A70] bg-[#4F8A70] text-white"
                                    : "border-[#DCE4DD] bg-white text-[#69736D] group-hover:border-[#4F8A70]"
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle2 size={18} />
                              ) : (
                                step.number
                              )}
                            </div>

                            <div>
                              <div
                                className={`text-sm font-semibold transition ${
                                  isActive || isCompleted
                                    ? "text-[#26352D]"
                                    : "text-[#69736D]"
                                }`}
                              >
                                {step.title}
                              </div>

                              <div className="mt-0.5 text-[10px] text-[#8A948E]">
                                Step {step.number}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-10 rounded-2xl border border-[#E2E8E1] bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF7DF] text-[#E6A21A]">
                        <ShieldCheck size={18} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-[#26352D]">
                          Your details are safe
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-[#69736D]">
                          We respect your privacy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* MOBILE STEPPER */}
              <div className="border-b border-[#E2E8E1] bg-[#F3F7F1] px-3 py-5 sm:px-4 lg:hidden">
                <div className="flex items-start justify-between">
                  {steps.map((step, index) => {
                    const isActive = activeStep === step.number;
                    const isCompleted = activeStep > step.number;

                    return (
                      <div
                        key={step.number}
                        className="relative flex flex-1 flex-col items-center"
                      >
                        {index !== steps.length - 1 && (
                          <div
                            className={`absolute left-1/2 top-5 h-px w-full ${
                              activeStep > step.number
                                ? "bg-[#4F8A70]"
                                : "bg-[#DDE5DD]"
                            }`}
                          />
                        )}

                        <div
                          className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold sm:h-10 sm:w-10 sm:text-sm ${
                            isActive
                              ? "border-[#E8B92E] bg-[#E8B92E] text-white shadow-[0_6px_18px_rgba(230,162,26,0.2)]"
                              : isCompleted
                                ? "border-[#4F8A70] bg-[#4F8A70] text-white"
                                : "border-[#DCE4DD] bg-white text-[#69736D]"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 size={16} />
                          ) : (
                            step.number
                          )}
                        </div>

                        <span
                          className={`mt-2 hidden text-center text-[9px] font-semibold min-[420px]:block sm:text-[10px] ${
                            isActive || isCompleted
                              ? "text-[#26352D]"
                              : "text-[#69736D]"
                          }`}
                        >
                          {step.shortTitle}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* FORM CONTENT */}
              <form
                onSubmit={handleFormSubmit}
                className="flex min-h-[720px] min-w-0 flex-col p-4 sm:p-6 md:p-8 lg:p-10"
              >
                <div className="min-w-0 flex-1">
                  {/* STEP 1 */}
                  {activeStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <FormHeading
                        eyebrow="Step 01"
                        title="Customer Details"
                        description="Please provide your basic details so our team can get in touch with you."
                      />

                      <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-2">
                        <InputField
                          label="Customer Name"
                          placeholder="Enter your full name"
                          value={formData.customerName}
                          onChange={(value) =>
                            updateField("customerName", value)
                          }
                        />

                        <InputField
                          label="Mobile Number"
                          placeholder="Enter your mobile number"
                          type="tel"
                          value={formData.mobileNumber}
                          onChange={(value) =>
                            updateField("mobileNumber", value)
                          }
                        />

                        <InputField
                          label="Alternate Mobile Number"
                          placeholder="Enter alternate number"
                          type="tel"
                          value={formData.alternateMobile}
                          onChange={(value) =>
                            updateField("alternateMobile", value)
                          }
                        />

                        <InputField
                          label="Email"
                          placeholder="you@example.com"
                          type="email"
                          value={formData.email}
                          onChange={(value) => updateField("email", value)}
                        />

                        <SelectField
                          label="Gender"
                          value={formData.gender}
                          onChange={(value) => updateField("gender", value)}
                          options={[
                            "Male",
                            "Female",
                            "Other",
                            "Prefer not to say",
                          ]}
                        />

                        <InputField
                          label="Date of Birth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(value) =>
                            updateField("dateOfBirth", value)
                          }
                        />

                        <InputField
                          label="Company Name"
                          placeholder="Enter company name"
                          value={formData.companyName}
                          onChange={(value) =>
                            updateField("companyName", value)
                          }
                        />

                        <InputField
                          label="Referrer"
                          placeholder="Enter referrer name"
                          value={formData.referrer}
                          onChange={(value) => updateField("referrer", value)}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 */}
                  {activeStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <FormHeading
                        eyebrow="Step 02"
                        title="Address & Location"
                        description="Enter the customer location details. The map preview will automatically update according to the information provided."
                      />

                      <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-2">
                        <div className="min-w-0 md:col-span-2">
                          <label className="block text-sm font-semibold text-[#26352D]">
                            Full Address
                          </label>

                          <textarea
                            value={formData.fullAddress}
                            onChange={(event) =>
                              updateField(
                                "fullAddress",
                                event.target.value
                              )
                            }
                            placeholder="Enter complete address"
                            rows={3}
                            className="mt-2 w-full resize-none rounded-2xl border border-[#E2E8E1] bg-[#FAFCFA] px-4 py-3.5 text-sm text-[#26352D] outline-none transition placeholder:text-[#9AA39D] focus:border-[#E8B92E] focus:bg-white focus:ring-4 focus:ring-[#E8B92E]/10"
                          />
                        </div>

                        <InputField
                          label="Area / Locality"
                          placeholder="Enter area or locality"
                          value={formData.areaLocality}
                          onChange={(value) =>
                            updateField("areaLocality", value)
                          }
                        />

                        <InputField
                          label="City"
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={(value) => updateField("city", value)}
                        />

                        <InputField
                          label="State"
                          placeholder="Enter state"
                          value={formData.state}
                          onChange={(value) => updateField("state", value)}
                        />

                        <InputField
                          label="PIN Code"
                          placeholder="Enter PIN code"
                          value={formData.pinCode}
                          onChange={(value) => updateField("pinCode", value)}
                        />

                        <InputField
                          label="Latitude"
                          placeholder="e.g. 30.3165"
                          value={formData.latitude}
                          onChange={(value) =>
                            updateField("latitude", value)
                          }
                        />

                        <InputField
                          label="Longitude"
                          placeholder="e.g. 78.0322"
                          value={formData.longitude}
                          onChange={(value) =>
                            updateField("longitude", value)
                          }
                        />
                      </div>

                      <div className="mt-7 overflow-hidden rounded-2xl border border-[#E2E8E1] bg-[#F3F7F1]">
                        <div className="flex items-center justify-between gap-4 border-b border-[#E2E8E1] bg-white px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF7DF] text-[#E6A21A]">
                              <MapPin size={18} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-[#26352D]">
                                Location Map
                              </p>

                              <p className="text-[11px] text-[#69736D]">
                                Map updates automatically from your details
                              </p>
                            </div>
                          </div>

                          <span className="hidden rounded-full bg-[#F3F7F1] px-3 py-1 text-[10px] font-semibold text-[#4F8A70] sm:block">
                            Live Preview
                          </span>
                        </div>

                        <div className="h-[230px] w-full bg-[#F3F7F1]">
                          <iframe
                            key={mapUrl}
                            src={mapUrl}
                            title="Customer location map"
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 */}
                  {activeStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <FormHeading
                        eyebrow="Step 03"
                        title="Solar Requirements & Coverage"
                        description="Capture the property, installation, solar requirement and coverage information for the customer."
                      />

                      <div className="mt-8 space-y-6">
                        <FormSectionCard
                          number="01"
                          title="Property & Installation"
                          description="Tell us about the property and the type of solar installation."
                          icon={<Sun size={19} />}
                        >
                          <div className="grid gap-5 md:grid-cols-2">
                            <SelectField
                              label="Property Type"
                              value={formData.propertyType}
                              onChange={(value) =>
                                updateField("propertyType", value)
                              }
                              options={[
                                "Residential",
                                "Commercial",
                                "Industrial",
                                "Agricultural",
                                "Institutional",
                              ]}
                            />

                            <SelectField
                              label="Installation Type"
                              value={formData.installationType}
                              onChange={(value) =>
                                updateField("installationType", value)
                              }
                              options={[
                                "Rooftop Solar",
                                "Ground Mounted Solar",
                                "Solar Carport",
                                "Hybrid Solar",
                                "Off-Grid Solar",
                              ]}
                            />

                            <SelectField
                              label="Insurance Type"
                              value={formData.insuranceType}
                              onChange={(value) =>
                                updateField("insuranceType", value)
                              }
                              options={[
                                "No Insurance",
                                "Solar Equipment Insurance",
                                "Property Insurance",
                                "Comprehensive Coverage",
                              ]}
                            />
                          </div>
                        </FormSectionCard>

                        <FormSectionCard
                          number="02"
                          title="Solar Requirement & Coverage"
                          description="Add the customer's expected solar requirement and coverage information."
                          icon={<ShieldCheck size={19} />}
                        >
                          <div className="grid gap-5 md:grid-cols-2">
                            <InputField
                              label="Solar Requirement"
                              placeholder="e.g. 5 kW / 10 kW / 50 kW"
                              value={formData.solarRequirement}
                              onChange={(value) =>
                                updateField("solarRequirement", value)
                              }
                            />

                            <SelectField
                              label="Preferred Plan"
                              value={formData.preferredPlan}
                              onChange={(value) =>
                                updateField("preferredPlan", value)
                              }
                              options={[
                                "Basic Solar Plan",
                                "Standard Solar Plan",
                                "Premium Solar Plan",
                                "Custom Plan",
                              ]}
                            />

                            <InputField
                              label="Policy Number"
                              placeholder="Enter policy number"
                              value={formData.policyNumber}
                              onChange={(value) =>
                                updateField("policyNumber", value)
                              }
                            />

                            <InputField
                              label="Coverage Amount"
                              placeholder="Enter coverage amount"
                              type="number"
                              value={formData.coverageAmount}
                              onChange={(value) =>
                                updateField("coverageAmount", value)
                              }
                            />
                          </div>
                        </FormSectionCard>

                        <FormSectionCard
                          number="03"
                          title="Lead & Follow-up"
                          description="Capture lead information and the next action required from the team."
                          icon={<Users size={19} />}
                        >
                          <div className="grid gap-5 md:grid-cols-2">
                            <SelectField
                              label="Lead Source"
                              value={formData.leadSource}
                              onChange={(value) =>
                                updateField("leadSource", value)
                              }
                              options={[
                                "Website",
                                "Google",
                                "Social Media",
                                "Referral",
                                "Direct Enquiry",
                                "Partner",
                                "Other",
                              ]}
                            />

                            <SelectField
                              label="Priority"
                              value={formData.priority}
                              onChange={(value) =>
                                updateField("priority", value)
                              }
                              options={["Low", "Medium", "High", "Urgent"]}
                            />

                            <InputField
                              label="Next Follow-up"
                              type="date"
                              value={formData.nextFollowUp}
                              onChange={(value) =>
                                updateField("nextFollowUp", value)
                              }
                            />

                            <div className="min-w-0 md:col-span-2">
                              <label className="block text-sm font-semibold text-[#26352D]">
                                Notes
                              </label>

                              <textarea
                                value={formData.notes}
                                onChange={(event) =>
                                  updateField("notes", event.target.value)
                                }
                                placeholder="Any requirement or helpful context for the team"
                                rows={4}
                                className="mt-2 w-full resize-none rounded-2xl border border-[#E2E8E1] bg-[#FAFCFA] px-4 py-3.5 text-sm text-[#26352D] outline-none transition placeholder:text-[#9AA39D] focus:border-[#E8B92E] focus:bg-white focus:ring-4 focus:ring-[#E8B92E]/10"
                              />
                            </div>
                          </div>
                        </FormSectionCard>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4 */}
                  {activeStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <FormHeading
                        eyebrow="Step 04"
                        title="Scheduled a Visit"
                        description="Choose your preferred date, time slot and the best way for our team to contact you."
                      />

                      <div className="mt-8 space-y-6">
                        <FormSectionCard
                          number="01"
                          title="Visit Schedule"
                          description="Select a convenient date and time for your solar consultation."
                          icon={<MapPin size={19} />}
                        >
                          <div className="grid gap-5 md:grid-cols-2">
                            <InputField
                              label="Preferred Date"
                              type="date"
                              value={formData.preferredDate}
                              onChange={(value) =>
                                updateField("preferredDate", value)
                              }
                            />

                            <SelectField
                              label="Time Slot"
                              value={formData.timeSlot}
                              onChange={(value) =>
                                updateField("timeSlot", value)
                              }
                              options={[
                                "09:00 AM - 11:00 AM",
                                "11:00 AM - 01:00 PM",
                                "01:00 PM - 03:00 PM",
                                "03:00 PM - 05:00 PM",
                                "05:00 PM - 07:00 PM",
                              ]}
                            />
                          </div>
                        </FormSectionCard>

                        <FormSectionCard
                          number="02"
                          title="Preferred Contact Method"
                          description="How would you like our solar expert to contact you?"
                          icon={<Users size={19} />}
                        >
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            {/* CALL */}
                            <button
                              type="button"
                              onClick={() =>
                                updateField("contactMethod", "Call")
                              }
                              className={`group flex flex-col items-center justify-center rounded-2xl border px-5 py-6 text-center transition-all duration-300 ${
                                formData.contactMethod === "Call"
                                  ? "border-[#4F8A70] bg-[#F3F7F1] shadow-[0_8px_24px_rgba(79,138,112,0.12)]"
                                  : "border-[#E2E8E1] bg-white hover:border-[#4F8A70] hover:bg-[#F8FBF8]"
                              }`}
                            >
                              <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                  formData.contactMethod === "Call"
                                    ? "border-[#4F8A70] bg-[#4F8A70] text-white shadow-[0_6px_18px_rgba(79,138,112,0.22)]"
                                    : "border-[#BFD2C5] bg-[#F3F7F1] text-[#4F8A70] group-hover:border-[#4F8A70] group-hover:bg-[#4F8A70] group-hover:text-white"
                                }`}
                              >
                                <Phone size={21} />
                              </div>

                              <span
                                className={`mt-4 text-sm font-semibold ${
                                  formData.contactMethod === "Call"
                                    ? "text-[#26352D]"
                                    : "text-[#69736D]"
                                }`}
                              >
                                Call
                              </span>

                              <span className="mt-1 text-[11px] text-[#8A948E]">
                                Talk directly with our team
                              </span>
                            </button>

                            {/* WHATSAPP */}
                            <button
                              type="button"
                              onClick={() =>
                                updateField("contactMethod", "WhatsApp")
                              }
                              className={`group flex flex-col items-center justify-center rounded-2xl border px-5 py-6 text-center transition-all duration-300 ${
                                formData.contactMethod === "WhatsApp"
                                  ? "border-[#4F8A70] bg-[#F3F7F1] shadow-[0_8px_24px_rgba(79,138,112,0.12)]"
                                  : "border-[#E2E8E1] bg-white hover:border-[#4F8A70] hover:bg-[#F8FBF8]"
                              }`}
                            >
                              <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                  formData.contactMethod === "WhatsApp"
                                    ? "border-[#4F8A70] bg-[#4F8A70] text-white shadow-[0_6px_18px_rgba(79,138,112,0.22)]"
                                    : "border-[#BFD2C5] bg-[#F3F7F1] text-[#4F8A70] group-hover:border-[#4F8A70] group-hover:bg-[#4F8A70] group-hover:text-white"
                                }`}
                              >
                                <MessageCircle size={21} />
                              </div>

                              <span
                                className={`mt-4 text-sm font-semibold ${
                                  formData.contactMethod === "WhatsApp"
                                    ? "text-[#26352D]"
                                    : "text-[#69736D]"
                                }`}
                              >
                                WhatsApp
                              </span>

                              <span className="mt-1 text-[11px] text-[#8A948E]">
                                Receive updates on WhatsApp
                              </span>
                            </button>

                            {/* EMAIL */}
                            <button
                              type="button"
                              onClick={() =>
                                updateField("contactMethod", "Email")
                              }
                              className={`group flex flex-col items-center justify-center rounded-2xl border px-5 py-6 text-center transition-all duration-300 ${
                                formData.contactMethod === "Email"
                                  ? "border-[#4F8A70] bg-[#F3F7F1] shadow-[0_8px_24px_rgba(79,138,112,0.12)]"
                                  : "border-[#E2E8E1] bg-white hover:border-[#4F8A70] hover:bg-[#F8FBF8]"
                              }`}
                            >
                              <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                  formData.contactMethod === "Email"
                                    ? "border-[#4F8A70] bg-[#4F8A70] text-white shadow-[0_6px_18px_rgba(79,138,112,0.22)]"
                                    : "border-[#BFD2C5] bg-[#F3F7F1] text-[#4F8A70] group-hover:border-[#4F8A70] group-hover:bg-[#4F8A70] group-hover:text-white"
                                }`}
                              >
                                <Mail size={21} />
                              </div>

                              <span
                                className={`mt-4 text-sm font-semibold ${
                                  formData.contactMethod === "Email"
                                    ? "text-[#26352D]"
                                    : "text-[#69736D]"
                                }`}
                              >
                                Email
                              </span>

                              <span className="mt-1 text-[11px] text-[#8A948E]">
                                Get details through email
                              </span>
                            </button>
                          </div>
                        </FormSectionCard>

                        <div className="flex items-start gap-3 rounded-2xl border border-[#E2E8E1] bg-[#F3F7F1] p-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4F8A70]">
                            <CheckCircle2 size={18} />
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-[#26352D]">
                              Flexible scheduling
                            </p>

                            <p className="mt-1 text-[11px] leading-5 text-[#69736D]">
                              Our team will confirm the selected date and time
                              slot with you before the visit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 5 - REVIEW & SUBMIT */}
                  {activeStep === 5 && !submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <FormHeading
                        eyebrow="Step 05"
                        title="Review & Submit"
                        description="Review the information you entered before submitting your request to SolarNova."
                      />

                      <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <ReviewCard
                          number="01"
                          title="Customer Details"
                          icon={<Users size={19} />}
                          items={customerReview}
                        />

                        <ReviewCard
                          number="02"
                          title="Address & Location"
                          icon={<MapPin size={19} />}
                          items={locationReview}
                        />

                        <ReviewCard
                          number="03"
                          title="Solar Requirements"
                          icon={<Sun size={19} />}
                          items={solarReview}
                        />

                        <ReviewCard
                          number="04"
                          title="Visit Schedule"
                          icon={<CalendarIcon />}
                          items={visitReview}
                        />
                      </div>

                      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E2E8E1] bg-[#F3F7F1] p-4">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#4F8A70]">
                          <ShieldCheck size={18} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-[#26352D]">
                            Ready to submit
                          </p>

                          <p className="mt-1 text-[11px] leading-5 text-[#69736D]">
                            Please review your information above. You can go
                            back to any previous step and make changes before
                            submitting.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* FINAL THANK YOU */}
                  {activeStep === 5 && submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex min-h-[570px] flex-col items-center justify-center text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F3F7F1] text-[#4F8A70]">
                        <CheckCircle2 size={42} strokeWidth={1.8} />
                      </div>

                      <div className="mt-7">
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#E6A21A]">
                          Request Received
                        </span>

                        <h2 className="mt-3 font-display text-3xl font-semibold text-[#26352D] sm:text-4xl">
                          Thank you for choosing SolarNova.
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#69736D] sm:text-base">
                          Your details have been captured. Our team can now
                          review your information and connect with you
                          regarding your clean-energy journey.
                        </p>
                      </div>

                      <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E8B92E] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.18)] transition hover:-translate-y-0.5 hover:bg-[#D49B16]"
                      >
                        Back to Home
                        <ArrowRight size={17} />
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* BOTTOM ACTIONS */}
                {!submitted && (
                  <div className="mt-10 flex items-center justify-between gap-3 border-t border-[#E2E8E1] pt-6">
                    {activeStep > 1 ? (
                      <button
                        type="button"
                        onClick={previousStep}
                        className="inline-flex items-center gap-2 rounded-full border border-[#E2E8E1] bg-white px-4 py-3 text-sm font-semibold text-[#26352D] transition hover:border-[#4F8A70] hover:bg-[#F3F7F1] sm:px-5"
                      >
                        <ArrowLeft size={17} />
                        Previous
                      </button>
                    ) : (
                      <div />
                    )}

                    {activeStep < 5 ? (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-[#E8B92E] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.18)] transition hover:-translate-y-0.5 hover:bg-[#D49B16] sm:px-6"
                      >
                        Continue
                        <ArrowRight size={17} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-[#E8B92E] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.18)] transition hover:-translate-y-0.5 hover:bg-[#D49B16] sm:px-6"
                      >
                        Submit Request
                        <ArrowRight size={17} />
                      </button>
                    )}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* TRUST INDICATORS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-[#69736D]">
              <ShieldCheck size={16} className="text-[#4F8A70]" />
              Secure information
            </div>

            <div className="hidden h-4 w-px bg-[#E2E8E1] sm:block" />

            <div className="flex items-center gap-2 text-xs font-medium text-[#69736D]">
              <Sun size={16} className="text-[#E8B92E]" />
              Clean energy solutions
            </div>

            <div className="hidden h-4 w-px bg-[#E2E8E1] sm:block" />

            <div className="flex items-center gap-2 text-xs font-medium text-[#69736D]">
              <Award size={16} className="text-[#4F8A70]" />
              Expert consultation
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E2E8E1] bg-[#FAFCFA] text-[#26352D]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8B92E] text-white shadow-[0_6px_20px_rgba(230,162,26,0.18)]">
                  <Sun size={21} strokeWidth={2.5} />
                </div>

                <div>
                  <div className="font-display text-xl font-semibold tracking-tight text-[#3F4541]">
                    Solar<span className="text-[#E6A21A]">Nova</span>
                  </div>

                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#69736D]">
                    Clean Energy
                  </div>
                </div>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-6 text-[#737C76]">
                Building a cleaner, smarter and more sustainable energy future
                through solar innovation.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#26352D]">
                Company
              </h3>

              <div className="mt-5 space-y-3">
                <Link
                  href="/about"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  About Us
                </Link>

                <Link
                  href="/about/board-of-directors"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/awards"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Awards & Certification
                </Link>

                <Link
                  href="/blog"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#26352D]">
                Solutions
              </h3>

              <div className="mt-5 space-y-3">
                <Link
                  href="/solutions"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Solar Energy
                </Link>

                <Link
                  href="/solutions"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Energy Storage
                </Link>

                <Link
                  href="/solutions"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Commercial Solar
                </Link>

                <Link
                  href="/get-free-demo"
                  className="block text-sm text-[#737C76] transition hover:text-[#E8B92E]"
                >
                  Get Free Demo
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#26352D]">
                Start Your Solar Journey
              </h3>

              <p className="mt-5 text-sm leading-6 text-[#737C76]">
                Ready to explore a smarter energy future? Talk to SolarNova
                today.
              </p>

              <Link
                href="/get-free-demo"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E8B92E] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(230,162,26,0.16)] transition hover:-translate-y-0.5 hover:bg-[#D49B16]"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#E2E8E1] pt-6 text-xs text-[#737C76] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} SolarNova. All rights reserved.</p>

            <div className="flex items-center gap-5">
              <span>Clean Energy</span>
              <span className="h-1 w-1 rounded-full bg-[#E8B92E]" />
              <span>Built for Tomorrow</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* FORM HEADING */

function FormHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="min-w-0">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E6A21A]">
        {eyebrow}
      </span>

      <h2 className="mt-2 break-words font-display text-2xl font-semibold tracking-tight text-[#26352D] sm:text-3xl">
        {title}
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#69736D]">
        {description}
      </p>
    </div>
  );
}

/* REVIEW CARD */

function ReviewCard({
  number,
  title,
  icon,
  items,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
  items: { label: string; value: string }[];
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-[#E2E8E1] bg-white shadow-[0_12px_40px_rgba(47,122,75,0.045)]">
      <div className="flex min-w-0 items-center gap-4 border-b border-[#E2E8E1] bg-[#F3F7F1]/70 px-4 py-4 sm:px-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7DF] text-[#E6A21A]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#E6A21A]">
            Section {number}
          </div>

          <h3 className="mt-1 break-words text-base font-semibold text-[#26352D]">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {items.length > 0 ? (
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#E2E8E1] bg-[#FAFCFA] px-3.5 py-3"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8A948E]">
                  {item.label}
                </p>

                <p className="mt-1 break-words text-sm font-medium text-[#26352D]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-[#DCE4DD] bg-[#FAFCFA] px-4 py-5 text-center text-xs text-[#8A948E]">
            No details added in this section.
          </p>
        )}
      </div>
    </div>
  );
}

/* CALENDAR ICON */

function CalendarIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

/* FORM SECTION CARD */

function FormSectionCard({
  number,
  title,
  description,
  icon,
  children,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-[#E2E8E1] bg-white shadow-[0_12px_40px_rgba(47,122,75,0.045)]">
      <div className="flex min-w-0 items-start gap-4 border-b border-[#E2E8E1] bg-[#F3F7F1]/70 px-4 py-4 sm:px-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF7DF] text-[#E6A21A]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#E6A21A]">
              Section {number}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#D4DDD5]" />

            <span className="text-[10px] font-medium text-[#8A948E]">
              SolarNova
            </span>
          </div>

          <h3 className="mt-1 break-words text-base font-semibold text-[#26352D] sm:text-lg">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-[#69736D]">
            {description}
          </p>
        </div>
      </div>

      <div className="min-w-0 p-4 sm:p-6">{children}</div>
    </div>
  );
}

/* INPUT FIELD */

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="min-w-0">
      <label className="block text-sm font-semibold text-[#26352D]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full min-w-0 rounded-2xl border border-[#E2E8E1] bg-[#FAFCFA] px-4 py-3.5 text-sm text-[#26352D] outline-none transition placeholder:text-[#9AA39D] focus:border-[#E8B92E] focus:bg-white focus:ring-4 focus:ring-[#E8B92E]/10"
      />
    </div>
  );
}

/* SELECT FIELD */

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="min-w-0">
      <label className="block text-sm font-semibold text-[#26352D]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="mt-2 w-full min-w-0 appearance-none rounded-2xl border border-[#E2E8E1] bg-[#FAFCFA] px-4 py-3.5 pr-11 text-sm text-[#26352D] outline-none transition focus:border-[#E8B92E] focus:bg-white focus:ring-4 focus:ring-[#E8B92E]/10"
        >
          <option value="">Select {label.toLowerCase()}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-4 top-[27px] text-[#69736D]"
        />
      </div>
    </div>
  );
}