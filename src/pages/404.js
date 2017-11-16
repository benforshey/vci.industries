import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Button from '../components/button'

const Main = styled.main`
  padding: 1em 4vw;
  max-width: 40em;
  margin: 0 auto;
`

const Form = styled.form`
  padding: 1em 4vw;
`

const FormGroup = styled.p`
  margin: 1em 0 2em;
  position: relative;
`

const Input = styled.input`
  background: none;
  border-radius: 0;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid hsl(180, 0%, 39%);
  display: block;
  font-size: inherit;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
  }

  &:focus + label {
    transform: translateY(-1.25em);
  }

  &:valid + label {
    transform: translateY(-1.25em);
  }
`
const TextArea = styled.textarea`
  background: none;
  border-radius: 0;
  border-top: none;
  border-right: 2px solid hsl(180, 0%, 39%);
  border-left: none;
  border-bottom: 2px solid hsl(180, 0%, 39%);
  display: block;
  font-size: inherit;
  height: 6em;
  resize: none;
  width: 100%;

  &:focus,
  &:active {
    outline: none;
  }

  &:valid {
    background: white;
  }

  &:focus + label {
    transform: translateY(-1.25em);
  }

  &:valid + label {
    transform: translateY(-1.25em);
  }
`

const Label = styled.label`
  font-weight: 700;
  left: 0;
  position: absolute;
  top: 0;
  transition: transform .2s ease-out;
  user-select: none;
`

const Hint = styled.span`
  display: block;
  font-size: .875em;
  font-style: italic;
  margin-top: .25em;
  user-selec: none;
`

const NotFoundPage = ({ data }) => {
  function handleSubmit (e) {
    e.preventDefault()

    const form = e.target
    const search = form.querySelector('#search')

    search.value = `site:${data.site.siteMetadata.siteUrl} ${search.value}`
    return form.submit()
  }

  return (
    <Main>
      <Helmet>
        <title>404 | VCI</title>
        <meta name='description' content='Page not found. Let&rsquo;s find it.' />
      </Helmet>
      <h1>Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist. We're not quite sure why this happened, but let&rsquo;s try to get you where you want to be!</p>
      <p>You can use the search feature below to (hopefully) find what you were looking for on this website. Please feel free to contact us using the information at the bottom of the page.</p>
      <Form
        iF='form'
        action='https://google.com/search'
        target='_blank'
        method='get'
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <Input id='search' name='q' type='text' autoComplete='off' required />
          <Label htmlFor='search'>Search Site</Label>
          <Hint >What are you searching for?</Hint>
        </FormGroup>
        <Button type='submit' form='form' text='Find It!' />
      </Form>
    </Main>
  )
}

export default NotFoundPage

export const query = graphql`
query BaseURLQuery {
  site {
    siteMetadata {
      siteUrl
    }
  }
}
`
