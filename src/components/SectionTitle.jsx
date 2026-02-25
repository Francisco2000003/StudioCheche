export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-widest text-black/60">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-black">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm sm:text-base text-black/70">{subtitle}</p> : null}
    </div>
  );
}