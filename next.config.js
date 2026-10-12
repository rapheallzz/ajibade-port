/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/work/07",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/work/08",
        destination: "/#work",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
