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
    title: "뜰오헤어 안중점", description: "뜰오헤어 웹사이트",
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
        <main className="min-h-screen left-0 flex flex-col items-center text-center gap-4 pt-[114px]">
            <Header/>
            <MarqueeNotice/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>);
}
