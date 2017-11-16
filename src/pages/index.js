import React from 'react'
import styled from 'styled-components'
import ScrollButton from '../components/scrollButton'
import FormComponent from '../components/form'
import Image from 'gatsby-image'

import heroImageLarge from '../images/hero-image_large.jpg'
import heroImageMedium from '../images/hero-image_medium.jpg'
import heroImageSmall from '../images/hero-image_small.jpg'
import heroDecoratorTopRight from '../images/hero_top-right.svg'
import heroDecoratorBottom from '../images/hero_bottom.svg'
import bullet from '../images/bullet.svg'
import emailDecorator from '../images/email.svg'
import contactDecorator from '../images/contact_left.svg'

const Hero = styled.div`
  align-items: center;
  background-image: linear-gradient(to right, hsla(183, 71%, 15%, .6), hsla(179, 71%, 15%, .6)), url(${heroImageSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  }

  @media (min-width: 30em) {
    background-image: linear-gradient(to right, hsla(183, 71%, 15%, .6), hsla(179, 71%, 15%, .6)), url(${heroImageMedium});
    height: 50vw;
  }

  @media (min-width: 60em) {
    background-image: linear-gradient(to right, hsla(183, 71%, 15%, .6), hsla(179, 71%, 15%, .6)), url(${heroImageLarge});
    height: 40vw;
  }
`

const HeroTitle = styled.h1`
  color: #ffffff;
  font-size: calc(.75em + 2vw);
  letter-spacing: 1px;
  text-align: center;
`

const Section = styled.section`
  margin: 0 auto;
  padding: 1em 4vw;
`
const GreySection = Section.extend`
  background: hsl(0, 0%, 97%);
`

const QualitySection = Section.extend`

  & p {
    margin-left: auto;
    margin-right: auto;
    max-width: 37.5em;
  }

  & ul {
    margin-left: auto;
    margin-right: auto;
    max-width: 37.5em;
  }

  .gatsby-image-outer-wrapper {
    margin: 1em auto;
    max-width: 37.5em;
  }

`

const DarkSection = Section.extend`
  background: hsl(270, 2%, 42%);
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & h2,
  h3,
  h4 {
    color: #ffffff;
    flex: 1 0 100%;
    letter-spacing: 1px;
    margin-top: .5em;
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
`

const BenefitsSection = GreySection.extend`
  & > p {
    margin-left: auto;
    margin-right: auto;
    max-width: 37.5em;
  }

  & > blockquote {
    margin: 4em auto 1em;
    max-width: 37.5em;
    padding-left: 2em;
    position: relative;
  }

  & > blockquote::before {
    color: hsl(183, 73%, 32%);
    content: '“';
    font-family: 'Russo One', 'Arial Bold', serif;
    font-size: 5em;
    line-height: 0;
    position: absolute;
    top: 0;
    left: -.5rem;
  }

  & > blockquote > cite {
    display: block;
    font-weight: 600;
    font-style: italic;
    position: relative;
    text-align: right;
  }

  .gatsby-image-outer-wrapper {
    margin: 1em auto;
    max-width: 37.5em;

  }

  @media (min-width: 50em) {
    position: relative;

    & .gatsby-image-outer-wrapper {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`

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
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > h2 {
      flex: 1 0 100%;
    }

    & > .gatsby-image-outer-wrapper {
      flex: 0 1 50%;
      order: 1;
    }

    & > form {
      flex: 0 1 50%;
    }
  }
`

const UL = styled.ul`
  list-style-image: url(${bullet});
  margin-left: 1.5em;
`
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
`

function renderClientList (data) {
  const listItems = data.map(node => {
    const acf = node.node.acf
    const key = node.node.wordpress_id

    return acf.recent_project ? <li key={key}>{acf.client_name}, {acf.recent_project}</li> : <li key={key}>{acf.client_name}</li>
  })

  return (
    <ClientList>
      {listItems}
    </ClientList>
  )
}

const IndexPage = ({ data }) => {
  const date = `${new Date().getFullYear() - 1989} Years` || `Decades`
  const images = data.wordpressPage.acf.images
  const tiltUp = images.filter(image => image.title === 'tilt-up')
  const spread = images.filter(image => image.title === 'concrete-spread')
  const pour = images.filter(image => image.title === 'concrete-pour')
  const contact = images.filter(image => image.title === 'contact-us')

  const clientList = renderClientList(data.allWordpressWpClient.edges)

  return (
    <main>
      <Hero>
        <HeroTitle>{date} of Concrete Services. 8(a)&#8209;certified.</HeroTitle>
        <ScrollButton text='See Why 8(a) Matters' href='#benefits' />
      </Hero>
      <QualitySection id='quality'>
        <h2>Quality that Stands the Test of Time</h2>
        <p>Founded in 1989, VICTOR Concrete, Inc. (VCI) is a family-owned and operated business based out of Riverside, CA. VCI specializes in concrete paving and other specialty concrete services for federal, state, and public works agencies and industrial and commercial clients in California. VCI provides quality workmanship at a fair price while protecting the health and safety of its employees and the surrounding community.</p>
        <Image sizes={tiltUp[0].localFile.childImageSharp.sizes} alt={tiltUp[0]['alt_text']} />
        <p>VCI&rsquo;s team of concrete specialists adhere to ACI (American Concrete Institute), PCA (Portland Cement Association), and ASTM (American Society of Testing Materials) guidelines for properly placing concrete. VCI ensures:</p>
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
        <Image sizes={spread[0].localFile.childImageSharp.sizes} alt={spread[0]['alt_text']} />
        <ScrollButton text='Contact Us' href='#form' />
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
      <BenefitsSection id='benefits'>
        <h2>8(a) Benefits</h2>
        <p>VICTOR Concrete, Inc. (VCI) is a small, minority-owned, 8(a)-certified business. Federal agencies can contract with VCI directly using sole-source acquisition, with a $4M ceiling. 8(a) organizations can now bid in partnership with other organizations, greatly streamlining the process by which 8(a) contracts are awarded.</p>
        <Image sizes={pour[0].localFile.childImageSharp.sizes} alt={pour[0]['alt_text']} />
        <blockquote>
          The materials and services that VICTOR Concrete has provided are of high quality and their work is performed with attention to detail and accuracy. [We intend] to continue our collaboration and working relationship with VICTOR Concrete on future projects and cherish our mutually established partnership.
          <cite>Stephen Adams, President of Pacific Sundance Construction</cite>
        </blockquote>
        <ScrollButton text='Contact Us' href='#form' />
      </BenefitsSection>
      <DarkSection>
        <h2>Our Credentials</h2>
        <div>
          <h3>CA Contractor Licenses</h3>
          <UL>
            <li>C-8 Concrete #1004077</li>
            <li>D-12 Synthetic Product #1004077</li>
          </UL>
        </div>
        <div>
          <h3>8(a) Exit Date</h3>
          <UL>
            <li>27 August 2016</li>
          </UL>
        </div>
        <div>
          <h3>Bonding</h3>
          <UL>
            <li>$5M Aggregate</li>
            <li>$2.4M per Project</li>
          </UL>
        </div>
      </DarkSection>
      <Section id='clients'>
        <h2>Join Our Recent Clients</h2>
        {clientList}
      </Section>
      <ContactSection>
        <h2>Contact Us</h2>
        <Image sizes={contact[0].localFile.childImageSharp.sizes} alt={contact[0]['alt_text']} />
        <FormComponent />
      </ContactSection>
    </main>
  )
}

export default IndexPage

export const query = graphql`
query IndexPage {
  wordpressPage(title: {eq: "Home Page"}) {
    acf {
      images {
        title
        alt_text
        localFile {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
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
`
