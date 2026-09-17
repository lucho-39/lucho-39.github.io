import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

/**
 * ESLint flat config, which is what ESLint 9 expects and what Next 16 requires:
 * `next lint` no longer exists, so linting runs through the ESLint CLI.
 *
 * `next/core-web-vitals` is the preset Next recommends: the base rules plus the
 * ones that catch problems affecting Core Web Vitals.
 */
export default defineConfig([
  ...nextVitals,

  globalIgnores([
    // Defaults from eslint-config-next.
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Test runner output.
    "test-results/**",
    "playwright-report/**",
  ]),

  {
    rules: {
      // Disabled on purpose. This site is a static export (`output: 'export'`),
      // where `next/image` only works if `images.unoptimized` is set explicitly
      // in next.config.js — otherwise the build fails. Every image is therefore
      // a plain <img> with explicit width and height, which is what this rule
      // would otherwise flag on every single occurrence.
      "@next/next/no-img-element": "off",
    },
  },
]);
