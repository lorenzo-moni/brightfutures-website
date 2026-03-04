export default function Team() {
  return (
    <section id="team" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 gradient-bar rounded" />
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            Our Team
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Why <span className="gradient-text">Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Lorenzo */}
          <div className="card-glass rounded-2xl p-8 text-center border border-purple/20">
            <div className="w-24 h-24 rounded-2xl bg-purple/20 border-2 border-purple mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-purple-light">LM</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Lorenzo Moni</h3>
            <p className="text-purple-light text-sm mb-1">
              Vetting Lead @ BrightFutures
            </p>
            <p className="text-gray-500 text-sm mb-4">
              CS MSc @ EPFL &middot; Full Stack Developer
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-purple/10 text-purple-light rounded-full text-xs">
                Data Science & AI
              </span>
              <span className="px-3 py-1 bg-purple/10 text-purple-light rounded-full text-xs">
                EPFL Network
              </span>
              <span className="px-3 py-1 bg-purple/10 text-purple-light rounded-full text-xs">
                HR Experience
              </span>
            </div>
          </div>

          {/* Sebastian */}
          <div className="card-glass rounded-2xl p-8 text-center border border-gold/20">
            <div className="w-24 h-24 rounded-2xl bg-gold/20 border-2 border-gold mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold text-gold-light">SZ</span>
            </div>
            <h3 className="text-xl font-bold mb-1">Sebastian Zlabinger</h3>
            <p className="text-gold-light text-sm mb-1">
              Risk Management Lead @ BrightFutures
            </p>
            <p className="text-gray-500 text-sm mb-4">
              MTE MSc @ EPFL &middot; Solution Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-gold/10 text-gold-light rounded-full text-xs">
                Sponsorship Experience
              </span>
              <span className="px-3 py-1 bg-gold/10 text-gold-light rounded-full text-xs">
                EPFL Network
              </span>
              <span className="px-3 py-1 bg-gold/10 text-gold-light rounded-full text-xs">
                HR Processes
              </span>
            </div>
          </div>
        </div>

        {/* Shared skills */}
        <div className="card-glass rounded-2xl p-6 max-w-md mx-auto">
          <h4 className="text-sm font-semibold text-gray-400 text-center mb-4">
            Shared Expertise
          </h4>
          <div className="space-y-3">
            {["Data Science & AI", "Access to EPFL Talent", "Direct Experience with Sponsorship", "Experience in HR Processes"].map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
