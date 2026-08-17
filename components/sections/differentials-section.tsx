import Image from 'next/image'
import { History, MapPin, SlidersHorizontal, Wrench } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const differentials = [
  {
    icon: History,
    title: `${siteConfig.experience} de experiência`,
    description:
      'Experiência acumulada em serviços de segurança eletrônica e automação, em situações que só a prática ensina a resolver.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Atendimento flexível',
    description:
      'A solução é adaptada à necessidade real de cada cliente, em vez de oferecer sempre um pacote padronizado.',
  },
  {
    icon: Wrench,
    title: 'Instalação, manutenção e conserto',
    description:
      'O relacionamento não termina depois da instalação — a Lima também mantém e conserta o que já está funcionando.',
  },
  {
    icon: MapPin,
    title: 'Atendimento local',
    description: `Atuação direta em ${siteConfig.region}, com conhecimento do dia a dia da cidade.`,
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-balance text-lima-darkest sm:text-3xl lg:text-4xl">
              Por que escolher a Lima?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              O maior diferencial não é apenas o equipamento instalado, é a experiência para
              entender o problema e a flexibilidade para resolvê-lo.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {differentials.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex flex-col gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-lima-light text-lima-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-lima-darkest">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg shadow-lima-darkest/10 lg:max-w-none">
            <Image
              src="/images/camera-instalada.png"
              alt="Câmera de segurança instalada na fachada de uma residência"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
