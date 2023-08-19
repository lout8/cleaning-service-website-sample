import styled from "styled-components";
import { Link } from "gatsby";
import { SidebarContainer } from "../sidebar/sidebarElements";


export const Nav = styled.nav`
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 10;
  @media only screen and (max-width: 1024px) {
    height: 70px;
  }
  @media only screen and (max-width: 769px) {
    height: 60px;
  }
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 100px;
    background-color: #07407B;

    @media only screen and (max-width: 1200px) {
        padding: 0 70px;
    }
    @media only screen and (max-width: 1024px) {
        padding: 0 50px;
    }
    @media only screen and (max-width: 900px) {
        padding: 0 25px;
    }

`
export const NavLogo = styled(Link)`
    display: flex;
    height: 65px;
    width: auto;
    cursor: pointer;

    @media only screen and (max-width: 1024px) {
        height: 55px;
        width: auto;
    }
    @media only screen and (max-width: 769px) {
        height: 45px;
        width: auto;
    }

    ${SidebarContainer}{
    max-height: ${({ isOpen }) => (isOpen ? '0' : '400px')};
  }
`
export const NavLogoIcon = styled.img`
    display: flex;
    /* height: 100%; */
    padding: 12px;

`
export const NavSidebarButton = styled.div`  
    display: none;
    @media only screen and (max-width: 768px) {
        display: flex;
        align-self: center;
        color: white;
        cursor: pointer;
        font-size: 1.9rem;
        color: white;
        :hover{
            color: #F7931E;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            -o-transition: 0.5s;
            transition: 0.5s;
        }
  }
  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
export const NavMenu = styled.div`
    display: flex;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItems = styled.button`
    display: inline-block;
    align-items: center;
    background: none;
    border: none;   
`
export const NavLinks = styled(Link)`
    display: flex;
    text-decoration: none;
    cursor: pointer;
    padding: 15px 20px;
    color: white;
    font-size: 1.05rem;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 10px;
    &:hover{
        background: #F7931E;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 0.95rem;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 0.85rem;
    }
`

