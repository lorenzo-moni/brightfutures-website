"use client";

import { useState } from "react";

export default function StudentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    university: "",
    degree: "",
    field: "",
    graduationYear: "",
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
        body: JSON.stringify({ type: "student", ...form }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", university: "", degree: "", field: "", graduationYear: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition text-sm";

  return (
    <section id="students" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-1 gradient-bar" />
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 bg-gold rounded" />
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            For Students
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Fund Your <span className="text-gold-light">Future</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Pre-register for bonded sponsorship opportunities. Get your education
          funded and secure a guaranteed career path with a top company.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email Address *"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="University *"
              required
              value={form.university}
              onChange={(e) => setForm({ ...form, university: e.target.value })}
              className={inputClass}
            />
            <select
              value={form.degree}
              onChange={(e) => setForm({ ...form, degree: e.target.value })}
              className={inputClass}
            >
              <option value="">Degree Level</option>
              <option value="bachelor">Bachelor&apos;s</option>
              <option value="master">Master&apos;s</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Field of Study *"
              required
              value={form.field}
              onChange={(e) => setForm({ ...form, field: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Expected Graduation Year"
              value={form.graduationYear}
              onChange={(e) => setForm({ ...form, graduationYear: e.target.value })}
              className={inputClass}
            />
          </div>
          <textarea
            placeholder="Why are you interested in bonded sponsorship?"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-gold text-black rounded-xl font-semibold text-lg hover:bg-gold-light transition disabled:opacity-50 glow-gold"
          >
            {status === "loading" ? "Submitting..." : "Pre-Register Now"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center text-sm">
              You&apos;re pre-registered! We&apos;ll notify you when opportunities are available.
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
