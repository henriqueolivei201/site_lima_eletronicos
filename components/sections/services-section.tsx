import { Camera, DoorClosed, MessageCircle, Wrench, Zap } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getWhatsAppLink } from '@/lib/site-config'

const services = [
  {
    icon: DoorClosed,
    title: 'Portões eletrônicos',
    description: 'Instalação, manutenção e conserto de portões eletrônicos residenciais e comerciais.',
    benefit: 'Ideal para quem já tem um portão com problema ou quer automatizar o acesso.',
  },
  {
    icon: Camera,
    title: 'Câmeras de segurança',
    description: 'Instalação de sistemas de monitoramento para residências, comércios e empresas.',
    benefit: 'Escolha e posicionamento pensados para a necessidade real do imóvel.',
  },
  {
    icon: Zap,
    title: 'Cercas elétricas',
    description: 'Instalação de soluções para reforçar a segurança do perímetro do imóvel.',
    benefit: 'Mais uma camada de proteção, integrada ao restante do sistema de segurança.',
  },
  {
    icon: Wrench,
    title: 'Manutenção e conserto',
    description: 'Atendimento a equipamentos com problemas, travados, lentos ou que pararam de funcionar.',
    benefit: 'O relacionamento não termina na instalação — o Lima também resolve o que já existe.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-balance text-lima-darkest sm:text-3xl lg:text-4xl">
            Serviços
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Soluções práticas em segurança eletrônica e automação, adaptadas ao que o seu
            imóvel realmente precisa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="h-full border-border/70 transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-lima-light text-lima-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-3 font-heading text-lg text-lima-darkest">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.benefit}</p>
                  <a
                    href={getWhatsAppLink(`Olá! Gostaria de mais informações sobre ${service.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-lima-primary transition-colors hover:text-lima-dark"
                  >
                    <MessageCircle className="size-3.5" aria-hidden="true" />
                    Falar sobre esse serviço
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
