import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
      {/* Required meta tags */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Roar is a voice assistant for Jira, taming Jira and making your life easier." />
      <meta name="author" content="/humans.txt" />
      <link type="text/plain" rel="author" href="/humans.txt" />
      {/* Favicons: Browser, taskbar, desktop (and Google TV) */}
      <link rel="icon" type="image/png" href="img/favicon32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="img/favicon96.png" sizes="96x96" />
      {/* Favicons: (Old) iPhone, - 6+, iPad, - Pro */}
      <link rel="apple-touch-icon" href="img/favicon120.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="img/favicon152.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="img/favicon167.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="img/favicon180.png" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      {/* Custom styles for this template */}
      <link rel="stylesheet" href="css/styles.css" />

    </Helmet>
    <p>This after the helmet</p>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
