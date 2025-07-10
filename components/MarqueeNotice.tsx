const MarqueeNotice = () => {
    return (
        <div className="fixed top-[77px] left-0 z-50 shadow-sm w-full marquee-wrapper">
            <div className="marquee-content">
                <span className="mx-4">안녕하세요. 뜰오헤어의 원장 최우민입니다!! 👍확실한 비포 에프터의 끝판을 보여드리겠습니다👍 🙏많은 관심과 응원 부탁드립니다🙏</span>
                <span className="mx-4">🎉오픈 일자 : 2025년 7월 10일🎉</span>
                {/*<span className="mx-4">🎉 환영합니다! 뜰오헤어입니다. 오늘은 <span className="text-green-600 font-bold">정상 영업</span> 중입니다.</span>*/}
                {/*<span className="mx-4">🕙 운영 시간: 오전 10시 ~ 오후 8시</span>*/}
                {/*<span className="mx-4">⏳오늘은 예약이 많아 방문 시 <span className="text-red-600 font-bold">대기</span>하실 수 있습니다</span>*/}
                {/*<span className="mx-4">🟢 지금 방문하시면 대기 없이 <span className="text-green-600 font-bold">바로</span> 이용하실 수 있습니다</span>*/}
            </div>
        </div>
    );
};

export default MarqueeNotice;
