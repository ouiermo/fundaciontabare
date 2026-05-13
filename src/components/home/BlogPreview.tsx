import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    tag: "Prevención",
    title: "Señales tempranas de una crisis emocional y cómo responder",
    excerpt: "Reconocer lo que sentimos a tiempo abre la posibilidad de pedir ayuda con calma.",
  },
  {
    tag: "Bienestar",
    title: "Pequeñas rutinas que sostienen la salud mental en el día a día",
    excerpt: "No se trata de hacer más, sino de cuidar mejor lo que ya hacemos.",
  },
  {
    tag: "Comunidad",
    title: "Acompañar sin invadir: cómo sostener a alguien que lo está pasando mal",
    excerpt: "Estar presente también es una habilidad que podemos aprender.",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Educación en salud mental</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Desde el blog</h2>
        </div>
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary-foreground">
          Ver todos los artículos <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="border-border/70 transition-shadow hover:shadow-md">
            <CardContent className="flex h-full flex-col p-6">
              <span className="w-fit rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary-foreground">
                {p.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">
                Leer artículo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
