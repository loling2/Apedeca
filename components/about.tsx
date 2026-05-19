const stats = [
  { value: "25+", label: "Años de experiencia" },
  { value: "500+", label: "Comunidades gestionadas" },
  { value: "15.000+", label: "Propietarios satisfechos" },
  { value: "98%", label: "Tasa de retención" },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Líderes en gestión de propiedades desde 1998
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Serca nació con la visión de transformar la administración de fincas en España. 
                Durante más de dos décadas, hemos construido nuestra reputación sobre los pilares 
                de la transparencia, la eficiencia y el compromiso con nuestros clientes.
              </p>
              <p>
                Nuestro equipo de profesionales cualificados combina experiencia tradicional con 
                las últimas tecnologías para ofrecer un servicio de gestión de propiedades moderno 
                y adaptado a las necesidades de cada comunidad.
              </p>
              <p>
                Creemos que una buena administración va más allá de los números. Se trata de 
                construir comunidades donde los vecinos se sientan escuchados y sus propiedades 
                estén cuidadas con la máxima dedicación.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="bg-muted rounded-xl p-6 lg:p-8 text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
