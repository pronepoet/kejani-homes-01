import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Navbar } from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins(
  { subsets: ['latin'],
    weight:['400'] }
    )
export const metadata = {
  title: 'Kejani Homes Homepage',
  description: 'Web application for property listing and house hunting.',
  keywords: 'web development, web design, software, software engineering, javascript, react, typescript, css, tailwind'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar />
        <h1 className={'text-4xl text-center font-bold'}>Kejani Homes</h1>
    
        {children}</body>
    </html>
  )
}
