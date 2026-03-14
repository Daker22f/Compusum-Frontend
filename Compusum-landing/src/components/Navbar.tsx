import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#inicio" className="flex flex-col">
          <span className={`font-display font-extrabold text-2xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-secondary-foreground"}`}>
            COMPUSUM
          </span>
          <span className={`text-[10px] font-body font-medium tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-muted-foreground" : "text-secondary-foreground/60"}`}>
            Soluciones Eléctricas
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/70" : "text-secondary-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/18295569275"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:bg-amber-dark transition-all hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Contáctanos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-secondary-foreground"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card/98 backdrop-blur-lg border-t border-border px-6 pb-6 shadow-elevated">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/70 hover:text-primary transition-colors font-medium border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/18295569275"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-bold"
          >
            <Phone className="w-4 h-4" />
            Contáctanos
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
