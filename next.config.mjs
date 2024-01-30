/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.mattbeiswenger.com",
        permanent: true,
      },
      {
        source: "/insta",
        destination: "https://www.instagram.com/matt.beiswenger",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/mattbeiswenger",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/mattbeiswenger",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/mattbeiswenger",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
