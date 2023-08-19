import styled from 'styled-components'
import { Link } from 'gatsby'

export const SidebarContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: auto;
    z-index: 10;
    background: #232930;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
    @media only screen and (min-width: 768px){
        display: none;
    }    
`
export const SidebarBackgroundContainer = styled.div`
    position: fixed;
    display: flex;
    top: -100%;
    width: 100%;
    height: 100%;
    z-index: 9;
    background: #232930;
    opacity: 0.8;
    opacity: ${({ isOpen }) => (isOpen ? '0.8' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    @media only screen and (min-width: 768px){
        display: none;
    }    
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
`
export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.9rem;
    color: white;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    font-weight: 500;
    text-transform: uppercase;
    :hover{
        background-color: #F7931E;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
`
export const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #07407B;
    border: none;
    border-top: 0.5px solid white;
    cursor: pointer;
`
