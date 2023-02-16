import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App';
import ProductCard from './ProductCard'



const Body = () => {
  const { products } = useContext(UserContext);
  console.log(products.file)


  useEffect(() => {
  }, [products])
  return (

    <>
      <div>
        {products.map((data) => {
          return <ProductCard id={data.id} name={data.name} category={data.category} file={data.file} description={data.description} price={data.price} color={data.color} />
        })}
      </div>
    </>
  )
}

export default Body
