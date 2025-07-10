// scripts/generate-sitemap.ts
import { writeFileSync } from "fs";

const baseUrl = "https://ddeul-o-hair.vercel.app";
const staticPages = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/services",
    // 여기에 정적 페이지들 추가
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
        (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
    </url>
  `
    )
    .join("")}
</urlset>
`;

writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ sitemap.xml 생성 완료");
