
/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const basePath = isGithubActions ? `/${repo}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined
};

export default nextConfig;
