import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const JournalPostTemplate = ({
    title,
    category,
    heading,
    subheading,
    introduction,
    content,
    contentComponent,
    helmet,
}) => {
    const PostContent = contentComponent || Content

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{introduction}</p>
                        <PostContent content={content} />
                    </div>
                </div>
            </div>
        </section>
    )
}

JournalPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    helmet: PropTypes.object,
    title: PropTypes.string,
    category: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    introduction: PropTypes.string
}

const JournalPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <JournalPostTemplate
                title={post.frontmatter.title}
                category={post.frontmatter.category}
                heading={post.frontmatter.heading}
                subheading={post.frontmatter.subheading}
                introduction={post.frontmatter.introduction}
                content={post.html}
                contentComponent={HTMLContent}
                helmet={
                    <Helmet titleTemplate="%s | Journal">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
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
        description
        category
        date(formatString: "MMMM DD, YYYY")
        heading
        subheading
        introduction
      }
    }
  }
`
