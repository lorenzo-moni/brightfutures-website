export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 heading-font">
          <span className="gradient-text-purple">Pre-Emptive Hiring</span> via{" "}
          <span className="gradient-text-yellow">Bonded Sponsorship</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start group">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 gradient-bg-purple rounded-2xl flex items-center justify-center text-3xl font-black glow-purple group-hover:scale-110 transition-transform heading-font">
                01
              </div>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-colors">
              <h3 className="text-2xl font-bold mb-3 gradient-text-purple heading-font">
                Precision Vetting and Culture Matching
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We use a data-driven approach to evaluate students&apos; skills, grit, and values
                through academic credentials analysis, technical skill assessments with AI
                comparison, and comprehensive grit/reliability scoring.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start group">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 gradient-bg-yellow rounded-2xl flex items-center justify-center text-3xl font-black glow-yellow group-hover:scale-110 transition-transform heading-font">
                <span className="text-black">02</span>
              </div>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-colors">
              <h3 className="text-2xl font-bold mb-3 gradient-text-yellow heading-font">
                Company Matching
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We propose verified students to companies and manage the entire sponsorship
                contract. Our platform handles all legal frameworks, agreements, and
                administrative processes to ensure seamless partnerships.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-start group">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 gradient-bg-orange rounded-2xl flex items-center justify-center text-3xl font-black group-hover:scale-110 transition-transform heading-font">
                03
              </div>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-colors">
              <h3 className="text-2xl font-bold mb-3 gradient-text-orange heading-font">
                Monitoring & Active Success Governance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We manage risk by actively monitoring student academic paths in real-time with
                continuous performance tracking, company-assigned mentorship, and external
                coaching support to ensure success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
