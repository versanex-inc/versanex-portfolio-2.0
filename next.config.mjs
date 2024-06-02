/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com', 'www.youtube.com','unsplash.com', 'www.instagram.com', "www.pinterest.com"], // Add 'youtube.com' to the list of allowed domains
    },
  };

export default nextConfig;
