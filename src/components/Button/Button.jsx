import React from 'react'
import { StyledButton } from '../../styles/Button'

const Button = ({text, handleOnClick}) => {
  return (
    <StyledButton onClick={handleOnClick} type="submit">{text}</StyledButton>
  )
}

export default Button