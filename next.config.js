// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';

// basePath only when hosted on GitHub Pages
const basePath = isGithubActions ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,                    // correct syntax
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },         // disable image optimizer for GH Pages
};

module.exports = nextConfig;
