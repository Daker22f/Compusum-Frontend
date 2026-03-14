import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, Users, Headphones, Award } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Equipo Experto",
    desc: "Ingenieros y técnicos altamente calificados con años de experiencia en el sector eléctrico y energético.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    desc: "Disponibilidad total para atender cualquier emergencia o requerimiento de nuestros clientes en todo momento.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    desc: "Utilizamos equipos y materiales de primera calidad, respaldados por las mejores marcas del mercado.",
  },
  {
    icon: CheckCircle,
    title: "Cobertura Nacional",
    desc: "Servicio en toda la República Dominicana, desde Santo Domingo hasta las comunidades más remotas.",
  },
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-navy relative overflow-hidden" ref={ref}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--secondary-foreground)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`reveal ${isVisible ? "visible" : ""}`}>
            <span className="inline-block bg-primary/15 text-primary text-xs font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-secondary-foreground mb-6 leading-tight">
              La diferencia está en <span className="text-primary">nuestro equipo</span>
            </h2>
            <p className="text-secondary-foreground/60 font-body leading-relaxed mb-8 text-base">
              Más de 24 años de experiencia nos respaldan. Somos más que una empresa de servicios eléctricos — somos tu socio de confianza para proteger y optimizar tu energía.
            </p>

            <a
              href="https://wa.me/18295569275"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-sm hover:bg-amber-dark transition-all hover:shadow-lg"
            >
              Solicitar Cotización
            </a>
          </div>

          {/* Right - cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`bg-navy-dark/50 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 reveal ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-secondary-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-secondary-foreground/50 font-body leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
