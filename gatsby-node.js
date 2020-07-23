const { unstable_renderSubtreeIntoContainer } = require("react-dom")
const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql (`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}
    //1. Get path to template
    //2. Get markdown data
    //3. Create new pages
       
//const { createFilePath } = require(`gatsby-source-filesystem`)

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         //console.log("@@@@@@@@@@@@@@@", slug)
//         //console.log(JSON.stringify(node, undefined, 4))

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }