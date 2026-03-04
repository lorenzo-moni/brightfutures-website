"use client";

import { useState } from "react";

export default function CompanyForm() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    industry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "company", ...form }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ companyName: "", contactName: "", email: "", phone: "", companySize: "", industry: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition text-sm";

  return (
    <section id="companies" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-1 gradient-bar" />
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 bg-purple rounded" />
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            For Companies
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Secure Your <span className="text-purple-light">Future Talent</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Express your interest in bonded sponsorship. We&apos;ll reach out to discuss
          how BrightFutures can solve your talent acquisition and retention challenges.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Company Name *"
              required
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Contact Person *"
              required
              value={form.contactName}
              onChange={(e) => setForm({ ...form, contactName: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="email"
              placeholder="Work Email *"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <select
              value={form.companySize}
              onChange={(e) => setForm({ ...form, companySize: e.target.value })}
              className={inputClass}
            >
              <option value="">Company Size</option>
              <option value="1-50">1-50 employees</option>
              <option value="50-200">50-200 employees</option>
              <option value="200-1000">200-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
            <input
              type="text"
              placeholder="Industry"
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
              className={inputClass}
            />
          </div>
          <textarea
            placeholder="Tell us about your talent needs..."
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-purple text-white rounded-xl font-semibold text-lg hover:bg-purple-dark transition disabled:opacity-50 glow-purple"
          >
            {status === "loading" ? "Submitting..." : "Express Interest"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center text-sm">
              Thank you! We&apos;ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center text-sm">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
