import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [
  { src: g1, alt: "Grupo de apoyo reunido en círculo en un espacio luminoso" },
  { src: g2, alt: "Profesional acompañando una sesión terapéutica con calidez" },
  { src: g3, alt: "Taller comunitario con participantes sonriendo" },
  { src: g4, alt: "Sala de espera tranquila con luz natural" },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Comunidad viva</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              El lugar donde sucede el acompañamiento
            </h2>
          </div>
          <p className="text-sm text-muted-foreground sm:max-w-sm">
            Espacios pensados para que llegues como eres, encuentres calma y construyas
            tu proceso junto a personas que también caminan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-2xl ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
