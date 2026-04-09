import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qreativ Design | Criativos que Vendem no Instagram',
  description: 'Design estratégico para negócios que querem vender mais no Instagram. Perfil otimizado, criativos de alta conversão, copy persuasivo.',
  keywords: 'design instagram, criativos, copy, otimização de perfil, marketing digital',
  openGraph: {
    title: 'Qreativ Design | Criativos que Vendem no Instagram',
    description: 'Design estratégico para negócios que querem vender mais no Instagram.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}