import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'

import { types } from '../types/types';

export const FAQPageTemplate = ({
    section,
    heading,
    faqs,
}) => {
    return (
        <div>
            <Header
                collageType="none"
                heading={heading}
                section={section}
            />
            {
                faqs != null &&
                <div>
                    {faqs.map((f) => {
                        return (
                            <p>{f.question}<br />{f.answer}</p>
                        )
                    })}
                </div>
            }
        </div>
    )
}

FAQPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    faqs: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string,
        }),
    ),
    seo: types.seoProps,
}

const FAQPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple -interior"
            seo={frontmatter.seo}>
            <FAQPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                faqs={frontmatter.faqs}
            />
        </Layout>
    )
}

FAQPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FAQPage;

export const faqPageQuery = graphql`
query FAQPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      section
      heading
      faqs {
        question
        answer
      }
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
