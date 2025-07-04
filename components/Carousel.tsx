'use client'
import {useEffect, useState} from 'react'

const images = [
    '/carousel/carousel1.png',
    '/carousel/carousel2.png',
]

export default function Carousel() {
    const [current, setCurrent] = useState(0)
    const total = images.length

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total)
        }, 3000)

        return () => clearInterval(interval)
    }, [total])

    const next = () => setCurrent((current + 1) % total)
    const prev = () => setCurrent((current - 1 + total) % total)

    return (
        <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, idx) => (
                    <img key={idx} src={src} className="w-full flex-shrink-0 object-cover md:h-80 h-64" />
                ))}
            </div>

            {/* Navigation buttons */}
            <button onClick={prev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                ‹
            </button>
            <button onClick={next} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                ›
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    )
}
