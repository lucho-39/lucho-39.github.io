import { defineConfig, devices } from "@playwright/test";

const PORT = 4173;

/**
 * Smoke tests for the portfolio.
 *
 * They run against the *production build* served from `out/`, not against the
 * dev server, because that is what actually gets published. `next dev` also
 * behaves differently from the static export in ways that matter here (the
 * exported files, the clean URLs, the metadata).
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    // Locally the suite builds first so it always tests the current source. In
    // CI the build already ran in an earlier workflow step, and rebuilding here
    // would just double the pipeline time as well as shadow the deployed
    // artifact.
    command: process.env.CI
      ? `pnpm exec serve out -l ${PORT}`
      : `pnpm build && pnpm exec serve out -l ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
