import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { push } from 'gatsby-link'

import Button from '../components/button'

const Section = styled.section`
  margin: 0 auto;
  max-width: 37.5em;
  padding: 1em 4vw;

  @supports (display: grid) {
    @media (min-width: 50em) {
      max-width: none;
    }
  }
`

const GreySection = Section.extend`
  background: hsl(0, 0%, 97%);
`

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

  & button {
    justify-self: start;
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
      align-self: start;
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
`

const BenefitsPage = ({ data }) => {
  return (
    <main>
      <BenefitsSection id="benefits">
        <h2>8(a) Benefits</h2>
        <p>VICTOR Construction, Inc. (VCI) is a small, minority-owned, 8(a)-certified business. Federal agencies can contract with VCI directly using sole-source acquisition, with a $4M ceiling. 8(a) organizations can now bid in partnership with other organizations, greatly streamlining the process by which 8(a) contracts are awarded.</p>
        <Image sizes={data.pour.localFile.childImageSharp.sizes} alt={data.pour.alt_text} />
        <blockquote>
          The materials and services that VICTOR Concrete has provided are of high quality and their work is performed with attention to detail and accuracy. [We intend] to continue our collaboration and working relationship with VICTOR Concrete on future projects and cherish our mutually established partnership.
          <cite>&mdash;Stephen Adams, President<br />Pacific Sundance Construction</cite>
        </blockquote>
        <Button
          text="Contact Us"
          onClick={() => push('/contact/')}
        />
      </BenefitsSection>
    </main>
  )
}

BenefitsPage.propTypes = {
  data: propTypes.shape({
    pour: propTypes.object.isRequired,
    allWordpressWpClient: propTypes.object.isRequired
  }).isRequired
}

export default BenefitsPage

export const query = graphql`
query BenefitsPage {

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
