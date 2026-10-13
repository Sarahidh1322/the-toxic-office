"use client";

import { useState } from "react";

type Plan = {
  id: string;
  name: string;
  tag?: string;
  tagColor?: string;
  price: string;
  priceSuffix?: string;
  description: string;
  cta: string;
  ctaStyle: "outline" | "filled";
  features: { label: string; included: boolean }[];
};

const plans: Plan[] = [
  {
    id: "plan-free",
    name: "Découverte",
    price: "Gratuit",
    description:
      "Parfait pour tester l'ambiance avant de signer votre contrat d'embauche virtuel.",
    cta: "Commencer gratuitement",
    ctaStyle: "outline",
    features: [
      { label: "Accès au bureau de base", included: true },
      { label: "1 patron IA (mode débutant)", included: true },
      { label: "5 missions par semaine", included: true },
      { label: "Notation sur 5 étoiles", included: true },
      { label: "Accès à la DRH", included: false },
      { label: "Alliances et collègues", included: false },
      { label: "Progression hiérarchique complète", included: false },
      { label: "Modes de difficulté avancés", included: false },
    ],
  },
  {
    id: "plan-premium",
    name: "Premium",
    tag: "Recommandé",
    tagColor: "#FF8298",
    price: "9,90 €",
    priceSuffix: "/ mois",
    description:
      "L'expérience complète : patrons en mode hardcore, DRH pleine puissance et carrière illimitée.",
    cta: "Rejoindre le Premium",
    ctaStyle: "filled",
    features: [
      { label: "Accès au bureau complet", included: true },
      { label: "3 patrons IA (tous modes)", included: true },
      { label: "Missions illimitées", included: true },
      { label: "Notation sur 5 étoiles + bonus", included: true },
      { label: "Accès complet à la DRH", included: true },
      { label: "Alliances, trahisons, collègues", included: true },
      { label: "Progression hiérarchique complète", included: true },
      { label: "Modes de difficulté avancés", included: true },
    ],
  },
];

export default function PricingSection() {
  const [clicked, setClicked] = useState<string | null>(null);

  const handleCta = (planId: string) => {
    setClicked(planId);
    setTimeout(() => setClicked(null), 2000);
  };

  return (
    <section id="tarifs" className="py-24 lg:py-32 bg-[#0A1220] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 50% at 50% 100%, #FF829211 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="px-3 py-1 rounded-full bg-[#FF82981A] border border-[#FF829833] text-[#FF8298] text-xs font-semibold tracking-widest uppercase">
            Tarifs
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0EDE8] leading-tight">
            Choisissez votre{" "}
            <span className="text-[#FF8298] italic">niveau de souffrance</span>
          </h2>
          <p className="mt-4 text-[#8899AA] text-lg max-w-xl mx-auto">
            Commencez gratuitement, montez en grade si vous l'osez.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-start gap-2 px-4 py-3 bg-[#F5C5421A] border border-[#F5C54233] rounded-xl max-w-2xl">
            <span className="text-[#F5C542] text-sm mt-0.5">ℹ️</span>
            <p className="text-xs text-[#8899AA] leading-relaxed">
              <span className="text-[#F5C542] font-semibold">Offres indicatives — </span>
              Ces tarifs sont présentés à titre illustratif pour cette version de démonstration.
              Aucun paiement réel ni engagement commercial ne sont en vigueur à ce stade.
              La plateforme est en cours de développement.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <article
              key={plan.id}
              id={plan.id}
              className={`relative flex flex-col bg-[#111A28] rounded-2xl border overflow-hidden transition-all duration-300 ${
                plan.tag
                  ? "border-[#FF829866] shadow-xl shadow-[#FF82980D] animate-pulse-glow"
                  : "border-[#1E2D42] hover:border-[#2A3D55]"
              }`}
            >
              {/* Recommended badge */}
              {plan.tag && (
                <div
                  className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-[#080E18] rounded-bl-xl"
                  style={{ backgroundColor: plan.tagColor }}
                >
                  {plan.tag}
                </div>
              )}

              <div className="p-6 flex flex-col gap-6 flex-1">
                {/* Plan name & price */}
                <div>
                  <h3 className="text-lg font-bold text-[#F0EDE8] font-[family-name:var(--font-playfair)]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-bold text-[#F0EDE8]">{plan.price}</span>
                    {plan.priceSuffix && (
                      <span className="text-sm text-[#8899AA]">{plan.priceSuffix}</span>
                    )}
                  </div>
                  <p className="text-sm text-[#8899AA] mt-2 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          feat.included
                            ? "bg-[#4ADE801A] text-[#4ADE80] border border-[#4ADE8033]"
                            : "bg-[#1E2D42] text-[#2A3D55]"
                        }`}
                      >
                        {feat.included ? "✓" : "×"}
                      </span>
                      <span
                        className={feat.included ? "text-[#F0EDE8]" : "text-[#2A3D55] line-through"}
                      >
                        {feat.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  id={`cta-${plan.id}`}
                  onClick={() => handleCta(plan.id)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A28] ${
                    plan.ctaStyle === "filled"
                      ? "bg-[#FF8298] hover:bg-[#FF6B85] text-[#080E18] hover:shadow-lg hover:shadow-[#FF829833] hover:-translate-y-0.5"
                      : "border border-[#1E2D42] hover:border-[#FF829866] text-[#F0EDE8] hover:text-[#FF8298]"
                  }`}
                  aria-live="polite"
                >
                  {clicked === plan.id
                    ? "🚧 Bientôt disponible — Restez à l'écoute !"
                    : plan.cta}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-[#8899AA] mt-8">
          Questions ?{" "}
          <button
            onClick={() => alert("📬 La fonctionnalité de contact sera disponible au lancement.")}
            className="text-[#FF8298] hover:underline focus:outline-none focus-visible:underline"
          >
            Contactez-nous
          </button>{" "}
          — Aucune CB requise pour le plan Découverte.
        </p>
      </div>
    </section>
  );
}
