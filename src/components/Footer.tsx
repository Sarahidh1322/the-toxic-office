export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080E18] border-t border-[#1E2D42]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#FF8298] text-xl font-bold">✦</span>
              <span className="font-[family-name:var(--font-playfair)] font-bold text-[#F0EDE8]">
                The{" "}
                <span className="text-[#FF8298]">(toxic)</span>{" "}
                Office
              </span>
            </div>
            <p className="text-sm text-[#8899AA] leading-relaxed max-w-xs">
              Une simulation satirique du monde corporate. Aucune ressemblance
              avec votre employeur actuel n'est — totalement — fortuite.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Twitter/X", icon: "𝕏", href: "#" },
                { label: "LinkedIn", icon: "in", href: "#" },
                { label: "Discord", icon: "💬", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`${s.label} — Lien provisoire. Réseaux sociaux à venir.`);
                  }}
                  className="w-8 h-8 rounded-lg border border-[#1E2D42] flex items-center justify-center text-xs text-[#8899AA] hover:text-[#F0EDE8] hover:border-[#FF829866] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-[#F0EDE8] uppercase tracking-wider">
              Produit
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Fonctionnalités",
                "Personnages",
                "Tarifs",
                "Feuille de route",
              ].map((l) => (
                <li key={l}>
                  <button
                    onClick={() =>
                      alert(`Page « ${l} » — en cours de construction.`)
                    }
                    className="text-sm text-[#8899AA] hover:text-[#F0EDE8] transition-colors focus:outline-none focus-visible:text-[#FF8298]"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-[#F0EDE8] uppercase tracking-wider">
              Société
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["À propos", "Blog", "Contact", "Presse"].map((l) => (
                <li key={l}>
                  <button
                    onClick={() =>
                      alert(`Page « ${l} » — Lien provisoire. Page en construction.`)
                    }
                    className="text-sm text-[#8899AA] hover:text-[#F0EDE8] transition-colors focus:outline-none focus-visible:text-[#FF8298]"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-[#F0EDE8] uppercase tracking-wider">
              Légal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Confidentialité",
                "Conditions d'utilisation",
                "Cookies",
                "Mentions légales",
              ].map((l) => (
                <li key={l}>
                  <button
                    onClick={() =>
                      alert(
                        `Page « ${l} » — Document juridique provisoire. Ces pages seront finalisées au lancement.`
                      )
                    }
                    className="text-sm text-[#8899AA] hover:text-[#F0EDE8] transition-colors focus:outline-none focus-visible:text-[#FF8298]"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E2D42]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8899AA] text-center sm:text-left">
            © {year} The (toxic) Office — Projet en développement. Aucun lien avec des personnalités réelles.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#8899AA]">
            <span>Fait avec</span>
            <span className="text-[#FF8298]">♥</span>
            <span>et beaucoup de café froid</span>
            <span className="text-base">☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
