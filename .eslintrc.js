/**
 * ESLint config for Next.js 14 (App Router).
 *
 * `next/core-web-vitals` is the preset Next recommends: the base rules plus the
 * ones that catch problems affecting Core Web Vitals.
 *
 * `@next/next/no-img-element` is disabled on purpose. This site is a static
 * export (`output: 'export'`), where `next/image` only works if
 * `images.unoptimized` is set explicitly in next.config.js — otherwise the
 * build fails. Every image is therefore a plain <img> with explicit width and
 * height, which is what that rule would otherwise flag on every occurrence.
 *
 * ESLint 8 is required here: eslint-config-next 14.x declares
 * `eslint: ^7.23.0 || ^8.0.0`. Do not jump to ESLint 9+ without also moving to
 * a Next version that supports it.
 */
module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "@next/next/no-img-element": "off",
  },
};
