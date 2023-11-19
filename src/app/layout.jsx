import './globals.css'

export const metadata = {
  title: 'HaalkTech Saúde',
  description: 'PROJETO GLOBAL SOLUTION 2023 - 1TDS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
