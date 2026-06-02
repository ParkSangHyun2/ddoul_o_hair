'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

const shopImages = [
    { id: 1, src: '/images/shop/enterance.webp', alt: 'Main Entrance', gridClass: 'md:col-span-3 md:row-span-2' }, // 입구는 넓게
    { id: 2, src: '/images/shop/counter.webp', alt: 'Reception', gridClass: 'md:col-span-1 md:row-span-1' },
    { id: 3, src: '/images/shop/wash_room.webp', alt: 'Shampoo Room', gridClass: 'md:col-span-1 md:row-span-1' },
    { id: 4, src: '/images/shop/right_side.webp', alt: 'Styling Area', gridClass: 'md:col-span-2 md:row-span-1' }, // 내부 전경도 넓게
    { id: 5, src: '/images/shop/baby_chair.webp', alt: 'Kids Station', gridClass: 'md:col-span-1 md:row-span-1' },
    { id: 6, src: '/images/shop/door_open.webp', alt: 'Open Atmosphere', gridClass: 'md:col-span-1 md:row-span-1' },
];

export default function SummerStyle() {
    return (
        <section className="px-6 py-12 transition-colors duration-700">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-4 mb-20 border-b border-stone-200 dark:border-stone-800 pb-12 transition-colors">
                <div className="space-y-4 text-left">
                    <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">The Sanctuary</span>
                    <h2 className="text-6xl md:text-8xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tighter leading-none transition-colors">
                        OUR<br/>SPACE
                    </h2>
                </div>
                <p className="text-stone-400 dark:text-stone-500 font-serif italic text-xl max-w-xs text-right transition-colors">
                    &quot;당신의 아름다움이 머무는 곳, 뜰오헤어의 감각적인 공간입니다.&quot;
                </p>
            </div>

            {/* Optimized Grid for Landscape Shop Photos */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[250px]">
                {shopImages.map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`group relative overflow-hidden bg-stone-100 dark:bg-stone-800 shadow-xl transition-colors ${image.gridClass}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                fill
                                src={image.src}
                                alt={image.alt}
                                className="object-cover object-center transition-transform duration-[3000ms] group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Sophisticated Overlay */}
                            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/40 transition-all duration-700 flex flex-col items-center justify-end p-6">
                                <div className="w-full text-left space-y-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-white/60 text-[8px] tracking-[0.3em] uppercase font-bold">Interior View</span>
                                    <p className="text-white font-serif text-xl font-medium tracking-tight leading-none">{image.alt}</p>
                                    <div className="w-0 h-[1px] bg-gold group-hover:w-8 transition-all duration-700 delay-200"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="h-24 md:h-48"></div>
        </section>
    );
}