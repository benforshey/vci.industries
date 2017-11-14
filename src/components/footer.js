import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  color: hsl(0, 0%, 100%);
  background: hsl(270, 2%, 25%);
  padding: 1em 4vw;
  margin-top: 14vw;

  & a {
    color: hsl(0, 0%, 100%);
  }
`

const FooterComponent = () => (
  <Footer id='footer'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim nesciunt atque corporis corrupti eaque laudantium dolor facilis, dignissimos, recusandae in quaerat eius ex, eveniet animi quidem vel facere et?</p>
    <a href='https://cms.vci.industries' target='_blank'>enter site content</a>
  </Footer>
)

export default FooterComponent
