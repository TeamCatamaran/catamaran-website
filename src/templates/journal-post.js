import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import { types } from '../types/types'
import FluidImage from '../components/FluidImage'

export const JournalPostTemplate = ({
  category,
  heading,
  subheading,
  image,
  introduction,
  content,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div>
        <div>{category}</div>
        <h1>
          {heading}
        </h1>
        <div>{subheading}</div>
        {
          image != null &&
          <FluidImage
            alt={image.alt || heading}
            image={image.src} />
        }
        <p>{introduction}</p>
        <PostContent content={content} />
      </div>
    </section>
  )
}

JournalPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  category: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  image: types.imageProps,
  introduction: PropTypes.string,
  seo: types.seoProps,
}

const JournalPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout
      seo={post.frontmatter.seo}>
      <JournalPostTemplate
        title={post.frontmatter.title}
        category={post.frontmatter.category}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        image={post.frontmatter.image}
        introduction={post.frontmatter.introduction}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

JournalPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default JournalPost

export const pageQuery = graphql`
  query JournalPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        category
        heading
        subheading
        image {
          src {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        introduction
        seo {
          title
          description
          ogTitle
          ogType
          ogDescription
          ogImage
          robots
          canonical
        }
      }
    }
  }
`
