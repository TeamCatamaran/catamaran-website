import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import FluidImage from '../components/FluidImage'

import { types } from '../types/types'

export const VenturesPageTemplate = ({
    section,
    heading,
    ventures,
    intro,
}) => {
    return (
        <div>
            <Header
                collageType="ventures"
                heading={heading}
                section={section}
            />
            <div className="c-intro container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                <p>{intro}</p>
            </div>
            <ul className="c-ventures container">
                {
                    ventures != null && ventures.length > 0 &&
                    ventures.map((v, key) => {
                        return (
                            <li className="c-ventures__venture" key={`ventures-${key}`} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                                <Link className="c-ventures__venture__link" to={v.url} rel={""}>
                                    <FluidImage className="c-ventures__venture__asset" alt={v.image.alt} image={v.image.src} />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

VenturesPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string,
    seo: types.seoProps,
}

const VenturesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const ventures = data.ventures.edges.map((e) => {
        const content = e.node.frontmatter
        content.url = `/${e.node.fields.collection}${e.node.fields.slug}`
        return content;
    });

    return (
        <Layout
            bodyClass="-purple -interior"
            footerHasShapes={true}
            seo={frontmatter.seo}>
            <VenturesPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                ventures={ventures}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

VenturesPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default VenturesPage;

export const venturesPageQuery = graphql`
query VenturesPage($id: String!) {
  ventures: allMarkdownRemark(filter: {fields: {collection: {eq: "ventures"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          image {
            src {
              childImageSharp {
                fluid(maxWidth: 480, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        fields {
          collection
          slug
        }
      }
    }
  }
  markdownRemark(id: { eq: $id }) {
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
