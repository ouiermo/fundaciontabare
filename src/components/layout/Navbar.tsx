import { Link } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Heart className="h-4 w-4" aria-hidden />
          </span>
          <span>Fundación Tabare</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/contacto">Estamos aquí para escucharte</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Móvil">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2">
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Estamos aquí para escucharte
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
