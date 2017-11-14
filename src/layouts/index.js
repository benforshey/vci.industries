import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import styled, { injectGlobal } from 'styled-components'
import { fonts, reset, common } from '../utils/css-global'

import logo from '../images/logo-large.svg'

injectGlobal`
  ${reset}
  ${fonts}
  ${common}
`
const App = styled.div`

`

const TemplateWrapper = ({ children, data }) => {
  return (
    <App>
      <Helmet
        title={data.site.siteMetadata.title}
      >
        <html lang={`en`} />
        <meta name='description' content={data.site.siteMetadata.description} />
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
    </App>
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
