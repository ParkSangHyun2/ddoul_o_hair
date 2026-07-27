import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import posts from '@/data/posts.json';

export const metadata: Metadata = {
    title: '헤어 매거진 & 관리 팁',
    description: '뜰오헤어 안중점이 전해드리는 프리미엄 헤어 매거진. 최신 헤어스타일 트렌드 분석, 겨울철 모발 정전기 관리법, 탈모 예방을 위한 올바른 샴푸법, 그리고 염색 후 컬러 유지 홈케어 꿀팁까지 전문가의 노하우를 만나보세요.',
    keywords: ['안중 미용실 블로그', '평택 헤어 팁', '모발 관리법', '헤어스타일 추천', '탈모 예방 샴푸', '염색 관리법', '뜰오헤어 매거진'],
    openGraph: {
        title: '헤어 매거진 & 관리 팁 | 뜰오헤어 안중점',
        description: '더 건강하고 아름다운 헤어스타일을 위한 프리미엄 가이드와 관리 팁을 전해드립니다.',
        type: 'website',
    }
};

export default function BlogListPage() {
    return (
        <main className="min-h-screen bg-stone-50 pb-32">
            {/* Header Section */}
            <section className="relative h-[40vh] flex items-center justify-center bg-stone-200 overflow-hidden">
                <div className="relative z-10 text-center space-y-4">
                    <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase">Hair & Beauty</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-800 tracking-tighter uppercase">Magazine</h1>
                    <div className="w-12 h-[1px] bg-gold mx-auto mt-6"></div>
                </div>
                {/* Background Artwork */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                    <span className="text-[30vw] font-serif font-black tracking-tighter uppercase select-none">Journal</span>
                </div>
            </section>

            {/* Articles List */}
            <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-1 gap-12">
                    {posts.map((post, idx) => {
                        // 이미지가 등록되지 않았으면 기본 세련된 흑백 로고 이미지를 사용
                        const imageSrc = (post as any).image || "/images/shop/right_side.webp";

                        return (
                            <article 
                                key={post.id}
                                className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-stone-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col md:flex-row overflow-hidden"
                            >
                                {/* Image Area */}
                                <div className="relative w-full md:w-[320px] h-[220px] md:h-auto flex-shrink-0 overflow-hidden bg-stone-100">
                                    <Image
                                        src={imageSrc}
                                        alt={post.title}
                                        fill
                                        sizes="(max-w-768px) 100vw, 320px"
                                        className="object-cover transition-transform duration-750 group-hover:scale-105"
                                        priority={idx < 3}
                                    />
                                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1 border border-gold/30">
                                        <span className="text-[10px] font-serif text-gold tracking-widest">
                                            0{idx + 1}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 p-8 md:p-10 space-y-4 flex flex-col justify-center">
                                    <div className="flex items-center space-x-4 text-xs text-stone-400">
                                        <time dateTime={post.date}>{post.date}</time>
                                        <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                                        <span className="text-gold tracking-[0.2em] font-semibold text-[10px] uppercase">Hair Care & Style</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-serif font-semibold text-stone-800 group-hover:text-gold transition-colors duration-500 leading-snug">
                                        <Link href={`/blog/${post.id}`} className="block">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-stone-500 text-sm leading-relaxed font-light line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-2">
                                        <Link 
                                            href={`/blog/${post.id}`}
                                            className="inline-flex items-center text-xs tracking-[0.3em] font-bold text-stone-800 hover:text-gold uppercase transition-colors"
                                        >
                                            Read Journal
                                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Bottom Decor */}
            <div className="flex justify-center mt-24">
                <div className="w-px h-16 bg-gradient-to-b from-stone-200 to-transparent"></div>
            </div>
        </main>
    );
}
