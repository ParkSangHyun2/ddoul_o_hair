'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import contentData from '@/data/content.json';

export default function Carousel() {
    const { reviews } = contentData;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 6000); // 6초로 약간 늘림
        return () => clearInterval(timer);
    }, [reviews.length]);

    return (
        <section className="relative max-w-7xl mx-auto py-24 px-6 overflow-hidden transition-colors duration-700">
            <div className="flex flex-col items-center mb-16 space-y-4">
                <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase text-center">Client Voice</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tight text-center transition-colors">Verified Reviews</h2>
            </div>

            <div className="relative min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={reviews[index].id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"
                    >
                        {/* Review Image */}
                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden shadow-2xl">
                            <Image
                                fill
                                src={reviews[index].image}
                                alt="Review work"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-stone-900/10 dark:bg-stone-900/20"></div>
                        </div>

                        {/* Review Content */}
                        <div className="text-left space-y-8 md:pl-12">
                            <svg className="w-12 h-12 text-gold opacity-30" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                            </svg>
                            <p className="text-xl md:text-3xl font-serif text-stone-700 dark:text-stone-300 leading-relaxed italic transition-colors">
                                &quot;{reviews[index].text}&quot;
                            </p>
                            <div className="space-y-1">
                                <div className="w-8 h-[1px] bg-gold mb-4"></div>
                                <p className="text-stone-800 dark:text-stone-100 font-bold tracking-widest text-sm uppercase transition-colors">
                                    {reviews[index].author}
                                </p>
                                <div className="flex text-gold">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-200 dark:bg-stone-800 transition-colors">
                    <motion.div
                        key={index}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-gold"
                    />
                </div>
            </div>
        </section>
    );
}
