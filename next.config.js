// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const basePath = isGithubActions ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',          // produce ./out on build
  basePath,                  // needed for project pages (username.github.io/repo)
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true } // GH Pages can't do Next's image optimizer
};

module.exports = nextConfig;
