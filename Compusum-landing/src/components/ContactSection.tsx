import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const contactItems = [
    { icon: Phone, title: "Teléfonos", lines: ["829-556-9275", "829-556-9271"] },
    { icon: Mail, title: "Correo", lines: ["compusumsrl@gmail.com"] },
    { icon: MapPin, title: "Dirección", lines: ["Av. 27 de Febrero No. 194", "Plaza Don Bosco, Don Bosco"] },
    { icon: Clock, title: "Horario", lines: ["Lunes a Viernes", "8:30 AM – 5:30 PM"] },
  ];

  return (
    <section id="contacto" className="py-24 bg-navy-deeper" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-block bg-primary/15 text-primary text-xs font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Contáctanos
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-secondary-foreground mb-4">
            ¿Listo para tu próximo <span className="text-primary">proyecto</span>?
          </h2>
          <p className="text-secondary-foreground/50 font-body max-w-lg mx-auto">
            Escríbenos por WhatsApp o visítanos en nuestra oficina. Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, i) => (
            <div
              key={i}
              className={`bg-navy-dark/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-foreground/5 hover:border-primary/20 transition-all duration-300 reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-secondary-foreground mb-3">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-sm text-secondary-foreground/50 leading-relaxed">{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className={`text-center mt-14 reveal reveal-delay-3 ${isVisible ? "visible" : ""}`}>
          <a
            href="https://wa.me/18295569275"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-success text-accent-foreground px-10 py-4 rounded-full font-display font-bold text-lg hover:opacity-90 transition-all hover:shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
