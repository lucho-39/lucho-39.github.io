import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/fondo2.jpg')] bg-cover bg-center bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-background/85 dark:bg-background/90"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary">
                Hola, soy <span className="text-accent">Lucho</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 text-balance">
                Desarrollador Web Full Stack apasionado por crear experiencias
                digitales excepcionales
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="#proyectos" className="flex items-center gap-2">
                  Ver mis proyectos
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contacto" className="flex items-center gap-2">
                  Contáctame
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 pt-8">
              <a
                href="https://github.com/lucho-39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/luciano-santa-cruz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center p-3 sm:p-4 ring-1 ring-accent/20">
              <img
                src="/imag2.jpg"
                alt="Lucho"
                width={499}
                height={749}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
