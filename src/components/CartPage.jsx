import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../App'
import CartItemCard from './CartItemCard'
import Header from './Header'
import Footer from './Footer'
import BackButton from './BackButton'
import { useNavigate } from 'react-router-dom'


const CartPage = () => {
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0)
  const { cartProducts, setCartProducts } = useContext(CartContext)

  useEffect(() => {
   
    let temp = 0;
    cartProducts?.map((e) => {
      temp += Number(e.price*e.counter)
    }) 
    console.log(temp)
  
    setTotalPrice(temp)
  }, [cartProducts])

  function deleteFromCart(cartProductId) {
    setCartProducts((cartProducts) => {
      return cartProducts.filter((x, id) => {
        return x.id !== cartProductId;
      })
    })
  }

  const uniqueCartProducts = cartProducts.filter((e, id) => {
    return cartProducts.indexOf(e) == id;
  })



  return (
    <>
      <Header />
      <BackButton onBack={() => { navigate('/') }} />
      {uniqueCartProducts.map((data) => { return <CartItemCard onDelete={deleteFromCart} id={data.id} name={data.name} category={data.category} file={data.file} description={data.description} price={data.price} color={data.color} counter={data.counter} /> })}
      <div className='fs-3 text-white' style={{ position: 'fixed', fontWeight: '400', bottom: '90px', right: '200px', backgroundColor: 'black', padding: '10px 20px', borderRadius: '10px', boxShadow: '0 0 15px  black' }}>Total Price = $ {totalPrice}</div>
      <Footer />
    </>
  )
}

export default CartPage
