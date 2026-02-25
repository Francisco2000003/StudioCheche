import { brand } from "../data/siteData";

function waLink(phone, text) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function Navbar({ selectedService }) {
  const text = `Hola ${brand.name}, quiero agendar una cita para ${selectedService}. ¿Qué disponibilidad tienes?`;

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-brand-600 text-white grid place-items-center font-semibold">
            CHE
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{brand.name}</p>
            <p className="text-xs text-black/60">
              {brand.owner} · {brand.city}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-black/10 hover:bg-black/5"
            href="https://www.facebook.com/share/1Go1Pdubi8/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            href={waLink(brand.phone, text)}
            target="_blank"
            rel="noreferrer"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}