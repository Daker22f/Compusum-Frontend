import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <p className="font-display font-extrabold text-2xl text-primary mb-1">COMPUSUM</p>
          <p className="text-[10px] text-secondary-foreground/40 tracking-[0.2em] uppercase mb-4">Soluciones Eléctricas SRL</p>
          <p className="text-sm text-secondary-foreground/50 font-body leading-relaxed">
            La solución en tus manos. Más de 25 años brindando servicios eléctricos de excelencia en República Dominicana.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="font-display font-bold text-secondary-foreground mb-5 text-sm tracking-wide uppercase">Servicios</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/50">
            <li className="hover:text-primary transition-colors cursor-pointer">Sistemas Fotovoltaicos</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Equipos de Protección</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Instalaciones Eléctricas</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Mantenimiento General</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-display font-bold text-secondary-foreground mb-5 text-sm tracking-wide uppercase">Contacto</h4>
          <div className="space-y-3 text-sm text-secondary-foreground/50">
            <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary shrink-0" /> 829-556-9275</p>
            <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary shrink-0" /> 829-556-9271</p>
            <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary shrink-0" /> compusumsrl@gmail.com</p>
          </div>
        </div>

        {/* Dirección */}
        <div>
          <h4 className="font-display font-bold text-secondary-foreground mb-5 text-sm tracking-wide uppercase">Oficina Central</h4>
          <p className="flex items-start gap-3 text-sm text-secondary-foreground/50 leading-relaxed">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            Av. 27 de Febrero No. 194, Plaza Don Bosco, Don Bosco, República Dominicana
          </p>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 pt-6 flex items-center justify-between">
        <p className="text-xs text-secondary-foreground/30">
          © {new Date().getFullYear()} Compusum SRL. Todos los derechos reservados.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/40 hover:text-primary hover:border-primary transition-colors"
          aria-label="Subir"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
