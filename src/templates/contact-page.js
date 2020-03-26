import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SocialIcons from '../components/SocialIcons'
import FluidImage from '../components/FluidImage'
import croppedMap from '../img/cropped-map.png'
import TypeformContact from '../components/TypeformContact'
import dotGrid from '../img/dotgrid.png'
import circleWave from '../img/circlewave.png'
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
            <div className="c-intro container">
                <p className="-left" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">{intro}</p>
            </div>
            <div className="c-contact container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                <TypeformContact
                    embed={embed}
                    heading={type.heading}
                    types={type.types} />
                <div className="c-contact__social">
                    <p>{social.heading}</p>
                    <div className="c-contact__icons">
                        <SocialIcons
                            isDark={true} />
                    </div>
                </div>
            </div>
            {
                map != null &&
                <div className="c-location container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                    <img src={circleWave} alt="circle Wave" className="c-location__circleWave" />
                    <div className="c-location__map container-overflow">
                        <FluidImage
                            alt={map.alt || "Catamaran location map"}
                            image={map.src} />
                    </div>
                    <div>
                        <img src={croppedMap} alt="cropped Map" className="c-location__croppedMap" />
                    </div>
                    <img src={dotGrid} alt="dot grid" className="c-location__dotGrid" />

                </div>
            }
            <div className="c-location container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
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
            bodyClass="-purple -interior"
            footerHasShapes={true}
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
            fluid(maxWidth: 1800, quality: 70) {
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
