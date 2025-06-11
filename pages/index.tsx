import Image from 'next/image'
import Hero from '../components/Hero'
import About from '../components/About'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center px-4">
      <Hero />
      <About />
    </main>
  )
}