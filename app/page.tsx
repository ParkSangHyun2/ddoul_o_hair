import './globals.css';

import About from '@/components/About'
import Carousel from "@/components/Carousel";
import YoutubeGrid from "@/components/YoutubeGrid";
import SummerStyle from "@/components/style/SummerStyle";
import Image from "next/image";
import OpenPoster from "@/public/images/first.jpg";

export default function Home() {
    return (<main className="min-h-screen flex flex-col items-center text-center gap-2">
        <div className="flex flex-col md:flex-row w-full gap-10 md:justify-between px-[10%] py-[2%] bg-[#c8c2ba]">
            <div className="text-left">
                <p className="text-6xl font-bold">GRAND OPEN</p>
                <p className="text-3xl font-thin">DDEUL-O-HAIR</p>
            </div>
            <Image height={300} src={OpenPoster} alt="poster" />
            <div className="text-left">
                <p className="text-3xl font-bold">뜰오헤어</p>
                <p className="text-3xl font-thin">OPEN:  AM 10:00</p>
                <p className="text-3xl font-thin">CLOSE: PM 10:00 </p>
                <br/>
                <p className="text-3xl font-thin">연중무휴</p>
                <br/>
                <p className="text-xl font-thin"># 안중</p>
                <p className="text-xl font-thin"># 커트 맛집</p>
            </div>

        </div>
        {/*<Hero title="뜰오헤어" desc="PREMIUM HAIR SALON"/>*/}
        <SummerStyle />
        <Carousel/>
        <About/>
        <YoutubeGrid/>
    </main>)
}