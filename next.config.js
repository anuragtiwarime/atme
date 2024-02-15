/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.ytimg.com",
      },
      {
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

module.exports = nextConfig;
