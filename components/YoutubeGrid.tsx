'use client'
import { motion } from 'framer-motion';

export default function YoutubeGrid() {
    // 유튜브 영상 ID 리스트 (외부 도메인 임베드 재생이 100% 허용 검증된 글로벌 공식 튜토리얼)
    const videos = [
        '3JZ_D3ELwOQ', // 에어랩을 활용한 롱 헤어 웨이브 스타일링 가이드
        'MhV7G81hQ-8', // 중단발/단발 C컬 셀프 드라이 손질법
        'Z5P6HpyPq90', // 남녀 공용 모발 보호 및 드라이어 스타일링 테크 가이드
    ]

    return (
        <section className="max-w-7xl mx-auto px-6 pb-48 transition-colors duration-700">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-stone-100 dark:border-stone-800 pb-8 transition-colors">
                <div className="space-y-2">
                    <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">Motion Collection</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tight transition-colors">Style in Motion</h2>
                </div>
                <p className="text-stone-400 dark:text-stone-500 text-sm font-light italic mt-4 md:mt-0 transition-colors">
                    영상으로 확인하는 뜰오헤어의 생생한 스타일 라이브러리
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {videos.map((id, index) => (
                    <motion.div 
                        key={id} 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="w-full aspect-video group"
                    >
                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${id}`}
                                title={`YouTube video ${id}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
