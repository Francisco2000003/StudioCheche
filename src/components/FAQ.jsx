import SectionTitle from "./SectionTitle";
import { faq } from "../data/siteData";

function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur p-5 ring-1 ring-black/10 shadow-sm">
      {children}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        eyebrow="FAQ"
        title="Preguntas frecuentes"
        subtitle="Para que te pregunten menos por WhatsApp y cierres más citas."
      />

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {faq.map((f, idx) => (
          <Card key={idx}>
            <p className="text-sm font-semibold">{f.q}</p>
            <p className="mt-2 text-sm text-black/70">{f.a}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}