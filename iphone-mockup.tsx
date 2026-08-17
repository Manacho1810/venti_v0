import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Marco de iPhone construido con HTML/CSS puro.
 * El contenido de la pantalla se pasa como children.
 */
export function IPhoneMockup({
  children,
  className,
  screenId,
}: {
  children: ReactNode
  className?: string
  screenId?: string
}) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19] w-64 rounded-[3rem] border-[6px] border-neutral-800 bg-neutral-900 shadow-2xl md:w-72',
        className,
      )}
    >
      {/* Botones laterales */}
      <span aria-hidden="true" className="absolute -left-2 top-24 h-10 w-1 rounded-full bg-neutral-700" />
      <span aria-hidden="true" className="absolute -left-2 top-36 h-10 w-1 rounded-full bg-neutral-700" />
      <span aria-hidden="true" className="absolute -right-2 top-28 h-14 w-1 rounded-full bg-neutral-700" />

      {/* Pantalla */}
      <div id={screenId} className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-neutral-950">
        {/* Dynamic Island */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
        />
        {children}
      </div>
    </div>
  )
}
