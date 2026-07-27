import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import posts from '@/data/posts.json';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = posts.find((p) => p.id === id);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        keywords: [post.title, '헤어 관리 팁', '뜰오헤어 매거진', '헤어케어 노하우'],
        openGraph: {
            title: `${post.title} | 뜰오헤어 매거진`,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['최우민 원장'],
        },
    };
}

export default async function BlogPostDetailPage({ params }: Props) {
    const { id } = await params;
    const post = posts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    // 본문 줄바꿈 처리 및 문단 구성
    const paragraphs = post.content.split('\n\n');

    return (
        <main className="min-h-screen bg-stone-50 pb-32">
            {/* Navigation back */}
            <div className="max-w-4xl mx-auto px-6 pt-12">
                <Link 
                    href="/blog"
                    className="inline-flex items-center text-xs tracking-[0.3em] font-bold text-stone-400 hover:text-gold uppercase transition-colors"
                >
                    ← Back to Magazine
                </Link>
            </div>

            {/* Article Container */}
            <article className="max-w-3xl mx-auto px-6 mt-8">
                {/* Article Header */}
                <header className="space-y-6 text-center md:text-left border-b border-stone-200 pb-12">
                    <div className="flex items-center justify-center md:justify-start space-x-4 text-xs text-stone-400">
                        <time dateTime={post.date}>{post.date}</time>
                        <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                        <span className="text-gold tracking-[0.2em] font-semibold text-[10px] uppercase">Hair Care & Style</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-serif font-semibold text-stone-800 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center md:justify-start space-x-3 pt-2">
                        <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden flex items-center justify-center border border-stone-300">
                            <span className="text-[10px] font-bold text-stone-600">Ddeul</span>
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-semibold text-stone-800">최우민 원장</p>
                            <p className="text-[9px] text-stone-400 uppercase tracking-wider">뜰오헤어 안중점</p>
                        </div>
                    </div>
                </header>

                {/* Article Body */}
                <div className="mt-12 space-y-8 text-stone-700 text-base md:text-lg leading-relaxed font-light">
                    {paragraphs.map((p, idx) => {
                        // 첫 번째 단락(리드문) 스타일 강조
                        if (idx === 0) {
                            return (
                                <p key={idx} className="text-xl md:text-2xl font-serif italic text-stone-500 font-light border-l-4 border-gold pl-6 py-2 my-8">
                                    {p}
                                </p>
                            );
                        }

                        // 소제목(첫째, 둘째 등으로 시작하는 문단) 파싱 및 서브헤딩 강조
                        if (p.startsWith('첫째,') || p.startsWith('둘째,') || p.startsWith('셋째,') || p.startsWith('넷째,')) {
                            const [point, ...rest] = p.split(' ');
                            return (
                                <p key={idx} className="text-stone-700">
                                    <strong className="text-stone-900 font-semibold block text-lg md:text-xl font-serif mb-2 text-gold">{point}</strong>
                                    {rest.join(' ')}
                                </p>
                            );
                        }

                        return (
                            <p key={idx}>
                                {p}
                            </p>
                        );
                    })}
                </div>

                {/* Article Footer */}
                <footer className="mt-20 pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-xs text-stone-400 uppercase tracking-widest">You are reading</p>
                        <p className="font-serif text-stone-800 text-sm mt-1">Ddeul-O Premium Hair Journal</p>
                    </div>

                    <a 
                        href="https://map.naver.com/p/entry/place/2042566657?c=15.00,0,0,0,dh&placePath=/stylist?from=map"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-[10px] tracking-[0.4em] uppercase font-black hover:bg-gold hover:shadow-lg transition-all duration-300"
                    >
                        Book Appointment
                    </a>
                </footer>
            </article>

            {/* Bottom Navigation */}
            <div className="max-w-3xl mx-auto px-6 mt-16 text-center">
                <Link 
                    href="/blog"
                    className="inline-block px-8 py-3 border border-stone-200 text-xs tracking-widest text-stone-500 hover:border-stone-900 hover:text-stone-900 transition-colors uppercase font-semibold"
                >
                    List of Journals
                </Link>
            </div>
        </main>
    );
}
