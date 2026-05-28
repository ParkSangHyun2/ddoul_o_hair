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
    title: "뜰오헤어 안중점", 
    description: "안중에 위치한 프리미엄 살롱 뜰오헤어. 컷, 염색, 펌 전문 1:1 맞춤 상담.",
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
    return (<html lang="ko">
    <head>
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
