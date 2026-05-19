"use client"

import { useState, useRef } from "react"
import { Upload, X, FileText } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface WorkWithUsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WorkWithUsModal({ open, onOpenChange }: WorkWithUsModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 2 seconds and close modal
    setTimeout(() => {
      setFormData({ name: "", email: "" })
      setFile(null)
      setSubmitted(false)
      onOpenChange(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Trabaja con Nosotros</DialogTitle>
          <DialogDescription>
            ¿Quieres formar parte de nuestro equipo? Envíanos tu CV y nos pondremos en contacto contigo.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              ¡Solicitud enviada!
            </h3>
            <p className="text-sm text-muted-foreground">
              Gracias por tu interés. Revisaremos tu candidatura y te contactaremos pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="work-name">Nombre completo</Label>
              <Input
                id="work-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="work-email">Correo electrónico</Label>
              <Input
                id="work-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">Curriculum Vitae (PDF)</Label>
              <div className="relative">
                {file ? (
                  <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-muted/50">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground flex-1 truncate">
                      {file.name}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={handleRemoveFile}
                    >
                      <X className="w-4 h-4" />
                      <span className="sr-only">Eliminar archivo</span>
                    </Button>
                  </div>
                ) : (
                  <label
                    htmlFor="cv"
                    className="flex flex-col items-center gap-2 p-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <Upload className="w-8 h-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Haz clic o arrastra tu CV aquí
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Solo archivos PDF
                    </span>
                  </label>
                )}
                <input
                  ref={fileInputRef}
                  id="cv"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="sr-only"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
