import type { Metadata } from "next";
import { ArrowLeft, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Diploma — Programador FrontEnd",
  description:
    "Diploma de Programador FrontEnd otorgado a Luciano Santa Cruz por el Centro de Capacitación Laboral y Formación Profesional N.º 6625, Rosario.",
  alternates: {
    canonical: "/diploma",
  },
  openGraph: {
    title: "Diploma — Programador FrontEnd | Lucho Santa Cruz",
    description:
      "Diploma de Programador FrontEnd otorgado por el Centro de Capacitación Laboral y Formación Profesional N.º 6625, Rosario.",
    // The site-level opengraph-image does not carry over to child routes, so
    // this page points at the diploma itself.
    images: [
      {
        url: "/diploma.jpg",
        width: 2267,
        height: 1608,
        alt: "Diploma de Programador FrontEnd otorgado a Luciano Santa Cruz",
      },
    ],
  },
};

export default function DiplomaPage() {
  return (
    <main id="contenido" className="min-h-screen bg-background">
      <header className="border-b border-border bg-gradient-to-br from-background to-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4">
          <a
            href="/"
            className="text-2xl font-bold text-primary hover:text-accent transition-colors"
          >
            Lucho
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portfolio
          </a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-5">
            <Award className="h-4 w-4" />
            Programador FrontEnd
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Mi diploma
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Centro de Capacitación Laboral y Formación Profesional N.º 6625 —
            Rosario, 12 de diciembre de 2025
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-3 sm:p-5 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diploma.jpg"
            alt="Diploma de Programador FrontEnd otorgado a Luciano Gaspar Santa Cruz por el Centro de Capacitación Laboral y Formación Profesional N.º 6625"
            width={2267}
            height={1608}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 text-balance">
          Otorgado por la Escuela Primaria Nocturna N.º 13 "Alejandro María
          Aguado", Educación para Jóvenes y Adultos.
        </p>

        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
