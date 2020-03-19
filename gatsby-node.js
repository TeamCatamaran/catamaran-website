const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              collection
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const pagePosts = posts.filter(e => e.node.fields.collection === 'pages')
    const blogPosts = posts.filter(e => e.node.fields.collection === 'blog')
    const venturePosts = posts.filter(e => e.node.fields.collection === 'ventures')

    pagePosts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    blogPosts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: `${edge.node.fields.collection}${edge.node.fields.slug}`,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    venturePosts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: `${edge.node.fields.collection}${edge.node.fields.slug}`,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const parentNode = getNode(node.parent)
    const value = createFilePath({ node, getNode })
    const publishDate = node.frontmatter.date || ""
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      name: 'collection',
      node,
      value: parentNode.sourceInstanceName,
    })
    createNodeField({
      name: 'publishDate',
      node,
      value: publishDate,
    })
    createNodeField({
      name: 'filename',
      node,
      value: parentNode.name,
    })
  }
}
