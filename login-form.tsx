'use client'

import { useState, type FormEvent } from 'react'

const inputClass =
  'w-full rounded-xl border border-input bg-card px-4 py-3.5 text-sm text-card-foreground placeholder:text-muted-foreground/60 transition-colors duration-300 focus:border-accent focus:outline-none'

export function LoginForm() {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError(null)
    // Demo de interfaz: el backend de autenticación se conecta después
    setTimeout(() => {
      setPending(false)
      setError('El acceso al dashboard estará disponible próximamente para clientes activos.')
    }, 900)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-sm md:p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="login-email" className="text-xs font-bold uppercase tracking-widest text-foreground">
          Email
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@empresa.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="login-password" className="text-xs font-bold uppercase tracking-widest text-foreground">
          Contraseña
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="••••••••"
          className={inputClass}
        />
      </div>

      {error && (
        <p role="alert" className="rounded-lg bg-secondary px-4 py-3 text-sm text-secondary-foreground">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 rounded-full bg-accent px-8 py-4 text-sm font-black uppercase tracking-wide text-accent-foreground transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
      >
        {pending ? 'Verificando…' : 'Entrar al dashboard'}
      </button>
    </form>
  )
}
