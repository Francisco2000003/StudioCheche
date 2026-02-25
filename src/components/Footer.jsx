import { brand } from "../data/siteData";

// ✅ cambia los nombres/formatos según tus archivos reales
import logoRobots from "../assets/logo-robots.png";

export default function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black/60">
          © {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
        </p>

        {/* Logos */}
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:gap-6">
          {/* Logo de ella */}
          

          {/* Tu logo */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-black/60">Hecho por</span>
            <img
              src={logoRobots}
              alt="RObots"
              className="h-7 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}