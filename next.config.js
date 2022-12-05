/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ['images.pexels.com', "www.freepnglogos.com","cdn.sanity.io" ,"cdn.pixabay.com" ]
  }
}
