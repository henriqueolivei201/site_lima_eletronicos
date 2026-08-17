'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink, navLinks, siteConfig } from '@/lib/site-config'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0" aria-label={siteConfig.name}>
          <Image
            src="/logo.svg"
            alt={`Logo ${siteConfig.name}`}
            width={40}
            height={40}
            className="size-9 sm:size-10"
            priority
          />
          <span className="font-heading text-sm font-bold leading-tight text-lima-darkest sm:text-base">
            Lima
            <span className="block text-[0.65rem] font-medium tracking-wide text-muted-foreground sm:text-xs">
              Serviços Eletrônicos
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-lima-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="bg-lima-primary text-white hover:bg-lima-dark"
          >
            Solicitar orçamento
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon-lg"
          className="lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6"
            aria-label="Navegação móvel"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-lima-light hover:text-lima-dark"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="mt-2 w-full bg-lima-primary text-white hover:bg-lima-dark"
              onClick={() => setOpen(false)}
            >
              Solicitar orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
