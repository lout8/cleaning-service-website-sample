import { Link } from 'gatsby';
import React from 'react'
import styled from "styled-components";
import { GlobalStyle } from '../components/global/indexElements';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Title404 = styled.div`
  font-size: 5rem;
`
const Subtitle404 = styled.div`
  font-size: 1.1rem;
`
const Button404 = styled(Link)`
  display: flex;
  font-size: 0.9rem;
  color: orange;
  text-transform: uppercase;
  color: white;
  background: #F7931E;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;
  text-decoration: none;
  
`

const Page404 = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <Title404>404</Title404>
      <Subtitle404>Page not found!</Subtitle404>
      <Button404 to='/'>Back to home</Button404>
    </MainContainer>
      
  )
}

export default Page404