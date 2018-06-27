import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import ScrollButton from '../components/scrollButton';
import FormComponent from '../components/form';

import heroDecoratorTopRight from '../images/hero_top-right.svg';
import heroDecoratorBottom from '../images/hero_bottom.svg';
import bullet from '../images/bullet.png';
import emailDecorator from '../images/email.svg';
import contactDecorator from '../images/contact_left.svg';

const Hero = styled.div`
  align-items: center;
  background-image: linear-gradient(to right, hsla(183, 71%, 15%, .6), hsla(179, 71%, 15%, .6));
  display: flex;
  flex-direction: column;
  height: 60vw;
  justify-content: flex-end;
  margin-bottom: 8vw;
  padding: 1em 4vw calc(1em + 4vw);
  position: relative;
  width: 100vw;

  &::before {
    background-image: url(${heroDecoratorTopRight});
    background-repeat: no-repeat;
    content: '';
    height: 0;
    padding-bottom: 33%;
    position: absolute;
    right: 0;
    top: 0;
    width: 33%;
    z-index: 1;
  }

  &::after {
    background-image: url(${heroDecoratorBottom});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 110%;
    bottom: -7.5vw;
    content: '';
    height: 0;
    padding-bottom: 8vw;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  @media (min-width: 30em) {
    height: 50vw;
  }

  @media (min-width: 60em) {
    height: 40vw;
  }
`;

const HeroTitle = styled.h1`
  color: #ffffff;
  font-size: calc(.75em + 2vw);
  letter-spacing: 1px;
  text-align: center;
`;

const HeroImage = styled.div`
  height: 60vw;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -1;

  & .gatsby-image-outer-wrapper {
    top: -10vw;
  }

  @media (min-width: 30em) {
    height: 50vw;
  }

  @media (min-width: 60em) {
    height: 40vw;

    & .gatsby-image-outer-wrapper {
      top: -15vw;
    }
  }
`;

const Section = styled.section`
  margin: 0 auto;
  max-width: 37.5em;
  padding: 1em 4vw;

  @supports (display: grid) {
    @media (min-width: 50em) {
      max-width: none;
    }
  }
`;

const GreySection = Section.extend`
  background: hsl(0, 0%, 97%);
`;

const QualitySection = Section.extend`

  & ul {
    margin-left: 2em;
  }

  .gatsby-image-outer-wrapper {
    margin: 1em auto;
    max-width: 37.5em;
  }

  @media (min-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;

    & h2 {
      grid-column: 1 / span 4;
    }

    & p {
      grid-column: 1 / span 2;
    }

    & > .gatsby-image-outer-wrapper {
      align-self: center;
      grid-column: 3 / span 2;
      margin: 0 0 0 1em;

      &:first-of-type {
        grid-row: 2 / span 2;
      }

      &:last-of-type {
        grid-row: 4 / span 2;
      }
    }

    & ul {
      grid-column: 1 / span 2;
    }

    & a {
      align-self: start;
      grid-column: 1;
      justify-self: start;
    }
  }

`;

const DarkSection = Section.extend`
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
    margin-top: .5em;
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
    margin: 0 .5em;
  }
`;

const BenefitsSection = GreySection.extend`
  & blockquote {
    margin: 4em auto 1em;
    padding-left: 2em;
    position: relative;
  }

  & blockquote::before {
    color: hsl(183, 73%, 32%);
    content: '“';
    font-family: 'Russo One', 'Arial Bold', serif;
    font-size: 5em;
    line-height: 0;
    position: absolute;
    top: 0;
    left: -.5rem;
  }

  & blockquote > cite {
    display: block;
    font-weight: 600;
    font-style: italic;
    margin-top: .5em;
    position: relative;
    text-align: right;
  }

  & .gatsby-image-outer-wrapper {
    margin: 1em auto;
  }

  @media (min-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;

    & h2 {
      grid-column: 1 / span 4;
    }

    & p {
      grid-column: 1 / span 2;
    }

    & .gatsby-image-outer-wrapper {
      align-self: center;
      grid-column: 3 / span 2;
      grid-row: 2 / span 3;
      margin: 0 0 0 1em;
    }

    & blockquote {
      grid-column: 1 / span 2;
    }

    & a {
      align-self: start;
      grid-column: 1;
      justify-self: start;
      margin-top: 0;
    }
  }
`;

const ContactSection = GreySection.extend`
  background-image: url(${contactDecorator});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 10%;
  padding: 1em 4vw 2em 10vw;

  & > h2 {
    margin-left: 4vw;
    padding-left: 1em;
    position: relative
  }

  & > h2::before {
    content: url(${emailDecorator});
    position: absolute;
    width: 1em;
    left: -.5em;
  }

  & > .gatsby-image-outer-wrapper {
    margin: 0 auto 2em;
  }

  @media (min-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;

    & > h2 {
      grid-column: 1 / span 2;
    }

    & > .gatsby-image-outer-wrapper {
      align-self: center;
      grid-column: 2;
      grid-row: 2;
      margin: 0 0 0 1em;
    }

    & > form {
      grid-column: 1;
      grid-row: 2;
    }
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
    box-shadow: 3px 4px 3px 1px hsla(270, 2%, 25%, .3);
    flex: 0 0 auto;
    margin: 0 0 1em 1em;
    padding: .125em .5em;
  }
`;

function renderClientList(data) {
  const listItems = data.map((node) => {
    const { acf } = node.node;
    const key = node.node.wordpress_id;

    return acf.recent_project
      ? <li key={key}>{acf.client_name}, {acf.recent_project}</li>
      : <li key={key}>{acf.client_name}</li>;
  });

  return (
    <ClientList>
      {listItems}
    </ClientList>
  );
}

const IndexPage = ({ data }) => {
  const date = `${new Date().getFullYear() - 1989} Years` || 'Decades';
  const clientList = renderClientList(data.allWordpressWpClient.edges);

  return (
    <main>
      <Hero>
        <HeroTitle>{date} of Construction and Concrete Services. 8(a)&#8209;certified.</HeroTitle>
        <ScrollButton text="See Why 8(a) Matters" href="#benefits" />
        <HeroImage>
          <Image
            sizes={data.heroImage.localFile.childImageSharp.sizes}
            alt={data.heroImage.alt_text}
          />
        </HeroImage>
      </Hero>
      <QualitySection id="quality">
        <h2>Quality that Stands the Test of Time</h2>
        <p>Founded in 1989, VICTOR Construction, Inc. (VCI) is a family-owned and operated business based out of Riverside, CA. VCI specializes in construction, concrete paving, and other specialty concrete services for federal, state, and public works agencies and industrial and commercial clients in California. VCI provides quality workmanship at a fair price while protecting the health and safety of its employees and the surrounding community.</p>
        <Image sizes={data.tiltUp.localFile.childImageSharp.sizes} alt={data.tiltUp.alt_text} />
        <p>VCI&rsquo;s team of construction and concrete specialists adhere to ACI (American Concrete Institute), PCA (Portland Cement Association), and ASTM (American Society of Testing Materials) guidelines for properly placing concrete. VCI ensures:</p>
        <UL>
          <li>Proper preparation of the sub-base</li>
          <li>Accurate forming, layout, and proper elevations for water run-off</li>
          <li>Correct placement of reinforcements and imbeds</li>
          <li>Use of quality designs and mix providers</li>
          <li>Use of specific admixtures and retarders for placement and addressing weather conditions</li>
          <li>Proper planning and placement of control joints, and isolation joints</li>
          <li>Quality finish work using ACI standards for proper techniques and tools for each slab&rsquo;s use and design</li>
          <li>Timely use of curing compounds and sealers</li>
        </UL>
        <Image sizes={data.spread.localFile.childImageSharp.sizes} alt={data.spread.alt_text} />
        <ScrollButton text="Contact Us" href="#form" />
      </QualitySection>
      <DarkSection>
        <h2>Our Expertise</h2>
        <UL>
          <li>Site Concrete</li>
          <li>Structural Concrete</li>
          <li>Concrete Paving</li>
          <li>Road/Highway Construction</li>
          <li>Flatwork</li>
          <li>Demolition</li>
          <li>Debris Removal</li>
          <li>Grading</li>
          <li>Site Restoration and Landscaping</li>
          <li>ADA/OSHPD Compliance</li>
          <li>Horizontal Construction</li>
        </UL>
      </DarkSection>
      <BenefitsSection id="benefits">
        <h2>8(a) Benefits</h2>
        <p>VICTOR Construction, Inc. (VCI) is a small, minority-owned, 8(a)-certified business. Federal agencies can contract with VCI directly using sole-source acquisition, with a $4M ceiling. 8(a) organizations can now bid in partnership with other organizations, greatly streamlining the process by which 8(a) contracts are awarded.</p>
        <Image sizes={data.pour.localFile.childImageSharp.sizes} alt={data.pour.alt_text} />
        <blockquote>
          The materials and services that VICTOR Concrete has provided are of high quality and their work is performed with attention to detail and accuracy. [We intend] to continue our collaboration and working relationship with VICTOR Concrete on future projects and cherish our mutually established partnership.
          <cite>&mdash;Stephen Adams, President<br />Pacific Sundance Construction</cite>
        </blockquote>
        <ScrollButton text="Contact Us" href="#form" />
      </BenefitsSection>
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
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${237310}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">237310</a> Construction of highways, streets, roads, airports, runways, public sidewalks, bridges</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${238110}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">238110</a> Poured concrete foundations and structures contractors</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${236118}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">236118</a> Remodeling Construction</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${236210}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">236210</a> Construction of new work addition, alterations, maintenance repairs industrial buildings</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${236220}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">236220</a> Construction including new work additions, alterations, maintenance and repairs of commercial and institutional buildings and related structures</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${237990}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">237990</a> Heavy and Civil Engineering</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${238120}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">238120</a> Structural steel and precast concrete contractors</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${238140}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">238140</a> Masonry Contractor</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${238190}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">238190</a> Other Foundation, Structure, and Building Exterior Contractors</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${238390}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">238390</a> Other Building Finishing Contractor</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${238910}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">238910</a> Site Preparation Contractors</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${238990}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">238990</a> Artificial Turf Installation</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${561730}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">561730</a> Landscaping Services</li>
            <li><a href={`https://www.census.gov/cgi-bin/sssd/naics/naicsrch?input=${562111}&search=2017+NAICS+Search&search=2017`} target="_blank" rel="noopener noreferrer">562111</a> Solid waste collection collecting and hauling nonhazardous solid waste</li>
          </UL>
        </div>
      </DarkSection>
      <Section id="clients">
        <h2>Join Our Recent Clients</h2>
        {clientList}
      </Section>
      <ContactSection>
        <h2>Contact Us</h2>
        <Image sizes={data.contact.localFile.childImageSharp.sizes} alt={data.contact.alt_text} />
        <FormComponent />
      </ContactSection>
    </main>
  );
};

IndexPage.propTypes = {
  data: propTypes.shape({
    allWordpressWpClient: propTypes.object.isRequired,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
query IndexPage {
  heroImage: wordpressWpMedia(title: {eq: "hero-image"}) {
    alt_text
    localFile {
      childImageSharp {
        sizes(maxWidth: 1080) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }

  tiltUp: wordpressWpMedia(title: {eq: "tilt-up"}) {
    alt_text
    localFile {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  spread: wordpressWpMedia(title: {eq: "concrete-spread"}) {
    alt_text
    localFile {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  pour: wordpressWpMedia(title: {eq: "concrete-pour"}) {
    alt_text
    localFile {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  contact: wordpressWpMedia(title: {eq: "contact-us"}) {
    alt_text
    localFile {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

  allWordpressWpClient(sort: {fields: [acf___client_name], order: ASC}) {
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
