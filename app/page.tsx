import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppFloatButton } from '@/components/shared/whatsapp-float-button'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { ProblemsSection } from '@/components/sections/problems-section'
import { DifferentialsSection } from '@/components/sections/differentials-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { FaqSection } from '@/components/sections/faq-section'
import { CtaSection } from '@/components/sections/cta-section'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProblemsSection />
        <DifferentialsSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
