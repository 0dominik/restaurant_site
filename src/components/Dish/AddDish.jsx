import React from 'react'
import Quantity from '../Quantity'
import { Container, QuantityBtn} from '../../styles/AddDish'

const AddDish = ({menu, setMenu, i}) => {
  const updateQuantity = (type) => {
    if(type) {
      menu[i].quantity++
      setMenu([...menu])
    } else if(menu[i].quantity > 0) {
      menu[i].quantity--
      setMenu([...menu])
    }
  }

  return (
    <Container>
      <QuantityBtn type="button" onClick={() => updateQuantity(false)} aria-label="dodaj danie">-</QuantityBtn>
      <Quantity content={menu[i].quantity}/>
      <QuantityBtn type="button" onClick={() => updateQuantity(true)} aria-label="usuń danie">+</QuantityBtn>
    </Container>
  )
}

export default AddDish
