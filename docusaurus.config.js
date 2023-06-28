// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");
const CodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Chanho Lee",
  tagline: "Hi, I'm Chanho Lee. I'm a software engineer.",
  titleDelimiter: '@',
  url: "https://teddygood.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "teddygood", // Usually your GitHub org/user name.
  projectName: "teddygood.github.io", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: true,
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/teddygood/teddygood.github.io/tree/main",
        },
        blog: {
          path: "blog",
          routeBasePath: "/blog",
          showReadingTime: false,
          blogTitle: "블로그",
          blogDescription: "Hi, I'm Chanho Lee. I'm a software engineer.",
          postsPerPage: 5,
          blogSidebarCount: 10,
          blogSidebarTitle: "Recent Posts",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/teddygood/teddygood.github.io/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-EFT0SBFJCH",
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "3GO7VFCZS7",
        apiKey: "23480bb28e2475827be0b837d69144b5",
        indexName: "teddygoodio",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
        debug: false,
      },
      navbar: {
        title: "Chanho Lee",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.jpg",
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'introduction',
            label: 'Docs',
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/blog/archive",
            label: "Archive",
            position: "left",
          },
          {
            to: "/blog/tags",
            label: "Tags",
            position: "left",
          },
          {
            href: "https://github.com/teddygood",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://www.linkedin.com/in/teddygood/",
            position: "right",
            className: "header-linkedin-link",
            "aria-label": "LinkedIn Account",
          },
        ],
      },
      footer: {
        style: "light",
        /*
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        */
        copyright: `Copyright © ${new Date().getFullYear()} teddygood`,
      },
      prism: {
        theme: CodeTheme,
        darkTheme: CodeTheme,
        additionalLanguages: ["java", "kotlin", "scala"],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
    }),
};

module.exports = config;
