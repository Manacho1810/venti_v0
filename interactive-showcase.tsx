'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IPhoneMockup } from '@/components/ui/iphone-mockup'
import { TicketCard } from '@/components/ui/ticket-card'
import { QrCode } from '@/components/ui/qr-code'

gsap.registerPlugin(ScrollTrigger)

/**
 * Secuencia de marca sincronizada con el scroll (sección pineada):
 *  Etapa 1: llega la notificación push al iPhone
 *  Etapa 2: la notificación se abre y coincide con el ticket que
 *           venía flotando desde el hero (acople)
 *  Etapa 3: un visor de cámara escanea el QR con línea láser y
 *           verifica el acceso en tiempo real
 */
export function InteractiveShowcase() {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          motionOk: '(prefers-reduced-motion: no-preference)',
          reduced: '(prefers-reduced-motion: reduce)',
        },
        (mctx) => {
          const { motionOk } = mctx.conditions as { motionOk: boolean }

          if (!motionOk) {
            // Sin animación: muestra el estado final legible
            gsap.set('[data-stage-notification], [data-stage-scanner], [data-text="0"], [data-text="1"]', {
              autoAlpha: 0,
            })
            gsap.set('[data-stage-ticket], [data-text="2"], [data-verified]', { autoAlpha: 1 })
            return
          }

          // Estados iniciales
          gsap.set('[data-stage-notification]', { yPercent: -160, autoAlpha: 0 })
          gsap.set('[data-stage-ticket]', { autoAlpha: 0, scale: 0.85, y: 30 })
          gsap.set('[data-stage-scanner]', { autoAlpha: 0 })
          gsap.set('[data-verified]', { autoAlpha: 0, scale: 0.8 })
          gsap.set('[data-text="0"], [data-text="1"], [data-text="2"]', { autoAlpha: 0, y: 30 })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: '+=3200',
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          })

          // ETAPA 1 — Notificación push
          tl.to('[data-text="0"]', { autoAlpha: 1, y: 0, duration: 0.6 }, 0.2)
            .to('[data-stage-notification]', { yPercent: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }, 0.4)
            .to('[data-text="0"]', { autoAlpha: 0, y: -30, duration: 0.5 }, 1.6)

          // ETAPA 2 — La notificación se abre: el ticket se acopla en pantalla
          tl.to('[data-stage-notification]', { scale: 1.06, autoAlpha: 0, duration: 0.5 }, 1.8)
            .to('[data-stage-ticket]', { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 2.0)
            .to('[data-text="1"]', { autoAlpha: 1, y: 0, duration: 0.6 }, 2.2)
            .to('[data-text="1"]', { autoAlpha: 0, y: -30, duration: 0.5 }, 3.6)

          // ETAPA 3 — Escaneo del QR con visor y láser
          tl.to('[data-stage-scanner]', { autoAlpha: 1, duration: 0.6 }, 3.8)
            .to('[data-text="2"]', { autoAlpha: 1, y: 0, duration: 0.6 }, 4.0)
            .to('[data-verified]', { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.6)' }, 5.0)

          tl.to({}, { duration: 0.8 }) // respiro final antes de despinear
        },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative flex h-svh items-center justify-center overflow-hidden">
      {/* Textos laterales sincronizados */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 px-5 md:inset-y-0 md:left-8 md:right-auto md:flex md:w-80 md:items-center lg:left-16">
        <div className="relative h-28 w-full md:h-48">
          <div data-text="0" className="absolute inset-0">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Etapa 01</p>
            <h3 className="mt-2 text-xl font-black uppercase leading-tight text-foreground md:text-2xl">
              Tu entrada llega directo al invitado
            </h3>
            <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground md:block">
              Confirmado el pago, enviamos la invitación digital con notificación instantánea.
            </p>
          </div>
          <div data-text="1" className="absolute inset-0">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Etapa 02</p>
            <h3 className="mt-2 text-xl font-black uppercase leading-tight text-foreground md:text-2xl">
              Un QR único por persona
            </h3>
            <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground md:block">
              Cada invitado queda registrado en la base de datos con su código intransferible.
            </p>
          </div>
          <div data-text="2" className="absolute inset-0">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Etapa 03</p>
            <h3 className="mt-2 text-xl font-black uppercase leading-tight text-foreground md:text-2xl">
              Escaneo instantáneo en puerta
            </h3>
            <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground md:block">
              Cualquier móvil con cámara valida el acceso y registra la hora exacta de entrada.
            </p>
          </div>
        </div>
      </div>

      {/* iPhone central */}
      <IPhoneMockup screenId="phone-dock" className="scale-90 md:scale-100">
        {/* Fondo de pantalla de bloqueo */}
        <div className="absolute inset-0 flex flex-col items-center bg-gradient-to-b from-neutral-900 via-neutral-950 to-black pt-16">
          <p className="text-5xl font-black tracking-tight text-white/90">21:04</p>
          <p className="mt-1 text-xs font-medium text-white/50">viernes, 14 de noviembre</p>
        </div>

        {/* Etapa 1: notificación push */}
        <div data-stage-notification className="absolute inset-x-3 top-28 z-10">
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00FF87] text-xs font-black text-black">
                V
              </span>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold text-white">Venti</p>
                  <p className="text-[10px] text-white/50">ahora</p>
                </div>
                <p className="truncate text-[11px] leading-snug text-white/80">
                  Has recibido tu entrada digital Venti
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Etapa 2: ticket acoplado en pantalla */}
        <div data-stage-ticket className="absolute inset-x-3 top-1/2 z-10 -translate-y-1/2">
          <TicketCard compact />
        </div>

        {/* Etapa 3: visor de escaneo con láser */}
        <div data-stage-scanner className="absolute inset-0 z-20 bg-black/70">
          <div className="absolute inset-x-6 top-1/2 aspect-square -translate-y-1/2">
            {/* Esquinas del visor */}
            <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-lg border-l-4 border-t-4 border-[#00FF87]" />
            <span className="absolute right-0 top-0 h-6 w-6 rounded-tr-lg border-r-4 border-t-4 border-[#00FF87]" />
            <span className="absolute bottom-0 left-0 h-6 w-6 rounded-bl-lg border-b-4 border-l-4 border-[#00FF87]" />
            <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-lg border-b-4 border-r-4 border-[#00FF87]" />
            {/* QR dentro del visor */}
            <div className="absolute inset-5 rounded-lg bg-white p-2">
              <QrCode className="h-full w-full [--background:#ffffff] [--foreground:#050505]" seed={7} />
            </div>
            {/* Línea láser */}
            <span className="animate-scan-line absolute inset-x-2 h-0.5 rounded-full bg-[#00FF87] shadow-[0_0_16px_2px_rgba(0,255,135,0.8)]" />
          </div>

          {/* Verificación */}
          <div data-verified className="absolute inset-x-5 bottom-8">
            <div className="rounded-xl bg-[#00FF87] p-3 text-black">
              <p className="text-xs font-black uppercase tracking-wide">Acceso verificado</p>
              <div className="mt-1.5 flex justify-between font-mono text-[10px] font-bold">
                <span>VNT-88F2-0417-QK</span>
                <span>ENTRADA 21:04:36</span>
              </div>
            </div>
          </div>
        </div>
      </IPhoneMockup>
    </div>
  )
}
