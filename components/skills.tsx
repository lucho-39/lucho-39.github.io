import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
        "Sass",
      ],
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "REST API", "GraphQL"],
      icon: "⚙️",
    },
    {
      title: "Herramientas",
      skills: ["Git", "Vercel", "VS Code"],
      icon: "🛠️",
    },
    {
      title: "Metodologías",
      skills: [
        "Agile",
        "Scrum",
        "TDD",
        "CI/CD",
        "Code Review",
        "Responsive Design",
      ],
      icon: "📋",
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Tecnologías y herramientas que domino para crear soluciones web
            completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
