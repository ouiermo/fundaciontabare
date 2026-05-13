import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  {
    text: "Llegué sin saber por dónde empezar. Encontré un equipo que escuchó sin prisa y me ayudó a recuperar mi voz.",
    author: "Camila",
    role: "Participante del proceso",
  },
  {
    text: "Lo que más valoro es que se adaptaron a mi realidad económica sin que eso afectara la calidad del acompañamiento.",
    author: "Andrés",
    role: "Participante del proceso",
  },
  {
    text: "Los talleres comunitarios cambiaron la forma en que mi familia entiende la salud mental.",
    author: "Beatriz",
    role: "Asistente a talleres",
  },
  {
    text: "Sentí que era parte activa de mi cambio, no un número en una lista.",
    author: "Joaquín",
    role: "Participante del proceso",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Historias que sostienen</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Voces que han caminado con nosotros
        </h2>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="mt-10">
        <CarouselContent>
          {quotes.map((q) => (
            <CarouselItem key={q.author} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-border/70 bg-card">
                <CardContent className="flex h-full flex-col gap-6 p-6">
                  <Quote className="h-6 w-6 text-primary" aria-hidden />
                  <p className="text-sm leading-relaxed text-foreground">{q.text}</p>
                  <div className="mt-auto">
                    <div className="text-sm font-semibold">{q.author}</div>
                    <div className="text-xs text-muted-foreground">{q.role}</div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex justify-end gap-2">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
