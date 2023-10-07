import React, { useState } from 'react'
import { useLocation } from '@reach/router';
import { graphql, Link, StaticQuery } from 'gatsby'
import PrimarycComponents from './primarycComponents'
import styled from "styled-components"
import {HiAdjustments} from "@react-icons/all-files/hi/HiAdjustments"
import {IoMdClose} from "@react-icons/all-files/io/IoMdClose"
import {FaSearch} from "@react-icons/all-files/fa/FaSearch"



const Products = styled.div`
    display: flex;
    flex-direction: row;
`
const ProductsWrapper = styled.div`
    display: flex;
    :last-child{
        width: 100%;
    }
`
//Products Menu
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 10% 0 0 5%;
    padding: 25px;
    width: 350px;
    min-height: 80vh;
    background: #07407B;
    @media only screen and (max-width: 1200px) {
        width: 250px;
    } 
    @media only screen and (max-width: 1024px) {
        display: none;
    } 
`
const MenuLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const MenuLinks = styled.div`
    margin: 0 -25px;
    padding: 15px 25px;
    color: white;
    cursor: pointer;
    background: ${({ isCategoryOpen, isActive }) => (isCategoryOpen || isActive ? '#F7931E' : 'none')};
    :hover{
        background: #F7931E;
        -webkit-transition: 0.5se;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
`
const MenuLink = styled(Link)`
    margin: 0 -25px;
    padding: 15px 25px;
    color: white;
    cursor: pointer;
    text-decoration: none;
    background: ${({ isCategoryOpen }) => (isCategoryOpen ? '#F7931E' : 'none')};
    :hover{
        background: #F7931E;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
`
const MenuDropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 -25px;
    padding: 0 25px;
    width: 100%;
    background: rgba(247, 147, 30, 0.8);
    height: ${({ isCategoryOpen, isActive }) => (isCategoryOpen || isActive ? '100%' : '0')};

`
const MenuDropdownLinks = styled(Link)`
    color: white;
    margin: 0 -25px;
    padding: 10px 35px;
    border-top: 1px solid #07407B;
    cursor: pointer;
    text-decoration: none;
    :hover{
        color: #07407B;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;

    }
    &.active {
        color: #07407B;
        
    }
`
//Search
const SearchContainer = styled.div`
    position: relative;
    display: flex;
    margin: 20px 0 40px 0;
`
const SearchInput = styled.input`
    width: 100%;
    padding: 10px 10px 10px 35px;
    border-radius: 10px;
    border: none;
    font-size: 0.9rem;
    :focus{
        outline: none !important;
        border: 1px solid #F7931E;
        box-shadow: 0 0 5px #F7931E;
    }
`
const SearchInputIcon = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 0.9em;
    padding: 0 10px;
    left: 0;
    height: 100%;
    color: black;
`
const SearchXIcon = styled.div`
    position: absolute;
    align-items: center;
    font-size: 1em;
    padding: 0 10px;
    right: 0;
    height: 100%;
    color: black;
    cursor: pointer;
    display: ${({ query, emptyQuery }) => (query !== emptyQuery ? 'none' : 'flex')};

`
//Products
const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
//Responsive
const FilterResposiveButton = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    bottom: 0;
    right: 0;
    margin: 0 20px 40px 0;
    padding: 10px 15px;
    border-radius: 20px;
    z-index: 6;
    color: white;
    font-size: 1.4rem;
    background-color: #F29A32;
    cursor: pointer;

    &:hover{
        color: #07407B;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    &:after{
        font-size: 1.1rem;
        margin-left: 5px;
        content: "Φίλτρα";
    }
    opacity: 0;
    
    @media only screen and (max-width: 1024px) {
        opacity: 1;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s; 
    }     
`
const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top:0;
    bottom: 0;
    padding: 25px;
    width: 300px;
    height: 100%;
    background: #07407B;
    z-index: 15;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    left: ${({ isOpenFilter }) => (isOpenFilter ? "0" : '-350px')};
    @media only screen and (min-width: 1024px){
        display: none;
    }  
    @media only screen and (max-width: 480px) {
        width: calc(100% - 50px);
        left: ${({ isOpenFilter }) => (isOpenFilter ? "0" : '-100%')};
    } 
    overflow: none;
    body{
        overflow: hidden;
    }
`
const FilterBackgroundContainer = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 14;
    background: #232930;
    -webkit-transition: opacity 0.5s;
    -moz-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    transition: opacity 0.5s;
    opacity: ${({ isOpenFilter }) => (isOpenFilter ? '0.8' : '0')};
    left: ${({ isOpenFilter }) => (isOpenFilter ? '0' : '-100%')};
    @media only screen and (min-width: 1024px){
        display: none;
    }    
`
const FilterClosebutton = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    :hover{
        color: #F29A32;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
`
const FilterLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
const FilterLabel = styled.label`
    &:nth-child(n + 4){
        display: none;
    }
    padding-bottom: 10px;
    font-size: 1.1rem;
    color: white;
    font-weight: 600;
   
    @media only screen and (max-width: 600px) {
        &:nth-child(n + 4){
        display: flex;
    }
    } 
`
const FilterSortingContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    background: none;
    border: none;
    overflow: hidden;
    height: 100%;
    &:visited{
        background: #F29A32;
    }
    &:focus{
        display: none;
    }
`
const FilterLinks = styled.label`
    display: none;
    width: fit-content;
    border-radius: 20px;
    border: 1px solid white;
    color: white;
    font-size: 1rem;
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
    &:hover{
        background: #F29A32;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    @media only screen and (max-width: 600px) {
        display: flex;
    }
`
const FilterInput = styled.input`
    display: none;   
    &:checked + ${FilterLinks}{
        background: #F29A32;
    }
`


//MenuComponent
const MenuQuery = ({data}) => {
    const menuData = data.allMarkdownRemark.nodes
    const location = useLocation();
       
    // Category Component
    const CategoryComponents = ({ id, category, subcategory}) =>{

        const[isCategoryOpen, setIsCategoryOpen] = useState(false)
        const[CategoryId] = useState(id)
        const[CategoryCate] = useState(category)
        const[CategorySubcate] = useState(subcategory)
    

        return(
            <MenuLinksContainer key={CategoryId}>
                <MenuLinks isActive={CategorySubcate.some(({ slug }) => location.pathname.includes(slug))} isCategoryOpen={isCategoryOpen} onClick={() => setIsCategoryOpen(!isCategoryOpen)}>{CategoryCate}</MenuLinks>
                <MenuDropdownContainer isActive={CategorySubcate.some(({ slug }) => location.pathname.includes(slug))} isCategoryOpen={isCategoryOpen}>
                    {CategorySubcate.map(CategorySubcate =>(
                        <MenuDropdownLinks activeClassName="active" to={`/products/${CategorySubcate.slug}/`} key={CategorySubcate.subname}>{CategorySubcate.subname}</MenuDropdownLinks>
                    )
                    )}
                </MenuDropdownContainer>
            </MenuLinksContainer>
            
        ); 
        
    }
    return(
        <div>
            <MenuLinksContainer><MenuLink to={"/products/"} activeStyle={{ background: "#F7931E" }}>All Products</MenuLink></MenuLinksContainer>
            
            {menuData.map(menuData =>(
                <CategoryComponents key={menuData.id} id={menuData.id} category={menuData.frontmatter.category} subcategory={menuData.frontmatter.subcategory} />
            ))}
        </div>
    )
    
}
const MenuComponents = () => {
    return(
        <StaticQuery
            query={graphql`
                query{
                    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/menu/"}}) {
                    nodes {
                        frontmatter {
                            category
                            subcategory {
                                subname
                                slug
                            }
                        }
                    id
                    }
                    }
                }
            `}
            render={data => <MenuQuery data={data}/>}
        />
    )
}
const ProductsComponents = ({ children, handleInputChange, setState, emptyQuery, query, productOrderBy, HandleSorting }) => {
    //Filter Button 
    const[isOpenFilter, setIsOpenFilter] = useState(false)
    const toggle = () => {
        setIsOpenFilter(!isOpenFilter)
    }

  return (
    <PrimarycComponents isOpenFilter={isOpenFilter}>
        <Products>
            {/* Responsive menu and button */}
            <FilterContainer isOpenFilter={isOpenFilter}>
                <FilterClosebutton onClick={toggle}><IoMdClose/></FilterClosebutton>
                <SearchContainer>
                    <SearchInput value={query} onChange={handleInputChange} type="text" name="search" id="search" placeholder="Search"/>
                    <SearchInputIcon ><FaSearch/></SearchInputIcon>
                   {query === emptyQuery ? <></> : <SearchXIcon onClick={() => setState({filteredData:[], query: emptyQuery, })}><IoMdClose/></SearchXIcon>} 
                </SearchContainer>
                <FilterLabel >Category</FilterLabel>
                <FilterLinksContainer >
                    <MenuComponents/>
                </FilterLinksContainer>
                <FilterLabel>Sorted by:</FilterLabel>
                <FilterSortingContainer value={productOrderBy} onChange={HandleSorting} name="filter" id="filter" >
                    <FilterInput type="radio" id="first" name="align1" value={0} checked={productOrderBy == 0}/>
                    <FilterLinks htmlFor="first">Name</FilterLinks>
                    <FilterInput type="radio" id="second" name="align1" value={1} checked={productOrderBy == 1}/>
                    <FilterLinks htmlFor="second">Price: Low to High</FilterLinks>
                    <FilterInput type="radio" id="third" name="align1" value={2} checked={productOrderBy == 2}/>
                    <FilterLinks htmlFor="third">Price: High to Low</FilterLinks>
                </FilterSortingContainer>
            </FilterContainer>
            <FilterBackgroundContainer onClick={toggle} isOpenFilter={isOpenFilter}></FilterBackgroundContainer>
            <FilterResposiveButton onClick={toggle}><HiAdjustments/></FilterResposiveButton>
            {/* Filter Menu */}
            <ProductsWrapper>
                <MenuContainer>
                    <SearchContainer>
                        <SearchInput value={query} onChange={handleInputChange} type="text" name="search" id="search" placeholder="Search"/>
                        <SearchInputIcon><FaSearch/></SearchInputIcon>
                        {query === emptyQuery ? <></> : <SearchXIcon onClick={() => setState({filteredData:[], query: emptyQuery, })}><IoMdClose/></SearchXIcon>} 
                    </SearchContainer>
                    <FilterLabel >Category</FilterLabel>
                    <MenuComponents/>
                </MenuContainer>
            </ProductsWrapper>
            {/* Header, Filter Bar and items */}
            <ProductsWrapper>
                <ProductContainer>
                    {children}
                </ProductContainer>
            </ProductsWrapper>
        </Products>
    </PrimarycComponents>
  )
}
export default ProductsComponents

