export default function Testimonials() {
  const testimonials = [
    {
      role: "Swiss Insurance CEO",
      color: "purple" as const,
      quote:
        "Boards increasingly view talent scarcity as a top 3 risk. A structured marketplace for co-funded education combined with employment commitments could see real traction.",
    },
    {
      role: "Austrian Steel HR Manager",
      color: "orange" as const,
      quote:
        "If you can guarantee us qualified students who actually complete the program and stay afterwards, we'd pay a premium. Retention is one of our biggest pain points.",
    },
    {
      role: "YC Incubator Founder",
      color: "gold" as const,
      quote:
        "Why not? They pay for your education, and they also offer you a job. It's a no-brainer for students.",
    },
    {
      role: "EPFL Master Students",
      color: "gold" as const,
      quote:
        "Finding an internship in this market is incredibly difficult. An offer combining education funding and guaranteed employment is exactly what students need.",
    },
  ];

  const colorMap = {
    purple: "border-purple text-purple-light",
    gold: "border-gold text-gold-light",
    orange: "border-orange text-orange-light",
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 gradient-bar rounded" />
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            Validation
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Why <span className="gradient-text">Now</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`card-glass rounded-2xl p-8 border-l-4 ${colorMap[t.color].split(" ")[0]}`}
            >
              <svg
                className="w-8 h-8 text-white/10 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p
                className={`font-semibold text-sm ${colorMap[t.color].split(" ")[1]}`}
              >
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
