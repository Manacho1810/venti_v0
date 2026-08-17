import type { Metadata } from 'next'
import { SetTheme } from '@/components/theme/theme-section'
import { ContactForm } from '@/components/sections/contact-form'

export const metadata: Metadata = {
  title: 'Contact — Venti',
  description:
    'Contacta al equipo de Venti para diseñar el flujo de entradas digitales de tu próximo evento de gran aforo.',
}

export default function ContactPage() {
  return (
    <main className="pt-16">
      <SetTheme theme="light" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-5 py-24 md:grid-cols-2 md:px-8 md:py-36">
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">Contact</p>
          <h1 className="mt-4 text-balance text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-6xl">
            Diseñemos tu evento a la medida<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Para organizadores y contratantes: cuéntanos qué necesitas y armamos el sistema de
            accesos completo — formulario, pagos, QR únicos, pases de staff y control en puerta.
          </p>

          <dl className="mt-12 flex flex-col gap-6">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-foreground/50">Email</dt>
              <dd className="mt-1 text-lg font-bold text-foreground">hola@venti.events</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                Atención
              </dt>
              <dd className="mt-1 max-w-xs leading-relaxed text-muted-foreground">
                Asistencia personal y directa, sin bots de inteligencia artificial.
              </dd>
            </div>
          </dl>
        </section>

        <section aria-label="Formulario de contacto">
          <ContactForm />
        </section>
      </div>
    </main>
  )
}
