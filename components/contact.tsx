import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden py-20 bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/fondo4.jpeg')] bg-cover bg-center bg-no-repeat"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-background/85 dark:bg-background/90"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12 text-balance">
            Estoy siempre abierto a discutir nuevas oportunidades, proyectos
            interesantes o simplemente charlar sobre tecnología. No dudes en
            contactarme.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <a
              href="mailto:lucho.lsc46@gmail.com"
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/50 hover:bg-accent/5"
            >
              <div className="bg-accent/10 p-3 rounded-lg">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-primary">Email</p>
                <p className="text-muted-foreground break-all">
                  lucho.lsc46@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+5493412152131"
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/50 hover:bg-accent/5"
            >
              <div className="bg-accent/10 p-3 rounded-lg">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-primary">Teléfono</p>
                <p className="text-muted-foreground">+54 9 (341) 2152131</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center">
              <div className="bg-accent/10 p-3 rounded-lg">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-primary">Ubicación</p>
                <p className="text-muted-foreground">
                  Rosario, Provincia De Santa Fe, Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
