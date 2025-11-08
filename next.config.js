// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';

// When deployed to https://username.github.io/<repo>/, Next needs a basePath.
// Locally or on custom domains, leave it empty.
const basePath = isGithubActions ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',               // write static site to ./out
  basePath,                       // e.g. "/cafe-site-static" on GH Pages project site
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },  // GH Pages can't run Next image optimizer
};

module.exports = nextConfig;
