const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias.react = path.resolve("./node_modules/react")
    return config
  },
}

module.exports = nextConfig
