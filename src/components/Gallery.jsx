// src/components/Gallery.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { gallery } from "../data/siteData";

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-black/70 ring-1 ring-black/10 backdrop-blur">
      {children}
    </span>
  );
}

function CloseBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-white/80 px-3 py-2 text-sm font-semibold text-black ring-1 ring-black/10 hover:bg-white"
      aria-label="Cerrar"
      type="button"
    >
      Cerrar ✕
    </button>
  );
}

function NavBtn({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-white/80 px-3 py-2 text-sm font-semibold text-black ring-1 ring-black/10 hover:bg-white"
      aria-label={label}
      type="button"
    >
      {children}
    </button>
  );
}

function Lightbox({ open, item, onClose, onPrev, onNext }) {
  const startX = useRef(null);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !item) return null;

  const onTouchStart = (e) => {
    startX.current = e.touches?.[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX ?? null;
    if (startX.current == null || endX == null) return;

    const diff = endX - startX.current; // >0 swipe right
    if (Math.abs(diff) < 40) return; // umbral

    if (diff > 0) onPrev();
    else onNext();

    startX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="mx-auto max-w-5xl h-full flex items-center justify-center">
        <div
          className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-black/10">
            <div>
              <p className="text-sm font-semibold text-black">{item.title}</p>
              <p className="text-xs text-black/60">{item.tag}</p>
            </div>

            <div className="flex items-center gap-2">
              <NavBtn onClick={onPrev} label="Anterior">
                ←
              </NavBtn>
              <NavBtn onClick={onNext} label="Siguiente">
                →
              </NavBtn>
              <CloseBtn onClick={onClose} />
            </div>
          </div>

          <div
            className="bg-black/5"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {item.img ? (
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-h-[78vh] object-contain"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[60vh] grid place-items-center text-black/50">
                No hay imagen
              </div>
            )}
          </div>

          <div className="px-4 py-3 text-xs text-black/60">
            Tip: usa ← → o swipe en móvil para navegar.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const items = useMemo(() => gallery ?? [], []);

  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const current = items[idx];

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => setIdx((v) => (v - 1 + items.length) % items.length);
  const next = () => setIdx((v) => (v + 1) % items.length);

  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        eyebrow="Catálogo"
        title="Trabajos recientes"
        subtitle="Toca una foto para verla en grande y desliza para navegar."
      />

      <Lightbox
        open={open}
        item={current}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((g, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openAt(i)}
            className="group text-left"
            aria-label={`Abrir ${g.title}`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white/65 ring-1 ring-black/10 shadow-sm backdrop-blur">
              {/* imagen */}
              <div className="relative aspect-[4/5] bg-black/5">
                {g.img ? (
                  <img
                    src={g.img}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center text-xs text-black/50">
                    FOTO
                  </div>
                )}

                {/* overlay suave */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-70" />

                {/* chip */}
                <div className="absolute left-3 top-3">
                  <Chip>{g.tag}</Chip>
                </div>

                {/* hint */}
                <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition">
                  <Chip>Abrir</Chip>
                </div>
              </div>

              {/* texto */}
              <div className="p-4">
                <p className="text-sm font-semibold text-black">{g.title}</p>
                <p className="mt-1 text-xs text-black/60">
                  Click para ver en grande
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}