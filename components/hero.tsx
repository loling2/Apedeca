import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center bg-foreground overflow-hidden">
      {/* Background with dark overlay - matching reference */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      {/* Content - centered like reference */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-card italic mb-4 tracking-wide">
          Serca Gestión
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-card/90 font-normal mb-10 tracking-wide">
          Servicios y Gestión Residencial en Canarias, S.L.
        </h2>
        <Button
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-medium rounded-sm"
          asChild
        >
          <Link href="#contacto">Contáctenos</Link>
        </Button>
      </div>
    </section>
  );
}
