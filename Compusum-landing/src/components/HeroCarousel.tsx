import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import heroSolar from "@/assets/hero-solar.jpg";
import heroBatteries from "@/assets/hero-batteries.jpg";
import heroElectrical from "@/assets/hero-electrical.jpg";

const slides = [
  {
    image: heroSolar,
    title: "Sistemas Fotovoltaicos",
    subtitle: "Diseño, instalación y puesta en marcha de sistemas solares para hogares y empresas en toda República Dominicana.",
    cta: "Solicitar Cotización",
  },
  {
    image: heroBatteries,
    title: "Protección de Energía",
    subtitle: "Venta y mantenimiento de UPS, inversores y bancos de baterías de alta capacidad para tu negocio.",
    cta: "Ver Equipos",
  },
  {
    image: heroElectrical,
    title: "Instalaciones Eléctricas",
    subtitle: "Instalaciones eléctricas comerciales y residenciales con los más altos estándares de calidad y seguridad.",
    cta: "Conocer Más",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background images with Ken Burns effect */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.08)",
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-display font-semibold text-primary tracking-wide">
                Desde el año 2000 • Cobertura Nacional
              </span>
            </div>

            <h1
              key={current}
              className="font-display font-extrabold text-5xl md:text-7xl text-secondary-foreground leading-[1.05] mb-2"
              style={{
                animation: "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              }}
            >
              {slides[current].title}
            </h1>

            <p className="font-display text-lg md:text-xl text-primary font-semibold mb-4">
              La solución en tus manos
            </p>

            <p
              key={`sub-${current}`}
              className="text-base md:text-lg text-secondary-foreground/70 font-body mb-10 max-w-lg leading-relaxed"
              style={{
                animation: "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
                opacity: 0,
              }}
            >
              {slides[current].subtitle}
            </p>

            <div
              className="flex flex-wrap gap-4"
              style={{
                animation: "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
                opacity: 0,
              }}
            >
              <a
                href="https://wa.me/18295569275"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-sm hover:bg-amber-dark transition-all hover:shadow-lg group"
              >
                {slides[current].cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-full font-display font-medium text-sm hover:bg-secondary-foreground/10 transition-all backdrop-blur-sm"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows - modern style */}
      <div className="absolute bottom-12 right-6 md:right-12 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-secondary-foreground/20 backdrop-blur-md flex items-center justify-center text-secondary-foreground/80 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-secondary-foreground/20 backdrop-blur-md flex items-center justify-center text-secondary-foreground/80 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide counter */}
        <span className="ml-2 text-sm font-display font-semibold text-secondary-foreground/60">
          <span className="text-primary text-lg">{String(current + 1).padStart(2, "0")}</span>
          <span className="mx-1">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary-foreground/10">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Keyframe for slideUp */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
