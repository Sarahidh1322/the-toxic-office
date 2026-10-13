"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient & noise */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1930] via-[#080E18] to-[#080E18] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #FF829822 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F0EDE8 1px, transparent 1px), linear-gradient(90deg, #F0EDE8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="px-3 py-1 rounded-full bg-[#FF82981A] border border-[#FF829833] text-[#FF8298] text-xs font-semibold tracking-widest uppercase">
                Simulation Corporate Satirique
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#F0EDE8]">
              Montez dans la{" "}
              <span className="text-[#FF8298] italic">hiérarchie.</span>
              <br />
              Survivez aux patrons{" "}
              <span className="text-[#FF8298]">toxiques.</span>
              <br />
              Essayez de garder{" "}
              <span
                className="inline-flex items-center gap-1"
                aria-label="cinq étoiles"
              >
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-[#F5C542] text-4xl sm:text-5xl lg:text-6xl">
                    {star}
                  </span>
                ))}
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#8899AA] text-lg leading-relaxed max-w-lg">
              Une plateforme de simulation interactive où l'IA joue vos pires
              cauchemars corporate. Gérez les humeurs d'un patron imprévisible,
              survivez à la DRH et naviguez dans les alliances de bureau — sans
              quitter votre canapé.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                id="hero-join-btn"
                onClick={() => handleScroll("#tarifs")}
                className="group px-6 py-3.5 bg-[#FF8298] hover:bg-[#FF6B85] text-[#080E18] font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#FF829840] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E18] flex items-center gap-2 justify-center"
              >
                <span>Rejoindre l'entreprise</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
              <button
                id="hero-discover-btn"
                onClick={() => handleScroll("#fonctionnalites")}
                className="px-6 py-3.5 border border-[#1E2D42] hover:border-[#FF829866] text-[#F0EDE8] hover:text-[#FF8298] font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E18] flex items-center gap-2 justify-center"
              >
                <span>Découvrir le concept</span>
                <span className="text-[#8899AA]">↓</span>
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["#FF8298", "#5B9CF6", "#F5C542", "#4ADE80"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#080E18] flex items-center justify-center text-[10px] font-bold text-[#080E18]"
                    style={{ backgroundColor: c }}
                    aria-hidden="true"
                  >
                    {["M", "S", "A", "T"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#8899AA]">
                <span className="text-[#F0EDE8] font-semibold">2 400+</span>{" "}
                employés virtuels déjà recrutés
              </p>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative flex items-center justify-center animate-fade-in stagger-2">
            <div className="relative w-full max-w-xl">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF82981A] to-[#5B9CF61A] blur-2xl scale-105 pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-[#1E2D42] shadow-2xl shadow-black/60">
                <Image
                  src="/hero-scene.jpg"
                  alt="Scène de bureau chaotique : patron autoritaire, DRH manipulatrice et employés dépassés"
                  width={800}
                  height={450}
                  priority
                  className="w-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3 border border-[#FF829833] flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label="Feu">🔥</span>
                    <div>
                      <p className="text-xs text-[#FF8298] font-semibold uppercase tracking-wide">
                        Alerte Mission
                      </p>
                      <p className="text-sm text-[#F0EDE8] font-medium">
                        Le patron veut un rapport pour hier.
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      {"★★★★★".split("").map((_, i) => (
                        <span key={i} className={`text-sm ${i < 3 ? "text-[#F5C542]" : "text-[#2A3D55]"}`}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-xs text-[#8899AA] uppercase tracking-widest">Défiler</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#8899AA]">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
