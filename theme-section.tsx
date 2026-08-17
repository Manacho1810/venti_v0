'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Modelo/Hook de tema: cada sección declara su tema ("light" | "dark").
 * Un IntersectionObserver detecta la sección dominante en viewport y
 * conmuta el atributo data-theme del <html>, disparando la transición
 * suave claro/oscuro definida en globals.css.
 */
export function setGlobalTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme)
}

export function ThemeSection({
  theme,
  children,
  className,
  id,
}: {
  theme: 'light' | 'dark'
  children: ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setGlobalTheme(theme)
        }
      },
      // Se activa cuando la sección cruza la franja central del viewport
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [theme])

  return (
    <section ref={ref} id={id} className={className} data-section-theme={theme}>
      {children}
    </section>
  )
}

/** Fija el tema global al montar una página (about, contact, login). */
export function SetTheme({ theme }: { theme: 'light' | 'dark' }) {
  useEffect(() => {
    setGlobalTheme(theme)
  }, [theme])
  return null
}
