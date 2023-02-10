import React, {useContext, useEffect} from 'react'
import { UserContext } from '../App';
import ProductCard from './ProductCard'
import {Products} from '../Products'

const Body = () => {
 const {products} = useContext(UserContext);
 const mapProduct = products.products;
  
 useEffect(() => {
  console.log("mapProduct",products)
 },[products])
 return (
    
    <>
    <div>
    {products.map((data) => {
    return  <ProductCard name={data.name} category={data.category} description={data.description}/>
    })}
    </div>
    </>
  )
}

export default Body
