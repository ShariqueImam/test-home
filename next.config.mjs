/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure this is enabled
  },
  images: {
    domains: ["cdn.sanity.io"], // Add your CDN domains here
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**.caregivingmanagement.com", // Supports wildcard domains
    //   },
    // ],
  },
};

export default nextConfig;
