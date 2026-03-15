import { useState, useEffect } from "react";
import { ArrowRight, Sun, Battery, Zap, Wrench, LucideProps } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getServices, type Service } from "@/lib/api";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceUps from "@/assets/service-ups.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

// Mapa de iconos disponibles (extendible según lo que envíe el backend)
const ICON_MAP: Record<string, LucideIcon> = {
  Sun,
  Battery,
  Zap,
  Wrench,
};

const FALLBACK_SERVICES: Service[] = [
  {
    id: 1,
    image_url: serviceSolar,
    icon: "Sun",
    title: "Sistemas Fotovoltaicos",
    description:
      "Diseño, instalación y puesta en marcha de sistemas de energía solar para reducir costos y proteger el medio ambiente.",
    order: 1,
  },
  {
    id: 2,
    image_url: serviceUps,
    icon: "Battery",
    title: "Equipos de Protección",
    description:
      "Venta y mantenimiento de UPS, inversores, reguladores de voltaje y estabilizadores de energía.",
    order: 2,
  },
  {
    id: 3,
    image_url: serviceElectrical,
    icon: "Zap",
    title: "Instalaciones Eléctricas",
    description:
      "Instalaciones eléctricas comerciales, industriales y residenciales con técnicos altamente calificados.",
    order: 3,
  },
  {
    id: 4,
    image_url: serviceMaintenance,
    icon: "Wrench",
    title: "Mantenimiento General",
    description:
      "Servicio preventivo y correctivo para equipos de protección de energía, baterías y sistemas eléctricos.",
    order: 4,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [services, setServices] = useState<Service[]>(FALLBACK_SERVICES);

  useEffect(() => {
    getServices()
      .then((data) => {
        if (data && data.length > 0) {
          setServices(data);
        }
      })
      .catch(() => {
        // Si el backend no está disponible, se mantiene el fallback
      });
  }, []);

  return (
    <section id="servicios" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <div>
            <span className="inline-block bg-amber-light text-amber-dark text-xs font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Nuestros Servicios
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground leading-tight">
              Soluciones eléctricas<br />
              <span className="text-gradient-amber">para tu negocio</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-body max-w-md leading-relaxed">
            Contamos con ingenieros y técnicos altamente calificados, dedicados 24/7 a brindar el mejor servicio en toda la República Dominicana.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const IconComponent = ICON_MAP[s.icon] ?? Wrench;
            // image_url puede ser una URL externa o uno de los assets locales (fallback)
            const imgSrc = s.image_url ?? serviceSolar;

            return (
              <div
                key={s.id}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 reveal ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={imgSrc}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                    <IconComponent className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-5 leading-relaxed">{s.description}</p>
                  <a
                    href="https://wa.me/18295569275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-display font-semibold text-primary hover:text-amber-dark transition-colors group/link"
                  >
                    Solicitar Cotización
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
