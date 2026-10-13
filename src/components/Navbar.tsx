"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Personnages", href: "#personnages" },
  { label: "Tarifs", href: "#tarifs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080E18]/95 backdrop-blur-md border-b border-[#1E2D42] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#accueil")}
          className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298] rounded-sm"
          aria-label="Retour à l'accueil"
        >
          <span className="text-[#FF8298] text-xl font-bold">✦</span>
          <span className="font-[family-name:var(--font-playfair)] font-bold text-lg text-[#F0EDE8] group-hover:text-[#FF8298] transition-colors duration-200">
            The{" "}
            <span className="text-[#FF8298]">(toxic)</span>{" "}
            Office
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8" role="navigation">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-[#8899AA] hover:text-[#F0EDE8] transition-colors duration-200 focus:outline-none focus-visible:text-[#FF8298]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => alert("🚧 Connexion en cours de développement — restez à l'écoute !")}
            className="px-4 py-2 text-sm text-[#8899AA] hover:text-[#F0EDE8] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298] rounded-md"
            id="nav-login-btn"
          >
            Connexion
          </button>
          <button
            onClick={() => handleNavClick("#tarifs")}
            className="px-4 py-2 text-sm font-semibold bg-[#FF8298] hover:bg-[#FF6B85] text-[#080E18] rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#FF829833] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080E18]"
            id="nav-cta-btn"
          >
            Commencer
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden p-2 rounded-md text-[#8899AA] hover:text-[#F0EDE8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298]"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Menu de navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0D1520] border-b border-[#1E2D42]`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm text-[#8899AA] hover:text-[#F0EDE8] transition-colors py-2 border-b border-[#1E2D42] last:border-0 focus:outline-none focus-visible:text-[#FF8298]"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => { setMenuOpen(false); alert("🚧 Connexion en cours de développement !"); }}
              className="px-4 py-2.5 text-sm text-[#F0EDE8] border border-[#1E2D42] rounded-lg hover:border-[#FF8298] transition-colors"
            >
              Connexion
            </button>
            <button
              onClick={() => handleNavClick("#tarifs")}
              className="px-4 py-2.5 text-sm font-semibold bg-[#FF8298] text-[#080E18] rounded-lg hover:bg-[#FF6B85] transition-colors"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
