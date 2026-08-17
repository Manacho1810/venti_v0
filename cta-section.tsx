import Link from 'next/link'

export function CTASection() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-32 text-center md:px-8 md:py-44">
      <h2 className="max-w-3xl text-balance text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl">
        Tu evento merece
        <br />
        este nivel de control<span className="text-accent">.</span>
      </h2>
      <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
        Cuéntanos sobre tu evento y diseñamos el flujo de accesos a la medida: formulario, pagos, QR
        únicos y control en puerta.
      </p>
      <Link
        href="/contact"
        className="mt-10 rounded-full bg-accent px-9 py-4 text-sm font-black uppercase tracking-wide text-accent-foreground transition-transform duration-300 hover:scale-105"
      >
        Hablemos de tu evento
      </Link>
    </div>
  )
}
