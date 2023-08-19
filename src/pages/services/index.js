import React from 'react'
import styled from 'styled-components'
import PrimarycComponents from '../../components/layouts/primarycComponents'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useState } from 'react'


const Services = styled.div`
  display: flex;
  flex-direction: column;
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
`
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
//Header
const ServicesHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ServicesHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 50px 0 0 0;
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
const ServicesHeaderUnderline = styled.div`
  align-self: center;
  width: 25%;
  margin-top: 5px;
  border-radius: 10px;
  border-top: 4px solid black;
  @media only screen and (max-width: 1024px) {
    border-top: 3px solid black;
  }
`
//Items
const ServicesItemsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
  padding: 50px 20px;
  justify-items: center;
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    padding: 50px 0;
  }

`
const ServicesItemsHover = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(7, 64, 123, 90%);
  bottom: -200px;
 
`
const ServicesItemsTitle = styled.div`
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
const ServicesItems = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 280px;
  border-radius: 10px;
  overflow: hidden;

  ${ServicesItemsHover}{
    bottom: ${({ isServiceClicked }) => (isServiceClicked ? '0' : '-235px;')};
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;

    @media only screen and (max-width: 1024px) {
      bottom: 0;
    }
  }
  ${ServicesItemsTitle}{
    color: ${({ isServiceClicked }) => (isServiceClicked ? '#F7931E' : 'white')};
    @media only screen and (max-width: 1024px) {
      color: #F7931E;
    }
  }

`
const ServicesItemsImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`
const ServicesItemsText = styled.div`
  align-self: center;
  font-size: 0.9rem;
  color: white;
  padding: 0 15px 10px 15px;
`

const ServicesPage = ({ data }) => {

  const servicesData = data.allMarkdownRemark.nodes


  const ServicesCategory = ({ title, description, image}) =>{
    const[isServiceClicked, setIsServiceClicked] = useState(false)
    const[ServiceTitle] = useState(title)
    const[ServiceDescription] = useState(description)
    const[Serviceimage] = useState(image)
    return(
      <ServicesItems key={ServiceTitle} isServiceClicked={isServiceClicked} onMouseEnter={() => setIsServiceClicked(true)} onMouseLeave={() => setIsServiceClicked(false)}>
      <ServicesItemsImage image={getImage(Serviceimage)} alt='icon'></ServicesItemsImage>
      <ServicesItemsHover>
        <ServicesItemsTitle>{ServiceTitle}</ServicesItemsTitle>
        <ServicesItemsText>{ServiceDescription}</ServicesItemsText>
      </ServicesItemsHover>
    </ServicesItems>
    ); 
  }
  return (
    <PrimarycComponents>
      <Services> 
        <ServicesContainer>
          <ServicesHeaderContainer>
            <ServicesHeader>Υπηρεσιες <ServicesHeaderUnderline/></ServicesHeader>
          </ServicesHeaderContainer>
            <ServicesItemsContainer>
              {servicesData.map(servicesData => (
                <ServicesCategory title={servicesData.frontmatter.title} description={servicesData.frontmatter.description} image={servicesData.frontmatter.image}/>
              ))}
            </ServicesItemsContainer>
        </ServicesContainer>
      </Services>
    </PrimarycComponents>
  )
}
export default ServicesPage

export const Head = () => <title>Υπηρεσίες - Clean for you</title>

export const query = graphql`
  query ServicesQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/services/"}}) {
    nodes {
      id
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 400,
              height: 300,
              quality: 50,
              placeholder: BLURRED,
              formats: [AUTO, WEBP, AVIF],
            )
          }
        }
      }
    }
  }
}
`