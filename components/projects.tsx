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

export function Projects() {
  const projects = [
    {
      title: "Landing Page con HTML, CSS y Javascript",
      description:
        "Plataforma de agencia de viajes con un carrucel de imagenes.",
      image: "/LandigPage.png",
      technologies: ["HTML, CSS y Javascript"],
      liveUrl:
        "https://htmlpreview.github.io/?https://github.com/lucho-39/landing-page/blob/main/index.html",
      githubUrl: "https://github.com/lucho-39/landing-page",
    },
    {
      title: "Proyecto-frontend",
      description:
        "Este es un proyecto para un curso de Programador Front End, prof: Claudio Paredes;",
      image: "/CapturaU.PNG",
      technologies: ["HTML, CSS"],
      liveUrl:
        "https://htmlpreview.github.io/?https://github.com/lucho-39/proyecto-frontend/blob/main/index.html",
      githubUrl:
        "https://github.com/lucho-39/proyecto-frontend/blob/main/index.html",
    },
    {
      title: "CARRITO DE COMPRAS JS",
      description:
        "Programa un carrito de compras con Javascript usando el localStorage para almacenar datos.",
      image: "/Captura.PNG",
      technologies: ["HTMT, CSS, JS"],
      liveUrl:
        "https://htmlpreview.github.io/?https://github.com/lucho-39/CarritoDeEnvivo/blob/main/index.html",
      githubUrl: "https://github.com/lucho-39/CarritoDeEnvivo/tree/main",
    },
    {
      title: "Social Media Analytics",
      description: "",
      image: "",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-muted/50">
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
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
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
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver proyecto
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Código
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
