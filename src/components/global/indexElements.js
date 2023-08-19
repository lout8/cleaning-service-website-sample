import { createGlobalStyle } from "styled-components";
//Roboto
//regular
import robotoregularttf from "../../fonts/roboto/roboto-regular.ttf"
import robotoregularwoff2 from "../../fonts/roboto/roboto-regular.woff2"
import robotoregularwoff from "../../fonts/roboto/roboto-regular.woff"
//medium
import robotomediumttf from "../../fonts/roboto/roboto-medium.ttf"
import robotomediumwoff2 from "../../fonts/roboto/roboto-medium.woff2"
import robotomediumwoff from "../../fonts/roboto/roboto-medium.woff"
//bold
import robotoboldttf from "../../fonts/roboto/roboto-bold.ttf"
import robotoboldwoff2 from "../../fonts/roboto/roboto-bold.woff2"
import robotoboldwoff from "../../fonts/roboto/roboto-bold.woff"

export const GlobalStyle = createGlobalStyle`
    //regular
    @font-face {
        font-family: "roboto";
        src: url(${robotoregularttf}) format('truetype'),
            url(${robotoregularwoff2}) format('woff2'),
            url(${robotoregularwoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    //500
    @font-face {
        font-family: "roboto";
        src: url(${robotomediumttf}) format('truetype'),
            url(${robotomediumwoff2}) format('woff2'),
            url(${robotomediumwoff}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    //bold
    @font-face {
        font-family: "roboto";
        src: url(${robotoboldttf}) format('truetype'),
            url(${robotoboldwoff2}) format('woff2'),
            url(${robotoboldwoff}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
    body, html{
        margin: 0;
        padding: 0;
        font-family: "roboto";
        overflow: ${({ isOpen, isOpenFilter }) => (isOpen || isOpenFilter ? 'hidden' : 'scroll')};
        overflow-x: hidden;
    }
    input, select, textarea{
        font-family: "roboto";
    }
    
`