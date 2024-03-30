module.exports = {
  pathPrefix: `/SwarmPlus-LP`,
  siteMetadata: {
    title: `SwarmPlus`,
    description: `SwarmPlus landing page.`,
    author: `daichi.suyama`,
    siteUrl: `https://suyama-daichi.github.io/SwarmPlus-LP/`,
  },
  plugins: [
    `gatsby-plugin-typegen`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-P7HRM2QTPC",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
