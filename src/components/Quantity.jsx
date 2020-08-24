import React from 'react'
import { StyledQuantity } from '../styles/Quantity'

const Quantity = ({size, content}) => {
  return (
    <StyledQuantity size={size}>{content}</StyledQuantity>
  )
}

export default Quantity