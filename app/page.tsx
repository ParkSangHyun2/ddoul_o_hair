import './globals.css';
import Hero from '@/components/Hero'
import About from '@/components/About'
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import YoutubeGrid from "@/components/YoutubeGrid";

export default function Home() {
    return (<main className="min-h-screen flex flex-col items-center text-center px-4 gap-2 pt-[80px]">
        <Header/>
        <Hero/>
        <About/>
        <Carousel/>
        <YoutubeGrid/>
        <Footer/>
    </main>)
}