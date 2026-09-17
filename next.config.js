// IMPORTANT: keep this as a plain object literal assigned to a top-level
// `nextConfig` constant, and keep `module.exports = nextConfig` at the end.
//
// The GitHub Pages workflow runs `actions/configure-pages` with
// `static_site_generator: next`. That action reads this file and injects
// `output`, `basePath` and `images.unoptimized` into the top-level declaration
// it finds here. Exporting a function instead made the parser fail, and the
// failure surfaced as a confusing `TypeError: error must be an instance of
// Error` that broke the whole deploy step.
const nextConfig = {
  output: "export",
  // Hides the circular Next.js badge that `next dev` pins to the bottom-left
  // corner. It never ships in a production build, so this only affects local
  // development. Compile and runtime errors are still reported.
  // Set `{ position: "bottom-right" }` instead to keep it but move it.
  devIndicators: false,
};

module.exports = nextConfig;
