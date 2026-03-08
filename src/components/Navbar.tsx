"use client";

import { useState } from "react";
import { Menu, X, Briefcase, GraduationCap } from "lucide-react";

const links = [
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <nav className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="heading-font text-2xl font-black">
            <span className="gradient-text-purple">Bright</span>
            <span className="gradient-text-yellow">Futures</span>
            <span className="text-white">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#register"
              className="px-4 py-2 gradient-bg-purple rounded-xl font-bold text-sm hover:scale-105 transition-transform duration-200 glow-purple"
            >
              <Briefcase className="inline-block mr-1 mb-0.5" size={14} />
              Companies
            </a>
            <a
              href="#register"
              className="px-4 py-2 gradient-bg-yellow rounded-xl font-bold text-sm hover:scale-105 transition-transform duration-200 glow-yellow text-black"
            >
              <GraduationCap className="inline-block mr-1 mb-0.5" size={14} />
              Students
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2 border-t border-white/10">
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2 gradient-bg-purple rounded-xl font-bold text-sm glow-purple"
              >
                Companies
              </a>
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="flex-1 text-center py-2 gradient-bg-yellow rounded-xl font-bold text-sm glow-yellow text-black"
              >
                Students
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
