import { NextResponse } from 'next/server';
import posts from '@/data/posts.json';

export async function GET() {
  const baseUrl = 'https://ddeul-o-hair.vercel.app';

  const rssItems = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.id}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <guid>${baseUrl}/blog/${post.id}</guid>
    </item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>뜰오헤어 안중점 소식 &amp; 매거진</title>
    <link>${baseUrl}</link>
    <description>안중에 위치한 뜰오헤어 미용실 최신 소식과 헤어케어 꿀팁 매거진</description>
    <language>ko-KR</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
    },
  });
}
