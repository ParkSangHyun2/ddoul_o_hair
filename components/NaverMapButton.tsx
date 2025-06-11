'use client'

import { useEffect, useState } from 'react'
import {FaCalendarAlt, FaMapMarkerAlt} from 'react-icons/fa'

export default function NaverMapButton() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ua = navigator.userAgent.toLowerCase()
            const mobile = /iphone|ipod|android|blackberry|windows phone/.test(ua)
            setIsMobile(mobile)
        }
    }, [])

    const mobileLink = 'nmap://search?query=뜰오헤어'
    const desktopLink = 'https://map.naver.com/p/search/뜰오헤어'

    const finalLink = isMobile ? mobileLink : desktopLink

    return (
        <div className="w-full flex justify-center mt-4 gap-2">
            <a
                href={finalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition-colors"
            >
                <FaMapMarkerAlt className="w-4 h-4" />
                {isMobile ? '네이버 앱으로 위치 보기' : '네이버 지도에서 보기'}
            </a>
            <a
                href="https://m.place.naver.com/hairshop/1191538774/reservation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition-colors"
            >
                <FaCalendarAlt className="w-4 h-4" />
                네이버에서 예약하기
            </a>
        </div>
    )
}
