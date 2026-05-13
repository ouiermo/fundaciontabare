import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 -top-32 -z-10 h-[480px] bg-gradient-to-b from-primary-soft to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-2 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
            Salud mental sin exclusiones
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Abrazamos tu historia para fortalecer la esperanza
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Creemos que cuidar la mente es un derecho. Te acompañamos con un equipo
            multidisciplinario que se adapta a tu realidad para que avances con
            claridad, autonomía y apoyo experto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contacto">
                Estamos aquí para escucharte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/servicios">Conocer servicios</Link>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
            <div>
              <dt className="text-muted-foreground">Enfoque</dt>
              <dd className="mt-1 font-semibold text-foreground">Integral</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Modelo</dt>
              <dd className="mt-1 font-semibold text-foreground">Sostenible</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Acceso</dt>
              <dd className="mt-1 font-semibold text-foreground">Adaptable</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/30 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="Dos manos sosteniéndose con luz cálida, símbolo de acompañamiento humano"
            width={1536}
            height={1024}
            className="h-full w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
