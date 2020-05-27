import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../images/logo_dark.svg";

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
`;

const Image = styled.img`
  width: 10em;
`;
const Nav = styled.nav`
  font-size: 0.875em;
  margin-top: 2vw;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 43.75em) {
    flex: 0 1 65%;
    font-size: 1em;
    margin-top: 0;
  }

  @media (min-width: 62.5em) {
    flex: 0 1 55%;
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  box-shadow: 0 2px 0 0 #414042;
  color: #414042;
  font-size: 0.875em;
  font-weight: 700;
  text-decoration: none;

  &:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }
`;

const HeaderComponent = () => (
  <Header role="banner">
    <Link to="/">
      <Image src={logo} alt="Victor Concrete, Inc. (VCI)" />
    </Link>
    <Nav role="navigation">
      <Ul>
        <li>
          <StyledLink to="/">HOME</StyledLink>
        </li>
        <li>
          <StyledLink to="/about/">ABOUT</StyledLink>
        </li>
        <li>
          <StyledLink to="/benefits/">BENEFITS</StyledLink>
        </li>
        <li>
          <StyledLink to="/work/">WORK</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact/">CONTACT</StyledLink>
        </li>
      </Ul>
    </Nav>
  </Header>
);

export default HeaderComponent;
