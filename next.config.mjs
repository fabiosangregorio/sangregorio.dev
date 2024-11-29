/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // For GitHub Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '', // For GitHub Pages assets
};

export default nextConfig; 