import React from 'react'
import { StyledError } from '../../styles/Error'

const Error = ({isStatic, text}) => {
  return (
    <StyledError isStatic={isStatic} vis={text}>{text}</StyledError>
  )
}

export default Error