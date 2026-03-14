import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ClipboardList, Search, Wrench as WrenchIcon, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Contáctanos",
    desc: "Escríbenos por WhatsApp con tu dirección y la descripción de tu necesidad eléctrica.",
  },
  {
    icon: Search,
    step: "02",
    title: "Evaluación",
    desc: "Nuestro equipo evaluará tu caso y te proporcionará una cotización detallada sin compromiso.",
  },
  {
    icon: WrenchIcon,
    step: "03",
    title: "Ejecución",
    desc: "Realizamos el trabajo con los más altos estándares de calidad y seguridad profesional.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Garantía",
    desc: "Entregamos tu proyecto listo y respaldado por nuestra garantía de servicio y calidad.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-cool-gray" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-block bg-amber-light text-amber-dark text-xs font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Cómo Trabajamos
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground mb-4">
            Proceso <span className="text-gradient-amber">simple y efectivo</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            En solo 4 pasos, solucionamos tu necesidad eléctrica con profesionalismo y rapidez.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative text-center reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-px bg-border z-0" />
              )}

              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card shadow-card mb-6 mx-auto">
                <s.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground font-display font-bold text-xs flex items-center justify-center">
                  {s.step}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-[240px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
