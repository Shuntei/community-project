module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/community/**',
      },
    ],
    domains: ['lh3.googleusercontent.com'],
  },
}
