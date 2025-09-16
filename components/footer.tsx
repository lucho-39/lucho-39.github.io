import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lucho</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Desarrollador Web Full Stack apasionado por crear experiencias digitales excepcionales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#sobre-mi"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/lucho-39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:tu-email@ejemplo.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-red-400" /> por Lucho © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
