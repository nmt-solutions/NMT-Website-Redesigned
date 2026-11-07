/** @type {import('next').NextConfig} */
const nextConfig = {
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
