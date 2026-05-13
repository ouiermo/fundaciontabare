import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/home/ContactForm";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Fundación Tabare" },
      { name: "description", content: "Estamos aquí para escucharte. Escríbenos por correo, teléfono o WhatsApp y conversemos sobre tu proceso." },
      { property: "og:title", content: "Contacto — Fundación Tabare" },
      { property: "og:description", content: "Conversemos sobre tu proceso. Apoyo psicológico accesible y cercano." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Contacto</span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Estamos aquí para escucharte
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Escríbenos cuando quieras. Te respondemos con la calma y el cuidado que necesitas.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
            </li>
            {site.phones.map((p) => (
              <li key={p.number} className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
                <span>
                  <a href={`tel:${p.number}`} className="hover:underline">{p.display}</a>
                  <span className="ml-2 text-xs text-muted-foreground">{p.label}</span>
                </span>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" aria-hidden />
              <span className="text-muted-foreground">
                Atendemos de manera presencial y en línea, adaptándonos a tu realidad.
              </span>
            </li>
          </ul>
        </div>

        <ContactForm compact />
      </div>
    </section>
  );
}
