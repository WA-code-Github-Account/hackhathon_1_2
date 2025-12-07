// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Comprehensive Guide to Intelligent Humanoid Systems',
  
  // GitHub Pages URL - TUMHARA DEPLOYMENT URL
  url: 'https://A-Siddiqui-coder.github.io',
  baseUrl: '/humanoid-robotics-book/',
  
  // GitHub Info
  organizationName: 'A-Siddiqui-coder', // Your GitHub username
  projectName: 'humanoid-robotics-book', // Your repo name
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/A-Siddiqui-coder/humanoid-robotics-book/tree/main/docs-site/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/A-Siddiqui-coder/humanoid-robotics-book/tree/main/docs-site/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Metadata for SEO
    metadata: [
      {name: 'keywords', content: 'humanoid robotics, physical AI, robotics book, AI systems, GIAIC'},
      {name: 'author', content: 'Aziza Siddiqui'},
    ],
    
    navbar: {
      title: 'Humanoid Robotics',
      logo: {
        alt: 'Robotics Logo',
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
          to: '/docs/physical-ai-humanoid-robotics/part1-foundations/intro',
          label: 'Part 1',
          position: 'left',
        },
        {
          to: '/docs/physical-ai-humanoid-robotics/part2-core-technologies/intro',
          label: 'Part 2',
          position: 'left',
        },
        {
          to: '/docs/physical-ai-humanoid-robotics/part3-advanced-topics/intro',
          label: 'Part 3',
          position: 'left',
        },
        {
          to: '/docs/physical-ai-humanoid-robotics/part4-interdisciplinary-frontiers/intro',
          label: 'Part 4',
          position: 'left',
        },
        {
          href: 'https://github.com/A-Siddiqui-coder/humanoid-robotics-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book Sections',
          items: [
            {
              label: 'Introduction',
              to: '/docs/physical-ai-humanoid-robotics/intro',
            },
            {
              label: 'Part 1: Foundations',
              to: '/docs/physical-ai-humanoid-robotics/part1-foundations/intro',
            },
            {
              label: 'Part 2: Core Technologies',
              to: '/docs/physical-ai-humanoid-robotics/part2-core-technologies/intro',
            },
            {
              label: 'Part 3: Advanced Topics',
              to: '/docs/physical-ai-humanoid-robotics/part3-advanced-topics/intro',
            },
          ],
        },
        {
          title: 'More Chapters',
          items: [
            {
              label: 'Part 4: Applications',
              to: '/docs/physical-ai-humanoid-robotics/part4-interdisciplinary-frontiers/intro',
            },
            {
              label: 'Chapter 1: Introduction',
              to: '/docs/physical-ai-humanoid-robotics/part1-foundations/chapter1-introduction',
            },
            {
              label: 'Chapter 20: Conclusion',
              to: '/docs/physical-ai-humanoid-robotics/part4-interdisciplinary-frontiers/chapter20-conclusion',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/A-Siddiqui-coder/humanoid-robotics-book',
            },
            {
              label: 'GIAIC Official',
              href: 'https://www.governorsindh.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aziza Siddiqui | GIAIC Student. Built with Docusaurus.`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'typescript', 'jsx'],
    },
    
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    // Better docs navigation
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;