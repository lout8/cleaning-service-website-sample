import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import ProductsComponents from '../components/layouts/productsComponents';
import { graphql, Link } from 'gatsby'
import {MdKeyboardArrowRight} from "@react-icons/all-files/md/MdKeyboardArrowRight"
import {MdKeyboardArrowLeft} from "@react-icons/all-files/md/MdKeyboardArrowLeft"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//Main
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
//Items
const ProductsContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px 40px;
`
const ProductsItems = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: 300px;
    max-height: 350px;
    border-radius: 10px;
    border: 1px solid black;
`
const ProductsImage = styled(GatsbyImage)`
    width: 100%;
    height: 55%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`
const ProductsTitle = styled.div`
    font-weight: 500;
    margin: 10px 15px;
    font-size: 1rem;
`
const ProductsSizeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 0;
    bottom: 20px;
`
const ProductsSizeButton = styled.select`
    border: none;
    border-radius: 4px;
    display: inline-block;
    padding: 0.5em 3.5em 0.5em 1em;
    margin: -10px 15px;
    cursor: pointer;

    /* reset */  
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    appearance: none;;
    -webkit-appearance: none;
    -moz-appearance: none;


    background-image:
    linear-gradient(45deg, transparent 50%, white 50%),
    linear-gradient(135deg, white 50%, transparent 50%),
    linear-gradient(to right, #F7931E, #F7931E);
  background-position:
    calc(100% - 17px) calc(0.8em + 2px),
    calc(100% - 12px) calc(0.8em + 2px),
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    2.5em 2.5em;
  background-repeat: no-repeat;

    :hover{
        background-color: #F7931E;
        color: white;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
`
const ProductsPrice = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    right: 0;
    margin-right: 10px;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    &::after{
        content: "€";
    }
    &::before{
        content: "from";
        margin-right: 5px;
        font-size: 1rem;
    }
`
const ProductsCode = styled.div`
    display: flex;
    position: absolute;
    justify-self: flex-end;
    align-self: flex-end;
    bottom: 0;
    right: 0;
    margin: 5px 10px;
    align-items: center;
    font-size: 0.7rem;
    opacity: 0.5;
    &::before{
        content: "Code:";
        margin-right: 2px;
    }
`
const ProductsEmtyLabel = styled.p`
    position: absolute;
    opacity: 0.7;
`
//FilterItems
const ProductHeader = styled.div`
    text-align: center;
    margin: 45px 0 5px 0;
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
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 5% 0 5%;
    padding: 15px;
    border-radius: 10px;
    background: #F29A32;
    @media only screen and (max-width: 600px) {
        display: none;
    } 
`
const FilterItems = styled.div`
    display: flex;
`
const ProductsFilterLabel = styled.div`
    margin-right: 5px;
    color: #07407B;
    font-size: 1rem;
`
const ProductsFilterSelect = styled.select`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    :hover{
        color: #07407B;
    }
`
//Buttons
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: auto;
`
const LinkBtn = styled(Link)`
    display: flex;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    &.pageNumber{
        color: black;
        :hover{
            color: white;
            background: #F7931E;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            -o-transition: 0.5s;
            transition: 0.5s;
        }
    }
    &.currentPage{
        color: #F7931E;
        
    }
`
const LinkArrows = styled(Link)`
    display: flex;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: black;
    :hover{
        color: #F7931E;
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
`
const ProductsList = ({ data, pageContext }) => {
    //Data
    const productTitle = data.Title.frontmatter
    const SortingLowToHigh = data.LowToHighSlug
    const SortingHighToLow = data.HighToLowSlug
    const SortingByName = data.ByNameSlug
    const orderByArray = [SortingByName, SortingLowToHigh, SortingHighToLow]
    const {humanPageNumber, numberOfPages, previousPagePath, nextPagePath, slug, allData} = pageContext
    const[productOrderBy, setProductOrderBy] = useState(0)

   //sorting
   useEffect(() => {
    const selected = JSON.parse(sessionStorage.getItem('option'));
    if (selected) {
      setProductOrderBy(selected);
    }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('option', JSON.stringify(productOrderBy));
    }, [productOrderBy]);

    const HandleSorting = (e) => {
        setProductOrderBy(e.target.value)
        sessionStorage.setItem('key', e.target.value)
        
    }


    //Search
    const emptyQuery = ""
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })
    const handleInputChange = event => {
        const query = event.target.value
        const Querydata = allData || []

        const filteredData = Querydata.filter(data => {

        const { title, code } = data.frontmatter
        return (
            title.toLowerCase().includes(query.toLowerCase()) ||
            code.toLowerCase().includes(query.toLowerCase())
        )
        })
        setState({
        query,
        filteredData,

        })
    }
    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : orderByArray[productOrderBy]

    //Pagination
    const isFirst = humanPageNumber === 1
    const isLast = humanPageNumber === numberOfPages
    const getPageNumberPath = (currentIndex) => {
        if(currentIndex === 0){
            return `/products/${slug}/`
        }
        return `/products/${slug}/${currentIndex + 1}`
    }

    //Products
    const ProductComponents = ({ id, title, multisize, image, code, sizes}) =>{

        const[ProductTitle] = useState(title)
        const[ProductMultisize] = useState(multisize)
        const[ProductImage] = useState(image)
        const[ProductCode] = useState(code)
        const[ProductSizes] = useState(sizes)
        const[ProductId] = useState(id)

        const [selectPrice, setSelectPrice] = useState(ProductSizes[0].price);
        const handleChange = event => {
            setSelectPrice(event.target.value);
          };

        return(
            <ProductsItems key={ProductId}>
                <ProductsImage image={getImage(ProductImage)} alt={productTitle}/>
                <ProductsTitle>{ProductTitle}</ProductsTitle>
                <ProductsCode>{ProductCode}</ProductsCode>
                {ProductSizes.map(({price}) => {
                    return(    
                    <>
                        {ProductMultisize === true ?
                        <>
                            <ProductsSizeWrapper>
                                <ProductsSizeButton key={price} value={selectPrice} defaultValue={selectPrice} onChange={handleChange}>
                                {ProductSizes.map(({sizename, price}) => {
                                        return <option key={price} value={price} >{sizename}</option>
                                })}                   
                                </ProductsSizeButton>
                            </ProductsSizeWrapper>
                            <ProductsPrice>{selectPrice}</ProductsPrice>
                        </>
                        :
                        <>
                            <ProductsPrice>{price}</ProductsPrice>  
                        </>
                        }
                    </>
                    );
                })} 
            </ProductsItems>
        )
    }
    return (
        <MainContainer>
            <ProductsComponents handleInputChange={handleInputChange} setState={setState} emptyQuery={emptyQuery} query={query} productOrderBy={productOrderBy} HandleSorting={HandleSorting} hasSearchResults={hasSearchResults}>
                <ProductHeader>{hasSearchResults ? <>All Products</> : productTitle.category} </ProductHeader>
                    <FilterContainer>
                        <FilterItems>
                            <ProductsFilterLabel>Sorted by:</ProductsFilterLabel>
                            <ProductsFilterSelect value={productOrderBy} onChange={HandleSorting} name="filter" id="filter" >
                                <option value={0}>Name</option>
                                <option value={1}>Price: Low to High</option>
                                <option value={2}>Price: High to Low</option>
                            </ProductsFilterSelect>
                        </FilterItems>
                    </FilterContainer>
                    <ProductsContainer>
                    {hasSearchResults && filteredData.length === 0 ? <ProductsEmtyLabel>No results</ProductsEmtyLabel> : 
                        posts.map( productData => {
                            return <ProductComponents key={productData.id} id={productData.id} title={productData.frontmatter.title} multisize={productData.frontmatter.multisize} image={productData.frontmatter.image} code={productData.frontmatter.code} sizes={productData.frontmatter.sizes} />
                        })
                    }
                    </ProductsContainer>
                     <ButtonsContainer>
                     {query === emptyQuery ?
                    <ButtonsContainer>
                    {!isFirst && <LinkArrows to={previousPagePath}><MdKeyboardArrowLeft/></LinkArrows>}
                        {Array.from({ length: numberOfPages }, (_, i) => {
                            let numClass = 'pageNumber'
                            if(numberOfPages > 1){
                                if (humanPageNumber === i + 1) {
                                    numClass = 'currentPage'
                                    }
                                    return (
                                    <LinkBtn to={getPageNumberPath(i)} className={numClass} key={i + 1}>
                                        {i + 1}
                                    </LinkBtn>
                                    )
                            } 
                            else return
                        })}
                    {!isLast && <LinkArrows to={ nextPagePath }><MdKeyboardArrowRight/></LinkArrows>}
                    </ButtonsContainer>
                    : <></>
                }   
                    </ButtonsContainer>
            </ProductsComponents>
        </MainContainer>
  )
}

export default ProductsList

export const Head = () => <title>Products - Company Name</title>

export const query = graphql`
    query ($slug: String, $limit: Int!, $skip: Int!) {
        Projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}, frontmatter: {slug: {eq: $slug}}} limit: $limit skip: $skip) {
            nodes {
                frontmatter {
                    title
                    multisize
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED,
                                placeholder: BLURRED,
                                formats: [AUTO, WEBP, AVIF],
                                width: 300,
                                height: 250,
                                quality: 50,
                            )
                        }
                    }
                    code
                    sizes {
                        price
                        sizename
                    }
                }
                id
            }
        } 
        Title: markdownRemark(fileAbsolutePath: {regex: "/products/"} frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                category
            }
        }
        LowToHighSlug(skip: $skip limit: $limit slug: $slug) {
            frontmatter {
                title
                multisize
                image {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED,
                            placeholder: BLURRED,
                            formats: [AUTO, WEBP, AVIF],
                            width: 300,
                            height: 250,
                            quality: 50,
                        )
                    }
                }
                code
                category
                sizes {
                    price
                    sizename
                }
            }
        }
        HighToLowSlug(skip: $skip limit: $limit, slug: $slug) {
            frontmatter {
                title
                multisize
                image {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED,
                            placeholder: BLURRED,
                            formats: [AUTO, WEBP, AVIF],
                            width: 300,
                            height: 250,
                            quality: 50,
                        )
                    }
                }
                code
                category
                sizes {
                    price
                    sizename
                }
            }
        }
        ByNameSlug(skip: $skip limit: $limit, slug: $slug) {
            frontmatter {
                title
                multisize
                image {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED,
                            placeholder: BLURRED,
                            formats: [AUTO, WEBP, AVIF],
                            width: 300,
                            height: 250,
                            quality: 50,
                        )
                    }
                }
                code
                category
                sizes {
                    price
                    sizename
                }
            }
        }
  
    }
`