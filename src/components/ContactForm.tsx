"use client";

import { useState, useEffect, useRef } from "react";
import { Briefcase, GraduationCap, CheckCircle, TrendingUp, Award } from "lucide-react";

type FormType = "company" | "student";

interface CompanyData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  companySize: string;
  message: string;
}

interface StudentData {
  name: string;
  email: string;
  university: string;
  degree: string;
  graduationYear: string;
  field: string;
  gpa: string;
}

const emptyCompany: CompanyData = {
  companyName: "", contactName: "", email: "", phone: "",
  industry: "", companySize: "", message: "",
};

const emptyStudent: StudentData = {
  name: "", email: "", university: "", degree: "",
  graduationYear: "", field: "", gpa: "",
};

const inputClass =
  "w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 form-input";

const selectBtnClass =
  "w-full px-5 py-4 bg-zinc-900 border border-white/20 rounded-xl text-white form-input flex items-center justify-between text-left";

type Option = { value: string; label: string };

function CustomSelect({
  value,
  onChange,
  required,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder: string;
  options: Option[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Hidden input for native form required validation */}
      <input
        tabIndex={-1}
        required={required}
        readOnly
        value={value}
        aria-hidden="true"
        className="absolute opacity-0 w-px h-px top-0 left-0"
      />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={selectBtnClass}
      >
        <span className={selected ? "text-white" : "text-gray-500"}>
          {selected?.label ?? placeholder}
        </span>
        <svg
          className={`h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute z-50 w-full top-full mt-1 bg-zinc-900 border border-white/20 rounded-xl overflow-hidden shadow-xl">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full px-5 py-3 text-left hover:bg-white/10 transition-colors ${
                  value === opt.value ? "text-white font-semibold" : "text-gray-300"
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const industryOptions: Option[] = [
  { value: "manufacturing", label: "Manufacturing" },
  { value: "technology", label: "Technology" },
  { value: "engineering", label: "Engineering" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "other", label: "Other" },
];

const companySizeOptions: Option[] = [
  { value: "1-50", label: "1-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
];

const degreeOptions: Option[] = [
  { value: "bachelor-current", label: "Current Bachelor's Student" },
  { value: "bachelor-completed", label: "Bachelor's Completed" },
  { value: "master-prospective", label: "Prospective Master's Student" },
  { value: "master-current", label: "Current Master's Student" },
];

const graduationYearOptions: Option[] = [
  { value: "2026", label: "2026" },
  { value: "2027", label: "2027" },
  { value: "2028", label: "2028" },
  { value: "2029", label: "2029" },
  { value: "2030", label: "2030" },
];

export default function ContactForm() {
  const [formType, setFormType] = useState<FormType>("company");
  const [company, setCompany] = useState<CompanyData>(emptyCompany);
  const [student, setStudent] = useState<StudentData>(emptyStudent);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    function onSelectType(e: Event) {
      const type = (e as CustomEvent<FormType>).detail;
      setFormType(type);
      setStatus("idle");
    }
    window.addEventListener("selectFormType", onSelectType);
    return () => window.removeEventListener("selectFormType", onSelectType);
  }, []);

  function switchForm(type: FormType) {
    setFormType(type);
    setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const form = e.target as HTMLFormElement;
      const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;
      if (honeypot) {
        setStatus("success");
        return;
      }

      const payload =
        formType === "company"
          ? { type: "company", ...company }
          : { type: "student", ...student };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      if (formType === "company") setCompany(emptyCompany);
      else setStudent(emptyStudent);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="register"
      className="py-24 bg-gradient-to-b from-black to-purple-950/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 heading-font">
            Join the <span className="gradient-text-purple">Movement</span>
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Be among the first to experience the future of talent acquisition and career development
          </p>

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 inline-flex border border-white/20">
              <button
                onClick={() => switchForm("company")}
                className={`px-4 py-3 text-sm md:px-8 md:py-4 md:text-base rounded-xl font-bold transition-all duration-300 ${
                  formType === "company"
                    ? "gradient-bg-purple glow-purple text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Briefcase className="inline-block mr-1 md:mr-2 mb-1" size={16} />
                For Companies
              </button>
              <button
                onClick={() => switchForm("student")}
                className={`px-4 py-3 text-sm md:px-8 md:py-4 md:text-base rounded-xl font-bold transition-all duration-300 ${
                  formType === "student"
                    ? "gradient-bg-yellow glow-yellow text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <GraduationCap className="inline-block mr-1 md:mr-2 mb-1" size={16} />
                For Students
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="relative">
            <div
              className={`absolute inset-0 ${
                formType === "company" ? "gradient-bg-purple" : "gradient-bg-yellow"
              } rounded-3xl blur-2xl opacity-20`}
            ></div>

            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
              {status === "success" && (
                <div className="mb-8 bg-green-500/20 border border-green-500/50 rounded-xl p-6 flex items-center animate-slide-in">
                  <CheckCircle className="text-green-400 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Registration Received!</h4>
                    <p className="text-gray-300">We&apos;ll be in touch soon with next steps.</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-8 bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-400 text-center">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot: hidden from humans, bots will fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
                />
                {formType === "company" ? (
                  <>
                    <h3 className="text-3xl font-bold mb-6 gradient-text-purple heading-font">
                      Company Interest Form
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={company.companyName}
                          onChange={(e) => setCompany({ ...company, companyName: e.target.value })}
                          className={inputClass}
                          placeholder="Your Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Contact Name *</label>
                        <input
                          type="text"
                          required
                          value={company.contactName}
                          onChange={(e) => setCompany({ ...company, contactName: e.target.value })}
                          className={inputClass}
                          placeholder="Your Full Name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Email *</label>
                        <input
                          type="email"
                          required
                          value={company.email}
                          onChange={(e) => setCompany({ ...company, email: e.target.value })}
                          className={inputClass}
                          placeholder="contact@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Phone</label>
                        <input
                          type="tel"
                          value={company.phone}
                          onChange={(e) => setCompany({ ...company, phone: e.target.value })}
                          className={inputClass}
                          placeholder="+41 XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Industry *</label>
                        <CustomSelect
                          required
                          value={company.industry}
                          onChange={(v) => setCompany({ ...company, industry: v })}
                          placeholder="Select Industry"
                          options={industryOptions}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Company Size *</label>
                        <CustomSelect
                          required
                          value={company.companySize}
                          onChange={(v) => setCompany({ ...company, companySize: v })}
                          placeholder="Select Size"
                          options={companySizeOptions}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Hiring Needs & Roles</label>
                      <textarea
                        rows={4}
                        value={company.message}
                        onChange={(e) => setCompany({ ...company, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about the roles you're looking to fill and your talent needs..."
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold mb-6 gradient-text-yellow heading-font">
                      Student Pre-Registration
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={student.name}
                          onChange={(e) => setStudent({ ...student, name: e.target.value })}
                          className={inputClass}
                          placeholder="Your Full Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Email *</label>
                        <input
                          type="email"
                          required
                          value={student.email}
                          onChange={(e) => setStudent({ ...student, email: e.target.value })}
                          className={inputClass}
                          placeholder="your.email@university.edu"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">University *</label>
                        <input
                          type="text"
                          required
                          value={student.university}
                          onChange={(e) => setStudent({ ...student, university: e.target.value })}
                          className={inputClass}
                          placeholder="EPFL, ETH Zurich, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Degree Level *</label>
                        <CustomSelect
                          required
                          value={student.degree}
                          onChange={(v) => setStudent({ ...student, degree: v })}
                          placeholder="Select Degree"
                          options={degreeOptions}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Field of Study *</label>
                        <input
                          type="text"
                          required
                          value={student.field}
                          onChange={(e) => setStudent({ ...student, field: e.target.value })}
                          className={inputClass}
                          placeholder="Computer Science, Engineering, etc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Expected Graduation Year *</label>
                        <CustomSelect
                          required
                          value={student.graduationYear}
                          onChange={(v) => setStudent({ ...student, graduationYear: v })}
                          placeholder="Select Year"
                          options={graduationYearOptions}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Current GPA (Optional)</label>
                      <input
                        type="text"
                        value={student.gpa}
                        onChange={(e) => setStudent({ ...student, gpa: e.target.value })}
                        className={inputClass}
                        placeholder="e.g., 5.5/6.0 or 3.8/4.0"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 ${
                    formType === "company"
                      ? "gradient-bg-purple glow-purple text-white"
                      : "gradient-bg-yellow glow-yellow text-black"
                  }`}
                >
                  {status === "loading" ? (
                    "Submitting..."
                  ) : formType === "company" ? (
                    <>
                      <TrendingUp className="inline-block mr-2 mb-1" size={24} />
                      Express Interest
                    </>
                  ) : (
                    <>
                      <Award className="inline-block mr-2 mb-1" size={24} />
                      Pre-Register Now
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center mt-4">
                  By submitting, you agree to be contacted about BrightFutures opportunities
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
