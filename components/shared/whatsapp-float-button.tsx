import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '@/lib/site-config'

export function WhatsAppFloatButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp com a Lima Serviços Eletrônicos"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-lima-primary px-4 py-3.5 text-white shadow-lg shadow-lima-darkest/25 transition-transform hover:scale-105 hover:bg-lima-dark active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  )
}
