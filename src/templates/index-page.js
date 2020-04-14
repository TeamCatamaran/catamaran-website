import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import FluidImage from '../components/FluidImage'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Breakdown from '../components/Breakdown'
import Testimonials from '../components/Testimonials'
import JournalTile from '../components/JournalTile'
import spiral from '../img/home-spiral.png'

import { types } from '../types/types';

export const IndexPageTemplate = ({
    section,
    heading,
    focus,
    intro,
    process,
    testimonials,
}) => {
    return (
        <div>
            <Header
                collageType="home"
                heading={heading}
                section={section}
            />
            <div className="c-intro container">
                <p className="intro">{intro}</p>
                <a href="mailto:amanda@catamaran.cc" className="c-button">Contact Us</a>
            </div>
        </div>
    )
}

IndexPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string,
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple"
            footerHasShapes={true}
            seo={frontmatter.seo}>
            <IndexPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
