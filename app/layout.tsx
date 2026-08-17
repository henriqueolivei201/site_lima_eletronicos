import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const _manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
})

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Lima Serviços Eletrônicos | Portões, Câmeras e Cercas Elétricas em Porto Nacional',
  description:
    'Mais de 20 anos de experiência em Porto Nacional e região. Instalação, manutenção e conserto de portões eletrônicos, câmeras de segurança e cercas elétricas. Solicite orçamento pelo WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Lima Serviços Eletrônicos',
    description:
      'Instalação, manutenção e conserto de portões eletrônicos, câmeras de segurança e cercas elétricas em Porto Nacional e região.',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0c447c',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${_manrope.variable} ${_inter.variable} light bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
