import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative isolate overflow-hidden py-20 bg-muted/50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/fondo3.jpg')] bg-cover bg-center bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-background/85 dark:bg-background/90"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Sobre mí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Conoce más sobre mi experiencia y pasión por el desarrollo web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-card-foreground">
                  Soy un desarrollador web apasionado con experiencia en
                  tecnologías modernas como React, Next.js, TypeScript y
                  Node.js. Me encanta crear aplicaciones web que no solo
                  funcionen perfectamente, sino que también brinden una
                  experiencia de usuario excepcional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-card-foreground">
                  Mi enfoque se centra en escribir código limpio, mantenible y
                  escalable. Siempre estoy aprendiendo nuevas tecnologías y
                  mejores prácticas para mantenerme actualizado en este campo en
                  constante evolución.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">
                    Años de experiencia
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Proyectos completados
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-4 sm:p-6">
                <a
                  href="/diploma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/diploma.jpg"
                    width={2267}
                    height={1608}
                    loading="lazy"
                    alt="Diploma de Programador FrontEnd otorgado por el Centro de Capacitación Laboral y Formación Profesional N.º 6625"
                    className="w-full h-auto rounded-md"
                  />
                </a>
                <div className="mt-4 flex flex-col items-center gap-2 text-center">
                  <Badge>Programador FrontEnd</Badge>
                  <p className="text-sm text-muted-foreground">
                    Centro de Capacitación Laboral y Formación Profesional N.º 6625
                    — Rosario, 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
