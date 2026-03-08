import { Briefcase, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-bg-purple rounded-full blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-bg-yellow rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 gradient-bg-orange rounded-full blur-3xl opacity-15 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 opacity-0 animate-slide-in">
            <h1 className="text-7xl md:text-8xl font-black mb-4 heading-font">
              <span className="gradient-text-purple">Bright</span>
              <span className="gradient-text-yellow">Futures</span>
              <span className="text-white">.</span>
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight opacity-0 animate-slide-in delay-100 heading-font">
            Bridging <span className="gradient-text-purple">Ambition</span> and{" "}
            <span className="gradient-text-yellow">Industry Demand</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto opacity-0 animate-slide-in delay-200">
            The platform enabling SMEs to secure elite talent through vetted,
            monitored, and bonded university sponsorships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 opacity-0 animate-slide-in delay-300">
            <a
              href="#register"
              className="px-10 py-5 gradient-bg-purple rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 glow-purple"
            >
              <Briefcase className="inline-block mr-2 mb-1" size={24} />
              I&apos;m a Company
            </a>
            <a
              href="#register"
              className="px-10 py-5 gradient-bg-yellow rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 glow-yellow text-black"
            >
              <GraduationCap className="inline-block mr-2 mb-1" size={24} />
              I&apos;m a Student
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-0 animate-slide-in delay-400">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-4xl font-black gradient-text-purple mb-2 heading-font">
                ROI 1:1
              </div>
              <div className="text-sm text-gray-400">Investment Return</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-colors">
              <div className="text-4xl font-black gradient-text-yellow mb-2 heading-font">
                €30M
              </div>
              <div className="text-sm text-gray-400">Swiss SOM</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors">
              <div className="text-4xl font-black gradient-text-purple mb-2 heading-font">
                2-3yr
              </div>
              <div className="text-sm text-gray-400">Retention Period</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-colors">
              <div className="text-4xl font-black gradient-text-orange mb-2 heading-font">
                100%
              </div>
              <div className="text-sm text-gray-400">Funded Studies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-purple-500 rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
}
