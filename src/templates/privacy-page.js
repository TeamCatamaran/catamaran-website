import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Header from '../components/Header'

import { types } from '../types/types';

export const PrivacyPageTemplate = ({
    section,
    heading,
    intro,
    content,
    contentComponent,
}) => {
    const PostContent = contentComponent || Content

    return (
        <div>
            <Header
                collageType="none"
                heading={heading}
                section={section}
            />
            <div className="c-interiorPage">
                <div className="c-intro container">
                    <p className="-left">{intro}</p>
                </div>
                <PostContent content={content} />
            </div>
        </div>
    )
}

PrivacyPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string,
    seo: types.seoProps,
}

const PrivacyPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout
            bodyClass="-purple"
            seo={post.frontmatter.seo}>
            <PrivacyPageTemplate
                section={post.frontmatter.section}
                heading={post.frontmatter.heading}
                intro={post.frontmatter.intro}
                content={post.html}
                contentComponent={HTMLContent}
            />
        </Layout>
    )
}

PrivacyPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default PrivacyPage;

export const privacyPageQuery = graphql`
query PrivacyPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      section
      heading
      intro
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
