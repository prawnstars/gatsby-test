module.exports = {
  siteMetadata: {
    title: 'Roar - Voice Assitant for Jira',
  },
  pathPrefix: '/gatsby-test',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-101598482-2',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
