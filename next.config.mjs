/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production verification separate from a running dev server when needed.
  distDir: process.env.NMT_BUILD_DIR || ".next",
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '</llms.txt>; rel="describedby"; type="text/plain"',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/our-products", destination: "/#projects", permanent: true },
      {
        source: "/our-products/product/:productId",
        destination: "/#projects",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
