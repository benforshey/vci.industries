import React from 'react'
import styled from 'styled-components'
import ScrollButton from '../components/scrollButton'
// import Button from '../components/button'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Image from 'gatsby-image'

import heroImageLarge from '../images/hero-image_large.jpg'
import heroImageMedium from '../images/hero-image_medium.jpg'
import heroImageSmall from '../images/hero-image_small.jpg'
import heroDecoratorTopRight from '../images/hero_top-right.svg'
import heroDecoratorBottom from '../images/hero_bottom.svg'
import bullet from '../images/bullet.svg'

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
  margin-bottom: 14vw;
  padding-bottom: calc(1em + 4vw);
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

const H1 = styled.h1`
  color: #ffffff;
  font-size: calc(.75em + 2vw);
  text-align: center;
`

const Section = styled.section`
  max-width: 64em;
  margin: 0 auto;
  padding: 1em 4vw;

  & ul {
    list-style-image: url(${bullet});
    margin-left: 1.5em;
  }
`

const IndexPage = ({data}) => {
  const date = `${new Date().getFullYear() - 1989} Years` || `Decades`
  const images = data.wordpressPage.acf.images
  const tiltUp = images.filter(image => image.title === 'tilt-up')
  const spread = images.filter(image => image.title === 'concrete-spread')
  const pour = images.filter(image => image.title === 'concrete-pour')
  const contact = images.filter(image => image.title === 'contact-us')

  return (
    <main>
      <Hero>
        <H1>{date} of Concrete Services. 8(a)&#8209;certified.</H1>
        <ScrollButton text='See Why 8(a) Matters' href='#footer' />
      </Hero>
      <Section>
        <h2>Quality that Stands the Test of Time</h2>
        <p>Founded in 1989, VICTOR Concrete, Inc. (VCI) is a family-owned and operated business based out of Riverside, CA. VCI specializes in concrete paving and other specialty concrete services for federal, state, and public works agencies and industrial and commercial clients in California. VCI provides quality workmanship at a fair price while protecting the health and safety of its employees and the surrounding community.</p>
        <Image sizes={tiltUp[0].localFile.childImageSharp.sizes} alt={tiltUp[0]['alt_text']} />
        <p>VCI’s team of concrete specialists adhere to ACI (American Concrete Institute), PCA (Portland Cement Association), and ASTM (American Society of Testing Materials) guidelines for properly placing concrete. VCI ensures:</p>
        <ul>
          <li>Proper preparation of the sub-base</li>
          <li>Accurate forming, layout, and proper elevations for water run-off</li>
          <li>Correct placement of reinforcements and imbeds</li>
          <li>Use of quality designs and mix providers</li>
          <li>Use of specific admixtures and retarders for placement and addressing weather conditions</li>
          <li>Proper planning and placement of control joints, and isolation joints</li>
          <li>Quality finish work using ACI standards for proper techniques and tools for each slab&rsquo;s use and design</li>
          <li>Timely use of curing compounds and sealers</li>
        </ul>
        <Image sizes={spread[0].localFile.childImageSharp.sizes} alt={spread[0]['alt_text']} />
        <p><ScrollButton text='Contact Us' href='#form' /></p>

      </Section>

      <Image sizes={pour[0].localFile.childImageSharp.sizes} alt={pour[0]['alt_text']} />
      <Image sizes={contact[0].localFile.childImageSharp.sizes} alt={contact[0]['alt_text']} />
      <Contact />
      <Footer />
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

  allWordpressWpClient {
    edges {
      node {
        acf {
          client_name
          projects
        }
      }
    }
  }
}
`
