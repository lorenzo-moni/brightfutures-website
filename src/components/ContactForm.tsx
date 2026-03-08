"use client";

import { useState } from "react";
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

const selectClass =
  "w-full px-5 py-4 bg-zinc-900 border border-white/20 rounded-xl text-white form-input";

export default function ContactForm() {
  const [formType, setFormType] = useState<FormType>("company");
  const [company, setCompany] = useState<CompanyData>(emptyCompany);
  const [student, setStudent] = useState<StudentData>(emptyStudent);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function switchForm(type: FormType) {
    setFormType(type);
    setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
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
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  formType === "company"
                    ? "gradient-bg-purple glow-purple text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Briefcase className="inline-block mr-2 mb-1" size={20} />
                For Companies
              </button>
              <button
                onClick={() => switchForm("student")}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  formType === "student"
                    ? "gradient-bg-yellow glow-yellow text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <GraduationCap className="inline-block mr-2 mb-1" size={20} />
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
                        <select
                          required
                          value={company.industry}
                          onChange={(e) => setCompany({ ...company, industry: e.target.value })}
                          className={selectClass}
                        >
                          <option value="">Select Industry</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="technology">Technology</option>
                          <option value="engineering">Engineering</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Company Size *</label>
                        <select
                          required
                          value={company.companySize}
                          onChange={(e) => setCompany({ ...company, companySize: e.target.value })}
                          className={selectClass}
                        >
                          <option value="">Select Size</option>
                          <option value="1-50">1-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
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
                        <select
                          required
                          value={student.degree}
                          onChange={(e) => setStudent({ ...student, degree: e.target.value })}
                          className={selectClass}
                        >
                          <option value="">Select Degree</option>
                          <option value="bachelor-current">Current Bachelor&apos;s Student</option>
                          <option value="bachelor-completed">Bachelor&apos;s Completed</option>
                          <option value="master-prospective">Prospective Master&apos;s Student</option>
                          <option value="master-current">Current Master&apos;s Student</option>
                        </select>
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
                        <select
                          required
                          value={student.graduationYear}
                          onChange={(e) => setStudent({ ...student, graduationYear: e.target.value })}
                          className={selectClass}
                        >
                          <option value="">Select Year</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                          <option value="2030">2030</option>
                        </select>
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
