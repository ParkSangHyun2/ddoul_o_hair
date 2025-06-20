
export default function AboutPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-10">뜰오헤어 소개</h1>

            {/* 브랜드 소개 */}
            <section className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 text-center">
                    뜰오헤어는 당신의 일상에 특별함을 더하는 프리미엄 헤어살롱입니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 text-center">
                    트렌디한 스타일링과 맞춤형 서비스를 통해
                    편안하고 감각적인 아름다움을 선사합니다.
                </p>
            </section>

            {/* 원장 소개 */}
            <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <img
                    src="/woomin.jpg"
                    alt="최우민 원장"
                    className="w-48 h-48 rounded-full object-cover shadow-md"
                />
                <div>
                    <h2 className="text-xl font-semibold mb-2">최우민 원장</h2>
                    <p className="text-gray-600 mb-1">TONY&GUY 출신 디자이너</p>
                    <p className="text-gray-600">80년 경력의 감성 디렉터</p>
                </div>
            </section>

            {/* 매장 사진 */}
            <section className="mb-16">
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="/main-bg.png"
                        alt="매장 내부"
                        className="w-full object-cover h-72 sm:h-96"
                    />
                </div>
            </section>

            {/* 환영 문구 */}
            <section className="bg-gold text-white text-center py-10 rounded-xl shadow-inner">
                <h2 className="text-2xl font-semibold mb-2">언제든 편하게 방문해주세요</h2>
                <p>당신의 새로운 스타일링이 시작되는 곳, </p>
                <p>뜰오헤어에서 기다리고 있겠습니다.</p>
            </section>
        </main>
    )
}
