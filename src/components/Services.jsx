// src/components/Services.jsx
import SectionTitle from "./SectionTitle";
import { services } from "../data/siteData";

function IconCheck() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10">
      ✓
    </span>
  );
}

function DurationPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs text-black/70 ring-1 ring-black/10 backdrop-blur">
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/65 p-5 ring-1 ring-black/10 shadow-sm backdrop-blur">
      {/* glow sutil */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-200/30 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-rose-200/30 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}

function getHighlights(title) {
  // Puedes editar esto a gusto. Es solo para que se vea pro con bullets.
  const map = {
    "Acrílico": ["Estructura y forma", "Sellado y brillo", "Diseño a elección"],
    "Rubber / Gel": ["Refuerzo natural", "Acabado limpio", "Mayor resistencia"],
    "Manicure + Esmaltado": ["Limpieza y cutícula", "Forma y pulido", "Esmaltado perfecto"],
    "Retiro / Mantenimiento": ["Retiro seguro", "Nivelación", "Revisión y ajuste"],
  };

  return map[title] || ["Atención por cita", "Materiales de calidad", "Acabado profesional"];
}

export default function Services({ setSelectedService }) {
  const onPick = (serviceTitle) => {
    setSelectedService(serviceTitle);

    // scrollea a la zona de agendar (Hero)
    const hero = document.querySelector("section"); // tu Hero es la primera section
    if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        eyebrow="Servicios"
        title="Todo lo que sea uñas, aquí se hace bien."
        subtitle="Técnica, duración y estética. Elige tu estilo."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const highlights = getHighlights(s.title);

          return (
            <Card key={s.title}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-black">{s.title}</p>
                  <p className="mt-1 text-xs text-black/60">Acabado profesional</p>
                </div>

                <DurationPill>{s.time}</DurationPill>
              </div>

              <p className="mt-3 text-sm text-black/70 leading-relaxed">{s.desc}</p>

              <ul className="mt-4 space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-black/70">
                    <IconCheck />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-black/50">
                  {s.title === "Retiro / Mantenimiento" ? "Recomendado cada 2–3 semanas" : "Por cita"}
                </span>

                <button
                  onClick={() => onPick(s.title)}
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Elegir
                  <span className="text-white/80">→</span>
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}