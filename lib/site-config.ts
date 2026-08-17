export const siteConfig = {
  name: 'Lima Serviços Eletrônicos',
  owner: 'José Lima Batista',
  city: 'Porto Nacional',
  state: 'TO',
  region: 'Porto Nacional e região',
  experience: '+20 anos',
  // Número de exemplo — substituir pelo WhatsApp real da empresa antes de publicar.
  whatsappNumber: '5563999999999',
}

/**
 * Monta o link do WhatsApp com uma mensagem pré-configurada.
 */
export function getWhatsAppLink(message?: string) {
  const defaultMessage =
    'Olá! Encontrei o site da Lima Serviços Eletrônicos e gostaria de solicitar um orçamento.'
  const text = encodeURIComponent(message ?? defaultMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
]
