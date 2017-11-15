import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  color: hsl(0, 0%, 100%);
  background: hsl(270, 2%, 25%);
  padding: 8em 4vw 1em;

  & a {
    color: hsl(0, 0%, 100%);
  }
`

const FooterComponent = () => (
  <Footer id='footer'>
    <a href='https://cms.vci.industries' target='_blank'>enter site content</a>
  </Footer>
)

export default FooterComponent
