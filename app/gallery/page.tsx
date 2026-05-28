"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

// Instagram API 응답 구조를 모방한 Mock 데이터
const mockInstagramFeeds = [
    { id: '1', media_url: '/styles/style1.png', caption: '고급스러운 단발 C컬 펌. #안중미용실 #뜰오헤어', permalink: '#' },
    { id: '2', media_url: '/styles/style2.png', caption: '여신 웨이브 스타일로 분위기 변신. #헤어스타일', permalink: '#' },
    { id: '3', media_url: '/styles/style3.png', caption: '러블리 핑크보브, 특별한 날을 위한 선택.', permalink: '#' },
    { id: '4', media_url: '/styles/style4.png', caption: '시크한 웨이브컷으로 완성하는 데일리룩.', permalink: '#' },
    { id: '5', media_url: '/carousel/carousel1.png', caption: '뜰오헤어의 프리미엄 케어 세션.', permalink: '#' },
    { id: '6', media_url: '/carousel/carousel2.png', caption: '차분하고 고급스러운 분위기 연출.', permalink: '#' },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen w-full bg-stone-50 pb-24">
            {/* Header Section */}
            <section className="pt-20 pb-16 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center space-y-4"
                >
                    <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">Collection</span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-800 tracking-tight">GALLERY</h1>
                    <div className="w-12 h-[1px] bg-stone-300 my-4"></div>
                    <p className="text-stone-500 font-light italic tracking-wide">
                        &quot;뜰오헤어와 함께 완성된 고객님들의 아름다운 순간들입니다.&quot;
                    </p>
                </motion.div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockInstagramFeeds.map((feed, index) => (
                        <motion.div
                            key={feed.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-square overflow-hidden bg-stone-200 shadow-sm"
                        >
                            <a href={feed.permalink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                <Image
                                    fill
                                    src={feed.media_url}
                                    alt={feed.caption}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                                    <p className="text-white font-light text-sm line-clamp-4 mb-4 leading-relaxed">
                                        {feed.caption}
                                    </p>
                                    <div className="w-8 h-[1px] bg-gold/50 mb-4"></div>
                                    <span className="text-gold text-[10px] uppercase tracking-widest font-bold">View on Instagram</span>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mt-24 text-center">
                <p className="text-stone-400 text-sm font-light mb-6 tracking-widest">WANT TO SEE MORE?</p>
                <a 
                    href="https://www.instagram.com/ddeul_o_hair/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-stone-800 hover:text-gold transition-colors duration-300 font-serif text-xl"
                >
                    <span>Follow @ddeul_o_hair</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.441-.645-1.441-1.44.645-1.44 1.441-1.44z"/>
                    </svg>
                </a>
            </section>
        </main>
    );
}
