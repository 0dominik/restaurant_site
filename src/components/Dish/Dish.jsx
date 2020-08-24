import React from 'react'
import AddDish from './AddDish'
import { Container, Img, DishAbout, H3, SubContainer, Price } from '../../styles/Dish'

const Dish = ({dish, menu, setMenu}) => {
  return (
    <Container>
      <Img src={dish.img} alt={dish.name}/>
        <DishAbout>
        <H3>{dish.id + 1}. {dish.name}</H3>
        <p>Składniki: {dish.ingredients.map(el => el).join(', ')}</p>
        </DishAbout>
        <SubContainer>
          <div>
            <Price>{dish.price}</Price><br/>
            PLN
          </div>
          <AddDish i={dish.id} menu={menu} setMenu={setMenu}/>
        </SubContainer>
    </Container>
  )
}

export default Dish