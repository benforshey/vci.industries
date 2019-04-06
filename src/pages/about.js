import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/layout";

const Section = styled.section`
  margin: 0 auto;
  max-width: 37.5em;
  padding: 1em 6vw;

  @supports (display: grid) {
    @media (min-width: 50em) {
      max-width: 80em;
    }
  }
`;

const Wrapper = styled.div`
  padding-top: 56.25%;
  position: relative;
`;
const Embed = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <Helmet>
          <title>About | VCI</title>
          <script type="application/ld+json">
            {
              '{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 2, "item": { "@id": "https://www.vci.industries/about/", "name": "About" } }] }'
            }
          </script>
        </Helmet>
        <Section>
          <Wrapper>
            <Embed
              src="https://player.vimeo.com/video/199032501"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </Wrapper>
        </Section>
        <script src="https://player.vimeo.com/api/player.js" />
      </main>
    </Layout>
  );
};

AboutPage.propTypes = {};

export default AboutPage;
