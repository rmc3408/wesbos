/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/rmc3408/**',
      },
    ],
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
