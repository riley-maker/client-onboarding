import { DM_Sans, Oswald } from 'next/font/google'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const display = Oswald({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: 'Client Onboarding | Dead Letter',
  description: 'Complete your onboarding to get started',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${display.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
