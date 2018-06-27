require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Construction Services | VCI ',
    description: 'Founded in 1989, VICTOR Construction, Inc. (VCI) is a family-owned and operated business based out of Riverside, CA. VCI specializes in construction, concrete paving, and other specialty concrete services for federal, state, and public works agencies and industrial and commercial clients in California.',
    siteUrl: 'https://www.vci.industries',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'cms.vci.industries',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: true,
        auth: {
          htaccess_user: process.env.WP_USER,
          htaccess_pass: process.env.WP_PASSWORD,
          htaccess_sendImmediately: false,
          wpcom_app_clientSecret: '',
          wpcom_app_clientId: '',
          wpcom_user: '',
          wpcom_pass: '',
        },
        verboseOutput: false,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-109382579-1',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline', // Shall be after `gatsby-plugin-manifest`.
    'gatsby-plugin-netlify', // Shall be last.
  ],
};
