import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionCallout from '../components/ActionCallout'

export const StudioPageTemplate = ({
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

StudioPageTemplate.propTypes = {
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

const StudioPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-dark">
            <StudioPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                action={frontmatter.action}
            />
        </Layout>
    )
}

StudioPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StudioPage;

export const studioPageQuery = graphql`
query StudioPage($id: String!) {
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
