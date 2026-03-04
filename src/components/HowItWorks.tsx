export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Precision Vetting & Culture Matching",
      description:
        "We use a data-driven approach to evaluate students' academic credentials, technical skills, grit, and values. Only the most qualified and committed candidates enter our pool.",
      color: "purple" as const,
    },
    {
      number: "02",
      title: "Company Matching",
      description:
        "We propose verified students to companies and manage the entire sponsorship contract. Companies choose candidates aligned with their culture and technical needs.",
      color: "gold" as const,
    },
    {
      number: "03",
      title: "Monitoring & Active Success Governance",
      description:
        "We actively monitor student academic progress in real time. Internal mentorship, coaching events, and performance agreements ensure success and retention.",
      color: "orange" as const,
    },
  ];

  const colorMap = {
    purple: {
      bg: "bg-purple/20",
      border: "border-purple",
      text: "text-purple-light",
      number: "text-purple",
    },
    gold: {
      bg: "bg-gold/20",
      border: "border-gold",
      text: "text-gold-light",
      number: "text-gold",
    },
    orange: {
      bg: "bg-orange/20",
      border: "border-orange",
      text: "text-orange-light",
      number: "text-orange",
    },
  };

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-1 gradient-bar rounded" />
          <span className="text-sm text-gray-500 uppercase tracking-widest">
            How It Works
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Three Steps to{" "}
          <span className="gradient-text">Talent Security</span>
        </h2>

        <div className="space-y-8">
          {steps.map((step) => {
            const colors = colorMap[step.color];
            return (
              <div
                key={step.number}
                className={`card-glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6 border-l-4 ${colors.border}`}
              >
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center`}
                >
                  <span className={`text-2xl font-bold ${colors.number}`}>
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vetting funnel summary */}
        <div className="mt-16 card-glass rounded-2xl p-8">
          <h3 className="text-xl font-bold text-center mb-8">
            Our <span className="text-purple-light">Vetting Funnel</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-light mb-1">
                Academic Credentials
              </h4>
              <p className="text-gray-500 text-sm">
                Grades, course difficulty, academic progression and consistency
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-semibold text-gold-light mb-1">
                Technical Skills
              </h4>
              <p className="text-gray-500 text-sm">
                Custom company challenges evaluated with AI-driven analysis
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-semibold text-orange-light mb-1">
                Grit & Reliability
              </h4>
              <p className="text-gray-500 text-sm">
                Duckworth&apos;s Grit Scale, situational tests, and behavioral
                interviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
