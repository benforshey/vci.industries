import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logo from '../images/logo_light.svg'

const Footer = styled.footer`
  color: hsl(0, 0%, 100%);
  background: hsl(270, 2%, 25%);
  display: flex;
  font-size: .875em;
  flex-wrap: wrap;
  justify-content: space-around;
  letter-spacing: 1px;
  padding: 0 4vw 1em;

  & a {
    color: hsl(0, 0%, 100%);
  }

  & a:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }

  & h3 {
    color: #ffffff;
    margin-top: 0;
  }

`

const CenteredLogo = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 100%;
  margin: 2em auto;
`

const CenteredCopyright = styled.p`
  flex: 1 0 100%;
  font-style: italic;
  margin-top: 2em;
  text-align: center;
`

const Image = styled.img`
  width: 10em;
`

const UL = styled.ul`
  & li {
    margin: .5em 0;
  }
`

const StyledAnchorLink = styled(AnchorLink)`
  box-shadow: 0 2px 0 0 #ffffff;
  color: #ffffff;
  text-decoration: none;

  &:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }
`

const FooterComponent = () => (
  <Footer id='footer'>
    <CenteredLogo><Image src={logo} alt='Victor Concrete, Inc. (VCI)' /></CenteredLogo>
    <div>
      <h3>Site Links</h3>
      <UL>
        <li><StyledAnchorLink href='#quality'>QUALITY</StyledAnchorLink></li>
        <li><StyledAnchorLink href='#benefits'>BENEFITS</StyledAnchorLink></li>
        <li><StyledAnchorLink href='#clients'>CLIENTS</StyledAnchorLink></li>
        <li><StyledAnchorLink href='#form'>CONTACT</StyledAnchorLink></li>
      </UL>
    </div>
    <div>
      <h3>Address</h3>
      <address>
        6135 Barcelona Avenue<br />
        Riverside, CA 92509<br />
        <a href='tel:9516864215'>951.686.4215</a><br />
        <a href='mailto:estimating@vci.industries'>estimating@vci.industries</a><br />
        <a href='mailto:marketing@vci.industries'>marketing@vci.industries</a>
      </address>
    </div>
    <CenteredCopyright>
      &copy; 1989&ndash;{new Date().getFullYear()} Victor Concrete, Inc. (VCI). All rights reserved.
    </CenteredCopyright>
  </Footer>
)

export default FooterComponent
