import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/styles.scss';


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
      
      <meta name="author" content="/humans.txt" />
      <meta name="description" content="Roar is a voice assistant for Jira, taming Jira and making your life easier." />
      <link type="text/plain" rel="author" href="/humans.txt" />
    </Helmet>

    { children() }

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
