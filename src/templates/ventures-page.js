import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionCallout from '../components/ActionCallout'

import { types } from '../types/types'
import FluidImage from '../components/FluidImage'

export const VenturesPageTemplate = ({
    section,
    heading,
    ventures,
    action,
}) => {
    return (
        <div>
            <Header
                collageType="ventures"
                heading={heading}
                section={section}
            />
            {
                ventures != null && ventures.length > 0 &&
                <div>
                    {ventures.map((v) => {
                        return (
                            <p>
                                {v.company}<br />{v.heading}<br /><FluidImage alt={v.image.alt} image={v.image.src} />
                            </p>
                        )
                    })}
                </div>
            }
            {
                action != null &&
                <ActionCallout
                    heading={action.heading}
                    pages={action.pages} />
            }
        </div>
    )
}

VenturesPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    action: PropTypes.shape({
        heading: PropTypes.string,
        pages: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string,
                image: types.imageProps,
                link: types.linkProps,
            })
        )
    }),
    seo: types.seoProps,
}

const VenturesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const ventures = data.ventures.edges.map((e) => {
        const content = e.node.frontmatter
        content.url = `/ventures${e.node.fields.slug}`
        return content;
    });

    return (
        <Layout
            bodyClass="-dark"
            seo={frontmatter.seo}>
            <VenturesPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                ventures={ventures}
                action={frontmatter.action}
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
  ventures: allMarkdownRemark(filter: {fields: {collection: {eq: "ventures"}}}) {
    edges {
      node {
        frontmatter {
          company
          heading
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
        }
        fields {
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
      action {
        heading
        pages {
          title
          description
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
          link {
            url
            rel
          }
        }
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
