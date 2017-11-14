import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background: tomato;
  height: 10em;
`

const FooterComponent = () => (
  <Footer id='footer'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim nesciunt atque corporis corrupti eaque laudantium dolor facilis, dignissimos, recusandae in quaerat eius ex, eveniet animi quidem vel facere et?</p>
    <a href='https://cms.vci.industries' target='_blank'>enter site content</a>
  </Footer>
)

export default FooterComponent
