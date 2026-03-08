
const members = [
  {
    name: "Lorenzo Moni",
    role: "Vetting Lead",
    description: "Incoming SWE Intern @ Bloomberg · CS MSc @ EPFL",
    tags: ["Data Science & AI", "EPFL Network", "HR Processes"],
    accent: "purple" as const,
    photo: "/moni-profile-pic.jpeg",
  },
  {
    name: "Sebastian Zlabinger",
    role: "Risk Management Lead",
    description: "Consultant Intern @ BCG · MTE MSc @ EPFL",
    tags: ["Sponsorship Experience", "EPFL Network", "HR Processes"],
    accent: "yellow" as const,
    photo: "/zlabinger-profile-pic.png",
  },
  {
    name: "Adam Hoško",
    role: "Legal Lead",
    description: "Legal Assistant @ SMPL · ChE MSc @ EPFL",
    tags: ["Legal Expertise", "EPFL Network"],
    accent: "purple" as const,
    photo: "/hosko-profile-pic.png",
  },
];

const accentMap = {
  purple: {
    hexBorder: "#8b5cf6",
    hexGlow: "drop-shadow(0 0 16px rgba(139,92,246,0.6))",
    border: "border-purple-500/30 hover:border-purple-500/60",
    glow: "gradient-bg-purple",
    card: "bg-gradient-to-br from-purple-900/50 to-purple-950/30",
    tag: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    role: "gradient-text-purple",
  },
  yellow: {
    hexBorder: "#fbbf24",
    hexGlow: "drop-shadow(0 0 16px rgba(251,191,36,0.6))",
    border: "border-yellow-500/30 hover:border-yellow-500/60",
    glow: "gradient-bg-yellow",
    card: "bg-gradient-to-br from-yellow-900/50 to-yellow-950/30",
    tag: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    role: "gradient-text-yellow",
  },
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 heading-font">
          Meet the <span className="gradient-text-purple">Team</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Three EPFL students on a mission to bridge the talent gap between ambitious
          students and forward-thinking companies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member) => {
            const a = accentMap[member.accent];
            return (
              <div key={member.name} className="group relative h-full">
                <div
                  className={`absolute inset-0 ${a.glow} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                ></div>
                <div
                  className={`relative ${a.card} backdrop-blur-sm rounded-3xl p-8 border ${a.border} transition-all hover:scale-105 duration-300 h-full flex flex-col items-center text-center`}
                >
                  {/* Circle photo */}
                  <div
                    className="mb-6 w-56 h-56 rounded-full overflow-hidden"
                    style={{
                      border: `3px solid ${a.hexBorder}`,
                      filter: a.hexGlow,
                    }}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <h3 className={`text-2xl font-bold mb-1 heading-font ${a.role}`}>
                    {member.name}
                  </h3>
                  <p className="text-white font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-6">{member.description}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${a.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
