'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-reveal]', {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative flex min-h-svh items-center overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-5 pb-40 pt-28 md:px-8 md:pb-24">
        <p
          data-hero-reveal
          className="mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground"
        >
          Gestión de accesos para grandes aforos
        </p>
        <h1
          data-hero-reveal
          className="max-w-3xl text-balance text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Cada entrada,
          <br />
          bajo control<span className="text-accent">.</span>
        </h1>
        <p
          data-hero-reveal
          className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Venti gestiona el flujo de entradas digitales de tu evento con códigos QR únicos, registro
          en tiempo real y auditoría completa de quién entra y quién sale.
        </p>
        <div data-hero-reveal className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-transform duration-300 hover:scale-105"
          >
            Cotiza tu evento
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-border px-7 py-3.5 text-sm font-bold text-foreground transition-colors duration-300 hover:border-foreground"
          >
            Cómo trabajamos
          </Link>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        data-hero-reveal
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </div>
  )
}
