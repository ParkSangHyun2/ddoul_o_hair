'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import contentData from '@/data/content.json'
import KoreanHolidayCalendar from "@/components/KoreanHolidayCalendar"
import Qr from "@/public/qr/bmc_qr.png"

export default function Contact() {
    const [scriptLoaded, setScriptLoaded] = useState(false)
    const { business, hero } = contentData

    useEffect(() => {
        const kakao = (window as any).kakao
        if (kakao?.maps) {
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map')
                if (!mapContainer) return

                const mapOption = {
                    center: new kakao.maps.LatLng(36.9796, 126.9284),
                    level: 2,
                }

                const map = new kakao.maps.Map(mapContainer, mapOption)
                
                // 마커 추가
                const markerPosition = new kakao.maps.LatLng(36.9796, 126.9284)
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                })
                marker.setMap(map)
            })
        }
    }, [scriptLoaded])

    return (
        <main className="min-h-screen bg-stone-50 pb-32">
            <Script
                strategy="afterInteractive"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=5e3b05819caae8676548c85b7130d015&autoload=false`}
                onLoad={() => setScriptLoaded(true)}
            />

            {/* 1. Header Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-stone-200 overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center space-y-4"
                >
                    <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase">Find Us</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-stone-800 tracking-tighter uppercase">Location</h1>
                    <div className="w-12 h-[1px] bg-gold mx-auto mt-6"></div>
                </motion.div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                    <span className="text-[35vw] font-serif font-black tracking-tighter uppercase select-none text-stone-900">Anjung</span>
                </div>
            </section>

            {/* 2. Main Layout Grid */}
            <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left: Info Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-12"
                    >
                        {/* Address Box */}
                        <div className="bg-white p-10 md:p-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] border border-stone-100 space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-xs font-bold text-gold uppercase tracking-[0.3em]">Address</h3>
                                <p className="text-2xl font-serif font-bold text-stone-800 leading-tight">
                                    {business.address || "경기도 평택시 안중읍 송담6길 3"}
                                </p>
                                <p className="text-stone-400 text-sm font-light italic">Songdam 6-gil 3, Anjung, Pyeongtaek</p>
                            </div>

                            <div className="space-y-4 pt-8 border-t border-stone-100">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Phone</span>
                                    <a href={`tel:${business.phone}`} className="font-serif text-xl text-stone-800 hover:text-gold transition-colors">{business.phone}</a>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Business Hours</span>
                                    <span className="font-serif text-lg text-stone-800">{business.hours}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Parking</span>
                                    <span className="font-medium text-stone-600">매장 앞 주차 가능</span>
                                </div>
                            </div>

                            <div className="pt-6">
                                <a 
                                    href={hero.reservationUrl} 
                                    className="block w-full py-5 bg-stone-900 text-white text-[10px] tracking-[0.5em] font-bold uppercase text-center hover:bg-gold transition-all duration-500 shadow-xl"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        {/* Calendar Box */}
                        <div className="bg-white p-10 shadow-sm border border-stone-100">
                            <h3 className="text-xs font-bold text-gold uppercase tracking-[0.3em] mb-8 text-center">Closure Schedule</h3>
                            <KoreanHolidayCalendar closedDates={[
                                new Date(2026, 5, 7),  // 예: 일요일 정기 휴무
                                new Date(2026, 5, 14),
                                new Date(2026, 5, 21),
                                new Date(2026, 5, 28),
                            ]}/>
                            <p className="text-[10px] text-stone-400 text-center mt-6 tracking-widest uppercase">* 매주 일요일은 휴무입니다.</p>
                        </div>
                    </motion.div>

                    {/* Right: Map Side */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 flex flex-col space-y-8"
                    >
                        <div className="relative w-full h-[600px] md:h-full min-h-[500px] bg-stone-200 shadow-2xl overflow-hidden group">
                            <div id="map" className="w-full h-full grayscale-[0.5] contrast-[1.1] brightness-[1.1]"></div>
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none z-10"></div>
                        </div>
                        
                        {/* QR / Inquiry Section */}
                        <div className="flex items-center justify-between p-8 bg-stone-100 border border-stone-200">
                            <div className="space-y-1">
                                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-widest">Web Inquiry</h4>
                                <p className="text-xs text-stone-500">문의사항이 있으시면 언제든 연락주세요.</p>
                            </div>
                            <div className="p-2 bg-white shadow-sm">
                                <Image src={Qr} alt="qr" width={80} height={80} className="opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"/>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </main>
    )
}
