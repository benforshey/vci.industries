// /*eslint-env browser*/
import React from 'react'
import Button from '../components/button'
import styled from 'styled-components'
import 'whatwg-fetch'

const Form = styled.form`
  padding: 0 4vw;
`

const FormGroup = styled.p`
  margin: 1em 0 2em;
  position: relative;
`

const Input = styled.input`
  background: none;
  border: hidden;
  box-shadow: 0 2px 0 0 black;
  display: block;
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
const TextArea = styled.textarea`
  background: none;
  border: hidden;
  box-shadow: 2px 2px 0 0 black;
  display: block;
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
  left: 0;
  position: absolute;
  top: 0;
  text-transform: uppercase;
  transition: transform .2s ease-out;
  user-select: none;
  z-index: -1;
`

const Hint = styled.span`
  display: block;
  margin-top: .25em;
  user-selec: none;
`

class Contact extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      contact: '',
      company: '',
      message: '',
      feedback: ''
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.determineContactType = this.determineContactType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFocus (e) {

  }

  handleChange (e) {
    return this.setState({ [e.target.name]: e.target.value })
  }

  // Quick and dirty autocomplete detection.
  determineContactType (e) {
    // If there's an ampersand, this is an email address. Return early.
    if (/@/.test(e.target.value)) {
      // e.target.setAttribute('type', 'email')
      return e.target.setAttribute('autocomplete', 'email')
    }

    // There are digits, so this might be a telephone number.
    if (/^(\+|\d|\()/.test(e.target.value)) {
      // e.target.setAttribute('type', 'tel')
      return e.target.setAttribute('autocomplete', 'tel')
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    e.stopPropagation()

    this.setState({ feedback: 'Sending your message…' })

    fetch('https://message.integrisweb.com/mail/', {
      method: 'post',
      body: new FormData(e.target)
    })
    .then(response => {
      if (response.ok) {
        // Message was sent successfully, so clear the form.
        this.setState({
          name: '',
          contact: '',
          company: '',
          message: '',
          feedback: 'Your message has been sent!'
        })
        // Message was sent successfully, so clear the success message.
        return setTimeout(() => {
          this.setState({ feedback: '' })
        }, 3000)
      } else {
        // The message is in limbo.
        return this.setState({ feedback: `Sorry, but it looks like your message hasn’t sent yet. This could mean that the connection between you and our server is slow (maybe you’re offline?), or it could be that we’re having some serious problems. If this message doesn’t go away, please reach out to us using the information at the bottom of this page.` })
      }
    })
    .catch(err => {
      this.setState({
        feedback: `Sorry, we could’t send your message because of the following error: ${err}. Please reach out to us using the information at the bottom of this page.`
      })
    })
  }

  render () {
    return (
      <Form
        id='form'
        action='https://message.integrisweb.com/mail/'
        method='post'
        onSubmit={this.handleSubmit}
        noValidate
      >
        <FormGroup>
          <Input id='name' name='name' type='text' autoComplete='name' value={this.state.name} onChange={this.handleChange} onFocus={this.handleFocus} required />
          <Label htmlFor='name'>Name</Label>
          <Hint>What is your full name?</Hint>
        </FormGroup>
        <FormGroup>
          <Input id='contact' name='contact' type='text' autoComplete='email' onInput={this.determineContactType} value={this.state.contact} onChange={this.handleChange} onFocus={this.handleFocus} required />
          <Label htmlFor='message'>Contact Information</Label>
          <Hint>How can we reach you for reply?</Hint>
        </FormGroup>
        <FormGroup>
          <Input id='company' name='company' type='text' autoComplete='organization' value={this.state.company} onChange={this.handleChange} onFocus={this.handleFocus} required />
          <Label htmlFor='company'>Company</Label>
          <Hint>What company do you represent?</Hint>
        </FormGroup>
        <FormGroup>
          <TextArea id='message' name='message' spellCheck='true' value={this.state.message} onChange={this.handleChange} onFocus={this.handleFocus} required />
          <Label htmlFor='message'>Message</Label>
          <Hint>What can we do for you?</Hint>
        </FormGroup>
        <Button type='submit' form='form' text='Send Message' />
        {this.state.feedback ? (
          <p>{this.state.feedback}</p>
        ) : (
          ''
        )}
      </Form>
    )
  }
}

export default Contact
