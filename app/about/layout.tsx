import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Brand Story",
    description: "뜰오헤어의 탄생 비화와 12년 경력 최우민 원장의 디자인 철학을 소개합니다. '밝은 정오의 빛'처럼 당신의 일상을 밝히는 아름다움을 약속합니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
