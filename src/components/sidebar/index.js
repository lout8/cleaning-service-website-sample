import React from 'react'
import { SidebarContainer, SidebarBackgroundContainer, SidebarMenu, SidebarItem, SidebarLink} from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarMenu onClick={toggle}>
          <SidebarItem><SidebarLink to="/">αρχικη</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/services">υπηρεσιες</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/products/">προιοντα</SidebarLink></SidebarItem>
          <SidebarItem><SidebarLink to="/contact">επικοινωνια</SidebarLink></SidebarItem>
        </SidebarMenu>     
      </SidebarContainer>
      <SidebarBackgroundContainer isOpen={isOpen} onClick={toggle}></SidebarBackgroundContainer>
    </>
  )
}

export default Sidebar