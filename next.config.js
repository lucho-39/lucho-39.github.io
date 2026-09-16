const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",
    // `next build` and `next dev` must not share a build directory: writing a
    // production build into `.next` while the dev server is reading it corrupts
    // the webpack runtime, and dev then fails with "Cannot find module './NNN.js'".
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  };

  return nextConfig;
};
