'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import './globals.css';

import About from '@/components/About'
import Carousel from "@/components/Carousel";
import YoutubeGrid from "@/components/YoutubeGrid";
import SummerStyle from "@/components/style/SummerStyle";
import ServiceMenu from "@/components/ServiceMenu";
import contentData from '@/data/content.json';

export default function Home() {
    const { hero } = contentData;
    const containerRef = useRef<HTMLElement>(null);
    
    // Mouse Interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Letter animation variants
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const letterVariants: any = {
        initial: { opacity: 0, y: 50, rotateX: -90 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    return (
        <div className="flex flex-col items-center text-center bg-stone-50 dark:bg-stone-950 transition-colors duration-700 overflow-hidden pt-[114px]" onMouseMove={handleMouseMove}>
            {/* 1. Typography Centric Hero Section */}
            <section ref={containerRef} className="relative w-full h-[calc(100vh-114px)] flex flex-col items-center justify-center overflow-hidden bg-stone-100 dark:bg-stone-900 transition-colors">
                
                {/* Background Interactive Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gold/10 dark:bg-gold/5 blur-[120px] rounded-full"
                    />
                    <motion.div 
                        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 30, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-stone-300/30 dark:bg-stone-700/10 blur-[150px] rounded-full"
                    />

                    <motion.div style={{ y: bgY, rotateX, rotateY, perspective: 1000 }} className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-[28vw] font-serif font-bold text-stone-200/50 dark:text-stone-800/30 whitespace-nowrap select-none tracking-tighter mix-blend-multiply dark:mix-blend-overlay transition-colors">
                            DDEUL-O
                        </h1>
                    </motion.div>

                    {/* Interactive Mouse Follower Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
                        <motion.circle 
                            cx={useTransform(springX, [-0.5, 0.5], [400, 600])}
                            cy={useTransform(springY, [-0.5, 0.5], [400, 600])}
                            r="150"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="0.5"
                            strokeDasharray="5 5"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.path 
                            d="M0,500 Q500,500 1000,500" 
                            stroke="#D4AF37" 
                            strokeWidth="0.5" 
                            fill="none"
                            animate={{ 
                                d: [
                                    "M0,500 Q500,450 1000,500",
                                    "M0,500 Q500,550 1000,500",
                                    "M0,500 Q500,450 1000,500"
                                ]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                {/* Main Content */}
                <motion.div 
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="relative z-10 space-y-12 max-w-5xl px-6"
                >
                    <div className="space-y-4">
                        <motion.p 
                            initial={{ opacity: 0, letterSpacing: "0.2em" }}
                            animate={{ opacity: 1, letterSpacing: "0.8em" }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            className="text-gold font-bold text-xs uppercase"
                        >
                            {hero.subTitle}
                        </motion.p>
                        
                        <div className="flex justify-center overflow-hidden py-4 drop-shadow-2xl">
                            {hero.title.split('').map((char: string, i: number) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterVariants}
                                    initial="initial"
                                    animate="animate"
                                    whileHover={{ scale: 1.1, color: "#D4AF37", transition: { duration: 0.2 } }}
                                    className="text-7xl md:text-[13vw] font-serif font-bold text-stone-800 dark:text-stone-100 leading-none tracking-tighter inline-block cursor-default transition-colors"
                                >
                                    {char}
                                 </motion.span>
                            ))}
                        </div>
                    </div>

                    <motion.div style={{ y: textY }} className="space-y-10">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: 80 }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                            className="h-[1px] bg-gold/50 mx-auto"
                        ></motion.div>

                        <div className="space-y-8">
                            <p className="text-2xl md:text-5xl font-serif text-stone-700 dark:text-stone-300 leading-tight italic max-w-4xl mx-auto font-light transition-colors">
                                &quot;{hero.slogan.replace('<br/>', ' ')}&quot;
                            </p>
                            <div className="flex justify-center gap-8 text-stone-400 dark:text-stone-500 text-[10px] uppercase tracking-[0.4em] font-bold">
                                {hero.hashtags.map((tag: string, i: number) => (
                                    <span key={i} className="border-b border-stone-200 dark:border-stone-800 pb-3 transition-colors">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6">
                            <a 
                                href={hero.reservationUrl} 
                                className="group relative inline-flex items-center justify-center px-20 py-6 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 overflow-hidden transition-all duration-700 shadow-2xl"
                            >
                                <span className="relative z-10 text-[10px] tracking-[0.6em] uppercase font-black">Book Your Signature</span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gold transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"></div>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 3. Aesthetic Scroll Indicator */}
                <motion.div 
                    style={{ opacity }}
                    className="absolute bottom-12 flex flex-col items-center space-y-4"
                >
                    <span className="text-[9px] tracking-[0.6em] uppercase text-stone-400 font-black">Discover</span>
                    <motion.div 
                        animate={{ height: [40, 80, 40], backgroundColor: ["#D4AF37", "#2C2C2C", "#D4AF37"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1px]"
                    ></motion.div>
                </motion.div>
            </section>

            {/* 2. Content Sections */}
            <div className="w-full space-y-48 py-48">
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-7xl mx-auto w-full px-6">
                        <SummerStyle />
                    </div>
                </section>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-7xl mx-auto w-full px-6">
                        <ServiceMenu />
                    </div>
                </section>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-7xl mx-auto w-full px-6">
                        <Carousel/>
                    </div>
                </section>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-7xl mx-auto w-full px-6">
                        <About/>
                    </div>
                </section>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-7xl mx-auto w-full px-6">
                        <YoutubeGrid/>
                    </div>
                </section>
            </div>
        </div>
    );
}
