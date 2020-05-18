require("dotenv").config()

const queries = require("./src/utils/algolia_queries")
module.exports = {
  siteMetadata: {
    title: `Ana Beatriz(blog);`,
    position: `Software Enginner`,
    description: `Tech Speaker • Community Co-Organizer •Java FullStack Dev • Articles about Java, WebDev and Life :p `,
    author: `@anabneri`,
    siteUrl: `https://ananeri.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-V2",
          },
          {
            resolve: "gatsby-remark-images",
            oprtions: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-plugin-disqus`,
            options: {
              shortname: `anabneri`,
            },
          },

          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ana Beatriz Neri`,
        short_name: `Ana Beatriz Neri`,
        start_url: `/`,
        background_color: `#243447`,
        theme_color: `#243447`,
        display: `minimal-ui`,
        icon: `src/images/girlicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
