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

export const IndexPageTemplate = () => {
    return (
        <div>
            <Header
                collageType="home"
                heading="Built for Startups"
                section="Catamaran"
            />
            <div className="c-intro container">
                <p className="intro">
                Catamaran invests creative capital in startups. Because we believe creativity is the superpower behind every great startup.
                </p>
                <p>
                Founded in 2017, Catamaran partners startup founders with a kick-ass team of designers, engineers, and strategists. We are your unofficial co-founder — taking a hands-on approach from ideation, validation to launch.
                </p>
                <p>
                We’re excited to launch our new website soon. In the meantime, drop us a line — we’d love to hear from you!
                </p>
                <a href="mailto:amanda@catamaran.cc" className="c-button">Contact Us</a>
            </div>
        </div>
    )
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple"
            footerHasShapes={true}
            seo={frontmatter.seo}>
            <IndexPageTemplate />
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
