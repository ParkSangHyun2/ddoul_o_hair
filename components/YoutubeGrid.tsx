'use client'
import { motion } from 'framer-motion';

interface VideoItem {
    id: string;
    tag: string;
    title: string;
    description: string;
}

export default function YoutubeGrid() {
    const videos: VideoItem[] = [
        {
            id: 's9g5l9mciXY',
            tag: 'Wave Styling',
            title: '풍성한 볼륨 웨이브 스타일링',
            description: '자연스러운 여신 웨이브와 뿌리 볼륨을 살리는 홈스타일링 노하우',
        },
        {
            id: 'OIDK2jVUPyk',
            tag: 'Daily Blow-dry',
            title: '단발 & 중단발 C컬 볼륨 드라이',
            description: '살롱에서 손질받은 듯 찰랑이는 C컬 실루엣 셀프 드라이 팁',
        },
        {
            id: 'RH-ZA68kjuY',
            tag: "Men's Styling",
            title: '5분 완성 트렌디 맨즈 가르마 스타일',
            description: '바쁜 아침에도 손쉽게 볼륨과 결감을 살리는 남성 헤어 가이드',
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 pb-48 transition-colors duration-700">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 border-b border-stone-100 dark:border-stone-800 pb-8 transition-colors">
                <div className="space-y-2">
                    <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">Motion Collection</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 tracking-tight transition-colors">Style in Motion</h2>
                </div>
                <p className="text-stone-400 dark:text-stone-500 text-sm font-light italic mt-4 md:mt-0 transition-colors">
                    뜰오헤어가 제안하는 감각적인 헤어 튜토리얼 & 스타일링 가이드
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {videos.map((video, index) => (
                    <motion.div 
                        key={video.id} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="flex flex-col space-y-4 group"
                    >
                        <div className="relative w-full aspect-video overflow-hidden rounded-md shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1.5 bg-stone-900">
                            <iframe
                                className="w-full h-full border-0"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="space-y-1.5 text-left pt-1">
                            <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase">
                                {video.tag}
                            </span>
                            <h3 className="text-base font-serif font-semibold text-stone-800 dark:text-stone-200 group-hover:text-gold transition-colors">
                                {video.title}
                            </h3>
                            <p className="text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                                {video.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
