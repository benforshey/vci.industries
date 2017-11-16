import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'

import './global.css'
import logo from '../images/logo_dark.svg'

const TemplateWrapper = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
      >
        <html lang={`en`} />
        <meta name='description' content={data.site.siteMetadata.description} />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#3cb149' />
        <meta name='apple-mobile-web-app-title' content='VCI' />
        <meta name='application-name' content='VCI' />
        <meta name='theme-color' content='#3cb149' />

        <script type='application/ld+json'>
          {`{"@context":"http://schema.org", "@type":"WebSite", "url":"https://www.vci.industries", "name":"Victor Concrete, Inc. (VCI)", "description":"${data.site.siteMetadata.description}", "image":"${logo}"}`}
        </script>
        <script type='application/ld+json'>
          {`{"@context":"http://schema.org", "@type":"Organization", "legalName":"Victor Concrete, Inc.","address":"6135 Barcelona Ave, Riverside, CA 92509-1726", "email":"estimating@vci.industries", "telephone":"(951) 686-4215"}`}
        </script>
        <script type='application/ld+json'>
          {`{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "item": { "@id": "https://www.vci.industries/", "name": "home" } }] }`}
        </script>
      </Helmet>
      <Header />
      {children()}
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
