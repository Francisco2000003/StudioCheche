import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/siteData";

function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur p-5 ring-1 ring-black/10 shadow-sm">
      {children}
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex gap-1 text-black/80">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        eyebrow="Opiniones"
        title="Lo que dicen las clientas"
        subtitle="Puedes cambiar esto por reviews reales de WhatsApp/Instagram."
      />

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {testimonials.map((t, idx) => (
          <Card key={idx}>
            <StarRow />
            <p className="mt-3 text-sm text-black/80">“{t.text}”</p>
            <p className="mt-4 text-sm font-semibold">{t.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}