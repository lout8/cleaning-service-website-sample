import { Link } from "gatsby";
import styled from "styled-components";


export const FooterMain = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 5;
`
export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
    padding: 0 100px;
    margin-top: 50px;
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
export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 20px 20px;
    //Center Logo
    :first-child{
        justify-content: center;
    }
`
export const FooterLogo = styled(Link)`
    display: flex;
    align-items: center;
    height: 70px;
    width: auto;
    cursor: pointer;

    @media only screen and (max-width: 1024px) {
        height: 60px;
        width: auto;
    }
    @media only screen and (max-width: 769px) {
        height: 50px;
        width: auto;
    }
`
export const FooterLogoIcon = styled.img`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 146px;  
    max-height: 146px;
`
export const FooterItemsHeader = styled.div`
    padding-bottom: 10px;
    color: #F7931E;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 500;
    @media only screen and (max-width: 1200px) {
        font-size: 1rem;
    }
`
export const FooterLinksIcon = styled.div`
    display: flex;
    color: white;
    margin: 0 5px 10px 0;
`
export const FooterItemsMenuLinks = styled(Link)`
    padding-bottom: 8px;
    color: white;
    width: fit-content;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;

    :hover{
        color: #F7931E;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 0.9rem;
    }
`
export const FooterItemsLinks = styled.a`
    padding-bottom: 8px;
    color: white;
    width: fit-content;
    font-size: 1rem;
    text-decoration: none;

    :hover{
        color: #F7931E;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 0.9rem;
    }
`
export const FooterItemsLinksWrapper = styled.div`
    display: flex;
    align-items: center; 
    width: fit-content;
    cursor: pointer;

    &:hover{
        ${FooterItemsLinks}{
            color: #F7931E;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            -o-transition: 0.5s;
            transition: 0.5s;
        }
        ${FooterLinksIcon}{
            color: #F7931E;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            -o-transition: 0.5s;
            transition: 0.5s;
        }
    }
`