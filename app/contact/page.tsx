'use client' // App Router인 경우 반드시 필요

import Script from 'next/script'
import Hero from '@/components/Hero'
import AddressInfo from "@/components/AddressInfo";
import NaverMapButton from "@/components/NaverMapButton";
import {useEffect, useState} from "react";
import KoreanHolidayCalendar from "@/components/KoreanHolidayCalendar";
import Qr from "@/public/qr/bmc_qr.png";
import Image from "next/image";

export default function Contact() {
    const [scriptLoaded, setScriptLoaded] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const kakao = (window as any).kakao // ← 안전하게 window로부터 가져오기

        if (kakao?.maps) {
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map')
                if (!mapContainer) return

                const mapOption = {
                    center: new kakao.maps.LatLng(36.9796, 126.9284), level: 1,
                }

                new kakao.maps.Map(mapContainer, mapOption)
            })
        }
    }, [scriptLoaded])

    return (<>
        <Script
            strategy="afterInteractive"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=5e3b05819caae8676548c85b7130d015&autoload=false`}
            onLoad={() => setScriptLoaded(true)}
        />
        <Hero title="오시는길" desc=""/>
        <div className="flex flex-col gap-5 w-full p-5">
            <AddressInfo/>
            <NaverMapButton/>
            <div className="flex flex-col justify-center items-center w-full">
                <div id="map" className="flex flex-col justify-center" style={{
                    width: '80vw',
                    maxWidth: '800px',
                    height: '50vw',
                    maxHeight: '600px',
                    display:'flex',
                    position: 'relative',
                    overflow: 'hidden'
                }}></div>
            </div>
            <div className="flex flex-1"/>
            <KoreanHolidayCalendar closedDates={[
                new Date(2025, 6, 3),  // 예: 2025년 7월 3일
                new Date(2025, 6, 14), // 예: 2025년 7월 14일
                ]}/>

            <p className="font-bold">웹사이트 문의</p>
            {/* Buy Me a Coffee 버튼 스크립트 */}

            <div className="flex flex-col w-full justify-center items-center">
                <Image src={Qr} alt="qr" width={100} height={100}/>
            </div>

        </div>
    </>)
}