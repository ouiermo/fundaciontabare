import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent("Hola, me gustaría conversar con la Fundación Tabare.");

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-border bg-card p-4 shadow-xl">
          <div className="mb-2 text-sm font-semibold text-foreground">¿Hablamos por WhatsApp?</div>
          <p className="mb-3 text-xs text-muted-foreground">
            Elige el número con el que prefieres conectar. Te respondemos lo antes posible.
          </p>
          <ul className="space-y-2">
            {site.phones.map((p) => (
              <li key={p.number}>
                <a
                  href={`https://wa.me/${p.number.replace("+", "")}?text=${message}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm hover:bg-accent"
                >
                  <span>{p.display}</span>
                  <span className="text-xs text-muted-foreground">{p.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar opciones de WhatsApp" : "Abrir WhatsApp"}
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
