import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The (toxic) Office — Survivez aux patrons. Gardez vos étoiles.",
  description:
    "Une simulation satirique du monde corporate : patrons IA toxiques, DRH passive-agressive, collègues douteux. Montez dans la hiérarchie… si vous y survivez.",
  keywords: ["simulation", "corporate", "satire", "jeu", "bureau toxique", "patron IA"],
  openGraph: {
    title: "The (toxic) Office",
    description:
      "Montez dans la hiérarchie. Survivez aux patrons toxiques. Essayez de garder 5 étoiles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#080E18] text-[#F0EDE8] font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
