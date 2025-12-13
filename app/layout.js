import { DM_Sans, Playfair_Display } from 'next/font/google'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Client Onboarding | Kelp Copy',
  description: 'Complete your onboarding to get started with email marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
