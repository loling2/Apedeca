"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { JobApplicationModal } from "./job-application-modal"

const jobs = [
  {
    id: 1,
    title: "Contable",
    titleEn: "Accountant",
    image: "/images/job-accountant.jpg",
    description: "Gestión contable y financiera de la organización. Experiencia en contabilidad y conocimientos de normativa fiscal.",
  },
  {
    id: 2,
    title: "Electricista",
    titleEn: "Electrician",
    image: "/images/job-electrician.jpg",
    description: "Mantenimiento e instalaciones eléctricas en nuestros centros. Certificación profesional requerida.",
  },
  {
    id: 3,
    title: "Personal de apoyo",
    titleEn: "Support Staff",
    image: "/images/job-support.jpg",
    description: "Atención y cuidado de usuarios en centros residenciales. Vocación de servicio y empatía.",
  },
  {
    id: 4,
    title: "Conductor",
    titleEn: "Driver",
    image: "/images/job-driver.jpg",
    description: "Transporte de usuarios a centros y actividades. Carnet de conducir y experiencia en transporte de personas.",
  },
]

export function JobListings() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleApply = (job: typeof jobs[0]) => {
    setSelectedJob(job)
    setModalOpen(true)
  }

  return (
    <section id="empleo" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bolsa de Empleo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestro equipo. Buscamos profesionales comprometidos con la atención a personas.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Job Image */}
              <div className="relative h-48 md:h-56">
                <Image
                  src={job.image}
                  alt={job.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Job Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {job.description}
                </p>
                <Button
                  onClick={() => handleApply(job)}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Aplicar
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      <JobApplicationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        jobTitle={selectedJob?.title || ""}
      />
    </section>
  )
}
