'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
            if (menuOpen) setMenuOpen(false) // 스크롤 시 메뉴 닫기
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [menuOpen]) // menuOpen 상태를 감시하여 스크롤 이벤트 내에서 최신 상태 참조

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
            scrolled || menuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* 로고 */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="relative overflow-hidden">
                         <Image
                            src="/logo-full.PNG"
                            alt="뜰오헤어 로고"
                            width={110}
                            height={110}
                            className="transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </div>
                </Link>

                {/* 햄버거 버튼 (모바일용) */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex space-x-10 text-gray-800 text-[13px] tracking-widest font-medium uppercase">
                    {[
                        { name: '홈', href: '/' },
                        { name: '브랜드 소개', href: '/about' },
                        { name: '갤러리', href: '/gallery' },
                        { name: '시술 안내', href: '/services' },
                        { name: '오시는 길', href: '/contact' },
                    ].map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className="relative py-2 transition-colors hover:text-gold group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link >
                    ))}
                </nav>
            </div>

            {/* 모바일 메뉴 */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-white/98 backdrop-blur-xl z-[100] flex flex-col items-center justify-center space-y-8 text-gray-800 text-xl tracking-[0.3em] font-serif font-bold uppercase"
                    >
                        {/* 모바일 메뉴 전용 닫기 버튼 */}
                        <button 
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-8 right-8 p-2 text-stone-800"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {[
                            { name: '홈', href: '/' },
                            { name: '브랜드 소개', href: '/about' },
                            { name: '갤러리', href: '/gallery' },
                            { name: '시술 안내', href: '/services' },
                            { name: '오시는 길', href: '/contact' },
                        ].map((item) => (
                            <Link 
                                key={item.name}
                                onClick={() => setMenuOpen(false)} 
                                href={item.href} 
                                className="hover:text-gold transition-colors py-2 border-b border-transparent hover:border-gold"
                            >
                                {item.name}
                            </Link >
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
