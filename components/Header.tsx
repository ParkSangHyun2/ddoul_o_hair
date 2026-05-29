'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    // 스크롤 감지
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 메뉴가 열렸을 때 바디 스크롤 잠금 및 경로 변경 시 메뉴 닫기
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [menuOpen])

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    const navItems = [
        { name: '홈', href: '/' },
        { name: '브랜드 소개', href: '/about' },
        { name: '갤러리', href: '/gallery' },
        { name: '시술 안내', href: '/services' },
        { name: '오시는 길', href: '/contact' },
    ]

    return (
        <>
            {/* 1. Header Bar - Always Top */}
            <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 ${
                scrolled || menuOpen 
                ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-lg shadow-sm py-4' 
                : 'bg-transparent py-6'
            }`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* 로고 */}
                    <Link href="/" className="relative z-[110] dark:invert dark:brightness-200 transition-all">
                        <Image
                            src="/logo-full.PNG"
                            alt="뜰오헤어"
                            width={110}
                            height={110}
                            className="transition-transform duration-500 hover:scale-105"
                            priority
                        />
                    </Link>

                    {/* 데스크탑 메뉴 */}
                    <nav className="hidden md:flex space-x-12">
                        {navItems.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className="text-[11px] tracking-[0.4em] font-bold text-stone-800 uppercase hover:text-gold transition-colors relative group"
                            >
                                {item.name}
                                <span className={`absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link >
                        ))}
                    </nav>

                    {/* 모바일 햄버거 버튼 */}
                    <button
                        className="md:hidden relative z-[110] p-2 text-stone-800"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <motion.span 
                                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="w-full h-[1.5px] bg-current origin-center"
                            />
                            <motion.span 
                                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-full h-[1.5px] bg-current"
                            />
                            <motion.span 
                                animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                                className="w-full h-[1.5px] bg-current origin-center"
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* 2. Fullscreen Mobile Overlay Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[90] bg-stone-900/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-12"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
                            <span className="text-[50vw] font-serif font-black tracking-tighter text-white whitespace-nowrap">DDEUL-O</span>
                        </div>

                        <nav className="relative z-10 w-full max-w-xs flex flex-col space-y-10">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * (i + 1) }}
                                >
                                    <Link 
                                        href={item.href}
                                        className={`block text-2xl font-serif font-bold tracking-[0.2em] uppercase transition-colors ${
                                            pathname === item.href ? 'text-gold' : 'text-stone-300 hover:text-white'
                                        }`}
                                    >
                                        <span className="text-[10px] font-sans mr-4 opacity-30">0{i+1}</span>
                                        {item.name}
                                    </Link >
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile Footer Info */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-16 left-0 w-full text-center space-y-4"
                        >
                            <div className="w-8 h-[1px] bg-gold/30 mx-auto"></div>
                            <p className="text-[9px] tracking-[0.4em] text-stone-500 uppercase font-bold">Premium Experience</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
