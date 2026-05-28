'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import contentData from '@/data/content.json';

export default function AboutPage() {
    const { hero } = contentData;

    return (
        <main className="min-h-screen bg-stone-50 overflow-hidden">
            {/* 1. Page Header - Cinematic Intro */}
            <section className="relative h-[60vh] flex items-center justify-center bg-stone-200">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 text-center space-y-4"
                >
                    <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase">Our Identity</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-stone-800 tracking-tighter">THE STORY</h1>
                    <div className="w-16 h-[1px] bg-gold mx-auto mt-8"></div>
                </motion.div>
                {/* Background Giant Text */}
                <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-bold text-stone-100/50 select-none pointer-events-none whitespace-nowrap">
                    EST. 2025
                </h2>
            </section>

            {/* 2. Brand Meaning - "뜰오" */}
            <section className="max-w-7xl mx-auto py-32 px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-5 space-y-12"
                    >
                        <div className="space-y-4">
                            <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">Etimology</span>
                            <h2 className="text-5xl font-serif font-bold text-stone-800 leading-tight">
                                빛으로 향하는<br/>미래의 정오
                            </h2>
                        </div>
                        
                        <div className="space-y-8 text-stone-600 font-light leading-relaxed text-lg">
                            <p>
                                <span className="text-stone-800 font-serif italic text-2xl mr-2 font-bold">&apos;뜰오&apos;</span> 
                                는 순 우리말의 조화로운 결합입니다. 정오의 밝은 빛을 뜻하는 <span className="text-stone-800 font-medium">낮 &apos;오&apos;(午)</span>와, 찬란하게 떠오를 내일을 의미하는 <span className="text-stone-800 font-medium">&apos;뜰&apos;</span>이 만났습니다.
                            </p>
                            <p>
                                고객님의 머릿결을 단순히 가꾸는 것을 넘어, 가장 밝게 빛나는 정오의 태양처럼 당신의 일상을 환하게 밝히겠다는 뜰오헤어의 약속입니다. 외모의 완성을 넘어 미래지향적인 아름다움을 제안합니다.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-7 relative"
                    >
                        <div className="relative aspect-[16/9] w-full shadow-2xl overflow-hidden group">
                            <Image 
                                fill
                                src="/images/shop/enterance.webp" 
                                alt="Ddeul-O Entrance" 
                                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-stone-900/10"></div>
                        </div>
                        {/* Decorative Tag */}
                        <div className="absolute -top-4 -right-4 bg-stone-800 text-white px-6 py-4 shadow-xl">
                            <p className="text-[10px] tracking-[0.3em] uppercase font-bold leading-none">The Threshold</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Director Philosophy */}
            <section className="bg-stone-800 py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 order-2 md:order-1"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto shadow-2xl overflow-hidden">
                            <Image 
                                fill
                                src="/images/profile_image.jpg" 
                                alt="Director Woomin" 
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 text-left space-y-10 order-1 md:order-2"
                    >
                        <div className="space-y-4">
                            <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">The Director</span>
                            <h2 className="text-5xl font-serif font-bold text-stone-100 leading-tight">
                                12 Years of<br/>Sensibility
                            </h2>
                        </div>
                        <div className="w-16 h-[1px] bg-gold/50"></div>
                        <div className="space-y-6 text-stone-300 font-light leading-relaxed text-lg">
                            <p>
                                안중에서 나고 자란 원장 최우민은 고향을 향한 애정과 12년의 숙련된 감각을 담아 뜰오헤어를 열었습니다.
                            </p>
                            <p className="italic border-l-2 border-gold/30 pl-6 text-stone-100 font-serif text-xl">
                                &quot;단순한 스타일링이 아닌, 당신의 가장 빛나는 순간을 조각합니다.&quot;
                            </p>
                            <p>
                                확실한 비포 & 애프터의 끝판을 약속드리며, 1:1 맞춤 상담을 통해 숨겨진 매력을 끌어내는 데 집중합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Unique Experiences */}
            <section className="max-w-7xl mx-auto py-32 px-6">
                <div className="flex flex-col items-center mb-24 space-y-4 text-center">
                    <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">Unique Values</span>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 tracking-tighter">Beyond Ordinary</h2>
                    <div className="w-12 h-[1px] bg-stone-300"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Experience 1: Private Space */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group space-y-8 bg-white p-12 shadow-sm border border-stone-100"
                    >
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image fill src="/images/shop/right_side.webp" alt="Private Space" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-stone-800 uppercase tracking-widest">Private & Vintage</h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                                카페 같은 빈티지한 인테리어와 프라이빗한 시술 공간은 일상에서 잠시 벗어나 오롯이 나에게 집중할 수 있는 휴식을 선사합니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Experience 2: Kids Friendly */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group space-y-8 bg-white p-12 shadow-sm border border-stone-100"
                    >
                        <div className="relative aspect-video w-full overflow-hidden">
                            <Image fill src="/images/shop/baby_chair.webp" alt="Kids Service" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-stone-800 uppercase tracking-widest">For Little Stars</h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                                안중 최초의 유아 자동차 의자 서비스를 통해, 머리 깎기를 무서워하던 아이들에게 즐겁고 특별한 기억을 만들어줍니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-32 bg-stone-100 text-center relative overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 tracking-tight leading-tight">
                        당신의 빛나는 일상을<br/>지금 시작하세요.
                    </h2>
                    <a 
                        href={hero.reservationUrl} 
                        className="inline-block px-12 py-5 bg-stone-900 text-white text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-gold transition-all duration-500 shadow-2xl"
                    >
                        Book Your Experience
                    </a>
                </motion.div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                    <span className="text-[40vw] font-serif font-black tracking-tighter">DDEUL-O</span>
                </div>
            </section>
        </main>
    );
}
