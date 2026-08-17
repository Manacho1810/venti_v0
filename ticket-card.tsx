import { cn } from '@/lib/utils'
import { QrCode } from '@/components/ui/qr-code'

/**
 * Vista modular del ticket digital Venti.
 * Se reutiliza en el ticket flotante y dentro del iPhone.
 */
export function TicketCard({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col overflow-hidden rounded-2xl border border-foreground/15 bg-foreground text-background shadow-2xl',
        className,
      )}
    >
      {/* Cabecera */}
      <div className={cn('flex items-start justify-between', compact ? 'p-3' : 'p-5')}>
        <div>
          <p className={cn('font-black uppercase tracking-tight', compact ? 'text-sm' : 'text-xl')}>
            Venti<span className="text-accent">.</span>
          </p>
          <p className={cn('font-medium uppercase tracking-widest opacity-60', compact ? 'text-[8px]' : 'text-[10px]')}>
            Entrada digital
          </p>
        </div>
        <span
          className={cn(
            'rounded-full bg-accent font-bold uppercase tracking-wider text-accent-foreground',
            compact ? 'px-2 py-0.5 text-[7px]' : 'px-3 py-1 text-[10px]',
          )}
        >
          VIP
        </span>
      </div>

      {/* Datos del evento */}
      <div className={cn('flex items-end justify-between', compact ? 'px-3 pb-2' : 'px-5 pb-4')}>
        <div>
          <p className={cn('font-black leading-none', compact ? 'text-base' : 'text-2xl')}>NOCHE ÍNDIGO</p>
          <p className={cn('mt-1 opacity-60', compact ? 'text-[8px]' : 'text-xs')}>
            Estadio Central — Puerta 4
          </p>
        </div>
        <div className="text-right">
          <p className={cn('font-mono font-bold', compact ? 'text-[9px]' : 'text-sm')}>21:00</p>
          <p className={cn('opacity-60', compact ? 'text-[8px]' : 'text-xs')}>14 NOV</p>
        </div>
      </div>

      {/* Perforación */}
      <div className="relative flex items-center" aria-hidden="true">
        <span className="absolute -left-2.5 h-5 w-5 rounded-full bg-background" />
        <span className="w-full border-t-2 border-dashed border-background/30" />
        <span className="absolute -right-2.5 h-5 w-5 rounded-full bg-background" />
      </div>

      {/* Talón con QR */}
      <div className={cn('flex items-center gap-3', compact ? 'p-3' : 'p-5')}>
        <QrCode className={cn(compact ? 'w-14' : 'w-24')} seed={7} />
        <div className="min-w-0 flex-1">
          <p className={cn('font-mono font-bold tracking-wider', compact ? 'text-[8px]' : 'text-xs')}>
            VNT-88F2-0417-QK
          </p>
          <p className={cn('mt-1 leading-snug opacity-60', compact ? 'text-[7px]' : 'text-[10px]')}>
            QR único e intransferible. Válido para un (1) acceso con registro de hora exacta.
          </p>
        </div>
      </div>

      {/* Brillo de acento */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/25 blur-3xl"
      />
    </div>
  )
}
