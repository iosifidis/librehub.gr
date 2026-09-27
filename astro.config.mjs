// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// Check if a custom domain CNAME exists (e.g. for GitHub Pages with custom domain)
const hasCustomDomain = fs.existsSync('./public/CNAME');

// Determine base path:
// - Explicit env variable (SITE_BASE) takes precedence
// - If CNAME exists, it's deployed to custom domain root: '/'
// - If running in GitHub Actions without custom domain, it's a project site: '/librehub.gr/'
// - Otherwise (Docker, local development, Netlify, custom domain servers): '/'
const getBasePath = () => {
  if (process.env.SITE_BASE !== undefined) return process.env.SITE_BASE;
  if (hasCustomDomain) return '/';
  if (process.env.GITHUB_ACTIONS === 'true') return '/librehub.gr/';
  return '/';
};

const getSiteUrl = () => {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  if (hasCustomDomain) {
    const cname = fs.readFileSync('./public/CNAME', 'utf-8').trim();
    return `https://${cname}`;
  }
  if (process.env.GITHUB_ACTIONS === 'true') return 'https://iosifidis.github.io';
  return 'https://librehub.netlify.app';
};

export default defineConfig({
  site: getSiteUrl(),
  base: getBasePath(),
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});