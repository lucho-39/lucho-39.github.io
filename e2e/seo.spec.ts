import { test, expect } from "@playwright/test";

test.describe("SEO y metadata", () => {
  test("la imagen de OpenGraph es absoluta y termina en .png", async ({ page }) => {
    await page.goto("/");

    const og = await page.locator('meta[property="og:image"]').getAttribute("content");

    // This is the check that matters: a relative URL, or one without a file
    // extension, gets discarded by the social crawlers without warning.
    expect(og).toMatch(/^https:\/\/lucho-39\.github\.io\/.+\.png/);
  });

  test("declara favicon y canonical", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", /icon\.png/);
    await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://lucho-39.github.io"
    );
  });

  test("el sitemap y robots.txt se sirven con el tipo correcto", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    expect(sitemap.headers()["content-type"]).toContain("xml");
    const xml = await sitemap.text();
    expect(xml).toContain("https://lucho-39.github.io</loc>");
    expect(xml).toContain("https://lucho-39.github.io/diploma</loc>");

    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("Sitemap: https://lucho-39.github.io/sitemap.xml");
  });

  test("los archivos de imagen se sirven como image/png", async ({ request }) => {
    for (const path of ["/opengraph-image.png", "/icon.png", "/apple-icon.png"]) {
      const res = await request.get(path);
      expect(res.status(), `${path} deberia responder 200`).toBe(200);
      expect(res.headers()["content-type"], `${path} deberia ser image/png`).toBe("image/png");
    }
  });
});

test.describe("Página del diploma", () => {
  test("se abre desde Sobre mí y tiene su propia metadata", async ({ page, context }) => {
    await page.goto("/");

    const [diploma] = await Promise.all([
      context.waitForEvent("page"),
      page.locator('section#sobre-mi a[href="/diploma"]').click(),
    ]);

    await diploma.waitForLoadState();
    await expect(diploma).toHaveTitle(/Diploma/);
    await expect(diploma.locator("h1")).toHaveText(/diploma/i);
    await expect(diploma.locator('img[src="/diploma.jpg"]')).toBeVisible();

    // The whole point of the page: the tab gets the site favicon, which a raw
    // image file cannot provide.
    await expect(diploma.locator('link[rel="icon"]')).toHaveAttribute("href", /icon\.png/);
    await expect(diploma.getByRole("link", { name: /volver/i }).first()).toHaveAttribute("href", "/");
  });

  test("responde 200 en su URL", async ({ request }) => {
    expect((await request.get("/diploma")).status()).toBe(200);
  });
});
