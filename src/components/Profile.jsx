// src/components/Profile.jsx
import { brand } from "../data/siteData";
import cristelImg from "../assets/cristel.jpg";

function waLink(phone, text) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-black/70 ring-1 ring-black/10 backdrop-blur">
      {children}
    </span>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/60 ring-1 ring-black/10 p-4 backdrop-blur">
      <p className="text-2xl font-semibold text-black">{value}</p>
      <p className="mt-1 text-xs text-black/60">{label}</p>
    </div>
  );
}

export default function Profile() {
  const text = `Hola ${brand.name}, quiero agendar una cita. ¿Qué disponibilidad tienes?`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="relative overflow-hidden rounded-3xl bg-white/35 ring-1 ring-white/50 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
        {/* glow sutil */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-200/35 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* IZQ: FOTO PRO + INFO */}
          <div className="flex gap-6">
            {/* marco pro */}
            <div className="relative shrink-0">
              <div className="rounded-[32px] bg-gradient-to-br from-brand-400 via-rose-300 to-brand-700 p-[2px] shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
                <div className="rounded-[30px] bg-white/70 p-2 backdrop-blur">
                  <img
                    src={cristelImg}
                    alt="Cristell Alejandra - Nail Artist"
                    className="
                      h-32 w-28 sm:h-40 sm:w-32
                      rounded-[24px] object-cover
                      ring-1 ring-black/10
                    "
                    loading="lazy"
                  />
                </div>
              </div>

              {/* badge verificado */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-black ring-1 ring-black/10 backdrop-blur shadow-sm">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-white">
                    ✓
                  </span>
                  Profesional
                </span>
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-black/60">
                Perfil profesional
              </p>

              <div className="flex items-center gap-2">
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold text-black leading-tight">
                  Cristell Alejandra
                </h3>
              </div>

              <p className="mt-1 text-sm text-black/70">
                Nail Artist · Manicure & Pedicure · Acrílico / Rubber / Gel
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Acrílico</Badge>
                <Badge>Rubber</Badge>
                <Badge>Gel</Badge>
                <Badge>Diseños personalizados</Badge>
                <Badge>Higiene</Badge>
              </div>

              <div className="mt-4 rounded-2xl bg-white/55 ring-1 ring-black/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-black">
                  Estilo y atención
                </p>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">
                  Trabajo limpio, estructura resistente y diseños a tu gusto. Si traes
                  una referencia (foto), se replica o se adapta a tu mano.
                </p>
              </div>
            </div>
          </div>

          {/* DER: STATS + CTA */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              <Stat value="+100" label="Clientas atendidas" />
              <Stat value="1:1" label="Atención por cita" />
              <Stat value="100%" label="Higiene y calidad" />
            </div>

            <div className="rounded-2xl bg-white/55 ring-1 ring-black/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-black">
                ¿Qué te ofrece Cristel?
              </p>

              <ul className="mt-3 space-y-2 text-sm text-black/70">
                <li className="flex gap-2">
                  <span className="mt-[2px]">✓</span>
                  <span>Trabajo limpio y estructura resistente.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[2px]">✓</span>
                  <span>Diseños: minimal, glitter, francés, color.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[2px]">✓</span>
                  <span>Materiales de calidad + cuidado de cutícula.</span>
                </li>
              </ul>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(brand.phone, text)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Agendar por WhatsApp
                </a>

                <a
                  href="https://www.facebook.com/share/1Go1Pdubi8/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-black/15 bg-white/30 hover:bg-white/45"
                >
                  Ver Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-black/10 px-6 sm:px-8 py-4 bg-white/30">
          <p className="text-xs text-black/60">
            *Atención con cita previa. Envíanos tu idea o foto de referencia para cotizar rápido.
          </p>
        </div>
      </div>
    </section>
  );

}
