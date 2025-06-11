'use client' // App Router인 경우 반드시 필요

declare global {
    interface Window {
        kakao: {
            maps: {
                Map: any
                LatLng: any
                load: (callback: () => void) => void
                // 필요한 함수만 정의
            }
        }
    }
}

import Script from 'next/script'

import Hero from '@/components/Hero'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddressInfo from "@/components/AddressInfo";

export default function Contact() {
    return (<>
        <Script
            strategy="afterInteractive"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=5e3b05819caae8676548c85b7130d015&autoload=false`}
            onLoad={() => {
                // autoload=false일 경우 직접 init 필요
                kakao.maps.load(() => {
                    const mapContainer = document.getElementById('map')
                    const mapOption = {
                        center: new kakao.maps.LatLng(36.9796, 126.9284), level: 1,
                    }
                    new kakao.maps.Map(mapContainer, mapOption)
                })
            }}
        />
        <main className="min-h-screen flex flex-col items-center text-center px-4 gap-4 pt-[80px]">
            <Header/>
            <Hero title="오시는길" desc=""/>
            <AddressInfo/>
            <div id="map" style={{width: '400px', height: '400px'}}></div>
            <div className="flex flex-1"/>
            <Footer/>
        </main>
    </>)
}