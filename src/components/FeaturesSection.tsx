const features = [
  {
    id: "feature-ai-boss",
    icon: "🤖",
    iconBg: "#FF82981A",
    iconBorder: "#FF829833",
    tag: "IA Générative",
    tagColor: "#FF8298",
    title: "Des patrons IA imprévisibles",
    description:
      "Chaque jour, votre patron IA change d'humeur, de priorités et d'exigences. Apprenez à le gérer… ou à l'éviter. Chaque décision a des conséquences sur vos étoiles.",
    perks: ["Humeurs aléatoires", "Mémoire des incidents", "Escalades dramatiques"],
  },
  {
    id: "feature-hr",
    icon: "📋",
    iconBg: "#5B9CF61A",
    iconBorder: "#5B9CF633",
    tag: "Passive-Agressivité",
    tagColor: "#5B9CF6",
    title: "Une DRH experte en double langage",
    description:
      "Mme. Thorne ne dit jamais ce qu'elle pense. Ses e-mails sont des œuvres d'art de la manipulation bienveillante. Chaque convocation en salle H est un piège potentiel.",
    perks: ["Emails codés à décrypter", "Entretiens pièges", "Avertissements feutrés"],
  },
  {
    id: "feature-colleagues",
    icon: "🤝",
    iconBg: "#F5C5421A",
    iconBorder: "#F5C54233",
    tag: "Alliances",
    tagColor: "#F5C542",
    title: "Des collègues et des alliances",
    description:
      "Formez des alliances avec d'autres employés virtuels. Méfiez-vous des fayots, des saboteurs et des stars de la pause café. La confiance est une ressource rare.",
    perks: ["Système d'alliance dynamique", "Rumeurs d'open space", "Trahisons possibles"],
  },
  {
    id: "feature-career",
    icon: "⭐",
    iconBg: "#4ADE801A",
    iconBorder: "#4ADE8033",
    tag: "Progression",
    tagColor: "#4ADE80",
    title: "Une carrière à construire",
    description:
      "Partez stagiaire, devenez (peut-être) Directeur Régional. Complétez des missions, gérez votre réputation et évitez les plans de licenciement. Cinq étoiles à préserver.",
    perks: ["10 niveaux hiérarchiques", "Missions hebdomadaires", "Notation 5 étoiles"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-24 lg:py-32 bg-[#080E18]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-[#FF82981A] border border-[#FF829833] text-[#FF8298] text-xs font-semibold tracking-widest uppercase">
            Fonctionnalités
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0EDE8] leading-tight">
            Tout ce que vous{" "}
            <span className="text-[#FF8298] italic">détestez</span>{" "}
            au bureau,
            <br />
            gamifié.
          </h2>
          <p className="mt-4 text-[#8899AA] text-lg max-w-2xl mx-auto">
            The (toxic) Office reproduit fidèlement l'absurdité du monde
            corporate — avec des mécaniques de jeu addictives en prime.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <article
              key={f.id}
              id={f.id}
              className="group relative bg-[#111A28] border border-[#1E2D42] rounded-2xl p-6 card-hover cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${f.iconBg.replace("1A", "0D")} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                  style={{
                    backgroundColor: f.iconBg,
                    borderColor: f.iconBorder,
                  }}
                >
                  {f.icon}
                </div>

                {/* Tag */}
                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: f.tagColor }}
                >
                  {f.tag}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F0EDE8] leading-snug">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#8899AA] leading-relaxed">{f.description}</p>

                {/* Perks */}
                <ul className="flex flex-col gap-1.5 mt-2">
                  {f.perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#8899AA]">
                      <span style={{ color: f.tagColor }} className="text-sm">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
