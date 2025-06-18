"use client"
// app/gallery/page.tsx
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from 'react'

export default function GalleryPage() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
        script.async = true;
        document.body.appendChild(script);
    });

    return (<>
            <Hero title="갤러리" desc="Powered by Instagram"/>
            <div className="flex w-full h-full rounded-lg overflow-hidden shadow-md">
                {/* 샘플 */}
                <iframe src="https://snapwidget.com/embed/987654"
                        width="100%" height="600" frameBorder="0" scrolling="yes"
                        allowTransparency={true}></iframe>
                {/*{!--LightWidget WIDGET --}*/}
                {/*<iframe src="//lightwidget.com/widgets/56456f61b5ed59b1bc1efb83fa62d490.html" scrolling="no"*/}
                {/*        allowTransparency={true} className="lightwidget-widget"*/}
                {/*        width="100%" height="600"*/}
                {/*        style={{border:0, overflow:'hidden'}}></iframe>*/}

            </div>
        </>)
}
