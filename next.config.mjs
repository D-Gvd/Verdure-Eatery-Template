/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add any image CDN domains you use here.
    // "images.unsplash.com" is used for the default placeholder images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add your own CDN or CMS image domain here, e.g.:
      // { protocol: "https", hostname: "your-cms.io" },
    ],
  },
};

export default nextConfig;
