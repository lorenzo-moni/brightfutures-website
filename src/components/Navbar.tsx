"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold">
          <span className="gradient-text">BrightFutures</span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#problem" className="hover:text-white transition">
            Problem
          </a>
          <a href="#solution" className="hover:text-white transition">
            Solution
          </a>
          <a href="#how-it-works" className="hover:text-white transition">
            How It Works
          </a>
          <a href="#team" className="hover:text-white transition">
            Team
          </a>
          <a
            href="#companies"
            className="px-4 py-2 bg-purple text-white rounded-lg text-sm font-medium hover:bg-purple-dark transition"
          >
            For Companies
          </a>
          <a
            href="#students"
            className="px-4 py-2 bg-gold text-black rounded-lg text-sm font-medium hover:bg-gold-light transition"
          >
            For Students
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-t border-white/5 px-6 py-4 space-y-4">
          <a href="#problem" className="block text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
            Problem
          </a>
          <a href="#solution" className="block text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
            Solution
          </a>
          <a href="#how-it-works" className="block text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
            How It Works
          </a>
          <a href="#team" className="block text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
            Team
          </a>
          <a
            href="#companies"
            className="block px-4 py-2 bg-purple text-white rounded-lg text-sm font-medium text-center"
            onClick={() => setOpen(false)}
          >
            For Companies
          </a>
          <a
            href="#students"
            className="block px-4 py-2 bg-gold text-black rounded-lg text-sm font-medium text-center"
            onClick={() => setOpen(false)}
          >
            For Students
          </a>
        </div>
      )}
    </nav>
  );
}
