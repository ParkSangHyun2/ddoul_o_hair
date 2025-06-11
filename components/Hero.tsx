export default function Hero() {
    return (<section
            className="w-full md:h-[50vh] h-[20vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
            style={{
                backgroundImage: "url('/main-bg.png')", // public 폴더에 저장한 파일명
            }}
        >
            <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg">뜰오헤어</h1>
            <p className="mt-4 text-lg md:text-xl font-light text-shadow-lg">PREMIUM HAIR SALON</p>
        </section>)
}