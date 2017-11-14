import React from 'react'
import styled from 'styled-components'
import ScrollButton from '../components/scrollButton'
// import Button from '../components/button'
import Contact from '../components/contact'
import Footer from '../components/footer'
// import Image from 'gatsby-image'
import heroImageLarge from '../images/hero-image_large.jpg'
import heroImageMedium from '../images/hero-image_medium.jpg'
import heroImageSmall from '../images/hero-image_small.jpg'
import heroDecoratorTopRight from '../images/hero_top-right.svg'
import heroDecoratorBottom from '../images/hero_bottom.svg'

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
  margin-bottom: 8em;
  margin: 0 auto 8em;
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
  margin-bottom: 4vw;
  text-align: center;
`

const IndexPage = ({data}) => {
  // const heroImage = data.wordpressPage.acf.images.reduce(image => image.title === 'hero-image')
  // console.log(heroImage.localFile.childImageSharp.sizes)
  return (
    <main>
      <Hero>
        <H1>{`${new Date().getFullYear() - 1989} Years` || `Decades`} of Concrete Services. 8(a)&#8209;certified.</H1>
        <ScrollButton text='See Why 8(a) Matters' href='#footer' />
      </Hero>
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
        localFile {
          childImageSharp {
            sizes(maxWidth: 1920) {
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
