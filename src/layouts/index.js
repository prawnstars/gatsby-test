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
      <link rel="icon" type="image/png" href="img/favicon32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="img/favicon96.png" sizes="96x96" />
      {/* Favicons: (Old) iPhone, - 6+, iPad, - Pro */}
      <link rel="apple-touch-icon" href="img/favicon120.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="img/favicon152.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="img/favicon167.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="img/favicon180.png" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossOrigin="anonymous" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <meta name="author" content="/humans.txt" />
      <meta name="description" content="Roar is a voice assistant for Jira, taming Jira and making your life easier." />
      <link type="text/plain" rel="author" href="/humans.txt" />
    </Helmet>
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
    {/* jQuery first, then Popper.js, then Bootstrap JS */}
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
    {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>*/}
    {/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossOrigin="anonymous"></script>*/}
    {/* jQuery plugin for background video */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vide/0.5.1/jquery.vide.min.js" integrity="sha384-HrvxqSB39Hu3s6irloAFSGArU7bzw4zYBhUmFAhppmg5gee89dBq7tjJ20CPq8Bk" crossOrigin="anonymous"></script>
    {/* Our own script */}
    <script src="js/main.js"></script>
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
