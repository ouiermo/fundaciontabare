import { Brain, Users, Scale, HeartHandshake, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { icon: Brain, title: "Psicológico", text: "Procesos terapéuticos que se ajustan a tu ritmo y a tu historia." },
  { icon: Users, title: "Social", text: "Acompañamiento comunitario para que nadie atraviese su proceso en soledad." },
  { icon: Scale, title: "Legal", text: "Orientación clara cuando tu bienestar también requiere respaldo jurídico." },
  { icon: HeartHandshake, title: "Terapéutico", text: "Herramientas integradas para sostener tus avances en el día a día." },
  { icon: GraduationCap, title: "Educativo", text: "Formación abierta para prevenir crisis y promover el bienestar." },
];

export function ValueProps() {
  return (
    <section id="propuesta" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nuestro enfoque</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Un acompañamiento integral, porque tu bienestar nunca es una sola cosa
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tejemos cinco dimensiones de cuidado para que tu proceso tenga raíces firmes.
          La salud mental es un derecho, y queremos que sea accesible para cada persona.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="border-border/70 transition-shadow hover:shadow-md">
            <CardContent className="p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
