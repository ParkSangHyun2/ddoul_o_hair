'use client'
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

export default function ServicesPage() {
    const { pricing, hero } = contentData;

    return (
        <main className="min-h-screen bg-stone-50 pb-32">
            {/* 1. Header Section - Minimal Luxury */}
            <section className="relative h-[50vh] flex items-center justify-center bg-stone-200 overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center space-y-4"
                >
                    <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase">Salon Services</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-stone-800 tracking-tighter uppercase">Menu</h1>
                    <div className="w-12 h-[1px] bg-gold mx-auto mt-6"></div>
                </motion.div>
                {/* Background Artwork */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                    <span className="text-[35vw] font-serif font-black tracking-tighter uppercase select-none">Pricelist</span>
                </div>
            </section>

            {/* 2. Service Grid - Editorial Style */}
            <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {pricing.map((category, idx) => (
                        <motion.div 
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-stone-100 group"
                        >
                            <div className="flex justify-between items-baseline mb-12">
                                <h2 className="text-3xl font-serif font-bold text-stone-800 tracking-widest uppercase">
                                    {category.category}
                                </h2>
                                <span className="text-stone-200 text-5xl font-serif italic group-hover:text-gold/20 transition-colors duration-700">
                                    0{idx + 1}
                                </span>
                            </div>

                            <div className="space-y-8">
                                {category.items.map((item) => (
                                    <div key={item.name} className="group/item">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <span className="text-stone-700 font-medium tracking-tight group-hover/item:text-gold transition-colors text-lg">
                                                {item.name}
                                            </span>
                                            <div className="flex-1 mx-4 border-b border-stone-100 group-hover/item:border-gold/20 transition-colors"></div>
                                            <span className="font-serif italic text-stone-900 font-bold text-xl">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-stone-400 tracking-[0.2em] uppercase opacity-40 group-hover/item:opacity-100 transition-opacity">
                                            Ddeul-O Premium Session
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Notes & Policy */}
            <section className="max-w-4xl mx-auto mt-32 px-6 text-center space-y-12">
                <div className="space-y-4">
                    <span className="text-gold font-bold tracking-[0.4em] text-[9px] uppercase">Please Note</span>
                    <p className="text-stone-500 font-light leading-relaxed italic text-lg max-w-2xl mx-auto">
                        &quot;모든 시술 시 모발의 상태 및 길이, 디자이너의 정교한 테크닉에 따라 <br className="hidden md:block"/>
                        추가 금액이 적용될 수 있음을 안내드립니다.&quot;
                    </p>
                </div>
                
                <div className="flex flex-col items-center space-y-8">
                    <div className="w-px h-24 bg-gradient-to-b from-stone-200 to-transparent"></div>
                    <a 
                        href={hero.reservationUrl} 
                        className="group relative inline-flex items-center justify-center px-16 py-6 bg-stone-900 text-white overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                    >
                        <span className="relative z-10 text-[11px] tracking-[0.6em] uppercase font-black">Book Your Session</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gold transition-transform duration-700 ease-in-out"></div>
                    </a>
                </div>
            </section>
        </main>
    );
}
