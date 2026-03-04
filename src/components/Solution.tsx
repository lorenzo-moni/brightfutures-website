export default function Solution() {
  return (
    <section id="solution" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 gradient-bar rounded" />
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            Solution
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pre-Emptive Hiring via{" "}
          <span className="gradient-text">Bonded Sponsorship</span>.
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mb-16">
          We vet, match, and manage the entire sponsorship lifecycle &mdash;
          connecting companies with guaranteed, high-quality junior talent before
          they even graduate.
        </p>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-glass rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple" />
            <div className="w-14 h-14 rounded-2xl bg-purple/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-purple-light mb-2">
              Forging Talent Security
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Companies get access to a pool of verified, high-retention
              junior engineering talent matched to their culture and skill needs.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gold-light mb-2">
              Empowering Future Leaders
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Students get a secure career path, financial support for their
              education, and targeted mentoring throughout their studies.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-orange" />
            <div className="w-14 h-14 rounded-2xl bg-orange/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-orange-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-orange-light mb-2">
              Building the Trust Infrastructure
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Active success monitoring, academic performance agreements, and
              internal mentorship create a risk-managed ecosystem for both sides.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
