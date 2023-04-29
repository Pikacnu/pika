/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    output: 'export',
    distDir: ['images','appDir','output','distDir'],
  },
}

module.exports = nextConfig
