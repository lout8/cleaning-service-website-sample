const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')


exports.createResolvers = ({ createResolvers }) =>
  createResolvers({
    Query: {
      LowToHigh: {
        type: '[MarkdownRemark!]',
        args: { limit: 'Int', skip: "Int" },
        async resolve(source, args, context, info) {
          const { limit = 0, skip = 0 } = args;
          const sorting = await context.nodeModel.runQuery({
            firstOnly: false,
            type: `MarkdownRemark`,
            query: {
              filter: {
                fileAbsolutePath: { regex: '/products/' },
              },
            },
          })
          const sortedData = sorting.sort((a, b) => {
            const priceA = parseFloat(a.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));
            const priceB = parseFloat(b.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));

            return priceA - priceB;
          });

          const paginatedReads = sortedData.slice(skip, skip + limit);

          return paginatedReads || [];
        },
      },
      HighToLow: {
        type: '[MarkdownRemark!]',
        args: { limit: 'Int', skip: "Int" },
        async resolve(source, args, context, info) {
          const { limit = 0, skip = 0 } = args;
          const sorting = await context.nodeModel.runQuery({
            firstOnly: false,
            type: `MarkdownRemark`,
            query: {
              filter: {
                fileAbsolutePath: { regex: '/products/' },
              },
            },
          })
          const sortedData = sorting.sort((a, b) => {
            const priceA = parseFloat(a.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));
            const priceB = parseFloat(b.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));

            return priceB - priceA;
          });

          const paginatedReads = sortedData.slice(skip, skip + limit);

          return paginatedReads || [];
        },
      },
      ByName: {
        type: '[MarkdownRemark!]',
        args: { limit: 'Int', skip: "Int" },
        async resolve(source, args, context, info) {
          const { limit = 0, skip = 0 } = args;
          const sorting = await context.nodeModel.runQuery({
            firstOnly: false,
            type: `MarkdownRemark`,
            query: {
              filter: {
                fileAbsolutePath: { regex: '/products/' },
              },
            },
          })
          const sortedData = sorting.sort((a, b) => {
           return a.frontmatter.title.localeCompare(b.frontmatter.title)
          });

          const paginatedReads = sortedData.slice(skip, skip + limit);

          return paginatedReads || [];
        },
      },
      LowToHighSlug: {
        type: '[MarkdownRemark!]',
        args: { limit: 'Int', skip: "Int", slug: 'String' },
        async resolve(source, args, context, info) {
          const { limit = 0, skip = 0, slug } = args;
          const sorting = await context.nodeModel.runQuery({
            firstOnly: false,
            type: `MarkdownRemark`,
            query: {
              filter: {
                fileAbsolutePath: { regex: '/products/' },
                frontmatter: {slug: {eq: slug}},
              },
            },
          })
          const sortedData = sorting.sort((a, b) => {
            const priceA = parseFloat(a.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));
            const priceB = parseFloat(b.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));

            return priceA - priceB;
          });

          const paginatedReads = sortedData.slice(skip, skip + limit);

          return paginatedReads || [];
        },
      },
      HighToLowSlug: {
        type: '[MarkdownRemark!]',
        args: { limit: 'Int', skip: "Int", slug: 'String' },
        async resolve(source, args, context, info) {
          const { limit = 0, skip = 0, slug } = args;
          const sorting = await context.nodeModel.runQuery({
            firstOnly: false,
            type: `MarkdownRemark`,
            query: {
              filter: {
                fileAbsolutePath: { regex: '/products/' },
                frontmatter: {slug: {eq: slug}},
              },
            },
          })
          const sortedData = sorting.sort((a, b) => {
            const priceA = parseFloat(a.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));
            const priceB = parseFloat(b.frontmatter?.sizes?.[0]?.price.replace(/,/g, ''));

            return priceB - priceA;
          });

          const paginatedReads = sortedData.slice(skip, skip + limit);

          return paginatedReads || [];
        },
      },
      ByNameSlug: {
        type: '[MarkdownRemark!]',
        args: { limit: 'Int', skip: "Int", slug: 'String' },
        async resolve(source, args, context, info) {
          const { limit = 0, skip = 0, slug } = args;
          const sorting = await context.nodeModel.runQuery({
            firstOnly: false,
            type: `MarkdownRemark`,
            query: {
              filter: {
                fileAbsolutePath: { regex: '/products/' },
                frontmatter: {slug: {eq: slug}},
              },
            },
          })
          const sortedData = sorting.sort((a, b) => {
           return a.frontmatter.title.localeCompare(b.frontmatter.title)
          });

          const paginatedReads = sortedData.slice(skip, skip + limit);

          return paginatedReads || [];
        },
      },
      
    },
})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productsList = path.resolve(`src/templates/ProductsList.js`)
  const allproductsList = path.resolve(`src/templates/AllProductsList.js`)
  

  const  data  = await graphql(`
    query {
      allData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/products/"}}) {
        nodes {
          frontmatter {
              title
              multisize
              image{
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    width: 300
                    height: 350
                  )
                }
              }
              code
              category
              slug
              sizes {
                  price
                  sizename
              }
          }
          id
        }
      }
    }
  `).then(res => res.data)
  
  paginate({
    createPage,
    items: data.allData.nodes,
    itemsPerPage: 16,
    pathPrefix: '/products/',
    component: allproductsList,
    context: {
      allData: data.allData.nodes,
    }
    
  })

  const dataslug = []
  data.allData.nodes.forEach(node => {
    dataslug.push(node.frontmatter.slug)
  })
  dataslug.forEach(node =>{
    const intersection = dataslug.filter(element => {
      return node.includes(element);
    });
    paginate({
      createPage,
      items: intersection,
      itemsPerPage: 16,
      pathPrefix: `/products/${node}`,
      component: productsList,
      context: { 
        slug: node,
        allData: data.allData.nodes,
      }
    })
  })
}