import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionCallout from '../components/ActionCallout'

export const VenturesPageTemplate = ({
    section,
    heading,
    ventures,
    action,
}) => {

    return (
        <div>
            <Header
                collageType="none"
                heading={heading}
                section={section}
            />
            {
                ventures != null && ventures.length > 0 &&
                <div>
                    {ventures.map((v) => {
                        return (
                            <p>
                                {v.title}
                            </p>
                        )
                    })}
                </div>
            }
            <ActionCallout
                heading={action.heading}
                pages={action.pages} />
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
                image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
                link: PropTypes.string,
            })
        )
    }),
}

const VenturesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const ventures = data.ventures.edges.map((e) => e.node.frontmatter);
    console.log(ventures);

    return (
        <Layout
            bodyClass="-dark">
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
  ventures: allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}) {
    edges {
      node {
        frontmatter {
          title
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
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
}
`
