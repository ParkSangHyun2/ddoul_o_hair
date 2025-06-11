import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-12">
      <Image src="/logo.png" alt="로고" width={120} height={120} />
      <h1 className="text-3xl font-semibold mt-4">PREMIUM HAIR SALON</h1>
      <p className="text-gold font-medium mt-2">딸오헤어</p>
    </section>
  )
}