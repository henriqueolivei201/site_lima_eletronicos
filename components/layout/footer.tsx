import Image from 'next/image'
import { MapPin, MessageCircle } from 'lucide-react'
import { getWhatsAppLink, navLinks, siteConfig } from '@/lib/site-config'

const services = [
  'Portões eletrônicos',
  'Câmeras de segurança',
  'Cercas elétricas',
  'Manutenção e conserto',
]

export function Footer() {
  return (
    <footer className="bg-lima-darkest text-white/90">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.svg"
                alt={`Logo ${siteConfig.name}`}
                width={40}
                height={40}
                className="size-10 shrink-0"
              />
              <span className="font-heading text-base font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Mais de 20 anos de experiência prática em segurança eletrônica e automação,
              atendendo residências, comércios e empresas em {siteConfig.region}.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="size-4 shrink-0 text-white/50" aria-hidden="true" />
              <span>
                {siteConfig.city} — {siteConfig.state}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
              Serviços
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/70">
                  {service}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-lima-light"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>{siteConfig.region}</p>
        </div>
      </div>
    </footer>
  )
}
