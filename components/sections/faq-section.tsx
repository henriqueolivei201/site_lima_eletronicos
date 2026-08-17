import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { siteConfig } from '@/lib/site-config'

const faqs = [
  {
    question: 'Quais regiões a Lima atende?',
    answer: `A Lima atende ${siteConfig.region}.`,
  },
  {
    question: 'A Lima faz manutenção e conserto, ou só instalação?',
    answer:
      'Além da instalação, a Lima também realiza manutenção e conserto de equipamentos que já estão instalados e apresentam problemas.',
  },
  {
    question: 'Posso solicitar orçamento pelo WhatsApp?',
    answer:
      'Sim. O WhatsApp é o canal mais rápido para explicar sua necessidade e receber uma orientação sobre o serviço.',
  },
  {
    question: 'A empresa atende residências e empresas?',
    answer:
      'Sim. A Lima atende pessoas físicas, residências, comércios e empresas que precisem das soluções oferecidas.',
  },
  {
    question: 'Vocês fazem instalação de câmeras de segurança?',
    answer:
      'Sim, a instalação de câmeras de segurança é um dos serviços oferecidos pela Lima.',
  },
  {
    question: 'Vocês trabalham com portões eletrônicos?',
    answer:
      'Sim. Instalação, manutenção e conserto de portões eletrônicos estão entre os principais serviços da Lima.',
  },
  {
    question: 'Posso explicar meu problema antes de saber qual serviço preciso?',
    answer:
      'Sim, e essa é a forma mais indicada de começar. Explique a situação e a Lima ajuda a identificar a solução adequada.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-balance text-lima-darkest sm:text-3xl lg:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Dúvidas comuns sobre os serviços da Lima em {siteConfig.region}.
          </p>
        </div>

        <Accordion defaultValue={['0']} className="mt-10 lg:mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={String(index)}>
              <AccordionTrigger className="font-heading text-base text-lima-darkest">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
