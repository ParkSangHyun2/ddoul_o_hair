
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
                    <p className="text-gray-600 mb-1">안중 출신 디자이너</p>
                    <p className="text-gray-600">12년 경력의 감성 디렉터</p>
                </div>
            </section>

            {/* 브랜드 소개 */}
            <section className="mb-12 bg-gold p-10 rounded-2xl">
                <p className="text-lg leading-relaxed text-black text-center">
                    안녕하세요. 뜰오헤어의 원장 최우민입니다.<br />
                    <span className="font-bold">'뜰오'</span>라 함은 순 우리말<br />
                    정오 오전 오후 할때 낮'오' (午)<br />
                    뜬다의 미래형인 '뜰'<br />
                    <br />
                    머리는 사람을 밝게 해주는 기본적인 치장이며<br />
                    빛이나게끔 가꿔나간다의 의미랑<br />
                    외모 완성의 미래지향성을 둔 의미<br />
                    <span className="font-bold">'뜰오헤어'</span>로 여러분을 찾아오게 되었습니다😀<br />
                    <br />
                    프라이빗한 빈티지스러운 공간과 안중에서는 지금껏 없었던 <span className="underline">유아 자동차의자</span> 서비스까지 제공해드리고 있습니다🚗<br />
                    <br />
                    확실한 비포 에프터의 끝판을 보여드리겠습니다👍<br />
                    <br />
                    많은 관심과 응원 부탁드립니다🙏<br />
                    <br />
                    <span className="font-bold text-3xl">오픈 일자 : 2025년 7월 10일</span>
                </p>
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
