import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink, siteConfig } from '@/lib/site-config'

export function CtaSection() {
  return (
    <section className="bg-lima-primary py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold text-balance text-white sm:text-3xl lg:text-4xl">
          Precisa de uma solução? Fale com o Lima agora.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-pretty text-white/85 sm:text-lg">
          Instalação, manutenção ou conserto — explique sua situação e receba uma orientação
          direta, sem burocracia, em {siteConfig.region}.
        </p>
        <Button
          render={<a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" />}
          nativeButton={false}
          size="lg"
          className="mt-8 h-12 justify-center bg-white px-7 text-base text-lima-primary hover:bg-white/90"
        >
          <MessageCircle data-icon="inline-start" />
          Falar com o Lima pelo WhatsApp
        </Button>
      </div>
    </section>
  )
}
