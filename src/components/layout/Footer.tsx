import { Link } from "@tanstack/react-router";
import { Heart, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-4 w-4" aria-hidden />
            </span>
            <span>{site.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Acompañamos procesos de salud mental con un enfoque integral, cercano y sostenible.
            Creemos en una salud mental sin exclusiones.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.number} className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                <a href={`tel:${p.number}`} className="hover:text-foreground">
                  {p.display}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explorar</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-foreground">Servicios</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href={site.social.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"
              className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram"
              className="rounded-md border border-border p-2 text-muted-foreground hover:text-foreground">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>Aviso legal · Política de privacidad</p>
        </div>
      </div>
    </footer>
  );
}
