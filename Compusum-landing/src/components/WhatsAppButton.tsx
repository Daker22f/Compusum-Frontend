import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="#contacto"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-accent-foreground" />
  </a>
);

export default WhatsAppButton;
