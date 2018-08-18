import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Button from '../components/button'
import { push } from 'gatsby-link'

import heroDecoratorTopRight from '../images/hero_top-right.svg'
import heroDecoratorBottom from '../images/hero_bottom.svg'
import bullet from '../images/bullet.png'

const Hero = styled.div`
  align-items: center;
  background-image: linear-gradient(to right, hsla(183, 71%, 15%, .6), hsla(179, 71%, 15%, .6));
  display: flex;
  flex-direction: column;
  height: 60vw;
  justify-content: flex-end;
  margin-bottom: 8vw;
  padding: 1em 4vw calc(2em + 4vw);
  position: relative;
  width: 100%;

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
`

const HeroTitle = styled.h1`
  color: #ffffff;
  font-size: calc(.75em + 2vw);
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 3vw;
`

const HeroImage = styled.div`
  height: 60vw;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
`

const Section = styled.section`
  margin: 0 auto;
  max-width: 37.5em;
  padding: 1em 6vw;

  @supports (display: grid) {
    @media (min-width: 50em) {
      max-width: 80em;
    }
  }
`

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

    & button {
      justify-self: start;
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

`

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
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  & > ul > li {
    flex: 0 1 50%;
    padding: 0 1.5em 0 0;
  }

  @media (min-width: 40em) {
    & > ul > li {
    flex: 0 1 33%;
  }
  }
`

const UL = styled.ul`
  list-style-image: url(${bullet});
  margin-left: 1.5em;
`

const IndexPage = ({ data }) => {
  const date = `${new Date().getFullYear() - 1989} Years` || 'Decades'

  return (
    <main>
      <Hero>
        <HeroTitle>{date} of Construction and Concrete Services. 8(a)&#8209;certified.</HeroTitle>
        <Button
          text="See Why 8(a) Matters"
          onClick={() => push('/benefits/')}
        />
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
        <Button
          text="Contact Us"
          onClick={() => push('/contact/')}
        />
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
        <Button
          text="See Our Work"
          onClick={() => push('/work/')}
        />
      </DarkSection>
    </main>
  )
}

IndexPage.propTypes = {
  data: propTypes.shape({
    heroImage: propTypes.object.isRequired,
    tiltUp: propTypes.object.isRequired,
    spread: propTypes.object.isRequired
  }).isRequired
}

export default IndexPage

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
}
`
