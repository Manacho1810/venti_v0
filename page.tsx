import type { Metadata } from 'next'
import { SetTheme } from '@/components/theme/theme-section'

export const metadata: Metadata = {
  title: 'About Us — Venti',
  description:
    'Conoce la filosofía de Venti: control de accesos auditable, respaldo offline y soporte 100% humano para eventos de gran aforo.',
}

const principles = [
  {
    title: 'Soporte 100% humano',
    body: 'La asistencia al cliente la gestionamos de forma personal, sin bots de inteligencia artificial como intermediarios. Bloqueos de acceso, errores con el envío de la invitación QR, entradas preferenciales o de cortesía: siempre hablas con una persona.',
  },
  {
    title: 'Auditoría gubernamental',
    body: 'Nuestro servicio está auditado por el ente gubernamental competente. Todo el flujo de información queda organizado y disponible para auditoría ante cualquier inconveniente o medida de seguridad adicional.',
  },
  {
    title: 'Fiabilidad operativa',
    body: 'Contamos con medidas de respaldo ante fallas de conexión a internet durante el escaneo de códigos QR en la entrada del evento. Tu operación no se detiene.',
  },
  {
    title: 'Datos a tu medida',
    body: 'Tú decides qué información manejar de cada invitado: desde el formulario inicial hasta datos adicionales en puerta como cédulas de identidad o el rostro de adultos que acompañan a menores.',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      <SetTheme theme="light" />

      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">About Us</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-7xl">
          Sabemos quién entra y quién sale<span className="text-accent">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Venti es un sistema que gestiona el flujo de entradas digitales para eventos de grandes
          aforos. Utilizamos códigos QR únicos para cada invitado y registramos en una base de datos
          la información de cada comprador, con la opción de que quien nos contrata vea en tiempo
          real el estatus de su evento.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-5 py-20 md:grid-cols-2 md:gap-10 md:px-8 md:py-28">
          {principles.map((p) => (
            <article key={p.title} className="border-t border-border py-10 md:py-12">
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl">
                {p.title}
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <h2 className="max-w-3xl text-balance text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            Un sistema, todo el aforo bajo registro
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Entrada</p>
              <p className="mt-2 leading-relaxed opacity-70">
                Hora exacta de entrada, salida, reingreso e inasistencia para cada invitado.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Staff</p>
              <p className="mt-2 leading-relaxed opacity-70">
                Pases para seguridad, administración, técnicos, mantenimiento y personal externo.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Escaneo</p>
              <p className="mt-2 leading-relaxed opacity-70">
                Scanner compatible con cualquier dispositivo móvil con cámara, rápido y con respaldo
                offline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
