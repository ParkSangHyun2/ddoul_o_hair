import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col items-center text-center px-4 gap-4 pt-[80px]">
            <Header/>
            <Hero title="시술 안내" desc=""/>

            <section className="space-y-8">
                <div>
                    <h2 className="text-xl font-semibold text-gold mb-2">💇 여성 컷 & 스타일링</h2>
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>기본 커트 – 25,000원</li>
                        <li>샴푸 & 드라이 – 20,000원</li>
                        <li>열펌 (셋팅/디지털) – 120,000원~</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gold mb-2">💇‍♂️ 남성 시술</h2>
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>남성 커트 – 20,000원</li>
                        <li>다운펌 – 15,000원</li>
                        <li>스핀스왈로 펌 – 90,000원</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gold mb-2">🎨 염색</h2>
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>전체염색 – 80,000원~</li>
                        <li>뿌리염색 – 50,000원~</li>
                        <li>탈색 – 90,000원~</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gold mb-2">🧖 클리닉</h2>
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>수분 클리닉 – 40,000원</li>
                        <li>단백질 클리닉 – 60,000원</li>
                    </ul>
                </div>
            </section>

            <p className="mt-12 text-sm text-gray-500 text-center">
                * 시술 가격은 모발 상태 및 길이에 따라 변동될 수 있습니다.
            </p>
            <Footer/>
        </main>
    )
}
