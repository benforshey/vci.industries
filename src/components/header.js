import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import logo from '../images/logo-large.svg'

const Header = styled.header`
  align-items: center;
  box-shadow: inset 0 4px 0 0 hsl(127, 49%, 46%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 4vw;

  @media (min-width: 43.75em) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Image = styled.img`
  width: 10em;
`
const Nav = styled.nav`
  margin-top: 2vw;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 43.75em) {
    flex: 0 1 50%;
  }

  @media (min-width: 62.5em) {
    flex: 0 1 40%;
  }
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`
const StyledLink = styled(Link)`

  &:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }
`

const StyledAnchorLink = styled(AnchorLink)`
  box-shadow: 0 2px 0 0 #414042;
  color: #414042;
  font-size: .875em;
  font-weight: 700;
  text-decoration: none;

  &:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }
`

const HeaderComponent = () => (
  <Header role='banner'>
    <StyledLink to='/'><Image src={logo} alt='Victor Concrete, Inc. (VCI)' /></StyledLink>
    <Nav role='navigation'>
      <Ul>
        <li><StyledAnchorLink href='#footer'>BENEFITS</StyledAnchorLink></li>
        <li><StyledAnchorLink href='#footer'>QUALITY</StyledAnchorLink></li>
        <li><StyledAnchorLink href='#footer'>CLIENTS</StyledAnchorLink></li>
        <li><StyledAnchorLink href='#footer'>CONTACT</StyledAnchorLink></li>
      </Ul>
    </Nav>
  </Header>
)

export default HeaderComponent
