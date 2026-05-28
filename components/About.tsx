'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative max-w-7xl mx-auto py-24 px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Story Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 text-left space-y-8 relative z-10"
        >
          <div className="space-y-4">
            <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">The Visionary</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-800 leading-tight">
              Crafting<br/>Individual<br/>Beauty
            </h2>
          </div>
          
          <div className="w-16 h-[1px] bg-gold"></div>
          
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-stone-800">
              최신 트렌드 기술과 세심한 상담, 프라이빗한 공간에서 당신만의 스타일을 완성해드립니다. 뜰오헤어는 단순히 머리를 만지는 곳이 아닌, 고객님의 내면의 아름다움까지 발견하는 여정을 함께합니다.
            </p>
            <p>
              원장 최우민을 필두로 정성을 다하는 프리미엄 케어 서비스를 통해, 고객 한 분 한 분이 가장 빛나는 순간을 약속드립니다.
            </p>
          </div>

          <div className="pt-8">
             <p className="font-serif text-2xl text-stone-800 italic border-l-4 border-gold pl-6 py-2">
               &quot;고객님의 아름다움이 머무는 곳,<br/>뜰오헤어입니다.&quot;
             </p>
          </div>
        </motion.div>

        {/* Story Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="md:col-span-7 relative"
        >
          <div className="relative aspect-[3/4] w-full shadow-2xl overflow-hidden group">
            <Image 
              fill
              src="/images/profile_image.jpg" 
              alt="Director Woomin" 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 border border-stone-200 -z-10 hidden md:block"></div>
          <div className="absolute -bottom-8 -left-8 bg-stone-100 px-10 py-10 shadow-xl hidden md:block">
            <p className="font-serif text-4xl font-bold text-stone-800 leading-none">Min.</p>
            <p className="text-[11px] tracking-[0.3em] text-stone-400 mt-3 uppercase font-bold">Director / Woomin</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}