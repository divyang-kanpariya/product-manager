import React from 'react'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import ProductCard from './ProductCard'

const Layout = () => {
  return (<>
  <Header/>
  <div className='d-flex'> 
  <ProductCard/>
  <ProductCard/></div>
 
  <Footer/>
  </>
   
  )
}

export default Layout