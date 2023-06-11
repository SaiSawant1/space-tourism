import { Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'space tourism',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex flex-col p-6 bg-no-repeat bg-cover bg-background-home-m">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
