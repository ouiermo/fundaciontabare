import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { Gallery } from "@/components/home/Gallery";
import { Testimonials } from "@/components/home/Testimonials";
import { Plans } from "@/components/home/Plans";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FAQ } from "@/components/home/FAQ";
import { ContactForm } from "@/components/home/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fundación Tabare — Abrazamos tu historia" },
      { name: "description", content: "Apoyo psicológico multidisciplinario, ayuda en crisis emocional, prevención y bienestar. Un modelo accesible y sostenible para cuidar tu salud mental." },
      { property: "og:title", content: "Fundación Tabare — Abrazamos tu historia" },
      { property: "og:description", content: "Acompañamiento integral en salud mental con enfoque social, sostenible y cercano." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Gallery />
      <Testimonials />
      <Plans />
      <BlogPreview />
      <FAQ />
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Conversemos</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Estamos aquí para escucharte
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cuéntanos qué necesitas. Te acompañamos sin juicios y a tu ritmo.
          </p>
        </div>
        <ContactForm compact />
      </section>
    </>
  );
}
