import { graphql, navigate } from "gatsby";
import propTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Button from "../components/button";
import Layout from "../components/layout";
import bullet from "../images/bullet.png";

const Section = styled.section`
  margin: 0 auto;
  max-width: 37.5em;
  padding: 1em 4vw;

  @supports (display: grid) {
    @media (min-width: 50em) {
      max-width: 80em;
    }
  }
`;

const DarkSection = styled(Section)`
  background: hsl(270, 2%, 42%);
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & a {
    color: hsl(0, 0%, 100%);
  }

  & a:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }

  & h2,
  h3,
  h4 {
    color: #ffffff;
    flex: 1 0 100%;
    letter-spacing: 1px;
    margin-top: 0.5em;
    margin-right: 1em;
  }

  & > ul {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  & > ul > li {
    flex: 0 1 33%;
    margin: 0 0.5em;
  }
`;

const UL = styled.ul`
  list-style-image: url(${bullet});
  margin-left: 1.5em;
`;

const ClientList = styled.ul`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;

  & > li {
    border-radius: 1em;
    background: hsl(183, 71%, 15%);
    border: 2px solid hsl(184, 82%, 20%);
    box-shadow: 3px 4px 3px 1px hsla(270, 2%, 25%, 0.3);
    flex: 0 0 auto;
    margin: 0 0 1em 1em;
    padding: 0.125em 0.5em;
  }
`;

function renderClientList(data) {
  const listItems = data.map((node) => {
    const { acf } = node.node;
    const key = node.node.wordpress_id;

    return acf.recent_project ? (
      <li key={key}>
        {acf.client_name}, {acf.recent_project}
      </li>
    ) : (
      <li key={key}>{acf.client_name}</li>
    );
  });

  return <ClientList>{listItems}</ClientList>;
}

const WorkPage = ({ data }) => {
  const clientList = renderClientList(data.allWordpressWpClient.edges);

  return (
    <Layout>
      <main>
        <Helmet>
          <title>Work | VCI</title>
          <script type="application/ld+json">
            {
              '{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 2, "item": { "@id": "https://www.vci.industries/work/", "name": "Work" } }] }'
            }
          </script>
        </Helmet>
        <DarkSection id="credentials">
          <h2>Our Credentials</h2>
          <div>
            <h3>CA Contractor Licenses (#1004077)</h3>
            <UL>
              <li>C-8 Concrete</li>
              <li>C-61 Specialty Classification</li>
              <li>D-12 Synthetic Product</li>
              <li>D-63 Construction Clean Up</li>
            </UL>
          </div>
          <div>
            <h3>8(a) Exit Date</h3>
            <UL>
              <li>27 August 2026</li>
            </UL>
          </div>
          <div>
            <h3>Bonding</h3>
            <UL>
              <li>$6M Aggregate</li>
              <li>$3M per Project</li>
            </UL>
          </div>
          <div>
            <h3>NAICS Codes</h3>
            <UL>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  237310
                </a>{" "}
                Highway, Street, and Bridge Construction
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  238110
                </a>{" "}
                Poured Concrete Foundation and Structure Contractors
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  236118
                </a>{" "}
                Residential Remodelers
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  236210
                </a>{" "}
                Industrial Building Construction
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  236220
                </a>{" "}
                Commercial and Institutional Building Construction
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  237990
                </a>{" "}
                Other Heavy and Civil Engineering Construction
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  238120
                </a>{" "}
                Structural Steel and Precast Concrete Contractors
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  238140
                </a>{" "}
                Masonry Contractor
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  238190
                </a>{" "}
                Other Foundation, Structure, and Building Exterior Contractors
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  238390
                </a>{" "}
                Other Building Finishing Contractors
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  238910
                </a>{" "}
                Site Preparation Contractors
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  238990
                </a>{" "}
                All Other Specialty Trade Contractors
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  561730
                </a>{" "}
                Landscaping Services
              </li>
              <li>
                <a
                  href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=&search=2017+NAICS+Search&search=2017`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  562111
                </a>{" "}
                Solid Waste Collection
              </li>
            </UL>
          </div>
        </DarkSection>
        <Section id="clients">
          <h2>Join Our Recent Clients</h2>
          {clientList}
          <Button text="Contact Us" onClick={() => navigate("/contact/")} />
        </Section>
      </main>
    </Layout>
  );
};

WorkPage.propTypes = {
  data: propTypes.shape({
    allWordpressWpClient: propTypes.object.isRequired,
  }).isRequired,
};

export default WorkPage;

export const query = graphql`
  query WorkPage {
    allWordpressWpClient(sort: { fields: [acf___client_name], order: ASC }) {
      edges {
        node {
          wordpress_id
          acf {
            client_name
            recent_project
          }
        }
      }
    }
  }
`;
