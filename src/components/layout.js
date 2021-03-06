import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import { graphql, StaticQuery } from "gatsby";

import "typeface-russo-one";
import "typeface-source-sans-pro";

import logo from "../images/logo_dark.svg";
import "./global.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3cb149" />

          <meta name="apple-mobile-web-app-title" content="VCI" />
          <meta name="application-name" content="VCI" />
          <meta name="theme-color" content="#3cb149" />

          <meta property="og:image" content="/og-image.jpg" />
          <meta property="og:image:width" content="279" />
          <meta property="og:image:height" content="279" />
          <meta
            property="og:description"
            content="Founded in 1989, VICTOR Construction, Inc. (VCI) is a family-owned and operated business based out of Riverside, CA. VCI specializes in construction, concrete paving, and other specialty concrete services for federal, state, and public works agencies and industrial and commercial clients in California."
          />
          <meta property="og:title" content="Victor Concrete, Inc. (VCI)" />
          <meta property="og:url" content="https://www.vci.industries/" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="https://www.vci.industries/" />
          <meta name="twitter:title" content="Victor Concrete, Inc. (VCI)" />
          <meta
            name="twitter:description"
            content="Founded in 1989, VICTOR Construction, Inc. (VCI) is a family-owned and operated business based out of Riverside, CA. VCI specializes in construction, concrete paving, and other specialty concrete services for federal, state, and public works agencies and industrial and commercial clients in California."
          />
          <meta name="twitter:image" content="/og-image.jpg" />

          <script type="application/ld+json">
            {`{"@context":"http://schema.org", "@type":"WebSite", "url":"https://www.vci.industries", "name":"Victor Concrete, Inc. (VCI)", "description":"${data.site.siteMetadata.description}", "image":"${logo}"}`}
          </script>
          <script type="application/ld+json">
            {
              '{"@context":"http://schema.org", "@type":"Organization", "legalName":"Victor Concrete, Inc.","address":"6135 Barcelona Ave, Riverside, CA 92509-1726", "email":"estimating@vci.industries", "telephone":"(951) 686-4215"}'
            }
          </script>
          <script type="application/ld+json">
            {
              '{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "item": { "@id": "https://www.vci.industries/", "name": "Home" } }] }'
            }
          </script>
        </Helmet>
        <Header />
        {children}
        <Footer />
      </div>
    )}
  />
);

export default Layout;
