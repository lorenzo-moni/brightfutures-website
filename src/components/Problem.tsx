export default function Problem() {
  return (
    <section id="problem" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 gradient-bar rounded" />
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            The Problem
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Unacceptable Cost of{" "}
          <span className="gradient-text">Talent Insecurity</span> in SMEs
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mb-16">
          Small and medium enterprises face a dual crisis: they struggle to
          attract elite talent, and when they do, retention remains a major
          challenge. This leads to enormous hidden costs.
        </p>

        {/* Venn diagram concept */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-glass rounded-2xl p-8 border-l-4 border-purple">
            <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-purple-light mb-3">
              Problem of Attraction
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Companies fail to attract elite talent. SMEs lack brand visibility
              compared to large corporations, making it hard to compete for top
              graduates from universities like EPFL.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-8 border-l-4 border-orange">
            <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-orange-light mb-3">
              Problem of Retention
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Companies fail to retain talent. With a 37% attrition rate for
              junior hires, every departure means repeating expensive recruiting,
              vacancy, and ramp-up costs.
            </p>
          </div>
        </div>

        {/* Cost breakdown */}
        <div className="card-glass rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">
            The Hidden Cost of <span className="text-rose">Talent Shortage</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold">CHF 16k</p>
              <p className="text-sm text-gray-500 mt-1">Recruiting Cost</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold">CHF 15k</p>
              <p className="text-sm text-gray-500 mt-1">Vacancy Cost</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold">CHF 5k</p>
              <p className="text-sm text-gray-500 mt-1">Ramp-Up Cost</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold">CHF 14k</p>
              <p className="text-sm text-gray-500 mt-1">Attrition Cost</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Total cost per failed hire: <span className="text-white font-semibold">~CHF 50,000</span>
          </p>
        </div>
      </div>
    </section>
  );
}
