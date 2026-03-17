import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-20 bg-background reveal ${isVisible ? "visible" : ""}`}>
      <div className="container mx-auto px-6">
        <div className="relative bg-navy rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-secondary-foreground mb-4 leading-tight">
              ¿Necesitas una solución eléctrica <span className="text-primary">confiable</span>?
            </h2>
            <p className="text-secondary-foreground/60 font-body text-lg mb-8 max-w-lg">
              Contáctanos hoy y recibe una evaluación gratuita. Nuestro equipo está listo para atenderte.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold hover:bg-amber-dark transition-all hover:shadow-lg group"
              >
                Escribir por WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:8295569275"
                className="inline-flex items-center gap-2 border border-secondary-foreground/20 text-secondary-foreground px-8 py-4 rounded-full font-display font-medium hover:bg-secondary-foreground/10 transition-all"
              >
                Llamar: 829-556-9275
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
