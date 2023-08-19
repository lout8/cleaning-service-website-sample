import styled from "styled-components";
import { Link } from "gatsby";

export const UnderfooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    background-color: #07407B;
    border-top: 1px solid white;
`
export const UnderfooterWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: auto;
    margin: 5px 15px;
`
export const UnderfooterLabel = styled.div`
    color: white;
    font-size: 0.9rem;

    @media only screen and (max-width: 1200px) {
        font-size: 0.8rem;
    }
`
export const UnderfooterLinksIcon = styled.div`
    color: white;
    font-size: 0.6rem;
    align-self: center;
    padding: 0 3px;
    
    @media only screen and (max-width: 1200px) {
        font-size: 0.5rem;
    }
`
export const UnderfooterMenuLinks = styled(Link)`
    color: #F7931E;
    font-size: 0.9rem;
    margin-left: 5px;
    text-decoration: none;
    cursor: pointer;

    :hover{
        opacity: 0.8;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 0.8rem;
    }
`
export const UnderfooterLinks = styled.a`
    color: #F7931E;
    font-size: 0.9rem;
    margin-left: 5px;
    text-decoration: none;
    cursor: pointer;

    :hover{
        opacity: 0.8;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 1200px) {
        font-size: 0.8rem;
    }
`
