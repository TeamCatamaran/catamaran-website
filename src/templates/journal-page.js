import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionCallout from '../components/ActionCallout'
import FluidImage from '../components/FluidImage'

import { types } from '../types/types';

export const JournalPageTemplate = ({
    section,
    heading,
    journals,
    action,
}) => {

    return (
        <div>
            <Header
                collageType="journal"
                heading={heading}
                section={section}
            />
            <ul className="c-journal -list container">
                {
                    journals != null && journals.length > 0 &&
                    journals.map((b) => {
                        return (
                            <li className="c-journal__post">
                                <Link className="c-journal__post__link" to={b.url} rel={""}>
                                    <FluidImage className="c-journal__post__asset" alt={b.index.image.alt} image={b.index.image.src} />
                                    <label>{b.category}</label>
                                    <h2>{b.index.title}</h2>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {
                action != null &&
                <ActionCallout
                    heading={action.heading}
                    pages={action.pages} />
            }
        </div>
    )
}

JournalPageTemplate.propTypes = {
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
    seo: types.seoProps
}

const JournalPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const journals = data.journals.edges.map((e) => {
        const content = e.node.frontmatter
        content.url = `/${e.node.fields.collection}${e.node.fields.slug}`
        return content;
    });

    return (
        <Layout
            bodyClass="-dark"
            seo={frontmatter.seo}>
            <JournalPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                journals={journals}
                action={frontmatter.action}
            />
        </Layout>
    )
}

JournalPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default JournalPage;

export const journalPageQuery = graphql`
query JournalPage($id: String!) {
  journals: allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}) {
    edges {
      node {
        frontmatter {
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
          index {
            title
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
          category
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
