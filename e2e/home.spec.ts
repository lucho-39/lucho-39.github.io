import { test, expect } from "@playwright/test";

test.describe("Página principal", () => {
  test("carga sin errores de consola ni recursos rotos", async ({ page }) => {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("requestfailed", (req) => {
      if (req.url().startsWith("http://localhost")) failedRequests.push(req.url());
    });
    page.on("response", (res) => {
      if (res.status() >= 400 && res.url().startsWith("http://localhost")) {
        failedRequests.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // This is the test that would have caught the broken navbar logo and the
    // project links that pointed nowhere.
    expect(failedRequests, `recursos que fallaron:\n${failedRequests.join("\n")}`).toEqual([]);
    expect(consoleErrors, `errores de consola:\n${consoleErrors.join("\n")}`).toEqual([]);
  });

  test("tiene el título y la descripción", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Lucho Santa Cruz — Desarrollador Web Full Stack");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /Desarrollador Web Full Stack/
    );
  });

  test("renderiza todas las secciones en orden", async ({ page }) => {
    await page.goto("/");

    for (const id of ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"]) {
      await expect(page.locator(`section#${id}`)).toHaveCount(1);
    }

    // The nav and the footer belong to the site, not to the page content, so
    // they must live outside <main>.
    await expect(page.locator("main#contenido")).toHaveCount(1);
    await expect(page.locator("main#contenido nav")).toHaveCount(0);
    await expect(page.locator("main#contenido footer")).toHaveCount(0);
    await expect(page.locator("body > nav")).toHaveCount(1);
    await expect(page.locator("body > footer")).toHaveCount(1);
  });

  test("los enlaces del nav llevan a su sección", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("navigation").getByRole("link", { name: "Proyectos" }).click();
    await expect(page).toHaveURL(/#proyectos$/);
    await expect(page.locator("section#proyectos")).toBeInViewport();
  });

  test("muestra los 4 proyectos con el botón de demo deshabilitado", async ({ page }) => {
    await page.goto("/");
    const proyectos = page.locator("section#proyectos");

    await expect(proyectos.getByText("Recetario IA")).toBeVisible();
    await expect(proyectos.locator('a[href="https://github.com/lucho-39/sdd-recetas"]')).toHaveCount(1);

    // No working live demos, so "Ver proyecto" is visible but disabled and must
    // never be a link to "#" or to null.
    const demoButtons = proyectos.getByRole("button", { name: "Ver proyecto" });
    await expect(demoButtons).toHaveCount(4);
    for (let i = 0; i < 4; i++) await expect(demoButtons.nth(i)).toBeDisabled();

    const codeLinks = proyectos.getByRole("link", { name: "Código" });
    await expect(codeLinks).toHaveCount(4);
    for (let i = 0; i < 4; i++) {
      await expect(codeLinks.nth(i)).toHaveAttribute("href", /^https:\/\/github\.com\/lucho-39\//);
      await expect(codeLinks.nth(i)).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("los datos de contacto son enlaces reales", async ({ page }) => {
    await page.goto("/");
    const contacto = page.locator("section#contacto");

    await expect(contacto.locator('a[href^="mailto:"]')).toHaveCount(1);
    await expect(contacto.locator('a[href^="tel:"]')).toHaveCount(1);
    await expect(contacto.locator("form")).toHaveCount(0);
  });

  test("los fondos de sección están aplicados", async ({ page }) => {
    await page.goto("/");

    for (const [id, fondo] of [
      ["inicio", "fondo2.jpg"],
      ["sobre-mi", "fondo3.jpg"],
      ["proyectos", "fondo.jpg"],
      ["contacto", "fondo4.jpeg"],
    ] as const) {
      const layer = page.locator(`section#${id} > div[aria-hidden="true"]`).first();
      await expect(layer).toHaveCSS(
        "background-image",
        new RegExp(fondo.replace(".", "\\."))
      );
    }
  });
});
