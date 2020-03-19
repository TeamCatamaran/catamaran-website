import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'

import { types } from '../types/types';
import Accordion from '../components/Accordion'

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
            <Accordion items={faqs} />
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
    const { frontmatter } = data.markdownRemark;

    const faqs = [];
    for (let i = 0; i < frontmatter.faqs.length; i++) {
        faqs.push({
            heading: frontmatter.faqs[i].question,
            body: frontmatter.faqs[i].answer,
        })
    }

    return (
        <Layout
            bodyClass="-purple -interior"
            footerHasShapes={true}
            seo={frontmatter.seo}>
            <FAQPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                faqs={faqs}
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
