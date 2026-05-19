import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Explore */}
          <div>
            <h5 className="text-sm font-semibold mb-4">Explore</h5>
            <div className="w-8 h-0.5 bg-secondary mb-4" />
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#responsabilidad" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Responsabilidad social
                </Link>
              </li>
              <li>
                <Link href="#convenios" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Convenios y Adhesiones
                </Link>
              </li>
              <li>
                <Link href="#calidad" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Gestión de calidad
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Services/Legal */}
          <div>
            <h5 className="text-sm font-semibold mb-4">Services</h5>
            <div className="w-8 h-0.5 bg-secondary mb-4" />
            <ul className="space-y-2.5">
              <li>
                <Link href="#aviso-legal" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="#privacidad" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="#cookies" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link href="#empleo" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Bolsa de empleo
                </Link>
              </li>
              <li>
                <Link href="#denuncias" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Canal de denuncias
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h5 className="text-sm font-semibold mb-4">Follow us</h5>
            <div className="w-8 h-0.5 bg-secondary mb-4" />
            <ul className="space-y-2.5">
              <li>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h5 className="text-sm font-semibold mb-4">Get in touch</h5>
            <div className="w-8 h-0.5 bg-secondary mb-4" />
            <ul className="space-y-2.5">
              <li>
                <Link href="mailto:administracion@sercagestion.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all text-xs">administracion@sercagestion.com</span>
                </Link>
              </li>
              <li>
                <Link href="tel:922971756" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  922 971 756
                </Link>
              </li>
            </ul>
          </div>

          {/* Dirección */}
          <div>
            <h5 className="text-sm font-semibold mb-4">Dirección</h5>
            <div className="w-8 h-0.5 bg-secondary mb-4" />
            <address className="not-italic text-sm text-primary-foreground/80 leading-relaxed">
              C/San Vicente Ferrer 31<br />
              Local bajo izquierda<br />
              Santa Cruz de Tenerife
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/60">
              Copyright © Serca Gestión - Servicios y Gestión Residencial en Canarias, S.L.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
