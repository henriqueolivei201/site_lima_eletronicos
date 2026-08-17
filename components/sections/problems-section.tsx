import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/site-config'

const situations = [
  {
    question: 'Seu portão está apresentando problemas?',
    answer: 'A Lima avalia a situação e realiza manutenção ou conserto.',
  },
  {
    question: 'Quer aumentar a segurança do seu imóvel?',
    answer: 'Apresentamos as soluções de segurança eletrônica disponíveis para o seu caso.',
  },
  {
    question: 'Precisa instalar câmeras?',
    answer: 'Ajudamos na escolha e na instalação da solução mais adequada ao ambiente.',
  },
  {
    question: 'Quer automatizar ou melhorar seu portão?',
    answer: 'Avaliamos o portão atual e indicamos o caminho certo para automatizar.',
  },
]

export function ProblemsSection() {
  return (
    <section className="bg-lima-darkest py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <div className="relative order-2 aspect-4/3 w-full overflow-hidden rounded-3xl lg:order-1">
            <Image
              src="/images/manutencao-portao.png"
              alt="Técnico ajustando o mecanismo de um portão eletrônico"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-2xl font-extrabold text-balance sm:text-3xl lg:text-4xl">
              Você não precisa saber qual equipamento comprar. Explique o que está acontecendo.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
              Identifique sua situação abaixo — a Lima avalia e indica a solução certa.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {situations.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 sm:p-5"
                >
                  <p className="font-heading text-base font-semibold text-white">
                    {item.question}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.answer}</p>
                </div>
              ))}
            </div>

            <Button
              render={
                <a
                  href={getWhatsAppLink('Olá! Quero explicar minha situação para pedir uma orientação.')}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              size="lg"
              className="mt-8 h-12 w-full justify-center bg-lima-primary px-6 text-base text-white hover:bg-lima-primary/90 sm:w-auto"
            >
              <MessageCircle data-icon="inline-start" />
              Explicar minha situação
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
