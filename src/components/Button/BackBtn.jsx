import React from 'react'
import { StyledBackBtn } from '../../styles/BackBtn'

const BackBtn = ({handleOnClick}) => {
  return (
    <StyledBackBtn onClick={handleOnClick} aria-label="wróć do menu">&lt; wróć</StyledBackBtn>
  )
}

export default BackBtn