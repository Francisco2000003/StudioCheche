// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { brand, services } from "../data/siteData";

import tituloImg from "../assets/titulo.png";
import estudioImg from "../assets/estudio.png";
import heroBg from "../assets/hero-bg.png"; // logo/fondo "Cheche"

function waLink(phone, text) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/35 px-3 py-1 text-xs text-black/80 ring-1 ring-white/50 backdrop-blur-sm">
      {children}
    </span>
  );
}

function Lightbox({ open, src, alt, onClose }) {
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="mx-auto max-w-5xl h-full flex items-center justify-center">
        <div
          className="w-full rounded-2xl bg-white shadow-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/10">
            <p className="text-sm font-semibold text-black">Vista previa</p>
            <button
              onClick={onClose}
              className="rounded-lg px-3 py-1 text-sm font-semibold ring-1 ring-black/10 hover:bg-black/5"
              aria-label="Cerrar"
              type="button"
            >
              Cerrar
            </button>
          </div>

          <div className="bg-black/5">
            <img
              src={src}
              alt={alt}
              className="w-full max-h-[80vh] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ selectedService, setSelectedService }) {
  const text = `Hola ${brand.name}, quiero agendar una cita para ${selectedService}. ¿Qué disponibilidad tienes?`;

  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });
  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: "", alt: "" });

  // ✅ Ajusta si quieres que el logo termine más arriba/abajo (raya amarilla)
  const MOBILE_LOGO_HEIGHT = 420;

  return (
    <section className="relative overflow-hidden py-10 sm:py-12">
      <Lightbox
        open={lightbox.open}
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={closeLightbox}
      />

      {/* ✅ DESKTOP/TABLET: fondo general */}
      <div className="hidden sm:block absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "28% center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/10" />
      </div>

      {/* ✅ MOBILE: logo arriba + fondo rosa abajo */}
      <div className="sm:hidden absolute inset-0">
        {/* Parte superior con logo */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            height: `${MOBILE_LOGO_HEIGHT}px`,
            backgroundImage: `url(${heroBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 25%",
            filter: "saturate(1.06) contrast(1.06)",
          }}
        />
        {/* Overlay ultra leve */}
        <div
          className="absolute left-0 right-0 top-0"
          style={{
            height: `${MOBILE_LOGO_HEIGHT}px`,
            background: "rgba(255,255,255,0.03)",
          }}
        />

        {/* Parte inferior rosa */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: `${MOBILE_LOGO_HEIGHT}px`,
            bottom: 0,
            background:
              "linear-gradient(180deg, rgba(255,240,246,1) 0%, rgba(255,235,245,1) 50%, rgba(255,245,250,1) 100%)",
          }}
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* IZQUIERDA */}
          <div className="lg:pr-4">
            {/* blur quitado en móvil para que el logo no se “lave” */}
            <div className="rounded-3xl bg-white/25 backdrop-blur-0 sm:backdrop-blur-sm ring-1 ring-white/45 p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
              <div className="flex flex-wrap gap-2">
                <Pill>Uñas acrílicas</Pill>
                <Pill>Rubber / Gel</Pill>
                <Pill>Diseños personalizados</Pill>
                <Pill>Higiene y calidad</Pill>
              </div>

              {/* ✅ TÍTULO ANIMADO (multilínea) + scrim para legibilidad */}
              <div className="mt-4 -mx-2 rounded-2xl bg-white/55 sm:bg-white/35 p-3 sm:p-0">
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-black">
                  <span
                    className="inline-block align-top animate-reveal"
                    style={{ clipPath: "inset(0 100% 0 0)" }}
                  >
                    Uñas bonitas, resistentes y con acabado{" "}
                    <span className="underline decoration-brand-200 decoration-8">
                      profesional
                    </span>
                    .
                  </span>

                  <span className="inline-block align-top border-r-4 border-black ml-1 pr-1 animate-cursor" />
                </h1>

                <p className="mt-4 text-base sm:text-lg text-black/75 max-w-xl">
                  Agenda tu cita y elige el estilo que más te guste: acrílico, rubber,
                  gel, manicure, diseños minimalistas o full diseño.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-end">
                <div className="flex flex-col gap-1 w-full sm:w-auto">
                  <label className="text-xs text-black/70">
                    Servicio para agendar
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full sm:w-[240px] rounded-xl bg-white/80 px-3 py-2 ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  >
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <a
                  className="inline-flex justify-center rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90 w-full sm:w-auto"
                  href={waLink(brand.phone, text)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar ahora
                </a>

                <a
                  className="inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-black/15 bg-white/20 hover:bg-white/30 w-full sm:w-auto"
                  href="#catalogo"
                >
                  Ver trabajos
                </a>
              </div>
            </div>
          </div>

          {/* DERECHA */}
          <div className="rounded-3xl bg-white/22 backdrop-blur-sm ring-1 ring-white/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-black">
                  Certificado de capacitación
                </p>
                <p className="text-xs text-black/60">
                  Formación y técnica profesional
                </p>
              </div>

              <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 backdrop-blur">
                Instalación profesional
              </span>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(tituloImg, "Certificado / Diploma")}
              className="mt-4 w-full overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white/80 text-left group"
              aria-label="Ver certificado en grande"
            >
              <img
                src={tituloImg}
                alt="Certificado / Diploma"
                className="h-56 w-full object-contain lg:h-64 lg:object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="px-3 py-2 text-xs text-black/60">
                Click para ampliar
              </div>
            </button>

            <div className="mt-5">
              <div>
                <p className="text-sm font-semibold text-black">
                  Estudio / área de trabajo
                </p>
                <p className="text-xs text-black/60">
                  Espacio limpio, cómodo y preparado
                </p>
              </div>

              <button
                type="button"
                onClick={() => openLightbox(estudioImg, "Foto del estudio")}
                className="mt-3 w-full overflow-hidden rounded-2xl ring-1 ring-black/10 bg-white/80 text-left group"
                aria-label="Ver foto del estudio en grande"
              >
                <img
                  src={estudioImg}
                  alt="Foto del estudio"
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="px-3 py-2 text-xs text-black/60">
                  Click para ampliar
                </div>
              </button>
            </div>

            <p className="mt-4 text-xs text-black/50">
              Atención por cita · Higiene · Materiales de calidad
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-8 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent" />
    </section>
  );
}