/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
      },
    ],
  },
};

module.exports = nextConfig;
