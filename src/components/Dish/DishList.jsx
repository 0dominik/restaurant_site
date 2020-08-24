import React from 'react'
import Dish  from './Dish'
import { Container } from '../../styles/DishList'

const DishList = ({menu, setMenu, dishes}) => {
  return (
    <Container dishes={dishes}>
      {dishes.map(dish => (
        <Dish key={dish.id} menu={menu} setMenu={setMenu} dish={dish}/>
      ))}
    </Container>
  )
}

export default DishList
