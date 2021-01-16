/* eslint-disable quotes */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Shoppies',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shoppies Web App`,
        short_name: `Shoppies`,
        description: `A simple web app for nominating movies.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/assets/logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro\:400,600,700`],
        display: 'swap',
      },
    },
  ],
};
