/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `clean-for-you`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-styled-components", "gatsby-plugin-netlify", "gatsby-transformer-remark", "gatsby-transformer-yaml", `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    //manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cleanforyou`,
        short_name: `Cleanforyou`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#07407B`,
        display: `standalone`,
        icon: `${__dirname}/src/images/logo.svg`,
      },
    },
    //data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    }, 
    //maps
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
};