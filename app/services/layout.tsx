import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Services",
    description: "뜰오헤어의 프리미엄 커트, 염색, 펌 시술 메뉴와 가격 안내입니다. 1:1 맞춤 상담을 통해 최적의 스타일링을 제안해 드립니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
