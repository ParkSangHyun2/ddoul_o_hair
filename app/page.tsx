import './globals.css';
import Hero from '@/components/Hero'
import About from '@/components/About'
import Carousel from "@/components/Carousel";
import YoutubeGrid from "@/components/YoutubeGrid";

export default function Home() {
    return (<main className="min-h-screen flex flex-col items-center text-center px-4 gap-2 pt-[30px]">
        <Hero title="뜰오헤어" desc="PREMIUM HAIR SALON"/>
        <About/>
        <Carousel/>
        <YoutubeGrid/>
    </main>)
}