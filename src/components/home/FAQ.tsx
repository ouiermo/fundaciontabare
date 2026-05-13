import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo funciona el modelo de aporte adaptado?",
    a: "Conversamos contigo para definir un aporte sostenible según tu situación. Tu compromiso es parte activa del proceso y permite que más personas accedan al acompañamiento.",
  },
  {
    q: "¿Necesito un diagnóstico previo para acercarme?",
    a: "No. Puedes acercarte aunque no tengas claro lo que estás sintiendo. La primera conversación está pensada para escucharte y orientarte.",
  },
  {
    q: "¿Atienden situaciones de crisis emocional?",
    a: "Sí. Si estás atravesando un momento difícil, escríbenos por WhatsApp o llámanos. Te orientamos sobre los pasos inmediatos a seguir.",
  },
  {
    q: "¿La atención es presencial o en línea?",
    a: "Ofrecemos ambas modalidades para adaptarnos a tu realidad. Lo definimos contigo en la evaluación inicial.",
  },
  {
    q: "¿Qué profesionales conforman el equipo?",
    a: "Psicólogos, trabajadores sociales, abogados y educadores que trabajan de forma coordinada para sostener tu proceso.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Preguntas frecuentes</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Resolvemos las dudas más comunes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Si tu pregunta no está aquí, escríbenos. Nos encantará conversar contigo.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
