"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - matching reference SERCA with gold C and arc */}
          <Link href="/" className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-primary tracking-tight">SER</span>
              <span className="text-3xl font-bold text-secondary">C</span>
              <span className="text-3xl font-bold text-primary tracking-tight">A</span>
              <span className="relative -top-1 ml-0.5">
                <svg className="h-3 w-6" viewBox="0 0 24 12">
                  <path
                    d="M0 12 Q12 0 24 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-secondary"
                  />
                </svg>
              </span>
            </div>
            <span className="text-[10px] text-secondary font-medium -mt-1">
              Servicios y Gestión Residencial
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                NOSOTROS
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="#quienes-somos">Quiénes somos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#responsabilidad">Responsabilidad social</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#convenios">Convenios y Adhesiones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#calidad">Gestión de calidad</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                SERVICIOS
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <DropdownMenuItem asChild>
                  <Link href="#discapacidad">Atención a Discapacidad Intelectual</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#mayores">Centros de Día para Mayores</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#salud-mental">Rehabilitación Psicosocial</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/trabajo"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              TRABAJA CON NOSOTROS
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href="#contacto">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Nosotros
                </p>
                <div className="flex flex-col gap-1 pl-2">
                  <Link href="#quienes-somos" className="py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Quiénes somos
                  </Link>
                  <Link href="#responsabilidad" className="py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Responsabilidad social
                  </Link>
                  <Link href="#convenios" className="py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Convenios y Adhesiones
                  </Link>
                  <Link href="#calidad" className="py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Gestión de calidad
                  </Link>
                </div>
              </div>
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Servicios
                </p>
                <div className="flex flex-col gap-1 pl-2">
                  <Link href="#discapacidad" className="py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Atención a Discapacidad Intelectual
                  </Link>
                  <Link href="#mayores" className="py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Centros de Día para Mayores
                  </Link>
                  <Link href="#salud-mental" className="py-1.5 text-sm text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                    Rehabilitación Psicosocial
                  </Link>
                </div>
              </div>
              <Link
                href="/trabajo"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                TRABAJA CON NOSOTROS
              </Link>
              <div className="px-4 pt-2">
                <Button variant="outline" className="w-full border-primary text-primary" asChild>
                  <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
