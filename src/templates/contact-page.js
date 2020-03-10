import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import FluidImage from '../components/FluidImage'
import TypeformContact from '../components/TypeformContact'


import footer from '../img/footer-shapes.png'
import { types } from '../types/types';

export const ContactPageTemplate = ({
    section,
    heading,
    intro,
    type,
    embed,
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
                    <p className="-left">{intro}</p>
                </div>
                <div className="c-contact container">
                    <TypeformContact
                        embed={embed}
                        heading={type.heading}
                        types={type.types} />
                    <div className="c-contact__social">
                        <p>{social.heading}</p>
                        <div >
                            <SocialIcons
                                style="dark" />
                        </div>
                    </div>
                </div>
                {
                    map != null &&
                    <div className="c-location container">
                        <div className="c-location__map">
                            <FluidImage
                                alt={map.alt || "Catamaran location map"}
                                image={map.src} />
                        </div>
                    </div>
                }
                <div className="c-location container">
                    <label className="c-location__heading">{locations.heading}</label>
                    {locations.addresses.map((l, key) => {
                        return (
                            <div className="c-location__address" key={`locationkey-${key}`}>
                                <p>{l.address}</p>
                                <p>{l.number}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="c-indexFooterShapes container">
                    <img className="c-indexFooter__wavey" src={footer} alt="footer icons" />
                </div>
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
                id: PropTypes.string,
            }),
        ),
    }),
    embed: PropTypes.string,
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
    }),
    seo: types.seoProps,
}

const ContactPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple"
            seo={frontmatter.seo}>
            <ContactPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                intro={frontmatter.intro}
                type={frontmatter.type}
                embed={frontmatter.embed}
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
          id
        }
      }
      embed
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
