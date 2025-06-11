'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        // <header className="w-full px-6 py-4 bg-white shadow-sm">
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white shadow-sm">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                {/* 로고 */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo-mini.png"  // 배경 제거된 로고를 여기에 넣어줘!
                        alt="뜰오헤어 로고"
                        width={50}
                        height={50}
                        priority
                    />
                    <Image
                        src="/logo-liter.png"  // 배경 제거된 로고를 여기에 넣어줘!
                        alt="뜰오헤어 로고"
                        width={70}
                        height={70}
                        priority
                    />
                </Link>

                {/* 햄버거 버튼 (모바일용) */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* 데스크탑 메뉴 */}
                <nav className="hidden md:flex space-x-8 text-gray-800 text-sm font-semibold">
                    <Link  href="#about" className="hover:text-gold transition-colors">브랜드 소개</Link >
                    <Link  href="/services" className="hover:text-gold transition-colors">시술 안내</Link >
                    <Link  href="/contact" className="hover:text-gold transition-colors">오시는 길 / 문의</Link >
                </nav>
            </div>

            {/* 모바일 메뉴 */}
            {menuOpen && (
                <nav className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md z-10 flex flex-col space-y-2 text-gray-800 text-sm font-semibold px-6 py-4">
                    <Link  href="#about" className="hover:text-gold transition-colors">브랜드 소개</Link >
                    <Link  href="/services" className="hover:text-gold transition-colors">시술 안내</Link >
                    <Link  href="/contact" className="hover:text-gold transition-colors">오시는 길 / 문의</Link >
                </nav>
            )}
        </header>
    )
}
