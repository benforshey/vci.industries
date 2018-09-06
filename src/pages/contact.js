import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Helmet from 'react-helmet'

import FormComponent from '../components/form'
import emailDecorator from '../images/email.svg'
import contactDecorator from '../images/contact_left.svg'

const Section = styled.section`
  margin: 0 auto;
  max-width: 37.5em;
  padding: 1em 4vw;

  @supports (display: grid) {
    @media (min-width: 50em) {
      max-width: 80em;
    }
  }
`

const GreySection = Section.extend`
  background: hsl(0, 0%, 97%);
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;

    & > h2 {
      grid-column: 1 / span 2;
    }

    & > .gatsby-image-outer-wrapper {
      align-self: start;
      grid-column: 2;
      grid-row: 2;
      margin: 0 0 0 1em;
    }

    & > form {
      grid-column: 1;
      grid-row: 2;
    }
  }
`

const ContactPage = ({ data }) => {
  return (
    <main>
      <Helmet>
        <title>Contact | VCI</title>
        <script type="application/ld+json">
          {'{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 2, "item": { "@id": "https://www.vci.industries/contact/", "name": "Contact" } }] }'}
        </script>
      </Helmet>

      <ContactSection>
        <h2>Contact Us</h2>
        <Image sizes={data.contact.localFile.childImageSharp.sizes} alt={data.contact.alt_text} />
        <FormComponent />
      </ContactSection>
    </main>
  )
}

export default ContactPage

ContactPage.propTypes = {
  data: propTypes.shape({
    allWordpressWpClient: propTypes.object.isRequired
  }).isRequired
}

export const query = graphql`
query ContactPage {
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
`
