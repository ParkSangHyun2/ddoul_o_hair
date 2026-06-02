import type {Metadata} from "next";
import {Cormorant_Garamond, Noto_Sans_KR} from "next/font/google";
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeNotice from "@/components/MarqueeNotice";
import DotCharacters from "@/components/DotCharacters";

const cormorant = Cormorant_Garamond({
    variable: "--font-serif",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const notoSansKR = Noto_Sans_KR({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "뜰오헤어 안중점 | 프리미엄 감성 헤어살롱",
        template: "%s | 뜰오헤어 안중점"
    },
    description: "안중 평택에 위치한 프리미엄 살롱 뜰오헤어. 12년 경력 원장님의 1:1 맞춤 상담으로 당신만의 가장 빛나는 스타일을 완성해 드립니다. 컷, 염색, 펌 전문.",
    keywords: ["안중 미용실", "평택 미용실", "송담 미용실", "안중 레이어드컷", "안중 염색", "안중 펌", "뜰오헤어"],
    authors: [{ name: "최우민" }],
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://ddeul-o-hair.vercel.app",
        title: "뜰오헤어 안중점 | 프리미엄 감성 헤어살롱",
        description: "안중 평택에서 가장 빛나는 순간을 완성하는 프리미엄 미용실 뜰오헤어입니다.",
        siteName: "뜰오헤어",
        images: [
            {
                url: "/logo-full.PNG",
                width: 1200,
                height: 630,
                alt: "뜰오헤어 로고",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "뜰오헤어 안중점",
        description: "안중 평택 프리미엄 헤어살롱",
        images: ["/logo-full.PNG"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="ko" suppressHydrationWarning>
    <head>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    function updateTheme() {
                        const now = new Date();
                        const kstOffset = 9 * 60; // KST는 UTC+9
                        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
                        const kstDate = new Date(utc + (kstOffset * 60000));
                        const hours = kstDate.getHours();
                        
                        // 오전 6시 ~ 오후 6시(18시)는 라이트 모드, 그 외는 다크 모드
                        const isDay = hours >= 6 && hours < 18;
                        if (isDay) {
                            document.documentElement.classList.remove('dark');
                        } else {
                            document.documentElement.classList.add('dark');
                        }
                    }
                    updateTheme();
                    // 주기적으로 체크 (1분마다)
                    setInterval(updateTheme, 60000);
                })()
                `,
            }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HairSalon",
                    "name": "뜰오헤어",
                    "url": "https://ddeul-o-hair.vercel.app",
                    "telephone": "010-3023-6114",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "안중",
                        "addressCountry": "KR"
                    }
                }),
            }}
        />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
    </head>
    <body
        className={`${cormorant.variable} ${notoSansKR.variable} font-sans antialiased select-none`}
    >
    <DotCharacters />
    <Header/>
    <MarqueeNotice/>

    <main>
        {children}
    </main>
    <Footer/>
    </body>
</html>);
}
