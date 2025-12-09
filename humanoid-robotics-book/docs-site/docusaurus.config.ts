// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Comprehensive Guide to Building Intelligent Humanoid Systems',
  favicon: 'img/favicon.ico',

  url: 'https://your-site.vercel.app',
  baseUrl: '/',

  organizationName: 'aziza-siddiqui',
  projectName: 'humanoid-robotics-book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Humanoid Robotics',
        logo: {
          alt: 'Humanoid Robotics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'physical-ai-humanoid-robotics/intro',
            position: 'left',
            label: '📚 Book',
          },
          {
            href: 'https://github.com/yourusername/humanoid-robotics-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/physical-ai-humanoid-robotics/intro',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yourusername/humanoid-robotics-book',
              },
              {
                label: 'GIAIC',
                href: 'https://www.giaic.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aziza Siddiqui | GIAIC Student. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
