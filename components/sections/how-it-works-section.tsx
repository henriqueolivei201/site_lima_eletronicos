const steps = [
  {
    number: '01',
    title: 'Entre em contato',
    description: 'Explique o que está acontecendo ou o que você precisa, pelo WhatsApp.',
  },
  {
    number: '02',
    title: 'Entenda-se a necessidade',
    description: 'Lima avalia a situação e identifica a solução mais adequada para o caso.',
  },
  {
    number: '03',
    title: 'Serviço realizado',
    description: 'Instalação, manutenção, conserto ou outra solução necessária é executada.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-lima-light py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-balance text-lima-darkest sm:text-3xl lg:text-4xl">
            Como funciona
          </h2>
          <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Um processo simples, do primeiro contato até o serviço concluído.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:mt-14 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-lima-primary/10">
              <span className="font-heading text-3xl font-extrabold text-lima-primary/25">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-semibold text-lima-darkest">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 right-[-1.6rem] hidden h-px w-8 border-t border-dashed border-lima-primary/30 sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
