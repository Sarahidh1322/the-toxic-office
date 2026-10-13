"use client";

import { useState } from "react";
import Image from "next/image";

const characters = [
  {
    id: "character-boss",
    image: "/boss.jpg",
    name: "Victor Morel",
    title: "PDG & Fondateur",
    subtitle: "« Le patron »",
    accentColor: "#FF8298",
    accentBg: "#FF82981A",
    accentBorder: "#FF829833",
    stars: 1,
    level: "Niveau Danger : ☠️☠️☠️☠️☠️",
    description:
      "Autoritaire, impatient et obsédé par les résultats. Victor ne se souvient jamais de votre prénom mais connaît votre taux de productivité à la virgule près. Il attend des miracles pour demain — c'est-à-dire hier.",
    traits: [
      { label: "Toxicité", value: 95 },
      { label: "Patience", value: 4 },
      { label: "Empathie", value: 2 },
    ],
    quote: "« Excellent travail. Recommencez. Mieux. »",
    badge: "Patron IA",
    badgeColor: "#FF8298",
  },
  {
    id: "character-hr",
    image: "/hr.jpg",
    name: "Mme. Thorne",
    title: "Directrice des Ressources Humaines",
    subtitle: "« La DRH »",
    accentColor: "#5B9CF6",
    accentBg: "#5B9CF61A",
    accentBorder: "#5B9CF633",
    stars: 2,
    level: "Niveau Danger : ☠️☠️☠️☠️",
    description:
      "Faussement bienveillante, experte en communication corporate et maître du sous-entendu. Son sourire est un avertissement. Chaque réunion avec elle est un entretien disciplinaire déguisé en déjeuner convivial.",
    traits: [
      { label: "Manipulation", value: 98 },
      { label: "Sourire Factice", value: 100 },
      { label: "Transparence", value: 3 },
    ],
    quote: "« Bien sûr, la porte est toujours ouverte. »",
    badge: "DRH IA",
    badgeColor: "#5B9CF6",
  },
  {
    id: "character-colleague",
    image: "/colleague.jpg",
    name: "Liam Bessard",
    title: "Chargé de Mission Polyvalent",
    subtitle: "« Le fayot »",
    accentColor: "#F5C542",
    accentBg: "#F5C5421A",
    accentBorder: "#F5C54233",
    stars: 4,
    level: "Niveau Danger : ☠️☠️",
    description:
      "Toujours prêt à se faire bien voir. Liam arrive avant tout le monde, repart après tout le monde, et envoie des comptes rendus de réunion que personne n'a demandés. Son ambition est inversement proportionnelle à sa loyauté.",
    traits: [
      { label: "Servilité", value: 99 },
      { label: "Fiabilité", value: 30 },
      { label: "Initiative", value: 85 },
    ],
    quote: "« Je prends ça en charge, M. Morel ! »",
    badge: "Collègue IA",
    badgeColor: "#F5C542",
  },
];

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#8899AA] w-28 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-[#1E2D42] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${value}%`,
            background: "linear-gradient(90deg, #FF8298, #5B9CF6)",
          }}
        />
      </div>
      <span className="text-xs text-[#8899AA] w-8 text-right">{value}</span>
    </div>
  );
}

export default function CharactersSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="personnages"
      className="py-24 lg:py-32 bg-[#0A1220] relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #FF829833, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-[#FF82981A] border border-[#FF829833] text-[#FF8298] text-xs font-semibold tracking-widest uppercase">
            Personnages
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0EDE8] leading-tight">
            Rencontrez votre{" "}
            <span className="text-[#FF8298] italic">équipe</span>
          </h2>
          <p className="mt-4 text-[#8899AA] text-lg max-w-xl mx-auto">
            Des personnages pilotés par l'IA, chacun avec leur propre
            personnalité, leurs déclencheurs et leurs agendas cachés.
          </p>
        </div>

        {/* Character cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {characters.map((char, idx) => (
            <article
              key={char.id}
              id={char.id}
              className={`group relative bg-[#111A28] border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                active === idx
                  ? "border-opacity-60 shadow-2xl shadow-black/50"
                  : "border-[#1E2D42] hover:border-[#2A3D55] hover:shadow-xl hover:shadow-black/40"
              }`}
              style={
                active === idx
                  ? { borderColor: char.accentColor }
                  : undefined
              }
              onClick={() => setActive(active === idx ? null : idx)}
            >
              {/* Character image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={char.image}
                  alt={`${char.name}, ${char.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A28] via-[#111A2880] to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold text-[#080E18]"
                    style={{ backgroundColor: char.accentColor }}
                  >
                    {char.badge}
                  </span>
                </div>

                {/* Stars in image */}
                <div className="absolute top-3 right-3 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className={`text-sm ${s <= char.stars ? "text-[#F5C542]" : "text-[#2A3D55]"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col gap-4">
                {/* Name & title */}
                <div>
                  <p className="text-xs text-[#8899AA] font-medium mb-0.5" style={{ color: char.accentColor }}>
                    {char.subtitle}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#F0EDE8]">
                    {char.name}
                  </h3>
                  <p className="text-sm text-[#8899AA] mt-0.5">{char.title}</p>
                </div>

                {/* Danger level */}
                <p className="text-xs text-[#8899AA] font-mono">{char.level}</p>

                {/* Description */}
                <p className="text-sm text-[#8899AA] leading-relaxed">
                  {char.description}
                </p>

                {/* Stats — expanded on click */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-2 pt-2 border-t border-[#1E2D42]">
                    {char.traits.map((t) => (
                      <StatBar key={t.label} label={t.label} value={t.value} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-sm italic border-l-2 pl-3"
                  style={{ borderColor: char.accentColor, color: char.accentColor }}
                >
                  {char.quote}
                </blockquote>

                {/* Toggle hint */}
                <button
                  className="text-xs text-[#8899AA] hover:text-[#F0EDE8] transition-colors flex items-center gap-1 focus:outline-none focus-visible:text-[#FF8298]"
                  aria-expanded={active === idx}
                >
                  {active === idx ? "Masquer les stats" : "Voir les stats"}{" "}
                  <span
                    className={`transition-transform duration-200 ${active === idx ? "rotate-180" : ""}`}
                  >
                    ↓
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
