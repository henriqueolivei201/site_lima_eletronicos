import Image from 'next/image'
import { MessageCircle, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink, siteConfig } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-lima-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-lima-dark shadow-sm ring-1 ring-lima-primary/15">
            <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
            {siteConfig.experience} de experiência em Porto Nacional
          </span>

          <h1 className="font-heading text-3xl font-extrabold leading-[1.1] text-balance text-lima-darkest sm:text-4xl lg:text-5xl">
            Portão com defeito? Câmera que não funciona? Resolvemos em Porto Nacional.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Instalação, manutenção e conserto de portões eletrônicos, câmeras de segurança e
            cercas elétricas. Explique o que está acontecendo — com mais de 20 anos de
            experiência prática, a Lima entende o problema e encontra a solução certa para
            residências, comércios e empresas.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              render={<a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="h-12 justify-center bg-lima-primary px-6 text-base text-white hover:bg-lima-dark"
            >
              <MessageCircle data-icon="inline-start" />
              Solicitar orçamento pelo WhatsApp
            </Button>
            <Button
              render={<a href="#servicos" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-12 justify-center border-lima-primary/30 px-6 text-base text-lima-dark hover:bg-white"
            >
              Conhecer os serviços
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Atendimento em {siteConfig.region}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl shadow-lima-darkest/10 sm:aspect-square lg:aspect-4/5">
            <Image
              src="/images/hero-tecnico.png"
              alt="Técnico da Lima Serviços Eletrônicos instalando um motor de portão eletrônico"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-2xl bg-white px-5 py-4 shadow-lg ring-1 ring-black/5 sm:-bottom-6 sm:w-auto sm:px-6">
            <p className="font-heading text-2xl font-extrabold text-lima-primary sm:text-3xl">
              {siteConfig.experience}
            </p>
            <p className="text-xs font-medium text-muted-foreground sm:text-sm">
              de experiência prática em segurança eletrônica
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
