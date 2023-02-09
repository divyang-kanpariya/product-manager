import React from 'react'
import {products} from '../Products'
import ProductCard from './ProductCard'

const Body = () => {

  return (
    <>
    <div className='d-flex'> 
   { products.map((data) => {
    return  <ProductCard name={data.title} category={data.category} discription={data.discritption}/>
    })}</div>
    </>
  )
}

export default Body