import React from 'react'
import { useState } from "react"
import { GlobalStyle } from '../global/indexElements'
import Infobar from '../infobar'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Footer from '../footer'

const PrimarycComponents = ( {children, isOpenFilter}) => {

   // Sidebar Button
   const[isOpen, setIsOpen] = useState(false)

   const toggle = () => {
     setIsOpen(!isOpen)
   }

  return (
    <>
      <GlobalStyle isOpen={isOpen} isOpenFilter={isOpenFilter}/>
      <Infobar />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
        {children}
      <Footer />
    </>
  )
}

export default PrimarycComponents