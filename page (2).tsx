import type { Metadata } from 'next'
import Link from 'next/link'
import { SetTheme } from '@/components/theme/theme-section'
import { LoginForm } from '@/components/sections/login-form'

export const metadata: Metadata = {
  title: 'Log In — Venti',
  description: 'Accede al dashboard de Venti para ver el estatus de tu evento en tiempo real.',
}

export default function LoginPage() {
  return (
    <main className="flex min-h-svh items-center justify-center px-5 pb-16 pt-24">
      <SetTheme theme="dark" />

      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <p className="text-3xl font-black uppercase tracking-tight text-foreground">
            Venti<span className="text-accent">.</span>
          </p>
          <h1 className="mt-3 text-xl font-bold text-foreground">Panel de control de eventos</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Accede para ver el estatus de tu evento en tiempo real: asistencia, aforo y flujo de
            entradas.
          </p>
        </div>

        <LoginForm />

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {'¿Aún no trabajas con Venti? '}
          <Link href="/contact" className="font-bold text-foreground underline underline-offset-4">
            Contáctanos
          </Link>
        </p>
      </div>
    </main>
  )
}
