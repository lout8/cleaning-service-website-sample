import * as React from "react"
import PrimarycComponents from "../components/layouts/primarycComponents"
import styled, { keyframes } from "styled-components"
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link, graphql } from "gatsby"
import { useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PartnersImg from '../data/pages/home.yaml'

const Home = styled.div`
  display: flex;
  flex-direction: column;
`
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  @media only screen and (max-width: 1200px) {
    padding: 0 70px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 900px) {
    padding: 0 25px;
  }
  &.coloredContainer{
    color: black;
    background: #F0F0F0;
  }
  &.regularContainer{
    color: black;
    background: white;
    text-align: center;
  }
  &.greyContainer{
    color: black;
    background: #F0F0F0;
    text-align: center;
    padding: 0;
  }
`
const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 30px 0 0 0;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.9rem;
  
  @media only screen and (max-width: 1200px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`
const HomeHeaderUnderline = styled.div`
  align-self: center;
  width: 25%;
  margin-top: 5px;
  border-radius: 10px;
  border-top: 4px solid black;
  @media only screen and (max-width: 1024px) {
    border-top: 3px solid white;
  }
  &.coloredContainer{
    border-top: 4px solid black;
  }
  &.regularContainer{
    border-top: 4px solid black;
  }
  &.greyContainer{
    border-top: 4px solid black;
  }
`
const MapWrapper = styled(MapContainer)`
height: 350px;
margin: 0 0 -50px 0;
border-radius: 10px;
.leaflet-control { z-index: 0 !important}
.leaflet-pane { z-index: 0 !important}
.leaflet-top, .leaflet-bottom {z-index: 0 !important}

`
//Image
const HomeImageContainer = styled.div`
  position: relative;
  align-items: center;
  background: black;
  height: 80vh;
  @media only screen and (max-width: 1200px) {
    height: 75vh;
  }
  @media only screen and (max-width: 1024px) {
    height: 70vh;
  }
  @media only screen and (max-width: 900px) {
    height: 60vh;
  }
`
const HomeImage = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`
const HomeTextContainer = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const HomeImageText = styled.div`
  color: #F7931E;
  font-weight: 500;
  font-size: 2.6rem;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media only screen and (max-width: 1024px) {
    font-size: 2.3rem;
  }
  @media only screen and (max-width: 769px) {
    font-size: 2rem;
  }
`
const HomeImageUnderText = styled.div`
  color: white;
  font-size: 1.3rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 769px) {
    font-size: 1rem;
  }
`
//Services
const HomeItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0 100px 0;
`
const HomeItemsHover = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(7, 64, 123, 90%);
  bottom: -200px;
 
`
const HomeItemsTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: white;
  height: 65px;
  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`
const HomeItems = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 20px;
  width: 350px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    width: 270px;
    height: 250px;
  }
  ${HomeItemsHover}{
    bottom: ${({ isServiceClicked }) => (isServiceClicked ? '0' : '-235px;')};
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;

    @media only screen and (max-width: 1024px) {
      bottom: 0;
    }
  }
  ${HomeItemsTitle}{
    color: ${({ isServiceClicked }) => (isServiceClicked ? '#F7931E' : 'white')};
    @media only screen and (max-width: 1024px) {
      color: #F7931E;
    }
  }

  
`
const HomeItemsImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`
const HomeItemsText = styled.div`
  align-self: center;
  font-size: 0.9rem;
  color: white;
  padding: 0 15px 10px 15px;
`
const HomeItemsLink = styled(Link)`
  position: absolute;
  color: #F7931E;
  bottom: 20px;
  left: 15px;
    background: #F7931E;
    padding: 10px 15px;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;

    }
    @media only screen and (max-width: 480px) {
      font-size: 0.6rem;
      padding: 8px 13px;
    }
`
//Company
const HomeCompanyText = styled.div`
  font-size: 1.2rem;
  padding: 25px 25%;
  @media only screen and (max-width: 1200px) {
    padding: 25px 20%;
  }
  @media only screen and (max-width: 1024px) {
    padding: 25px 15%;
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 900px) {
    padding: 25px 5%;
  }
`
const HomeCompanyButton = styled(Link)`
    background: #F7931E;
    padding: 15px 20px;
    margin: 10px 0 50px 0;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;

    }

    @media only screen and (max-width: 1200px) {
        font-size: 1rem;
    }
    @media only screen and (max-width: 1024px) {
        font-size: 0.8rem;
        padding: 10px 15px;
    }
`
//Partners
const HomePartnersText = styled.div`
  font-size: 1rem;
  padding: 25px 25%;
  @media only screen and (max-width: 1200px) {
    padding: 25px 20%;
  }
  @media only screen and (max-width: 1024px) {
    padding: 25px 15%;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 900px) {
    padding: 25px 5%;
  }
`
const carousel = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-100%);
  }
`
const HomePartnersSlideContainer = styled.div`
  position: relative;
  display: inline-block;
  animation: ${carousel} 200s linear infinite;
`
const HomePartnersSlideWrapper = styled.div`
  position: relative;
  white-space: nowrap;
  margin-bottom: 50px;
  width: 100%;
  &:hover{
    ${HomePartnersSlideContainer}{
      animation-play-state: paused;
    }
  }
  &::before, &::after{
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    content: "";
    z-index: 2;
  }
  &::before{
    left: 0;
    background: linear-gradient(to left, rgb(255, 255, 255, 0), white);
  }
  &::after{
    right: 0;
    background: linear-gradient(to right, rgb(255, 255, 255, 0), white);
  }
`
const HomePartnersImages = styled(GatsbyImage)`
  margin-right: 20px;
  @media only screen and (max-width: 900px) {
    height: 35px;
    width: auto;
    max-width: 200px;
    margin: 0 15px;
  }
`
const IndexPage = ({data}) => {
  const HomeData = data.pagesYaml

  const ServicesCategory = ({ slug, name, description, image, button}) =>{


    const[isServiceClicked, setIsServiceClicked] = useState(false)

    const[ServiceSlug] = useState(slug)
    const[ServiceName] = useState(name)
    const[ServiceDescription] = useState(description)
    const[Serviceimage] = useState(image)
    const[ServiceButton] = useState(button)
    return(
      <HomeItems key={ServiceName} isServiceClicked={isServiceClicked} onMouseEnter={() => setIsServiceClicked(true)} onMouseLeave={() => setIsServiceClicked(false)}>
      <HomeItemsImage image={getImage(Serviceimage)} alt='icon'></HomeItemsImage>
      <HomeItemsHover>
        <HomeItemsTitle>{ServiceName}</HomeItemsTitle>
        <HomeItemsText>{ServiceDescription}</HomeItemsText>
        <HomeItemsLink to={ServiceSlug}>{ServiceButton}</HomeItemsLink>
      </HomeItemsHover>
    </HomeItems>
    ); 
  }

  return (
    <PrimarycComponents>
      <Home>
        <HomeImageContainer>
          <HomeImage image={getImage(HomeData.headerImage)} alt={HomeData.header}/>
          <HomeTextContainer>
            <HomeImageText>{HomeData.header}</HomeImageText>
            <HomeImageUnderText>{HomeData.underheader}</HomeImageUnderText>
          </HomeTextContainer>
        </HomeImageContainer>
        <HomeContainer className="coloredContainer">
          <HomeHeader>Our services<HomeHeaderUnderline className="coloredContainer"/></HomeHeader>
            <HomeItemsContainer>
              {HomeData.services.map((data) =>{
                return(
                  <ServicesCategory key={data.name} slug={data.slug} name={data.name} description={data.description} image={data.image} button={data.button}/>
                )
              })}
            </HomeItemsContainer >
        </HomeContainer>
        <HomeContainer className="regularContainer">
          <HomeHeader>THE COMPANY<HomeHeaderUnderline className="regularContainer"/></HomeHeader>
          <HomeCompanyText>{HomeData.companyDisc}</HomeCompanyText>
          <HomeCompanyButton to="/epikoinonia">contact us</HomeCompanyButton>
        </HomeContainer>
        <HomeContainer className="greyContainer">
          <HomeHeader>PARTNERS<HomeHeaderUnderline className="greyContainer"/></HomeHeader>
          <HomePartnersText>We have partnership with many organizations.</HomePartnersText>
          <HomePartnersSlideWrapper>
            <HomePartnersSlideContainer >
              {HomeData.partners.map((data) => {
                return <HomePartnersImages image={getImage(data.image)} alt={data.image}/>
              })} 
               {HomeData.partners.map((data) => {
                return <HomePartnersImages image={getImage(data.image)} alt={data.image}/>
              })} 
            </HomePartnersSlideContainer>
            <HomePartnersSlideContainer >
             
            </HomePartnersSlideContainer>
          </HomePartnersSlideWrapper>
        </HomeContainer>
        <MapWrapper center={[40.144307,22.399911]} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.144307,22.399911]}>
            <Popup>
              <a href="https://goo.gl/maps/BEo5P3j6GZ4kNoTR7" target="_blank" rel="noopener noreferrer">Λεωφ. Λαυρίου 101, Παιανία 190 02</a>
            </Popup>
          </Marker>
          </MapWrapper>
      </Home>
    </PrimarycComponents>
  )
}
export default IndexPage

export const Head = () => <title>Home - Company Name</title>

export const query = graphql`
  query HomeQuery {
    pagesYaml {
      header
      underheader
      companyDisc
      headerImage {
        childImageSharp {
          gatsbyImageData(
            width: 1920,
            height: 1080,
            quality: 50,
            placeholder: BLURRED,
            formats: [AUTO, WEBP, AVIF],
          )
        }
      }
      partners {
        image {
          childImageSharp {
            gatsbyImageData(
              height: 125,
              placeholder: BLURRED,
              formats: [AUTO, WEBP, AVIF],
            )
          }
        }
      }
      services {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 500,
              height: 500,
              quality: 50,
              placeholder: BLURRED,
              formats: [AUTO, WEBP, AVIF],
            )
          }
        }
        name
        slug
        button
        description
      }
    }
  }
`




