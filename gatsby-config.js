module.exports = {
  siteMetadata: {
    title: `Eternal Journal`,
    description: `Crystal Clarity Delivered - Welcome To A More Alive YOU!`,
    author: `William Wilder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 500,
              wrapperStyle: fluidResult =>
                `flex:${(fluidResult.aspectRatio, 2)};`,
            },
          },
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eternal Journal Ecommerce PWA`,
        short_name: `EtnJournal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#52796F`,
        display: `minimal-ui`,
        icon: `src/images/favicon/Visual_Small_PNG.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Oswald",
              variants: ["600"],
            },
            {
              family: "Sorts Mill Goudy",
              variants: ["400"],
            },
            {
              family: "Montserrat",
              variants: ["300", "400"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about/`,
          `/blog/*`,
          `/contact/`,
          `/index/`,
          `/faq/`,
          `guided-journals/`,
          `/mission/`,
        ],
      },
    },
  ],
}
