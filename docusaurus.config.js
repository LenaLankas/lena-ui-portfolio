// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lena Lankas",
  tagline: "Welcome and thanks for stopping by my UI portfolio! Take a look around!",
  favicon: "img/headshot.png",

  url: "https://lenalankas.github.io", // Replace with your actual domain
  baseUrl: "/lena-ui-portfolio/",

  organizationName: "LenaLankas", // Replace with your GitHub org/user name
  projectName: "lena-ui-portfolio", // Replace with your repo/project name

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs if not needed
        blog: {
          showReadingTime: true,
          // Add any additional blog configuration if needed
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Lena Lankas",
        logo: {
          alt: "My UI Portfolio Logo",
          src: "img/headshot.png",
        },
        items: [
          { to: "/about-me", label: "About Me", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "right" },
          {
            href: "https://github.com/LenaLankas/lena-ui-portfolio",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            //title: "About Me",
            items: [{ label: "About Me", to: "/about-me" }],
          },
          {
            //title: "Projects",
            items: [{ label: "Projects", to: "/projects" }],
          },
          {
            //title: "Blog",
            items: [{ label: "Blog", to: "/blog" }],
          },
          {
            //title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/your-org/my-ui-portfolio",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My UI Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
