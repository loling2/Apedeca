import { Home, Building2, Users, Calendar, Heart } from "lucide-react";

const stats = [
  {
    icon: Home,
    number: "2",
    label: "hogares funcionales",
    description: "para personas con discapacidad intelectual, trastorno de conducta, trastorno de personalidad en Tenerife y Gran Canaria",
  },
  {
    icon: Building2,
    number: "2",
    label: "Residencias",
    description: "para personas con trastorno mental grave",
  },
  {
    icon: Users,
    number: "5",
    label: "Viviendas Tuteladas",
    description: "para personas con trastorno mental grave",
  },
  {
    icon: Calendar,
    number: "2",
    label: "centros de día Rehabilitación Psicosocial",
    description: "en Gran Canaria",
  },
  {
    icon: Heart,
    number: "1",
    label: "centro de día",
    description: "para mayores en Santa Cruz de Tenerife",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-2 leading-tight">
                {stat.label}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
