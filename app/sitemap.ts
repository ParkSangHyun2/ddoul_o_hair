import { MetadataRoute } from 'next';
import posts from '@/data/posts.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ddeul-o-hair.vercel.app';

  // 1. 기본 정적 경로들 설정
  const routes = ['', '/about', '/contact', '/gallery', '/services', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. 전체 블로그 포스트 동적 경로들 설정 (posts.json 기반)
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
