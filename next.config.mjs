/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Ship the private /certificates folder with the serverless bundle for the protected route.
    outputFileTracingIncludes: {
      "/api/certificates/[id]": ["./certificates/**/*"],
    },
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
