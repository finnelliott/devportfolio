import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import Portfolio from '@/components/Portfolio'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative">
        <div className="z-30"><Portfolio /></div>
        <div className="z-20"><Background /></div>
        <div className="z-10"><Technologies /></div>
      </div>
    </main>
  )
}
