import { Link } from "@tanstack/react-router";
import { Check, Sprout, HandHeart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    icon: Sprout,
    name: "Aporte Social",
    tagline: "Para quienes están comenzando su proceso",
    bullets: [
      "Evaluación inicial con un profesional",
      "Acceso a talleres comunitarios mensuales",
      "Aporte adaptado a tu realidad económica",
    ],
    cta: "Empezar mi proceso",
    featured: false,
  },
  {
    icon: HandHeart,
    name: "Compromiso Sostenible",
    tagline: "Acompañamiento continuo y multidisciplinario",
    bullets: [
      "Sesiones individuales con tu equipo de referencia",
      "Plan de cuidado personalizado y revisable",
      "Apoyo entre sesiones cuando lo necesites",
    ],
    cta: "Quiero comprometerme",
    featured: true,
  },
  {
    icon: Users,
    name: "Acompañamiento Integral",
    tagline: "Para familias y procesos complejos",
    bullets: [
      "Atención psicológica, social y legal coordinada",
      "Mediación familiar y orientación a la red cercana",
      "Seguimiento extendido en momentos clave",
    ],
    cta: "Conversemos",
    featured: false,
  },
];

export function Plans() {
  return (
    <section id="planes" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Sentido social y sostenibilidad</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Modelos pensados para acompañarte de forma accesible
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nuestro modelo se sostiene gracias a quienes pueden aportar más para que otras
            personas también accedan. Tu compromiso impulsa tu propio proceso y el de la comunidad.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map(({ icon: Icon, name, tagline, bullets, cta, featured }) => (
            <Card
              key={name}
              className={
                featured
                  ? "border-primary bg-card shadow-lg ring-1 ring-primary/40"
                  : "border-border/70 bg-card"
              }
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft">
                  <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8" variant={featured ? "default" : "outline"}>
                  <Link to="/contacto">{cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          Conversamos contigo para definir un aporte que sea sostenible para tu situación.
          Tu compromiso forma parte activa de tu proceso de cambio.
        </p>
      </div>
    </section>
  );
}
