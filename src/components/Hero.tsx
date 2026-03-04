export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/20 rounded-full blur-[128px] animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-lg md:text-xl mb-4 tracking-wide">
          Bridging Ambition and Industry Demand.
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          <span className="gradient-text">BrightFutures</span>
          <span className="text-white">.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We connect top university talent with forward-thinking companies
          through <span className="text-purple-light font-medium">bonded sponsorship</span>.
          Companies secure elite junior talent before graduation. Students get
          funded education and guaranteed careers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#companies"
            className="px-8 py-4 bg-purple text-white rounded-xl text-lg font-semibold hover:bg-purple-dark transition glow-purple"
          >
            I&apos;m a Company
          </a>
          <a
            href="#students"
            className="px-8 py-4 bg-gold text-black rounded-xl text-lg font-semibold hover:bg-gold-light transition glow-gold"
          >
            I&apos;m a Student
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-purple-light">46.5B</p>
            <p className="text-xs text-gray-500 mt-1">EU Training Market</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-gold">1.2B</p>
            <p className="text-xs text-gray-500 mt-1">SAM</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-orange">30M</p>
            <p className="text-xs text-gray-500 mt-1">Swiss SOM</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
