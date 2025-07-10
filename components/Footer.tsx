import InstagramLink from "@/components/InstagramLink";

export default function Footer() {
    return (<footer className="w-full bg-neutral-100 text-gray-600 text-sm mt-12 border-t">
            <div
                className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center md:flex-row justify-between md:items-center gap-6">
                {/* 브랜드 설명 */}
                <div className="flex flex-col self-stretch gap-1 md:items-start">
                    <div className="md:flex-0 md:flex-row flex-1 md:w-full justify-between md:justify-start">
                        <h3 className="shrink-0 text-lg font-semibold text-gray-800 mb-2">뜰오헤어</h3>
                        <InstagramLink/>
                    </div>
                    <p>정성을 담아 고객 한 분 한 분의 아름다움을 책임집니다.</p>
                    <p className="mt-1">운영시간: 오전 10시 ~ 오후 8시</p>
                    <div className="w-[300px]">
                        <a href="https://www.buymeacoffee.com/stand.by.me"><img src="https://img.buymeacoffee.com/button-api/?text=웹사이트 제작 문의&emoji=😀&slug=stand.by.me&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00" /></a>
                    </div>
                </div>

                {/* 연락처 정보 */}
                <div className="flex flex-col gap-1 h-full items-center">
                    <h4 className="font-medium text-gray-700 mb-2">Contact</h4>
                    <p>원장 최우민</p>
                    <p>Tel: <a href="tel:01030236114" className="underline">010-3023-6114</a></p>
                    <p>Email: <a href="mailto:info@ddolhair.com" className="underline">info@ddolhair.com</a></p>
                </div>
            </div>

            {/* 하단 저작권 */}
            <div className="text-center text-xs text-gray-400 py-4 border-t">
                &copy; {new Date().getFullYear()} 뜰오헤어. All rights reserved.
            </div>
        </footer>)
}
