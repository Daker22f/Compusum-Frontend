import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { image: project1, title: "Instalación Solar Residencial", category: "Fotovoltaico" },
  { image: project2, title: "Centro de Distribución Eléctrica", category: "Instalación" },
  { image: project3, title: "Sistema UPS Data Center", category: "Protección" },
  { image: project4, title: "Inversores Solares", category: "Fotovoltaico" },
  { image: project5, title: "Parque Solar Comercial", category: "Fotovoltaico" },
  { image: project6, title: "Mantenimiento Industrial", category: "Mantenimiento" },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="proyectos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 reveal ${isVisible ? "visible" : ""}`}>
          <span className="inline-block bg-amber-light text-amber-dark text-xs font-display font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Nuestros Proyectos
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground mb-4">
            Trabajos que <span className="text-gradient-amber">hablan por sí solos</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Cada proyecto refleja nuestro compromiso con la calidad y la excelencia en soluciones eléctricas.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer reveal ${isVisible ? "visible" : ""} ${
                i === 0 || i === 4 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-display font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                <h3 className="font-display font-bold text-secondary-foreground text-lg mt-1">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
