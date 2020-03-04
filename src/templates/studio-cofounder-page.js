import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionCallout from '../components/ActionCallout'

export const StudioCofounderPageTemplate = ({
    section,
    heading,
    action,
}) => {

    return (
        <div>
            <Header
                collageType="none"
                heading={heading}
                section={section}
            />
            <ActionCallout
                heading={action.heading}
                pages={action.pages} />
        </div>
    )
}

StudioCofounderPageTemplate.propTypes = {
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

const StudioCofounderPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-dark">
            <StudioCofounderPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                action={frontmatter.action}
            />
        </Layout>
    )
}

StudioCofounderPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StudioCofounderPage;

export const studioCofounderPageQuery = graphql`
query StudioCofounderPage($id: String!) {
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
