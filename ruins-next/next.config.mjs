/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

// const withTM = require('next-transpile-modules')(['three'])
// module.exports = withTM()

export default nextConfig;
