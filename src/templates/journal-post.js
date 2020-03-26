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
    intro,
    content,
    contentComponent,
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="c-journal container">
            <header className='c-header -journal' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                {
                    image != null &&
                    <div className="c-header__image">
                        <FluidImage
                            alt={image.alt || heading}
                            image={image.src} />
                    </div>
                }
                <div className="c-header__text" data-aos="fade-up" data-aos-duration="1500" >
                    <label className="-large">{category}</label>
                    <h1>{heading}</h1>
                    <label>{subheading}</label>
                </div>
            </header>
            {
                intro != null && intro.length > 0 &&
                <div className="c-intro" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                    <p className="intro -left">{intro}</p>
                </div>
            }
            <div className="c-journal__content" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
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
    intro: PropTypes.string,
    seo: types.seoProps,
}

const JournalPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout
            bodyClass="-dark"
            footerHasShapes={true}
            seo={post.frontmatter.seo}>
            <JournalPostTemplate
                category={post.frontmatter.category}
                heading={post.frontmatter.title}
                subheading={post.frontmatter.subheading}
                image={post.frontmatter.image}
                intro={post.frontmatter.introduction}
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
