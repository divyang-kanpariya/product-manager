import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App';
import ProductCard from './ProductCard'


const Body = () => {
  const { products } = useContext(UserContext);

  useEffect(() => {
    console.log("products", products)
  }, [products])
  return (

    <>
      <div>
        {products.map((data, index) => {
          return <ProductCard id={index} name={data.name} category={data.category} description={data.description} price={data.price} color={data.color} />
        })}
      </div>
    </>
  )
}

export default Body
