import { test, expect } from "@playwright/test";

test.describe("Accesibilidad", () => {
  test("el skip link es el primer foco y salta al contenido", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Saltar al contenido" });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#contenido$/);
  });

  test.describe("toggle de tema", () => {
    // Pin the OS preference so the starting theme does not depend on the host.
    test.use({ colorScheme: "light" });

    test("cambia a oscuro y vuelve a claro", async ({ page }) => {
      await page.goto("/");
      const html = page.locator("html");
      const boton = page.getByRole("button", { name: "Cambiar tema" });

      await expect(html).not.toHaveClass(/dark/);

      await boton.click();
      await expect(html).toHaveClass(/dark/);

      await boton.click();
      await expect(html).not.toHaveClass(/dark/);
    });
  });

  test.describe("menú mobile", () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test("abre, cierra con Escape y devuelve el foco al botón", async ({ page }) => {
      await page.goto("/");

      const toggle = page.getByRole("button", { name: /menú/i });
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(toggle).toHaveAttribute("aria-controls", "menu-mobile");

      await toggle.click();
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
      await expect(page.locator("#menu-mobile")).toBeVisible();

      await page.keyboard.press("Escape");
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(page.locator("#menu-mobile")).toBeHidden();
      await expect(toggle).toBeFocused();
    });

    test("los links del menú no son alcanzables con el menú cerrado", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("#menu-mobile a").first()).toBeHidden();
    });

    test("un link del menú navega y lo cierra", async ({ page }) => {
      await page.goto("/");

      const toggle = page.getByRole("button", { name: /menú/i });
      await toggle.click();

      await page.locator("#menu-mobile").getByRole("link", { name: "Proyectos" }).click();
      await expect(page).toHaveURL(/#proyectos$/);
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
    });
  });
});
