import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.0.144'],
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
