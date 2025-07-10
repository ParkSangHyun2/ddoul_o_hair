"use client"

import Hero from "@/components/Hero";
import Image from "next/image";
import PriceInfoImg from "@/public/images/price_info.jpg";
import {useState} from "react";

export default function ServicesPage() {
    const [isFull, setIsFull] = useState(false);

    return (<>
            <Hero title="시술 안내" desc=""/>
            <div
                style={{
                    position: `${isFull ? 'fixed' : 'static'}`,
                    height: '100%',
                    backgroundColor: 'white',
                    top: 0,
                    zIndex: `${isFull ? 999 : 0}`,
                }}
                className="flex flex-col justify-center items-center w-full"
            >
                {isFull && <p>{`<화면을 다시 눌러서 닫기>`}</p>}

                <Image
                    src={PriceInfoImg}
                    alt="price images"
                    style={{
                        objectFit: 'contain',
                    }}
                    className="md:w-1/2 cursor-pointer"
                    priority
                    onClick={() => setIsFull(prev => !prev)}
                />
            </div>
        </>)
}
