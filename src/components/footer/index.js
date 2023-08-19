import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FooterMain, FooterContainer, FooterItems, FooterLogo, FooterLogoIcon, FooterItemsHeader, FooterItemsLinksWrapper, FooterItemsMenuLinks, FooterItemsLinks, FooterLinksIcon } from './footerElements'
import { UnderfooterContainer, UnderfooterWrapper, UnderfooterLabel, UnderfooterMenuLinks, UnderfooterLinks, UnderfooterLinksIcon } from './underfooterElements'
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt"
import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt"
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope"
import {FaMobile} from "@react-icons/all-files/fa/FaMobile"
import {FaRegCopyright} from "@react-icons/all-files/fa/FaRegCopyright"
import logo from "../../images/logo.svg"


const ServicesList = ({data}) => {
  const servicesData = data.allMarkdownRemark.nodes

  return(
    <>
      <FooterItemsHeader>SERVICES</FooterItemsHeader>
      <FooterItemsMenuLinks to="/proionta">Products</FooterItemsMenuLinks>
      {servicesData.map((data) => (
        <FooterItemsMenuLinks to="/uphresies">{data.frontmatter.title}</FooterItemsMenuLinks>
      ))}
    </>
  )
}

const QueryServices = () => {
  return(
      <StaticQuery
          query={graphql`
              query {
                allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}) {
                  nodes {
                    id
                    frontmatter {
                      title
                    }
                  }
                }
              }
          `}
          render={data => <ServicesList data={data}/>}
      />
  )
}

const Footer = () => {
  
  return (
    <FooterMain>
    <FooterContainer>
      <FooterItems>
      <FooterLogo to="/"><FooterLogoIcon src={logo} alt="logo"></FooterLogoIcon></FooterLogo>
      </FooterItems>
      <FooterItems>
        <QueryServices/>
      </FooterItems>
      <FooterItems>
        <FooterItemsHeader>COMPANY</FooterItemsHeader>
        <FooterItemsMenuLinks to="/">About us</FooterItemsMenuLinks>
        <FooterItemsLinks href="mailto: info@cleanforyou.gr" target="_blank" rel="noopener noreferrer">Carrier</FooterItemsLinks>
        <FooterItemsMenuLinks to="/">Privacy policy</FooterItemsMenuLinks>
        <FooterItemsMenuLinks to="/">Cookies</FooterItemsMenuLinks>
      </FooterItems>
      <FooterItems>
        <FooterItemsHeader>SOCIAL</FooterItemsHeader>
        <FooterItemsLinks href="https://Facebook.com" target="_blank" rel="noopener noreferrer">Facebook</FooterItemsLinks>
        <FooterItemsLinks href="https://Instagram.com" target="_blank" rel="noopener noreferrer">Instagram</FooterItemsLinks>
      </FooterItems>
      <FooterItems>
        <FooterItemsHeader>CONTACT</FooterItemsHeader>
        <FooterItemsLinksWrapper><FooterLinksIcon><FaMapMarkerAlt/></FooterLinksIcon><FooterItemsLinks href="https://goo.gl/maps/tkNGUHigPBtYySd48" target="_blank" rel="noopener noreferrer">Veronica Crossing 625, Kutchchester 190 02</FooterItemsLinks></FooterItemsLinksWrapper>
        <FooterItemsLinksWrapper><FooterLinksIcon><FaMobile/></FooterLinksIcon><FooterItemsLinks href="tel: 6988888888" target="_blank" rel="noopener noreferrer">698 888 8888</FooterItemsLinks></FooterItemsLinksWrapper>
        <FooterItemsLinksWrapper><FooterLinksIcon><FaPhoneAlt/></FooterLinksIcon><FooterItemsLinks href="tel: 2627777777" target="_blank" rel="noopener noreferrer">262 777 7777</FooterItemsLinks></FooterItemsLinksWrapper>
        <FooterItemsLinksWrapper><FooterLinksIcon><FaEnvelope/></FooterLinksIcon><FooterItemsLinks href="mailto: info@company.com" target="_blank" rel="noopener noreferrer">info@company.com</FooterItemsLinks></FooterItemsLinksWrapper>
      </FooterItems>
    </FooterContainer>
    <UnderfooterContainer>
    <UnderfooterWrapper>
        <UnderfooterLabel>Copyright</UnderfooterLabel>
        <UnderfooterLinksIcon><FaRegCopyright/></UnderfooterLinksIcon>
        <UnderfooterLabel>2023</UnderfooterLabel>
        <UnderfooterMenuLinks to="/">Company Name</UnderfooterMenuLinks>
      </UnderfooterWrapper>
      <UnderfooterWrapper>
        <UnderfooterLabel to="/">Developed & Designed by:</UnderfooterLabel>
        <UnderfooterLinks href="https://elissaiosloutos.com/" target="_blank" rel="noopener noreferrer">Elissaios Loutos</UnderfooterLinks>
      </UnderfooterWrapper>
    </UnderfooterContainer>
    </FooterMain>
  )
}

export default Footer

