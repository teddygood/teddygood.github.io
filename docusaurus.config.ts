import { themes as prismThemes } from 'prism-react-renderer';
import remarkKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { type Config } from '@docusaurus/types';
import { type Preset, type ThemeConfig } from '@docusaurus/preset-classic';

const CodeTheme = prismThemes.dracula;

const config: Config = {
  title: 'Chanho Lee',
  tagline: 'Hi, I am Chanho Lee. I am a software engineer.',
  titleDelimiter: '@',
  url: 'https://teddygood.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'teddygood', // Usually your GitHub org/user name.
  projectName: 'teddygood.github.io', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        url: 'https://teddygood.github.io',
        baseUrl: '/',
        translate: false,
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        url: 'https://teddygood.github.io',
        baseUrl: '/en/',
        translate: true,
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki',
          sidebarPath: './sidebars.js',
          breadcrumbs: true,
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [remarkKatex],
          editUrl: 'https://github.com/teddygood/teddygood.github.io/tree/main',
        },
        blog: {
          path: 'blog',
          routeBasePath: '/blog',
          showReadingTime: false,
          blogTitle: '블로그',
          blogDescription: 'Hi, I am Chanho Lee. I am a software engineer.',
          postsPerPage: 5,
          blogSidebarCount: 10,
          blogSidebarTitle: 'Recent Posts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [remarkKatex],
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          editUrl: 'https://github.com/teddygood/teddygood.github.io/tree/main',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        gtag: {
          trackingID: 'G-EFT0SBFJCH',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig: {
    algolia: {
      appId: '3GO7VFCZS7',
      apiKey: '23480bb28e2475827be0b837d69144b5',
      indexName: 'teddygoodio',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      debug: false,
    },
    navbar: {
      title: 'Chanho Lee',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Wiki',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/blog/archive',
          label: 'Archive',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right', // 또는 'left' 등 위치 지정
        },
        {
          href: 'https://github.com/teddygood',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.linkedin.com/in/teddygood/',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'LinkedIn Account',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} teddygood`,
    },
    prism: {
      theme: CodeTheme,
      darkTheme: CodeTheme,
      additionalLanguages: ['java', 'kotlin', 'scala'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies ThemeConfig,
};

export default config;
