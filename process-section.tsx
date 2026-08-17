'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Formulario personalizado',
    body: 'El invitado completa un formulario con los datos que tu organización considere pertinentes. Tú decides qué información manejar.',
  },
  {
    number: '02',
    title: 'Pago verificado',
    body: 'Una vez garantizado el pago de la entrada, el sistema procede automáticamente con la emisión de la invitación.',
  },
  {
    number: '03',
    title: 'QR único e individual',
    body: 'Cada invitado recibe su entrada digital con un código QR único e intransferible, registrado en nuestra base de datos.',
  },
]

export function ProcessSection() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-step]').forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
      <p className="text-xs font-bold uppercase tracking-widest text-accent-foreground/60">
        <span className="text-foreground/50">El proceso</span>
      </p>
      <h2 className="mt-4 max-w-2xl text-balance text-4xl font-black uppercase leading-tight tracking-tight text-foreground md:text-6xl">
        Así de fácil llega tu entrada
      </h2>

      <div className="mt-16 flex flex-col gap-6 md:mt-24 md:gap-10">
        {steps.map((step, i) => (
          <article
            key={step.number}
            data-step
            className="grid grid-cols-1 gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <p className="text-sm font-mono font-bold text-muted-foreground md:col-span-2">
              {step.number}
            </p>
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground md:col-span-4 md:text-3xl">
              {step.title}
            </h3>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:col-span-6">
              {step.body}
            </p>
            <span className="sr-only">{`Paso ${i + 1} de ${steps.length}`}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
