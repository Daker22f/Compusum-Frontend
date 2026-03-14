import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutTeam from "@/assets/about-team.jpg";

const counters = [
  { value: "2000", label: "Año de fundación" },
  { value: "+500", label: "Proyectos realizados" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "100%", label: "Cobertura RD" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="nosotros" className="py-24 bg-cool-gray" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative reveal ${isVisible ? "visible" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutTeam}
                alt="Equipo de Compusum"
                className="w-full object-cover h-[450px] lg:h-[550px]"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-card rounded-2xl px-6 py-5 shadow-elevated">
              <p className="font-display font-extrabold text-4xl text-foreground">+24</p>
              <p className="text-sm text-muted-foreground font-medium">Años de<br />experiencia</p>
              <div className="w-8 h-1 bg-primary rounded-full mt-2" />
            </div>

            {/* Decorative amber shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div className={`reveal reveal-delay-2 ${isVisible ? "visible" : ""}`}>
            <span className="inline-block bg-amber-light text-amber-dark text-xs font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Quiénes Somos
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              Acerca de<br />
              <span className="text-gradient-amber">Compusum SRL</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4 text-base">
              Desde el año 2000, Compusum SRL se ha consolidado como una empresa líder en soluciones eléctricas y energéticas en la República Dominicana. Nuestro equipo de ingenieros y técnicos altamente calificados se dedica a brindar servicios de excelencia.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-10 text-base">
              Especializados en sistemas fotovoltaicos, UPS, inversores y todo tipo de instalaciones eléctricas, garantizamos soluciones confiables y duraderas para hogares y empresas en todo el territorio nacional.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {counters.map((c, i) => (
                <div key={i}>
                  <p className="font-display font-extrabold text-2xl text-foreground">{c.value}</p>
                  <div className="w-8 h-0.5 bg-primary my-2 rounded-full" />
                  <p className="text-xs text-muted-foreground font-medium">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
