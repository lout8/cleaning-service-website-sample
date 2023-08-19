import React from 'react'
import { FaBars } from '@react-icons/all-files/fa/FaBars'
import logo from "../../images/logo.svg"
import {Nav, NavContainer, NavLogo, NavLogoIcon, NavSidebarButton, NavMenu, NavItems, NavLinks, } from './navbarElements'


const Navbar = ({isOpen, toggle}) => {
  return (
    <>
    <Nav>
    <NavContainer id='nav'>
    <>{!isOpen ? <NavLogo to="/"><NavLogoIcon src={logo} alt="logo"></NavLogoIcon></NavLogo>: 
      <NavLogo isOpen={isOpen} onClick={toggle} to="/"><NavLogoIcon src={logo} alt="logo"></NavLogoIcon></NavLogo>}</>
      <NavSidebarButton isOpen={isOpen} onClick={toggle} ><FaBars/></NavSidebarButton>
      {/* Menu */}
      <NavMenu>
        <NavItems><NavLinks to="/" activeStyle={{ background: "#F7931E" }}>home</NavLinks></NavItems>
        <NavItems><NavLinks to="/services" activeStyle={{ background: "#F7931E" }}>services</NavLinks></NavItems>
        <NavItems><NavLinks to="/products/" activeStyle={{ background: "#F7931E" }} partiallyActive={true}>products</NavLinks></NavItems>
        <NavItems><NavLinks to="/contact" activeStyle={{ background: "#F7931E" }}>contact</NavLinks></NavItems>
      </NavMenu>
    </NavContainer>
    </Nav>
    
    </>
  )
}

export default Navbar