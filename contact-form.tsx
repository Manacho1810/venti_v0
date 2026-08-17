'use client'

import { useState, type FormEvent } from 'react'

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors duration-300 focus:border-foreground focus:outline-none'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8 md:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-black text-accent-foreground">
          ✓
        </span>
        <h2 className="text-2xl font-black uppercase tracking-tight text-card-foreground">
          Mensaje recibido
        </h2>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          Gracias por escribirnos. Una persona de nuestro equipo — no un bot — te contactará muy
          pronto para diseñar el flujo de accesos de tu evento.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-bold text-foreground underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-foreground">
            Nombre
          </label>
          <input id="name" name="name" required placeholder="Tu nombre" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@empresa.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="org" className="text-xs font-bold uppercase tracking-widest text-foreground">
            Organización
          </label>
          <input id="org" name="org" placeholder="Nombre de tu organización" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="capacity" className="text-xs font-bold uppercase tracking-widest text-foreground">
            Aforo estimado
          </label>
          <select id="capacity" name="capacity" className={inputClass} defaultValue="">
            <option value="" disabled>
              Selecciona un rango
            </option>
            <option value="500">Hasta 500</option>
            <option value="2000">500 — 2.000</option>
            <option value="10000">2.000 — 10.000</option>
            <option value="10000+">Más de 10.000</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground">
          Cuéntanos sobre tu evento
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tipo de evento, fecha estimada, necesidades de acceso…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="mt-2 self-start rounded-full bg-foreground px-8 py-4 text-sm font-black uppercase tracking-wide text-background transition-transform duration-300 hover:scale-105"
      >
        Enviar mensaje
      </button>
    </form>
  )
}
