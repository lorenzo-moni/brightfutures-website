export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 heading-font">
          What <span className="gradient-text-purple">Leaders</span> Are Saying
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="text-yellow-400 mb-4 text-4xl">&ldquo;</div>
            <p className="text-lg text-gray-300 mb-6 italic">
              Our biggest struggles are visibility and finding candidates who fit our culture
              and skill needs. We would use the platform, if it reduces friction.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 gradient-bg-purple rounded-full flex items-center justify-center font-bold mr-4">
                HR
              </div>
              <div>
                <div className="font-bold gradient-text-purple">HR Manager</div>
                <div className="text-sm text-gray-400">Austrian Billion-Dollar Revenue Company</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-950/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30">
            <div className="text-purple-400 mb-4 text-4xl">&ldquo;</div>
            <p className="text-lg text-gray-300 mb-6 italic">
              If BrightFutures could create a structured marketplace for co-funded education
              combined with employment commitments, I could see real traction. Boards
              increasingly view talent scarcity as a top 3 risk.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 gradient-bg-yellow rounded-full flex items-center justify-center font-bold mr-4 text-black">
                CEO
              </div>
              <div>
                <div className="font-bold gradient-text-yellow">Former CEO</div>
                <div className="text-sm text-gray-400">Large Swiss Insurance Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
