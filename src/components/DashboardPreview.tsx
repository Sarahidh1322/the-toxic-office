"use client";

import { useState } from "react";

const missions = [
  { id: "m1", label: "Finir le rapport Q3", deadline: "Aujourd'hui 18h", stars: 3, status: "urgent" },
  { id: "m2", label: "Réunion synchro équipe", deadline: "Demain 9h", stars: 5, status: "ok" },
  { id: "m3", label: "Répondre à Mme. Thorne", deadline: "Hier (en retard)", stars: 1, status: "late" },
];

const messages = [
  {
    id: "msg1",
    from: "Victor Morel",
    role: "PDG",
    avatar: "VM",
    avatarColor: "#FF8298",
    text: "Où en est le rapport Q3 ? Je l'attendais ce matin.",
    time: "il y a 5 min",
    unread: true,
  },
  {
    id: "msg2",
    from: "Mme. Thorne",
    role: "DRH",
    avatar: "MT",
    avatarColor: "#5B9CF6",
    text: "Bonjour 😊 Petite disponibilité pour un échange informel ?",
    time: "il y a 1h",
    unread: true,
  },
  {
    id: "msg3",
    from: "Liam Bessard",
    role: "Collègue",
    avatar: "LB",
    avatarColor: "#F5C542",
    text: "J'ai déjà envoyé le mien hier soir ! Très bon travail d'équipe.",
    time: "il y a 2h",
    unread: false,
  },
];

const careerSteps = [
  { label: "Stagiaire", done: true },
  { label: "Junior", done: true },
  { label: "Confirmé", done: true, current: true },
  { label: "Senior", done: false },
  { label: "Manager", done: false },
  { label: "Directeur", done: false },
];

export default function DashboardPreview() {
  const [activeMsg, setActiveMsg] = useState<string | null>(null);
  const [overallStars] = useState(3);

  return (
    <section
      id="apercu"
      className="py-24 lg:py-32 bg-[#080E18] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 20% 50%, #5B9CF622 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 50%, #FF829822 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-[#5B9CF61A] border border-[#5B9CF633] text-[#5B9CF6] text-xs font-semibold tracking-widest uppercase">
            Aperçu
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0EDE8] leading-tight">
            Votre bureau virtuel{" "}
            <span className="text-[#5B9CF6] italic">vous attend</span>
          </h2>
          <p className="mt-4 text-[#8899AA] text-lg max-w-2xl mx-auto">
            Une interface de simulation immersive — missions, messages cryptiques, 
            progression et notation en temps réel.{" "}
            <span className="text-[#FF8298]">Bientôt disponible.</span>
          </p>
        </div>

        {/* Dashboard mock */}
        <div className="relative rounded-2xl border border-[#1E2D42] overflow-hidden shadow-2xl shadow-black/70">
          {/* Demo banner */}
          <div className="bg-[#FF82981A] border-b border-[#FF829833] px-6 py-2.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF8298] animate-pulse" />
            <span className="text-xs text-[#FF8298] font-semibold">
              DÉMONSTRATION — Interface en cours de développement. Aucune donnée réelle.
            </span>
          </div>

          {/* Mock browser bar */}
          <div className="bg-[#0D1520] border-b border-[#1E2D42] px-4 py-2 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#EF4444] opacity-70" />
              <div className="w-3 h-3 rounded-full bg-[#F5C542] opacity-70" />
              <div className="w-3 h-3 rounded-full bg-[#4ADE80] opacity-70" />
            </div>
            <div className="flex-1 bg-[#1E2D42] rounded-md px-3 py-1 text-xs text-[#8899AA] font-mono">
              app.thetoxicoffice.com/dashboard
            </div>
          </div>

          {/* Dashboard body */}
          <div className="bg-[#0A1220] grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#1E2D42]">
            {/* Left: Missions */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#F0EDE8]">📋 Missions du jour</h3>
                <span className="text-xs text-[#8899AA]">3/5 actives</span>
              </div>
              <div className="flex flex-col gap-3">
                {missions.map((m) => (
                  <div
                    key={m.id}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                      m.status === "urgent"
                        ? "border-[#FF829833] bg-[#FF82981A]"
                        : m.status === "late"
                        ? "border-[#EF444433] bg-[#EF44441A]"
                        : "border-[#1E2D42] bg-[#111A28]"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        m.status === "urgent"
                          ? "bg-[#FF8298] animate-pulse"
                          : m.status === "late"
                          ? "bg-[#EF4444]"
                          : "bg-[#4ADE80]"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[#F0EDE8] truncate">{m.label}</p>
                      <p className="text-xs text-[#8899AA]">{m.deadline}</p>
                    </div>
                    <div className="flex gap-0.5 shrink-0">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={`text-[10px] ${s <= m.stars ? "text-[#F5C542]" : "text-[#2A3D55]"}`}>★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Career progress */}
              <div className="mt-auto pt-4 border-t border-[#1E2D42]">
                <p className="text-xs font-semibold text-[#F0EDE8] mb-3">📈 Progression de carrière</p>
                <div className="flex items-center gap-1">
                  {careerSteps.map((step, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`h-1.5 w-full rounded-full ${
                          step.done
                            ? step.current
                              ? "bg-[#FF8298]"
                              : "bg-[#5B9CF6]"
                            : "bg-[#1E2D42]"
                        }`}
                      />
                      <span className={`text-[9px] text-center leading-tight ${step.current ? "text-[#FF8298] font-bold" : "text-[#8899AA]"}`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Messages */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#F0EDE8]">
                  💬 Messages{" "}
                  <span className="ml-1 px-1.5 py-0.5 bg-[#FF8298] text-[#080E18] text-[10px] font-bold rounded-full">
                    2
                  </span>
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {messages.map((msg) => (
                  <button
                    key={msg.id}
                    id={`msg-${msg.id}`}
                    onClick={() =>
                      setActiveMsg(activeMsg === msg.id ? null : msg.id)
                    }
                    className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all ${
                      activeMsg === msg.id
                        ? "border-[#FF829866] bg-[#FF82981A]"
                        : "border-[#1E2D42] bg-[#111A28] hover:border-[#2A3D55]"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8298]`}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#080E18] text-xs font-bold shrink-0"
                      style={{ backgroundColor: msg.avatarColor }}
                    >
                      {msg.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-[#F0EDE8] truncate">
                          {msg.from}
                        </span>
                        <span className="text-[10px] text-[#8899AA] shrink-0">{msg.time}</span>
                      </div>
                      <p className="text-xs text-[#8899AA] truncate mt-0.5">{msg.role}</p>
                      {activeMsg === msg.id && (
                        <p className="text-xs text-[#F0EDE8] mt-2 leading-relaxed">{msg.text}</p>
                      )}
                    </div>
                    {msg.unread && (
                      <div className="w-2 h-2 rounded-full bg-[#FF8298] shrink-0 mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Rating & stats */}
            <div className="p-6 flex flex-col gap-6">
              {/* Overall rating */}
              <div className="bg-[#111A28] border border-[#1E2D42] rounded-xl p-4 text-center">
                <p className="text-xs text-[#8899AA] uppercase tracking-wide mb-2">
                  Votre note globale
                </p>
                <div className="flex justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className={`text-2xl transition-transform hover:scale-125 ${
                        s <= overallStars ? "text-[#F5C542]" : "text-[#2A3D55]"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#F0EDE8] text-2xl font-bold font-[family-name:var(--font-playfair)]">
                  {overallStars}/5
                </p>
                <p className="text-xs text-[#8899AA] mt-1">Employé Acceptable</p>
              </div>

              {/* Quick stats */}
              <div className="flex flex-col gap-3">
                {[
                  { label: "Missions complétées", value: "14", icon: "✅" },
                  { label: "Alertes patron", value: "3", icon: "⚠️" },
                  { label: "Alliances actives", value: "2", icon: "🤝" },
                  { label: "Convocations DRH", value: "1", icon: "📨" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="text-base">{stat.icon}</span>
                    <span className="text-[#8899AA] flex-1">{stat.label}</span>
                    <span className="text-[#F0EDE8] font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                disabled
                aria-disabled="true"
                className="w-full py-3 rounded-xl bg-[#FF8298] text-[#080E18] font-bold text-sm opacity-50 cursor-not-allowed"
                title="Fonctionnalité en cours de développement"
              >
                Accéder au bureau — Bientôt
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
