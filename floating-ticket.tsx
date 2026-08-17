'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TicketCard } from '@/components/ui/ticket-card'

gsap.registerPlugin(ScrollTrigger)

/**
 * Ticket flotante impulsado por scroll (estilo Lusion, sin WebGL):
 * viaja orgánicamente por la pantalla con giros 3D (rotateX/Y/Z por
 * transforms CSS acelerados por GPU) y termina acoplándose dentro
 * del iPhone del showcase interactivo.
 *
 * Capas:
 *  - wrapper (fixed): posición, escala y opacidad
 *  - spin: rotaciones 3D dentro del contexto de perspectiva
 *  - float: flotación orgánica continua (yoyo)
 */
export function FloatingTicket() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const spinRef = useRef<HTMLDivElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current
    const spin = spinRef.current
    const float = floatRef.current
    if (!wrapper || !spin || !float) return

    const mm = gsap.matchMedia()

    mm.add(
      {
        motionOk: '(prefers-reduced-motion: no-preference)',
        reduced: '(prefers-reduced-motion: reduce)',
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (ctx) => {
        const { motionOk, isDesktop } = ctx.conditions as {
          motionOk: boolean
          isDesktop: boolean
        }

        if (!motionOk) {
          gsap.set(wrapper, { autoAlpha: 0 })
          return
        }

        // Posición inicial: integrado al hero, a la derecha del titular
        gsap.set(wrapper, {
          xPercent: -50,
          yPercent: -50,
          left: isDesktop ? '72%' : '50%',
          top: isDesktop ? '55%' : '70%',
          scale: isDesktop ? 1 : 0.6,
          autoAlpha: 0,
        })
        gsap.to(wrapper, { autoAlpha: 1, duration: 1, delay: 0.4, ease: 'power2.out' })

        // Flotación orgánica continua (independiente del scroll)
        gsap.to(float, {
          y: 14,
          rotationZ: 2,
          duration: 2.6,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })

        // Etapa 1 — Hero: se desprende, gira sobre sí mismo y cruza a la izquierda
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
        tl1
          .to(
            wrapper,
            {
              left: isDesktop ? '25%' : '50%',
              top: '58%',
              scale: isDesktop ? 0.85 : 0.52,
              ease: 'none',
              immediateRender: false,
            },
            0,
          )
          .to(spin, { rotationY: 360, rotationZ: -10, ease: 'none', immediateRender: false }, 0)

        // Etapa 2 — Proceso: deriva orgánica con inclinaciones y más giros
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: '#proceso',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
        tl2
          .to(
            wrapper,
            {
              left: isDesktop ? '76%' : '50%',
              top: '42%',
              scale: isDesktop ? 0.7 : 0.46,
              ease: 'none',
              immediateRender: false,
            },
            0,
          )
          .to(spin, { rotationY: 540, rotationX: 18, rotationZ: 8, ease: 'none', immediateRender: false }, 0)
          .to(wrapper, { left: '50%', top: '60%', ease: 'none' }, 0.5)
          .to(spin, { rotationY: 720, rotationX: 0, rotationZ: -4, ease: 'none' }, 0.5)

        // Etapa 3 — Acople: converge al centro (donde queda anclado el iPhone
        // durante el pin del showcase) y se funde con su pantalla
        const tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: '#showcase',
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
          },
        })
        tl3
          .to(
            wrapper,
            {
              left: '50%',
              top: '50%',
              scale: isDesktop ? 0.4 : 0.34,
              ease: 'none',
              immediateRender: false,
            },
            0,
          )
          .to(spin, { rotationY: 1080, rotationX: 0, rotationZ: 0, ease: 'none', immediateRender: false }, 0)
          .to(wrapper, { autoAlpha: 0, ease: 'none' }, 0.8)
      },
    )

    return () => mm.revert()
  }, [])

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="perspective-1200 pointer-events-none fixed left-1/2 top-1/2 z-40 w-72 opacity-0 will-change-transform md:w-80"
    >
      <div ref={spinRef} className="preserve-3d will-change-transform">
        <div ref={floatRef}>
          <TicketCard />
        </div>
      </div>
    </div>
  )
}
