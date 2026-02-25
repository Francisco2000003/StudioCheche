import { brand } from "../data/siteData";

function waLink(phone, text) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function CTA({ selectedService }) {
  const text = `Hola ${brand.name}, quiero agendar una cita para ${selectedService}. ¿Qué disponibilidad tienes?`;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-3xl bg-black text-white p-8 sm:p-10 grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/70">
            Agenda fácil
          </p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-semibold">
            Lista para tus próximas uñas ✨
          </h3>
          <p className="mt-3 text-sm text-white/80">
            Selecciona el servicio y agenda directo por WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <a
            className="inline-flex justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            href={waLink(brand.phone, text)}
            target="_blank"
            rel="noreferrer"
          >
            Agendar por WhatsApp
          </a>

          <a
            className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/10"
            href="https://www.facebook.com/share/1Go1Pdubi8/"
            target="_blank"
            rel="noreferrer"
          >
            Ver Facebook
          </a>
        </div>
      </div>
    </section>
  );
}