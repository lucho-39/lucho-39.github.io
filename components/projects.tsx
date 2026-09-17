import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      title: "Landing Page con HTML, CSS y Javascript",
      description:
        "Plataforma de agencia de viajes con un carrucel de imagenes.",
      image: "/LandigPage.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/lucho-39/landing-page",
    },
    {
      title: "Proyecto-frontend",
      description:
        "Este es un proyecto para un curso de Programador Front End, prof: Claudio Paredes;",
      image: "/CapturaU.jpg",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/lucho-39/proyecto-frontend",
    },
    {
      title: "CARRITO DE COMPRAS JS",
      description:
        "Programa un carrito de compras con Javascript usando el localStorage para almacenar datos.",
      image: "/Captura.jpg",
      technologies: ["HTML", "CSS", "JS"],
      githubUrl: "https://github.com/lucho-39/CarritoDeEnvivo/tree/main",
    },
    {
      title: "Recetario IA",
      description:
        "PWA mobile-first de recetas construida con Spec-Driven Development. Búsqueda unificada, favoritos y colecciones, reseñas, modo cocinando con comandos de voz, notificaciones en tiempo real, panel de administración y catálogo normalizado de 317 ingredientes.",
      image: "/placeholder.svg",
      technologies: [
        "SvelteKit",
        "Svelte 5",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Podman",
      ],
      githubUrl: "https://github.com/lucho-39/sdd-recetas",
    },
  ];

  return (
    <section
      id="proyectos"
      className="relative isolate overflow-hidden py-20 bg-muted/50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/fondo.jpg')] bg-cover bg-center bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-background/85 dark:bg-background/90"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    disabled
                    className="bg-accent hover:bg-accent/90"
                    title="Demo en línea no disponible"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver proyecto
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
