import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarqueeNotice from "@/components/MarqueeNotice";

const geistSans = Geist({
    variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "뜰오헤어 안중점", description: "안중에 위치한 뜰오헤어, 컷/염색/펌 전문. 예약 문의 환영."
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
        >
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HairSalon",
                        "name": "뜰오헤어",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "안중",
                            "addressCountry": "KR"
                        },
                        "url": "https://ddeul-o-hair.vercel.app",
                        "telephone": "010-0000-1111"
                    }),
                }}
            />
        </head>
        <main className="min-h-screen left-0 flex flex-col items-center text-center gap-4 pt-[114px]">
            <Header/>
            <MarqueeNotice/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>);
}
