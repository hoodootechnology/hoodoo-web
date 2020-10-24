module.exports = {
  siteMetadata: {
    title: `chefed`,
    description: `Do you need a cook in Bangalore and are worried about Covid19? We can help. Get your free trial today!`,
    author: `@hoodoocooks`,
    siteUrl: 'https://www.chefed.co',
    keywords: [
      "Cooks",
      "Bangalore",
      "Banglore",
      "Bengaluru",
      "Homemade",
      "food",
      "Chefed",
      "Chef",
      "Hygienic",
      "Covid19",
      "Agency",
      "Startup",
      "Cooks in Bangalore",
      "Cooks in banglore",
      "hygienic cooks",
      "best cooks",
      "best cooks in bangalore",
      "find cooks in bangalore",
      "hire cooks",
      "find cooks",
      "hire",
      "homemade food",
      "cook agency",
      "cooks startup",
    ],
    classification: ["Cooks", "Cook Provider", "Startup", "hygienic"],
    audience: "all",
    robots: "follow,index,noodp,noydir",
    googlebot: "index, follow",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-sitemap',
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.chefed.co',
        sitemap: 'https://www.chefed.co/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/'
        }]
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.chefed.co`,
      },
    },
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
        icon: `src/images/chefed-logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
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