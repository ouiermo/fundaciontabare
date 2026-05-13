import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  { tag: "Prevención", title: "Señales tempranas de una crisis emocional y cómo responder", excerpt: "Reconocer lo que sentimos a tiempo abre la posibilidad de pedir ayuda con calma." },
  { tag: "Bienestar", title: "Pequeñas rutinas que sostienen la salud mental en el día a día", excerpt: "No se trata de hacer más, sino de cuidar mejor lo que ya hacemos." },
  { tag: "Comunidad", title: "Acompañar sin invadir: cómo sostener a alguien que lo está pasando mal", excerpt: "Estar presente también es una habilidad que podemos aprender." },
  { tag: "Familia", title: "Conversar sobre salud mental con niñas, niños y adolescentes", excerpt: "Las palabras adecuadas abren puertas que el silencio mantiene cerradas." },
  { tag: "Autocuidado", title: "El descanso como acto de salud, no como recompensa", excerpt: "Recuperar el descanso es uno de los primeros pasos para sostener un proceso." },
  { tag: "Comunidad", title: "Redes de apoyo: por qué nadie debería atravesar solo un proceso", excerpt: "La salud mental también se cultiva en colectivo." },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Fundación Tabare" },
      { name: "description", content: "Artículos de educación en salud mental: prevención, bienestar, crisis emocional y vida en comunidad." },
      { property: "og:title", content: "Blog — Fundación Tabare" },
      { property: "og:description", content: "Lecturas para cuidar la salud mental en lo cotidiano." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Blog</span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Educación en salud mental
        </h1>
        <p className="mt-4 text-muted-foreground">
          Reflexiones y herramientas para acompañarte en lo cotidiano. Pronto podrás suscribirte
          para recibir nuevos artículos.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Card key={a.title} className="border-border/70">
            <CardContent className="flex h-full flex-col p-6">
              <span className="w-fit rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary-foreground">
                {a.tag}
              </span>
              <h2 className="mt-4 text-lg font-semibold leading-snug">{a.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
              <span className="mt-6 text-xs text-muted-foreground">Próximamente</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
