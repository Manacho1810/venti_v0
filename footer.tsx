import Link from 'next/link'

const marqueeItems = [
  'QR únicos',
  'Control en tiempo real',
  'Auditoría completa',
  'Respaldo offline',
  'Soporte 100% humano',
  'Pases de staff',
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors duration-700">
      <div className="overflow-hidden border-b border-border py-4" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-sm font-bold uppercase tracking-widest text-muted-foreground"
            >
              {item} <span className="ml-6 text-accent">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-black uppercase tracking-tight text-foreground">
            Venti<span className="text-accent">.</span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Gestión del flujo de entradas digitales para eventos de grandes aforos. Auditado por el
            ente gubernamental competente.
          </p>
        </div>

        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-8 gap-y-3">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log In
          </Link>
        </nav>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} Venti. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
