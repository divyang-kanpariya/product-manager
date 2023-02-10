import React, { createContext } from 'react'
import Footer from './Footer'
import Header from './Header'
import Body from './Body'
import AddButton from './AddButton'
import { useState } from 'react';



const Layout = () => {
  
  return (<>
  <Header/>
  <Body/>
  <AddButton/>
  <Footer/>

  </>
  )
}

export default Layout
