import { useState, useEffect, FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import {
  getSiteSettings,
  postServiceRequest,
  type SiteSettings,
  type ServiceRequestBody,
} from "@/lib/api";

const DEFAULT_SETTINGS: SiteSettings = {
  company_name: "Compusum SRL",
  tagline: "La solución en tus manos",
  phone_primary: "829-556-9275",
  phone_secondary: "829-556-9271",
  email: "compusumsrl@gmail.com",
  address: "Av. 27 de Febrero No. 194, Plaza Don Bosco, Don Bosco",
  whatsapp_number: "18295569275",
  founding_year: 2000,
  years_experience: 24,
  projects_count: "+500",
  schedule: "Lunes a Viernes, 8:30 AM – 5:30 PM",
};

const SERVICE_TYPES = [
  "Sistemas Fotovoltaicos",
  "Equipos de Protección (UPS / Inversores)",
  "Instalaciones Eléctricas",
  "Mantenimiento General",
  "Otro",
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);

  // Form state
  const [form, setForm] = useState<ServiceRequestBody>({
    name: "",
    email: "",
    phone: "",
    service_type: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSiteSettings()
      .then((data) => setSettings(data))
      .catch(() => {
        // Mantiene los valores por defecto
      });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppContact = async () => {
    // Basic validation
    if (!form.name || !form.email || !form.phone || !form.service_type || !form.message) {
      setError("Por favor completa todos los campos requeridos.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      // 1. Enviar al backend
      await postServiceRequest(form);

      // 2. Preparar mensaje de WhatsApp
      const message = `*Nueva Solicitud de Servicio*\n\n` +
        `*Nombre:* ${form.name}\n` +
        `*Servicio:* ${form.service_type}\n` +
        `*Teléfono:* ${form.phone}\n` +
        `*Email:* ${form.email}\n` +
        `*Mensaje:* ${form.message}`;

      const whatsappUrl = `https://wa.me/${settings.whatsapp_number}?text=${encodeURIComponent(message)}`;

      // 3. Abrir WhatsApp en una nueva pestaña
      window.open(whatsappUrl, '_blank');

      // 4. Marcar como enviado y limpiar formulario
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service_type: "", message: "" });
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al procesar tu solicitud."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await postServiceRequest(form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service_type: "", message: "" });
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al enviar tu solicitud. Intenta de nuevo."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Phone,
      title: "Teléfonos",
      lines: [
        settings.phone_primary,
        ...(settings.phone_secondary ? [settings.phone_secondary] : []),
      ],
    },
    { icon: Mail, title: "Correo", lines: [settings.email] },
    {
      icon: MapPin,
      title: "Dirección",
      lines: settings.address.split(",").map((s) => s.trim()),
    },
    {
      icon: Clock,
      title: "Horario",
      lines: settings.schedule.split(",").map((s) => s.trim()),
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-navy-deeper" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-block bg-primary/15 text-primary text-xs font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Contáctanos
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-secondary-foreground mb-4">
            ¿Listo para tu próximo{" "}
            <span className="text-primary">proyecto</span>?
          </h2>
          <p className="text-secondary-foreground/50 font-body max-w-lg mx-auto">
            Escríbenos por WhatsApp, llámanos o completa el formulario. Estamos aquí para ayudarte.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {contactItems.map((item, i) => (
            <div
              key={i}
              className={`bg-navy-dark/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary-foreground/5 hover:border-primary/20 transition-all duration-300 reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-secondary-foreground mb-3">
                {item.title}
              </h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-sm text-secondary-foreground/50 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Service request form */}
        <div
          className={`max-w-2xl mx-auto bg-navy-dark/40 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-8 reveal reveal-delay-2 ${isVisible ? "visible" : ""}`}
        >
          <h3 className="font-display font-bold text-secondary-foreground text-xl mb-6 text-center">
            Solicitar servicio
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle className="w-16 h-16 text-success" />
              <p className="font-display font-semibold text-secondary-foreground text-lg text-center">
                ¡Solicitud enviada con éxito!
              </p>
              <p className="text-secondary-foreground/50 text-sm text-center">
                Nos pondremos en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-primary underline underline-offset-2"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-xs font-display font-semibold text-secondary-foreground/60 uppercase tracking-wide">
                  Nombre completo *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="bg-navy-deeper/60 border border-secondary-foreground/10 rounded-xl px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-xs font-display font-semibold text-secondary-foreground/60 uppercase tracking-wide">
                  Correo electrónico *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="bg-navy-deeper/60 border border-secondary-foreground/10 rounded-xl px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-xs font-display font-semibold text-secondary-foreground/60 uppercase tracking-wide">
                  Teléfono *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="809-000-0000"
                  className="bg-navy-deeper/60 border border-secondary-foreground/10 rounded-xl px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              {/* Service type */}
              <div className="sm:col-span-1 flex flex-col gap-1.5">
                <label className="text-xs font-display font-semibold text-secondary-foreground/60 uppercase tracking-wide">
                  Tipo de servicio *
                </label>
                <select
                  name="service_type"
                  value={form.service_type}
                  onChange={handleChange}
                  required
                  className="bg-navy-deeper/60 border border-secondary-foreground/10 rounded-xl px-4 py-3 text-sm text-secondary-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-secondary-foreground/40">
                    Selecciona un servicio
                  </option>
                  {SERVICE_TYPES.map((st) => (
                    <option key={st} value={st} className="bg-gray-900">
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-display font-semibold text-secondary-foreground/60 uppercase tracking-wide">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto o necesidad…"
                  className="bg-navy-deeper/60 border border-secondary-foreground/10 rounded-xl px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="sm:col-span-2 text-sm text-red-400 text-center">{error}</p>
              )}

              {/* Submit */}
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-success text-accent-foreground px-8 py-4 rounded-full font-display font-bold text-sm hover:opacity-90 transition-all hover:shadow-lg disabled:opacity-60"
                >
                  <Phone className="w-4 h-4" />
                  Contactar por WhatsApp
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-sm hover:bg-amber-dark transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    "Enviando…"
                  ) : (
                    <>
                      Enviar Solicitud
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>

  );
};

export default ContactSection;
