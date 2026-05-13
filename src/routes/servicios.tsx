import { createFileRoute } from "@tanstack/react-router";
import { Plans } from "@/components/home/Plans";
import { FAQ } from "@/components/home/FAQ";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Fundación Tabare" },
      { name: "description", content: "Modelos de acompañamiento accesibles y sostenibles: aporte social, compromiso sostenible y acompañamiento integral en salud mental." },
      { property: "og:title", content: "Servicios — Fundación Tabare" },
      { property: "og:description", content: "Conoce nuestros modelos de acompañamiento en salud mental con sentido social." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <section className="bg-primary-soft/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Servicios</span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Acompañamiento accesible y sostenible
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Cada persona recibe un proceso a la medida. El aporte se conversa según tu situación
            y forma parte activa de tu compromiso con el cambio.
          </p>
        </div>
      </section>
      <Plans />
      <FAQ />
    </>
  );
}
