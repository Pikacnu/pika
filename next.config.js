/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: 'export',
<<<<<<< Updated upstream
    distDir: ['images','appDir','output','distDir'],
=======
    images: true,
    modern: true,
    optimizeFonts: true,
    optimizeImages: true,
    optimizeCss: true,
    scrollRestoration: true,
    stats: true,
    workerThreads: true,
>>>>>>> Stashed changes
  },
}

module.exports = nextConfig
