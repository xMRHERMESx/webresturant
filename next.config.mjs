/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  allowedDevOrigins: process.env.BASE44_PUBLIC_HOST_SUFFIX
    ? ['https://3000-' + process.env.BASE44_PUBLIC_HOST_SUFFIX]
    : [],
};

export default nextConfig;
