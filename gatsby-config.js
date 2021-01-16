/* eslint-disable quotes */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Shoppies',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro\:400,600,700`],
        display: 'swap',
      },
    },
  ],
};
