import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../images/logo_light.svg";

const Footer = styled.footer`
  color: hsl(0, 0%, 100%);
  background: hsl(270, 2%, 25%);
  display: flex;
  font-size: 0.875em;
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
`;

const CenteredLogo = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 0 100%;
  margin: 2em auto;
`;

const CenteredCopyright = styled.p`
  flex: 1 0 100%;
  font-style: italic;
  margin-top: 2em;
  text-align: center;
`;

const Image = styled.img`
  width: 10em;
`;

const UL = styled.ul`
  & li {
    margin: 0.5em 0;
  }
`;

const FooterLink = styled(Link)`
  box-shadow: 0 2px 0 0 #ffffff;
  color: #ffffff;
  text-decoration: none;

  &:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }
`;

const FooterComponent = () => (
  <Footer id="footer">
    <CenteredLogo>
      <Image src={logo} alt="Victor Concrete, Inc. (VCI)" />
    </CenteredLogo>
    <div>
      <h3>Site Links</h3>
      <UL>
        <li>
          <FooterLink to="/">HOME</FooterLink>
        </li>
        <li>
          <FooterLink to="/about">ABOUT</FooterLink>
        </li>
        <li>
          <FooterLink to="/benefits">BENEFITS</FooterLink>
        </li>
        <li>
          <FooterLink to="/work">WORK</FooterLink>
        </li>
        <li>
          <FooterLink to="/contact">CONTACT</FooterLink>
        </li>
      </UL>
    </div>
    <div>
      <h3>Address</h3>
      <address>
        6135 Barcelona Avenue
        <br />
        Riverside, CA 92509
        <br />
        <a href="tel:9516864215">951.686.4215</a>
        <br />
        <a href="mailto:estimating@vci.industries">estimating@vci.industries</a>
        <br />
        <a href="mailto:marketing@vci.industries">marketing@vci.industries</a>
      </address>
    </div>
    <div>
      <h3>Documents</h3>
      <a href="/documents/VCI_Capability_Statement.pdf" download>
        Capability Statement
      </a>
    </div>
    <CenteredCopyright>
      &copy; 1989&ndash;{new Date().getFullYear()} Victor Construction, Inc.
      (VCI). All rights reserved.
    </CenteredCopyright>
  </Footer>
);

export default FooterComponent;
