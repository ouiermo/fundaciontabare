import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ValueProps } from "@/components/home/ValueProps";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Fundación Tabare" },
      { name: "description", content: "Conoce a la Fundación Tabare: un equipo multidisciplinario que cree en la salud mental como un derecho accesible y sostenible." },
      { property: "og:title", content: "Nosotros — Fundación Tabare" },
      { property: "og:description", content: "Salud mental sin exclusiones, con un equipo cercano y profesional." },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <>
      <section className="bg-primary-soft/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Quiénes somos</span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Creemos en una salud mental sin exclusiones
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Nos adaptamos a la realidad económica de cada persona para garantizar un apoyo experto,
            sostenible y cercano. Acompañamos procesos, no etiquetas.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contacto">Conversar con el equipo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Nuestra misión</h2>
            <p className="mt-3 text-muted-foreground">
              Hacer de la salud mental un derecho accesible, sostenible y cercano. Acompañamos a cada
              persona como protagonista activa de su propio cambio.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Nuestra mirada</h2>
            <p className="mt-3 text-muted-foreground">
              Trabajamos desde un enfoque integral —psicológico, social, legal, terapéutico y educativo—
              porque tu bienestar nunca es una sola cosa.
            </p>
          </div>
        </div>
      </section>

      <ValueProps />
    </>
  );
}
