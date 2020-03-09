import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import FluidImage from '../components/FluidImage'

import { types } from '../types/types';

export const ContactPageTemplate = ({
    section,
    heading,
    intro,
    type,
    social,
    map,
    locations,
}) => {

    return (
        <div>
            <Header
                collageType="none"
                heading={heading}
                section={section}
            />
            <div className="c-interiorPage">
                <div className="c-intro container">
                    <p>{intro}</p>
                </div>
                <div className="c-contact container">
                    <div className="c-contact__chat">
                        <p className="c-contact__heading">{type.heading}</p>
                        {type.types.map((t) => {
                            return (
                                <p>
                                    {t.name}<br />
                                    {t.embed}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <p>{social.heading}</p>
                </div>
                <div>
                    <FluidImage
                        alt={map.alt || "Catamaran location"}
                        image={map.src} />
                </div>
                <div>
                    <p>{locations.heading}</p>
                    {locations.addresses.map((l) => {
                        return (
                            <p>
                                {l.address}<br />
                                {l.number}
                            </p>
                        )
                    })}
                </div>
                <SocialIcons />
            </div>
        </div>
    )
}

ContactPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string,
    type: PropTypes.shape({
        heading: PropTypes.string,
        types: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                embed: PropTypes.string,
            }),
        ),
    }),
    social: PropTypes.shape({
        heading: PropTypes.string,
    }),
    map: types.imageProps,
    locations: PropTypes.shape({
        heading: PropTypes.string,
        addresses: PropTypes.arrayOf(
            PropTypes.shape({
                address: PropTypes.string,
                number: PropTypes.string,
            }),
        ),
    })
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
                social={frontmatter.social}
                map={frontmatter.map}
                locations={frontmatter.locations}
            />
        </Layout>
    )
}

ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ContactPage;

export const contactPageQuery = graphql`
query ContactPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      section
      heading
      intro
      type {
        heading
        types {
          name
          embed
        }
      }
      social {
        heading
      }
      map {
        src {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      locations {
        heading
        addresses {
          address
          number
        }
      }
    }
  }
}
`
