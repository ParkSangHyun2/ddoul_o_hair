'use client'
import Link from 'next/link';
import InstagramLink from "@/components/InstagramLink";
import contentData from '@/data/content.json';

export default function Footer() {
    const { business } = contentData;

    return (
        <footer className="w-full bg-stone-900 text-stone-400 py-24 px-6 overflow-hidden relative">
            {/* Background Decorative Text */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[20vw] font-serif font-black tracking-tighter whitespace-nowrap">DDEUL-O-HAIR</span>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
                {/* 1. Brand Logo & Philosophy */}
                <div className="md:col-span-4 space-y-8 text-left">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-serif font-bold text-white tracking-tight italic">뜰오헤어</h3>
                        <div className="w-12 h-[1px] bg-gold"></div>
                        <p className="text-sm leading-relaxed max-w-xs font-light">
                            정성을 다해 고객 한 분 한 분의 가장 빛나는 순간을 완성하는 프리미엄 살롱입니다. 
                            안중의 감각적인 공간에서 당신만의 스타일을 경험하세요.
                        </p>
                    </div>
                    <InstagramLink />
                </div>

                {/* 2. Quick Links */}
                <div className="md:col-span-2 space-y-6 text-left">
                    <h4 className="text-white text-[10px] tracking-[0.4em] font-bold uppercase">Navigation</h4>
                    <ul className="space-y-4 text-xs tracking-widest font-medium">
                        <li><Link href="/" className="hover:text-gold transition-colors">HOME</Link></li>
                        <li><Link href="/about" className="hover:text-gold transition-colors">BRAND STORY</Link></li>
                        <li><Link href="/gallery" className="hover:text-gold transition-colors">COLLECTION</Link></li>
                        <li><Link href="/services" className="hover:text-gold transition-colors">SERVICES</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">LOCATION</Link></li>
                    </ul>
                </div>

                {/* 3. Opening Hours */}
                <div className="md:col-span-3 space-y-6 text-left">
                    <h4 className="text-white text-[10px] tracking-[0.4em] font-bold uppercase">Experience Time</h4>
                    <div className="space-y-4">
                        <div className="group">
                            <p className="text-[10px] text-stone-500 font-bold mb-1 uppercase">Daily Session</p>
                            <p className="text-white font-serif italic text-lg">{business.hours}</p>
                        </div>
                        <p className="text-[10px] text-gold font-medium italic tracking-widest">
                            * 매주 일요일은 정기 휴무입니다
                        </p>
                    </div>
                </div>

                {/* 4. Contact Info */}
                <div className="md:col-span-3 space-y-6 text-left">
                    <h4 className="text-white text-[10px] tracking-[0.4em] font-bold uppercase">Connect With Us</h4>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Phone</p>
                            <a href={`tel:${business.phone}`} className="text-white font-serif italic text-lg hover:text-gold transition-colors block underline decoration-stone-800 underline-offset-8">
                                {business.phone}
                            </a>
                        </div>
                        <div className="space-y-1 pt-2">
                            <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Email</p>
                            <a href={`mailto:${business.email}`} className="text-white font-serif italic text-lg hover:text-gold transition-colors block">
                                {business.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] tracking-widest text-stone-600 font-medium">
                    <p>&copy; {new Date().getFullYear()} DDEUL-O-HAIR SALON.</p>
                    <span className="hidden md:block">|</span>
                    <p>ALL RIGHTS RESERVED.</p>
                </div>
                
                <div className="flex items-center gap-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    <a href="https://www.buymeacoffee.com/stand.by.me" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.buymeacoffee.com/button-api/?text=Website Inquiry&emoji=%E2%9C%A8&slug=stand.by.me&button_colour=2C2C2C&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" className="h-10" alt="Inquiry" />
                    </a>
                </div>
            </div>

            {/* Decorative Gold Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-stone-800 to-gold"></div>
        </footer>
    );
}
