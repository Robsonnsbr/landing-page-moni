export const dynamic = "force-dynamic";

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://landing.moccelinadvocacia.com/";

  const robotsTxt = `
    User-agent: *
    Allow: /
    Allow: /favicon.ico
    Sitemap: ${siteUrl}/sitemap.xml
  `;

  return new Response(robotsTxt.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
