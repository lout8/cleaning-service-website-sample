import styled from "styled-components";
import { Link } from "gatsby";


export const InfoBar = styled.div`
    display: flex;
    position: relative;
    top: 0;
    width: 100%;
    height: auto;
    z-index: 10;
`
export const InfoContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 100%;
    padding: 10px 100px;
    background-color: #07407B;
    border-bottom: 1px solid white;

    @media only screen and (max-width: 1200px) {
        padding: 10px 70px;
    }
    @media only screen and (max-width: 1024px) {
        padding: 10px 50px;
    }
    @media only screen and (max-width: 900px) {
        padding: 10px 25px;
        /* display: none; */
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        display: none;
    }

`
export const InfoMenu = styled.div`
    display: flex;
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`
export const InfoItems = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;    
`
export const InfoLinks = styled(Link)`
    display: flex;
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-size: 0.85rem;
    margin: 0 25px 0 0;
    :hover{
        color: #F7931E;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 0.8rem;
    }
    @media only screen and (max-width: 768px){
        padding: 2px 0;
    }
`
export const InfoLinksIcon = styled.div`
    display: flex;
    margin: 0 5px 0 0;
    justify-content: center;
`