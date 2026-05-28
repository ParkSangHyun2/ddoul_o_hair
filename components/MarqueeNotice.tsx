import contentData from '@/data/content.json';

const MarqueeNotice = () => {
    return (
        <div className="fixed top-[77px] left-0 z-50 shadow-sm w-full marquee-wrapper bg-white/90 backdrop-blur-sm border-b border-stone-100">
            <div className="marquee-content py-2">
                <span className="mx-8 text-stone-600 text-sm font-light tracking-wider">
                    {contentData.notice}
                </span>
                <span className="mx-8 text-stone-600 text-sm font-light tracking-wider">
                    {contentData.notice}
                </span>
            </div>
        </div>
    );
};

export default MarqueeNotice;
