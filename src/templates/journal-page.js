import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionCallout from '../components/ActionCallout'

import { types } from '../types/types';

export const JournalPageTemplate = ({
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
}

const JournalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout
      bodyClass="-dark">
      <JournalPageTemplate
        section={frontmatter.section}
        heading={frontmatter.heading}
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
    }
  }
}
`
