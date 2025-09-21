import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/50">
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
            <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-card rounded-full flex items-center justify-center shadow-lg">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
