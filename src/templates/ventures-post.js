import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'

import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import { types } from '../types/types';

import websiteIcon from '../img/venture-website.png'
import facebookIcon from '../img/venture-facebook.png'
import linkedinIcon from '../img/venture-linkedin.png'
import twitterIcon from '../img/venture-twitter.png'
import instagramIcon from '../img/venture-instagram.png'

export const VenturesPostTemplate = ({
    company,
    heading,
    timeframe,
    image,
    video,
    intro,
    participants,
    links,
}) => {
    return (
        <div>
            <div className="c-ventureHeader">
                <div className="container" data-aos="fade-up" data-aos-duration="2000">
                    <div className="c-ventureHeader__text">
                        <label className="c-ventureHeader__company -large">{company}</label>
                        <h1 className="c-ventureHeader__heading">{heading}</h1>
                        <label className="c-ventureHeader__timeframe">{timeframe}</label>
                    </div>
                    <div className="c-ventureHeader__media">
                        <div className="c-ventureHeader__media__container">
                            {
                                image != null &&
                                <FluidImage
                                    alt={image.alt}
                                    className="c-ventureHeader__media__image"
                                    image={image.src} />
                            }
                            {
                                video != null &&
                                <button className="c-ventureHeader__media__video">></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-intro container">
                <p className="-left">{intro}</p>
            </div>
            <div className="c-ventureProfile container">
                <ul className="c-ventureProfile__participantsList">
                    {participants.map((p) => {
                        return (
                            <li className="c-ventureProfile__participantsList__item">
                                <div className="c-ventureProfile__participant">
                                    <div className="c-ventureProfile__participant__photo">
                                        <FluidImage alt={p.image.alt || p.name} image={p.image.src} />
                                    </div>
                                    <div className="c-ventureProfile__participant__text">
                                        <p className="c-ventureProfile__participant__name">{p.name}</p>
                                        <label className="c-ventureProfile__participant__title">{p.title}</label>
                                    </div>
                                </div>

                            </li>
                        )
                    })}
                </ul>
                <ul className="c-ventureProfile__linksList">
                    {links.map((l) => {
                        if (l.link == null || l.link.url == null) {
                            return (null);
                        }

                        let icon;
                        switch (l.category) {
                            case "website":
                                icon = websiteIcon;
                                break;
                            case "facebook":
                                icon = facebookIcon;
                                break;
                            case "linkedin":
                                icon = linkedinIcon;
                                break;
                            case "twitter":
                                icon = twitterIcon;
                                break;
                            case "instagram":
                                icon = instagramIcon;
                                break;
                        }

                        return (
                            <li className="c-ventureProfile__linksList__item">
                                <a className="c-ventureProfile__link" href={l.link.url} rel={l.link.rel} target="_blank">
                                    <img className="c-ventureProfile__link__icon" src={icon} alt="icon" />
                                    <p className="c-ventureProfile__link__text">{l.name}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

VenturesPostTemplate.propTypes = {
    company: PropTypes.string,
    heading: PropTypes.string,
    timeframe: PropTypes.string,
    image: types.imageProps,
    video: PropTypes.string,
    intro: PropTypes.string,
    participants: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            image: types.imageProps,
            title: PropTypes.string,
        })
    ),
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            link: types.linkProps,
            category: PropTypes.string,
        })
    ),
    seo: types.seoProps,
}

const VenturesPost = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple -interior"
            footerHasShapes={true}
            seo={frontmatter.seo}>
            <VenturesPostTemplate
                company={frontmatter.company}
                heading={frontmatter.heading}
                timeframe={frontmatter.timeframe}
                image={frontmatter.image}
                video={frontmatter.video}
                intro={frontmatter.intro}
                participants={frontmatter.participants}
                links={frontmatter.links}
            />
        </Layout>
    )
}

VenturesPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default VenturesPost

export const pageQuery = graphql`
  query VenturesPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        company
        heading
        timeframe
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
        video
        intro
        participants {
          name
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
          title
        }
        links {
          name
          link {
            url
            rel
          }
          category
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
