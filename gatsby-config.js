module.exports = {
  siteMetadata: {
    title: `Eternal Journal`,
    description: `Crystal Clarity Delivered - Welcome To A More Alive YOU!`,
    author: `William Wilder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,

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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}