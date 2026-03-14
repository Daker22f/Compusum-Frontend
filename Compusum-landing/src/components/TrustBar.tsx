import { Calendar, MapPin, Clock, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Calendar, label: "Años de experiencia", value: "+24" },
  { icon: MapPin, label: "Cobertura Nacional RD", value: "100%" },
  { icon: Clock, label: "Disponibilidad", value: "24/7" },
  { icon: Shield, label: "Equipo Certificado", value: "A+" },
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative -mt-16 z-10 px-6">
      <div className={`container mx-auto reveal ${isVisible ? "visible" : ""}`}>
        <div className="bg-card rounded-2xl shadow-elevated p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className={`flex items-center gap-4 reveal ${isVisible ? "visible" : ""} reveal-delay-${i + 1}`}>
              <div className="w-12 h-12 rounded-xl bg-amber-light flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-amber-dark" />
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
