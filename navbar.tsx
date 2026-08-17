'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <Link
          href="/"
          className="text-lg font-black uppercase tracking-tight text-foreground transition-colors duration-700"
          onClick={() => setOpen(false)}
        >
          Venti<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground',
                pathname === link.href && 'text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full border border-border bg-background/60 px-5 py-2 text-sm font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Log In
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              'h-0.5 w-6 bg-foreground transition-transform duration-300',
              open && 'translate-y-1 rotate-45',
            )}
          />
          <span
            className={cn(
              'h-0.5 w-6 bg-foreground transition-transform duration-300',
              open && '-translate-y-1 -rotate-45',
            )}
          />
        </button>
      </nav>

      {open && (
        <div className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {[...links, { href: '/login', label: 'Log In' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-3 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground',
                  pathname === link.href && 'text-foreground',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
