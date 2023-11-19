/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact-me",
        destination: process.env.CONTACT_ME_REDIRECT_DEST,
        permanent: false
      },
    ];
  },
};

module.exports = nextConfig;
