import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(1, "Cuéntanos tu nombre").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Ingresa un correo válido").max(255),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mín. 10 caracteres)").max(1000, "Máximo 1000 caracteres"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Hemos recibido tu mensaje. Te responderemos pronto.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contacto" className={compact ? "" : "mx-auto max-w-3xl scroll-mt-20 px-4 py-20 sm:px-6"}>
      {!compact && (
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Conversemos</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Estamos aquí para escucharte
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cuéntanos qué necesitas. Te acompañamos sin juicios y a tu ritmo.
          </p>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" name="name" placeholder="Tu nombre" autoComplete="name" maxLength={100} />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo</Label>
            <Input id="email" name="email" type="email" placeholder="tucorreo@ejemplo.com" autoComplete="email" maxLength={255} />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" name="message" rows={5} placeholder="Cuéntanos cómo te sientes o qué buscas." maxLength={1000} />
          {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
        </div>
        <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Enviando..." : "Enviar mensaje"}
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </section>
  );
}
