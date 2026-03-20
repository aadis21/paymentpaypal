/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.paypalobjects.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
