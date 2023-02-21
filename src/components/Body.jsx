import React, { useContext } from 'react'
import { UserContext } from '../App';
import ProductCard from './ProductCard'



const Body = () => {
  const { products } = useContext(UserContext);

  return (
    <>
        {products.map((data) => {
          return <ProductCard data={data} />
        })}
    </>
  )
}

export default Body
