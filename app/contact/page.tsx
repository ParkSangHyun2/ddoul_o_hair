'use client' // App Router인 경우 반드시 필요

import Script from 'next/script'
import Hero from '@/components/Hero'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddressInfo from "@/components/AddressInfo";
import NaverMapButton from "@/components/NaverMapButton";

export default function Contact() {
    return (<>
        <Script
            strategy="afterInteractive"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=5e3b05819caae8676548c85b7130d015&autoload=false`}
            onLoad={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const kakao = (window as any).kakao // ← 안전하게 window로부터 가져오기

                if (kakao?.maps) {
                    kakao.maps.load(() => {
                        const mapContainer = document.getElementById('map')
                        if (!mapContainer) return

                        const mapOption = {
                            center: new kakao.maps.LatLng(36.9796, 126.9284),
                            level: 1,
                        }

                        new kakao.maps.Map(mapContainer, mapOption)
                    })
                }
            }}
        />
        <main className="min-h-screen flex flex-col items-center text-center px-4 gap-4 pt-[80px]">
            <Header/>
            <Hero title="오시는길" desc=""/>
            <AddressInfo/>
            <NaverMapButton />
            <div id="map" style={{width: '400px', height: '400px'}}></div>
            {/*<div className="flex flex-1"/>*/}
            <Footer/>
        </main>
    </>)
}