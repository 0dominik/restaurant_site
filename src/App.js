import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import DishList  from './components/Dish/DishList'
import Form from './components/Form/Form';
import OrderedView from './components/Ordered/OrderedView';
import ButtonContainer from './components/Button/ButtonContainer';
import BackBtn from './components/Button/BackBtn';

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.brown};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  max-height: 95vh;
  padding: 20px;
  position: relative;

  @media(max-width: ${({theme}) => theme.media.medium}) {
    max-height: none;
    width: 100%;
  }
`

const App = () => {
  const [menu, setMenu] = useState([
    {
      name: 'Schabowy',
      price: 32,
      img: './img/dish-img1.jpg',
      id: 0,
      ingredients: ['kotlet schabowy', 'ziemniaki', 'surówka'],
      quantity: 0
    },
    {
      name: 'Kurczak',
      price: 11,
      img: './img/dish-img2.jpg',
      id: 1,
      ingredients: ['kurczak', 'ziemniaki', 'surówka'],
      quantity: 0
    },
    {
      name: 'Żurek',
      price: 12,
      img: './img/dish-img3.jpg',
      id: 2,
      ingredients: ['żurek', 'kiełbasa', 'chleb'],
      quantity: 0
    },
    {
      name: 'Rosół',
      price: 12,
      img: './img/dish-img4.jpg',
      id: 3,
      ingredients: ['rosół', 'makaron'],
      quantity: 0
    }, {
      name: 'xxx',
      price: 32,
      img: './img/dish-img1.jpg',
      id: 4,
      ingredients: ['xxx', 'xxx', 'xxx'],
      quantity: 0
    },
    {
      name: 'xxx',
      price: 32,
      img: './img/dish-img1.jpg',
      id: 5,
      ingredients: ['xxx', 'xxx', 'xxx'],
      quantity: 0
    },
    {
      name: 'xxx',
      price: 32,
      img: './img/dish-img1.jpg',
      id: 6,
      ingredients: ['xxx', 'xxx', 'xxx'],
      quantity: 0
    },
    {
      name: 'xxx',
      price: 32,
      img: './img/dish-img1.jpg',
      id: 7,
      ingredients: ['xxx', 'xxx', 'xxx'],
      quantity: 0
    }
  ])

  const [sum, setSum] = useState(0)
  const [error, setError] = useState('')
  const [views, setViews] = useState({
    menu: true,
    form: false,
    ordered: false
  })

  const showView = (viewToShow) => {
    setViews((prev) => {
      Object.keys(prev).forEach(el => prev[el] = false)
      return {...prev, [viewToShow]: true}
    })
  }

  useEffect(() => {
    setError('');

    let count = 0;
    menu.forEach(dish => {
      count += dish.price * dish.quantity
    })
    setSum(count)

    if(sum === 0) {
      showView('menu')
    }
  }, [menu, sum])

  const clearMenu = () => {
    setMenu(() => {
      menu.forEach(dish => {
        dish.quantity = 0
      })

      return [...menu]
    })
  }

  const makeOrder = () => {
    if(sum > 0) {
      showView('form')
    } else {
      setError('Wybierz co najmniej jedno danie')
    }
  }

  const backToMenu = () => {
    showView('menu')
    clearMenu();
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
      {views.menu && <>
        <DishList menu={menu} setMenu={setMenu} dishes={menu}/>
        <ButtonContainer sum={sum} error={error} handleOnClick={makeOrder} text={'Zamów'}/>
      </>}
      {views.form && <>
        <BackBtn handleOnClick={() => showView('menu')}/>
        <DishList menu={menu} setMenu={setMenu} dishes={menu.filter(el => el.quantity !== 0)}/>
        <Form showOrdered={() => showView('ordered')} sum={sum}/>
      </>} 
      {views.ordered && <>
        <OrderedView backToMenu={backToMenu}/>
      </>}
      </Container>
    </ThemeProvider>
  );
}

export default App;
