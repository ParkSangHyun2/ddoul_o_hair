import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Location",
    description: "뜰오헤어 안중점 오시는 길 안내입니다. 평택 안중읍 안중로 8 1층에 위치하고 있으며, 매장 앞 주차가 가능합니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
