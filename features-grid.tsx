'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: 'Registro exacto de flujo',
    body: 'Hora de entrada, salida, reingreso e inasistencia registrada al segundo para cada invitado. Sabes con exactitud quién entra y quién sale.',
    wide: true,
  },
  {
    title: 'Acompañantes menores',
    body: 'Captura del rostro del adulto responsable para garantizar la salida segura de menores de edad.',
  },
  {
    title: 'Pases diferenciados',
    body: 'Accesos independientes para seguridad, administración, técnicos, mantenimiento y staff.',
  },
  {
    title: 'Respaldo offline',
    body: 'El escaneo de códigos QR sigue funcionando ante fallas de conexión a internet durante el evento.',
  },
  {
    title: 'Dashboard en tiempo real',
    body: 'El contratante ve el estatus de su evento en vivo: asistencia, aforo y flujo de accesos.',
  },
  {
    title: 'Soporte 100% humano',
    body: 'Asistencia personal sin bots de IA: bloqueos de acceso, errores de envío, entradas de cortesía o preferenciales. Todo el sistema es auditable por el ente gubernamental competente.',
    wide: true,
  },
]

export function FeaturesGrid() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-feature]', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
      <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">Beneficios</p>
      <h2 className="mt-4 max-w-2xl text-balance text-4xl font-black uppercase leading-tight tracking-tight text-foreground md:text-6xl">
        Seguridad que se audita sola
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {features.map((feature) => (
          <article
            key={feature.title}
            data-feature
            className={`group rounded-2xl border border-border bg-card p-7 transition-colors duration-500 hover:border-foreground/40 md:p-9 ${
              feature.wide ? 'md:col-span-2' : ''
            }`}
          >
            <h3 className="text-xl font-black uppercase tracking-tight text-card-foreground md:text-2xl">
              {feature.title}
            </h3>
            <p className="mt-3 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              {feature.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
