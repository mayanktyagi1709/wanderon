/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signup',
        permanent: true, // Set to true for a permanent redirect (308)
      },
    ]
  },
};

export default nextConfig;
