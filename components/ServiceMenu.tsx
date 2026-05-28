'use client'
import { motion } from 'framer-motion';
import contentData from '@/data/content.json';

export default function ServiceMenu() {
    const { pricing } = contentData;

    return (
        <section className="max-w-7xl mx-auto py-32 px-6 bg-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] border border-stone-100 relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 pointer-events-none"></div>

            <div className="flex flex-col items-center mb-24 space-y-4">
                <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">Premium Care Menu</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-800 tracking-tighter">Our Expertise</h2>
                <div className="w-20 h-[1px] bg-stone-300"></div>
            </div>

            {/* Editorial Staggered Layout for 7 Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 px-4 md:px-8">
                {pricing.map((category, idx) => (
                    <motion.div 
                        key={category.category}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group space-y-8"
                    >
                        <div className="flex items-baseline space-x-4 border-b border-stone-100 pb-4">
                            <span className="text-3xl font-serif italic text-stone-200 group-hover:text-gold transition-colors duration-500">
                                0{idx + 1}
                            </span>
                            <h3 className="text-xl font-serif font-bold text-stone-800 tracking-widest uppercase">
                                {category.category}
                            </h3>
                        </div>

                        <div className="space-y-5">
                            {category.items.map((item) => (
                                <div key={item.name} className="group/item relative">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-stone-700 font-medium tracking-tight group-hover/item:text-gold transition-colors text-sm md:text-base">
                                            {item.name}
                                        </span>
                                        <div className="flex-1 mx-4 border-b border-stone-100 group-hover/item:border-gold/30 transition-colors"></div>
                                        <span className="font-serif italic text-stone-900 font-bold text-lg md:text-2xl tracking-tighter">
                                            {item.price}
                                        </span>
                                    </div>
                                    <div className="h-[1px] w-0 bg-gold/10 absolute -bottom-2 left-0 group-hover/item:w-full transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Informational Footer */}
            <div className="mt-32 pt-16 border-t border-stone-50 text-center space-y-10">
                <div className="max-w-2xl mx-auto">
                    <p className="text-stone-500 text-sm font-light leading-relaxed italic">
                        &quot;모든 시술 시 모발의 상태 및 길이, 디자이너 테크닉에 의해 <br className="hidden md:block"/>
                        추가 금액이 적용될 수 있습니다.&quot;
                    </p>
                </div>
                
                <div className="inline-block relative group">
                    <div className="absolute -inset-4 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out opacity-50"></div>
                    <a href={contentData.hero.reservationUrl} className="relative px-12 py-4 bg-stone-900 text-white text-[10px] tracking-[0.5em] font-bold uppercase hover:bg-gold transition-all duration-500 block shadow-2xl">
                        Consult with Expert
                    </a>
                </div>
            </div>
        </section>
    );
}
