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
  console.log(cartProducts)

  useEffect(() => {
    let temp = 0;
    cartProducts?.map((e) => {
      temp += Number(e.price)
    })
    setTotalPrice(temp)
    console.log('temp', temp)


  }, [cartProducts])
  console.log('totalprice1201', totalPrice)

  function deleteFromCart(cartProductId){
    setCartProducts((cartProducts) => {
      return cartProducts.filter((x, id) => {
        return x.id !==cartProductId;
      })})
  }



  return (
    <>
      <Header />
      <BackButton onBack={() => { navigate('/') }} />
      {cartProducts.map((data) => { return <CartItemCard onDelete={deleteFromCart} id={data.id} name={data.name} category={data.category} file={data.file} description={data.description} price={data.price} color={data.color} /> })}
      <div className='fs-3 text-white' style={{ position: 'fixed', fontWeight: '400', bottom: '90px', right: '200px', backgroundColor: 'black', padding: '10px 20px', borderRadius: '10px', boxShadow: '0 0 15px  black' }}>Total Price = $ {totalPrice}</div>
      <Footer />
    </>
  )
}

export default CartPage