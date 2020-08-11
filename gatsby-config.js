module.exports = {
  siteMetadata: {
    title: `hoodoo`,
    description: `Do you need a cook and are worried about Covid19? We can help.`,
    author: `@hoodoo.co.in`,
    keywords: ['Cooks', 'Bangalore', 'Homemade', 'food', 'Hoodoo', 'Hygienic', 'Covid19', 'Agency', 'Startup']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3D5A80`,
        theme_color: `#3D5A80`,
        display: `minimal-ui`,
        icon: `src/images/hoodoo-logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174468192-1",
      },
    },
  ],
}