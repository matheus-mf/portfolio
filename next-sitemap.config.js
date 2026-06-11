/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://matheusmf.dev',
  generateRobotsTxt: true,
  // Site mono-página: apenas a raiz é indexada.
  exclude: ['/404', '/500'],
  // XML enxuto: só loc + lastmod (Google ignora changefreq/priority).
  transform: async (config, path) => ({
    loc: path,
    lastmod: new Date().toISOString(),
  }),
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
