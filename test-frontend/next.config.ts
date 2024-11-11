import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'conteudo.imguol.com.br',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig;
