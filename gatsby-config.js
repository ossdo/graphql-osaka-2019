module.exports = {
  pathPrefix: `/graphql-osaka-2019/`,
  siteMetadata: {
    title: 'GraphQL Osaka 2019',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'graphql-osaka-2019',
        short_name: 'graphql-osaka-2019',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
