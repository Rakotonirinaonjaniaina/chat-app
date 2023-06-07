/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/Signin',
        destination: '/Signin',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
