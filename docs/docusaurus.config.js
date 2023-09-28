// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Natuerlich Documentation",
  tagline: "Natuerlich: WebXR Interaction for Three.js",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://coconut-xr.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/natuerlich",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Coconut XR", // Usually your GitHub org/user name.
  projectName: "natuerlich", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  staticDirectories: ["static"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/header.jpg",
      announcementBar: {
        id: "join_discord",
        content:
          'Got any questions? Join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/RbyaXJJaJM">Discord</a>!',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "natuerlich",
        logo: {
          alt: "Natuerlich Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-light.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/tutorials", label: "Tutorials", position: "left" },
          { to: "/showcases", label: "Showcases", position: "left" },
          {
            href: "https://github.com/coconut-xr",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: "Maintained by Coconut XR powered by Coconut Capital",
        links: [
          {
            title: "Coconut-XR Ecosystem",
            items: [
              {
                label: "Koestlich",
                href: "https://coconut-xr.github.io/koestlich/",
              },
              {
                label: "Natuerlich",
                href: "https://coconut-xr.github.io/natuerlich/",
              },
              {
                label: "Apfel Kruemel",
                href: "https://coconut-xr.github.io/apfel-kruemel/docs/",
              },
            ],
          },

          {
            title: "Community",
            items: [
              {
                label: "Join our Discord",
                href: "https://discord.gg/RbyaXJJaJM",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/coconut_xr",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/coconut-xr",
              },
              {
                label: "Coconut XR",
                href: "https://coconut-xr.com",
              },
              {
                label: "Coconut Capital",
                href: "https://coconut.capital/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 95,
        max: 1024, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      }
    ],
    ["@cmfcmf/docusaurus-search-local",
      {  
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: true,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: "en",

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 5,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        }
      }
      ]
  ],
};

module.exports = config;
