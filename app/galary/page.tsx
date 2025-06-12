// app/gallery/page.tsx
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPage() {
    return (
        <main className="min-h-screen flex flex-col items-center text-center px-4 gap-2 pt-[80px]">
            <Header/>
            <Hero title="갤러리" desc="Powered by Instagram"/>
            <div className="flex w-full h-full rounded-lg overflow-hidden shadow-md">
                <iframe src="https://snapwidget.com/embed/987654"
                        width="100%" height="600" frameBorder="0" scrolling="yes"
                        allowTransparency={true}></iframe>
                {/*<iframe*/}
                {/*    src="https://snapwidget.com/embed/123456" // ← 실제 위젯 코드로 교체하세요*/}
                {/*    className="w-full h-[600px] sm:h-[800px] border-none"*/}
                {/*    allowTransparency*/}
                {/*    scrolling="no"*/}
                {/*    frameBorder="0"*/}
                {/*/>*/}
            </div>
            <Footer/>
        </main>
    )
}
