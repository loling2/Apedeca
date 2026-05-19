"use client"

import { useState } from "react"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Desde que Serca gestiona nuestra comunidad, los problemas se resuelven rápidamente y la comunicación es excelente. Muy recomendables.",
    author: "María García",
    role: "Presidenta de Comunidad",
    location: "Madrid",
  },
  {
    quote: "La transparencia en las cuentas y la disponibilidad del equipo han sido claves para confiar en ellos durante más de 10 años.",
    author: "Carlos Rodríguez",
    role: "Propietario",
    location: "Barcelona",
  },
  {
    quote: "Profesionales, eficientes y siempre dispuestos a ayudar. Han transformado la gestión de nuestro edificio por completo.",
    author: "Ana Martínez",
    role: "Administradora",
    location: "Valencia",
  },
  {
    quote: "El servicio de mantenimiento 24/7 nos ha salvado en más de una ocasión. Respuesta rápida y soluciones efectivas.",
    author: "Pedro Sánchez",
    role: "Vecino",
    location: "Sevilla",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Miles de propietarios y comunidades confían en nosotros para la 
            gestión de sus propiedades.
          </p>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <Card className="bg-card border-border/50 mb-8">
            <CardContent className="p-8 lg:p-12">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                {testimonials[activeIndex].quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonials[activeIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role} — {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={cn(
                  "w-3 h-3 rounded-full p-0",
                  index === activeIndex 
                    ? "bg-primary" 
                    : "bg-border hover:bg-primary/50"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
