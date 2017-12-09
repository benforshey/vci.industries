import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`

  background: ${props => props.form ? 'linear-gradient(hsl(183, 73%, 32%), hsl(180, 73%, 32%))' : 'linear-gradient(hsl(50, 85%, 61%), hsl(48, 85%, 61%))'};
  border-radius: 2px;
  border: none;
  box-shadow: 2px 3px 2px 0 hsla(270, 2%, 25%, .3);
  color: ${props => props.form ? '#ffffff' : '#353535'};
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  font-size: inherit;
  line-height: 1;
  padding: .5em .75em;
  transition: background .2s ease-in-out, box-shadow .2s ease-in-out, transform .2s ease-in-out;

  &:hover {
    box-shadow: 3px 4px 3px 1px hsla(270, 2%, 25%, .3);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid hsl(183, 73%, 32%);
  }

  &:active {
    box-shadow: 0 1px 0 0 hsla(270, 2%, 25%, .3);
    background: linear-gradient(hsl(53, 85%, 61%), hsl(55, 85%, 61%));
  }
`

const Button = ({ text, ...rest }) => <StyledButton {...rest}>{text}</StyledButton>

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
