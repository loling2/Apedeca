import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "discapacidad",
    image: "/images/service-1.jpg",
    title: "Atención Especializada en Discapacidad Intelectual, Trastorno de Personalidad.",
    description:
      "Hogares funcionales diseñados para brindar el mejor cuidado y calidad de vida a personas con discapacidad intelectual, trastorno de personalidad.",
    href: "#discapacidad",
  },
  {
    id: "mayores",
    image: "/images/service-2.jpg",
    title: "Centros de Día y Programas para personas mayores",
    description:
      "Centro de día para personas mayores, que ofrecen un ambiente cálido y profesional. Programa de Atención Integral para la Permanencia en el hogar, para personas mayores de la isla de Tenerife.",
    href: "#mayores",
  },
  {
    id: "salud-mental",
    image: "/images/service-3.jpg",
    title: "Centros de día de Rehabilitación Psicosocial, Residencias y viviendas tuteladas para Trastorno Mental Grave",
    description:
      "Gestionamos residencias, viviendas tuteladas y centros de día de rehabilitación psicosocial en las islas de Tenerife y Gran Canaria.",
    href: "#salud-mental",
  },
];

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>
                <div className="w-12 h-0.5 bg-secondary mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  + info
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
