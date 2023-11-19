import Cabecalho from '@/components/client-components/Cabecalho'
import Rodape from '@/components/client-components/Rodape'
import './globals.css'

export const metadata = {
  title: 'HaalkTech Saúde',
  description: 'PROJETO GLOBAL SOLUTION 2023 - 1TDS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  )
}
