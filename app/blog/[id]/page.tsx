import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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

    const imageSrc = (post as any).image;

    // 마크다운 파서 및 JSX 렌더러 함수
    const renderContent = (content: string) => {
        const sections = content.split('\n');
        let inList = false;
        const listItems: string[] = [];
        const elements: React.ReactNode[] = [];

        const flushList = (key: string | number) => {
            if (listItems.length > 0) {
                elements.push(
                    <ul key={`list-${key}`} className="list-disc pl-6 space-y-2 my-4">
                        {listItems.map((item, idx) => (
                            <li key={idx} className="font-light text-stone-700">
                                {parseInlineStyles(item)}
                            </li>
                        ))}
                    </ul>
                );
                listItems.length = 0;
                inList = false;
            }
        };

        const parseInlineStyles = (text: string): React.ReactNode => {
            // 1. 마크다운 링크 [텍스트](링크) 파싱
            const linkRegex = /(\[.*?\]\(.*?\))/g;
            const parts = text.split(linkRegex);

            return parts.map((part, idx) => {
                const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
                if (linkMatch) {
                    const linkText = linkMatch[1];
                    const linkUrl = linkMatch[2];
                    return (
                        <a 
                            key={idx} 
                            href={linkUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gold hover:underline font-semibold"
                        >
                            {linkText}
                        </a>
                    );
                }

                // 2. 볼드 **강조** 파싱
                const boldParts = part.split(/(\*\*.*?\*\*)/g);
                return boldParts.map((subPart, subIdx) => {
                    if (subPart.startsWith('**') && subPart.endsWith('**')) {
                        return (
                            <strong key={`${idx}-${subIdx}`} className="font-semibold text-stone-900">
                                {subPart.slice(2, -2)}
                            </strong>
                        );
                    }
                    return subPart;
                });
            });
        };

        sections.forEach((section, idx) => {
            const trimmed = section.trim();
            if (!trimmed) {
                flushList(idx);
                return;
            }

            // 1. 소제목 (###)
            if (trimmed.startsWith('### ')) {
                flushList(idx);
                const title = trimmed.replace('### ', '');
                elements.push(
                    <h3 key={idx} className="text-xl md:text-2xl font-serif font-semibold text-stone-800 mt-10 mb-4">
                        {parseInlineStyles(title)}
                    </h3>
                );
                return;
            }

            // 2. 이미지 태그 (![alt](src) or ![alt](/src))
            const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (imgMatch) {
                flushList(idx);
                const alt = imgMatch[1];
                const src = imgMatch[2];
                elements.push(
                    <div key={idx} className="my-8 relative w-full h-[220px] md:h-[380px] overflow-hidden shadow-sm border border-stone-200 bg-stone-100">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover"
                            sizes="(max-w-768px) 100vw, 768px"
                        />
                        {alt && (
                            <div className="absolute bottom-2 right-2 bg-stone-900/60 text-white text-[9px] px-2 py-0.5 tracking-wider uppercase">
                                {alt}
                            </div>
                        )}
                    </div>
                );
                return;
            }

            // 2.5 iframe 태그 지원 (광고 위젯 등)
            if (trimmed.startsWith('<iframe')) {
                flushList(idx);
                const srcMatch = trimmed.match(/src="([^"]+)"/);
                const widthMatch = trimmed.match(/width="([^"]+)"/);
                const heightMatch = trimmed.match(/height="([^"]+)"/);
                if (srcMatch) {
                    const src = srcMatch[1];
                    const width = widthMatch ? widthMatch[1] : "120";
                    const height = heightMatch ? heightMatch[1] : "240";
                    elements.push(
                        <div key={idx} className="my-6 flex justify-center">
                            <iframe
                                src={src}
                                width={width}
                                height={height}
                                frameBorder="0"
                                scrolling="no"
                                referrerPolicy="unsafe-url"
                                className="border-0"
                            />
                        </div>
                    );
                    return;
                }
            }

            // 2.7 쿠팡 파트너스 안내 문구 감지 및 스타일링
            if (trimmed.includes('쿠팡 파트너스 활동의 일환')) {
                flushList(idx);
                elements.push(
                    <div key={idx} className="text-center text-stone-400 text-xs italic my-4 tracking-wide font-light">
                        {trimmed}
                    </div>
                );
                return;
            }

            // 3. 리스트 아이템 (* 또는 -)
            if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                inList = true;
                listItems.push(trimmed.slice(2));
                return;
            }

            // 4. 일반 단락
            flushList(idx);
            const isFirstParagraph = elements.length === 0;
            if (isFirstParagraph) {
                elements.push(
                    <p key={idx} className="text-xl md:text-2xl font-serif italic text-stone-600 font-light border-l-4 border-gold pl-6 py-2 my-8 leading-relaxed">
                        {parseInlineStyles(trimmed)}
                    </p>
                );
            } else {
                elements.push(
                    <p key={idx} className="leading-relaxed mb-6 font-light">
                        {parseInlineStyles(trimmed)}
                    </p>
                );
            }
        });

        flushList('final');
        return elements;
    };

    return (
        <main className="min-h-screen bg-stone-50 pb-32">
            {/* Schema.org BlogPosting Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "image": imageSrc
                            ? (imageSrc.startsWith('http') ? imageSrc : `https://ddeul-o-hair.vercel.app${imageSrc}`)
                            : "https://ddeul-o-hair.vercel.app/logo-full.PNG",
                        "datePublished": post.date,
                        "dateModified": post.date,
                        "author": {
                            "@type": "Person",
                            "name": "최우민",
                            "jobTitle": "대표 원장",
                            "worksFor": {
                                "@type": "HairSalon",
                                "name": "뜰오헤어"
                            }
                        },
                        "publisher": {
                            "@type": "HairSalon",
                            "name": "뜰오헤어",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://ddeul-o-hair.vercel.app/logo-full.PNG"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://ddeul-o-hair.vercel.app/blog/${post.id}`
                        }
                    })
                }}
            />

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
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-stone-300 bg-stone-100">
                            <Image
                                src="/images/profile_image.jpg"
                                alt="최우민 원장 프로필"
                                fill
                                className="object-cover"
                                sizes="32px"
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-xs font-semibold text-stone-800">최우민 원장</p>
                            <p className="text-[9px] text-stone-400 uppercase tracking-wider">뜰오헤어 안중점</p>
                        </div>
                    </div>
                </header>

                {/* Article Main Image */}
                {imageSrc && (
                    <div className="relative w-full h-[280px] md:h-[450px] mt-12 bg-stone-100 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-stone-200">
                        <Image
                            src={imageSrc}
                            alt={post.title}
                            fill
                            sizes="(max-w-768px) 100vw, 768px"
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Article Body */}
                <div className="mt-12 space-y-8 text-stone-700 text-base md:text-lg leading-relaxed font-light">
                    {renderContent(post.content)}
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
