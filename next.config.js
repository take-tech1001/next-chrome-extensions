// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  future: { strictPostcssConfiguration: true },
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
