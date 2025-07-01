import Image from 'next/image';

const summerStyles = [
    { id: 1, src: '/styles/style1.png', alt: '단발 C컬' },
    { id: 2, src: '/styles/style2.png', alt: '여신 웨이브' },
    { id: 3, src: '/styles/style3.png', alt: '러블리 핑크보브' },
    { id: 4, src: '/styles/style4.png', alt: '시크 웨이브컷' },
];

export default function SummerStyle() {
    return (
        <section className="px-4 py-8">
            <h2 className="text-xl font-bold mb-4">여름스타일 추천 TOP4</h2>

            {/* 데스크탑 grid */}
            <div className="hidden md:grid grid-cols-4 gap-4 max-w-6xl mx-auto">
                {summerStyles.map((style) => (
                    <div
                        key={style.id}
                        className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                    >
                        <Image
                            src={style.src}
                            alt={style.alt}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                        {/* 툴팁 */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {style.alt}
                        </div>
                    </div>
                ))}
            </div>

            {/* 모바일 슬라이더 */}
            <div className="md:hidden overflow-x-auto flex gap-4 px-1 snap-x snap-mandatory scroll-smooth">
                {summerStyles.map((style) => (
                    <div
                        key={style.id}
                        className="min-w-[85%] flex-shrink-0 snap-center rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                    >
                        <Image
                            src={style.src}
                            alt={style.alt}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}