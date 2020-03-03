import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import FluidImage from '../components/FluidImage'

export const ContactPageTemplate = ({
    section,
    heading,
    intro,
    type,
    coordinates,
    harrisburg,
    harrisburgNumber,
    denver,
    denverNumber,
}) => {

    return (
        <div>
            <Header
                collageType="none"
                heading={heading}
                section={section}
            />
            <div className="c-intro container">
                <p>{intro}</p>
            </div>
            <div>
                {type.map((t) => {
                    return (
                        <p>
                            {t.name}<br />
                            {t.embed}
                        </p>
                    )
                })}
            </div>
            <div>
                <p>{coordinates}<br />{harrisburg}<br />{harrisburgNumber}<br />{denver}<br />{denverNumber}</p>
            </div>
            <SocialIcons />
        </div>
    )
}

ContactPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string,
    type: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            embed: PropTypes.string,
        })
    ),
    coordinates: PropTypes.string,
    harrisburg: PropTypes.string,
    harrisburgNumber: PropTypes.string,
    denver: PropTypes.string,
    denverNumber: PropTypes.string,
}

const ContactPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple">
            <ContactPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                intro={frontmatter.intro}
                type={frontmatter.type}
                coordinates={frontmatter.coordinates}
                harrisburg={frontmatter.harrisburg}
                harrisburgNumber={frontmatter.harrisburgNumber}
                denver={frontmatter.denver}
                denverNumber={frontmatter.denverNumber}
            />
        </Layout>
    )
}

ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        section
        heading
        intro
        type {
          name
          embed
        }
        coordinates
        harrisburg
        harrisburgNumber
        denver
        denverNumber
      }
    }
  }
`
