/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: 'export',
    distDir: ['images','appDir','output','distDir'],
  },
}

module.exports = nextConfig
