import { Building2, Key, Wrench, Scale, FileText, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Administración de Fincas",
    description: "Gestión integral de comunidades de propietarios con total transparencia y eficiencia en la administración.",
  },
  {
    icon: Key,
    title: "Gestión de Alquileres",
    description: "Búsqueda de inquilinos, contratos, cobros y mantenimiento de propiedades en alquiler.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description: "Servicio técnico 24/7 para reparaciones y mantenimiento preventivo de instalaciones.",
  },
  {
    icon: Scale,
    title: "Asesoría Legal",
    description: "Asistencia jurídica especializada en propiedad horizontal y legislación inmobiliaria.",
  },
  {
    icon: FileText,
    title: "Gestión Documental",
    description: "Digitalización y archivo de toda la documentación de tu comunidad con acceso online.",
  },
  {
    icon: Users,
    title: "Mediación Vecinal",
    description: "Resolución de conflictos y mediación profesional para una convivencia armoniosa.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Soluciones integrales para tu propiedad
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Ofrecemos una amplia gama de servicios profesionales diseñados para 
            simplificar la gestión de tu comunidad o propiedad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
