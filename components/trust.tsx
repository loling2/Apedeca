import { Shield, Eye, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protegemos tu inversión con seguros de responsabilidad civil y gestión financiera rigurosa. Tus fondos siempre están seguros con nosotros.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Acceso en tiempo real a toda la información de tu comunidad. Cuentas claras, informes detallados y comunicación constante.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description: "Más de 25 años resolviendo los desafíos de la gestión inmobiliaria. Un equipo experto a tu disposición las 24 horas.",
  },
]

export function Trust() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nuestros Valores
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
            Por qué confiar en Serca
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg leading-relaxed">
            Construimos relaciones duraderas basadas en valores sólidos que 
            garantizan la tranquilidad de nuestros clientes.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
