// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const CodeTheme = require("prism-react-renderer/themes/dracula");

// const lightCodeTheme = require("prism-react-renderer/themes/github");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "teddygood",
  tagline: "Dinosaurs are cool",
  url: "https://teddygood.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
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
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/docs",
          breadcrumbs: true,
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/teddygood/teddygood.github.io",
        },
        blog: {
          showReadingTime: false,
          blogTitle: "Chanho Lee",
          blogDescription: "Hi, I'm Chanho Lee. I'm a software engineer.",
          postsPerPage: 10,
          blogSidebarCount: 10,
          blogSidebarTitle: "Recent Posts",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/teddygood/teddygood.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-EFT0SBFJCH",
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
        appId: "VI4M53X9CF",
        apiKey: "02d52e3bd34bf1d5899ef33517482ce3",
        indexName: "my_blog",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
        debug: false,
      },
      navbar: {
        title: "Chanho Lee",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/blog/archive", label: "Archive", position: "left" },
          { to: "/blog/tags", label: "Tags", position: "left" },
          // { to: "/docs", label: "TIL", position: "left" },
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
      /*
      footer: {
        style: "dark",
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
        copyright: `Copyright © ${new Date().getFullYear()} teddygood Built with Docusaurus.`,
      },
      */
      prism: {
        theme: CodeTheme,
        darkTheme: CodeTheme,
        additionalLanguages: ["java", "kotlin", "scala"],
      },
    }),
};

module.exports = config;
