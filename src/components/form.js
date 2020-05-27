// /*eslint-env browser*/
import React from 'react'
import Button from '../components/button'
import styled, { keyframes } from 'styled-components'

const Form = styled.form`
  padding: 1em 4vw;
  position: relative;
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

  &:invalid {
    box-shadow: none;
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

  &:invalid {
    box-shadow: none;
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
  transition: transform 0.2s ease-out;
  user-select: none;
`

const Hint = styled.span`
  display: block;
  font-size: 0.875em;
  font-style: italic;
  margin-top: 0.25em;
  user-selec: none;
`

const gracefulAppear = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 100vh;
    opacity: 1;
  }
`

const Feedback = styled.p`
  animation: ${gracefulAppear} 0.4s ease-out;
  background: #ffffff;
  border: 2px solid hsl(183, 73%, 32%);
  font-family: monospace;
  margin: 0;
  position: absolute;
  bottom: -4.5em;
  left: 4vw;
  padding: 1em;
`

class FormComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      contact: '',
      company: '',
      message: '',
      feedback: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.determineContactType = this.determineContactType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    return this.setState({ [e.target.name]: e.target.value })
  }

  // Quick and dirty autocomplete detection.
  determineContactType(e) {
    console.log(this.autoComplete)
    const attr = e.target.getAttribute('autocomplete')

    // If there's an ampersand, this is an email address. Return early.
    if (/@/.test(e.target.value)) {
      return attr === 'tel'
        ? e.target.setAttribute('autocomplete', 'email')
        : null
    }

    // There are digits, so this might be a telephone number.
    if (/^(\+|\d|\()/.test(e.target.value)) {
      return attr === 'email'
        ? e.target.setAttribute('autocomplete', 'tel')
        : null
    }
  }

  handleSubmit(e) {
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
          }, 10000)
        }
      })
      .catch(err => {
        console.error(err)

        this.setState({
          feedback:
            'Sorry, we could’t send your message. Please try again later or contact us using the information at the bottom of this page.'
        })
      })
  }

  render() {
    return (
      <Form
        id="form"
        action="https://message.integrisweb.com/mail/"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <FormGroup>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <Label htmlFor="name">Name</Label>
          <Hint>What is your full name?</Hint>
        </FormGroup>
        <FormGroup>
          <Input
            id="contact"
            name="contact"
            type="text"
            autoComplete="email"
            onInput={this.determineContactType}
            value={this.state.contact}
            onChange={this.handleChange}
            required
          />
          <Label htmlFor="contact">Contact Information</Label>
          <Hint>How can we reach you for reply?</Hint>
        </FormGroup>
        <FormGroup>
          <Input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={this.state.company}
            onChange={this.handleChange}
            required
          />
          <Label htmlFor="company">Company</Label>
          <Hint>What company do you represent?</Hint>
        </FormGroup>
        <FormGroup>
          <TextArea
            id="message"
            name="message"
            spellCheck="true"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
          <Label htmlFor="message">Message</Label>
          <Hint>What can we do for you?</Hint>
        </FormGroup>
        <Button type="submit" form="form" text="Send Message" />
        {this.state.feedback ? (
          <Feedback>{this.state.feedback}</Feedback>
        ) : null}
      </Form>
    )
  }
}

export default FormComponent
