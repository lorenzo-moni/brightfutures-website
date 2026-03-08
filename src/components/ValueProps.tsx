import { Shield, Rocket, Users, CheckCircle } from "lucide-react";

export default function ValueProps() {
  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 heading-font">
          Building the{" "}
          <span className="gradient-text-purple">Dual-Impact</span>
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-center mb-20 heading-font">
          <span className="gradient-text-yellow">Ecosystem</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* For Companies */}
          <div className="group relative">
            <div className="absolute inset-0 gradient-bg-purple rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacityl"></div>
            <div className="relative h-full bg-gradient-to-br from-purple-900/50 to-purple-950/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105 duration-300">
              <div className="w-20 h-20 gradient-bg-purple rounded-2xl flex items-center justify-center mb-6 glow-purple">
                <Shield size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 heading-font gradient-text-purple">
                Forging Talent Security
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Access to vetted, high-retention talent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Pre-emptive hiring 2 years before graduation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Guaranteed retention through bonded agreements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Avoid recruiting costs & attrition losses</span>
                </li>
              </ul>
            </div>
          </div>

          {/* For Students */}
          <div className="group relative">
            <div className="absolute inset-0 gradient-bg-yellow rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative h-full bg-gradient-to-br from-yellow-900/50 to-yellow-950/30 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all hover:scale-105 duration-300">
              <div className="w-20 h-20 gradient-bg-yellow rounded-2xl flex items-center justify-center mb-6 glow-yellow">
                <Rocket size={40} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 heading-font gradient-text-yellow">
                Empowering Future Leaders
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Fully funded master&apos;s degree education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Guaranteed job placement after graduation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Company mentorship & career development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                  <span>No student debt or financial burden</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Platform */}
          <div className="group relative">
            <div className="absolute inset-0 gradient-bg-orange rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative h-full bg-gradient-to-br from-orange-900/50 to-orange-950/30 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all hover:scale-105 duration-300">
              <div className="w-20 h-20 gradient-bg-orange rounded-2xl flex items-center justify-center mb-6">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 heading-font gradient-text-orange">
                Building Trust Infrastructure
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span>AI-powered precision vetting algorithm</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Real-time academic performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Legal framework & contract management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-orange-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Active success governance throughout studies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
