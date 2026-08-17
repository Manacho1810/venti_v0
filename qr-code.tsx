import { cn } from '@/lib/utils'

/**
 * Código QR estilizado y determinista (patrón fijo por semilla)
 * para evitar discrepancias de hidratación. Puramente decorativo.
 */
function seededPattern(size: number, seed: number): boolean[] {
  const cells: boolean[] = []
  let s = seed
  for (let i = 0; i < size * size; i++) {
    s = (s * 9301 + 49297) % 233280
    cells.push(s / 233280 > 0.52)
  }
  return cells
}

function isFinderZone(row: number, col: number, size: number) {
  const inTL = row < 3 && col < 3
  const inTR = row < 3 && col >= size - 3
  const inBL = row >= size - 3 && col < 3
  return inTL || inTR || inBL
}

export function QrCode({ className, seed = 7 }: { className?: string; seed?: number }) {
  const size = 13
  const cells = seededPattern(size, seed)

  return (
    <div
      role="img"
      aria-label="Código QR de la entrada"
      className={cn('grid aspect-square gap-[4%] rounded-sm bg-background p-[6%]', className)}
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {cells.map((filled, i) => {
        const row = Math.floor(i / size)
        const col = i % size
        const finder = isFinderZone(row, col, size)
        const finderRing =
          finder &&
          (row === 0 ||
            col === 0 ||
            row === 2 ||
            col === 2 ||
            row === size - 1 ||
            col === size - 1 ||
            row === size - 3 ||
            col === size - 3)
        const finderCore = finder && !finderRing && (row === 1 || row === size - 2) && (col === 1 || col === size - 2)
        const on = finder ? finderRing || finderCore : filled
        return (
          <span
            key={i}
            className={cn('block aspect-square rounded-[1px]', on ? 'bg-foreground' : 'bg-transparent')}
          />
        )
      })}
    </div>
  )
}
