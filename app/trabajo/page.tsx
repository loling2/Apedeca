import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { JobListings } from "@/components/job-listings"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Trabaja con Nosotros - SERCA",
  description: "Únete a nuestro equipo. Descubre las oportunidades laborales disponibles en SERCA Gestión.",
}

export default function TrabajoPage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Trabaja con Nosotros
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            En SERCA valoramos el compromiso y la vocación de servicio. Forma parte de un equipo dedicado a mejorar la calidad de vida de las personas.
          </p>
        </div>
      </section>
      
      {/* Job Listings */}
      <JobListings />
      
      <Footer />
    </main>
  )
}
