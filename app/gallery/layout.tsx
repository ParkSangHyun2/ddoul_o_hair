import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Collection",
    description: "뜰오헤어의 감각적인 스타일 포트폴리오를 확인해 보세요. 고객님 한 분 한 분의 무드에 맞춘 최상의 결과를 약속합니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
