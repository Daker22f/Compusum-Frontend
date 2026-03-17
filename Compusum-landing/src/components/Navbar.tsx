import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
];

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  closeMenu?: () => void
) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  closeMenu?.();
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú si se hace resize a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-lg shadow-card border-b border-border"
        : "bg-black/40 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex flex-col"
        >
          <span
            className={`font-display font-extrabold text-2xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white drop-shadow-md"
              }`}
          >
            COMPUSUM
          </span>
          <span
            className={`text-[10px] font-body font-medium tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-white/80 drop-shadow-sm"
              }`}
          >
            Soluciones Eléctricas
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground/70" : "text-white drop-shadow-sm"
                }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:bg-amber-dark transition-all hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Contáctanos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled
            ? "text-foreground hover:bg-foreground/10"
            : "text-white drop-shadow-md hover:bg-white/10 active:bg-white/20"
            }`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-gray-900 border-t border-white/10 px-6 pb-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href, () => setOpen(false))}
              className="block py-4 text-white font-medium border-b border-white/10 text-base active:text-amber-400"
              style={{ color: "#ffffff" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-5 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-full text-sm font-bold active:opacity-90"
          >
            <Phone className="w-4 h-4" />
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
