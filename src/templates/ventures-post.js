import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'

import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import { types } from '../types/types';

export const VenturesPostTemplate = ({
    company,
    heading,
    timeframe,
    logo,
    video,
    intro,
    participants,
    links,
}) => {
    return (
        <section className="section">
            <div>
                <p>
                    {company}<br />
                    {heading}<br />
                    {timeframe}<br />
                    <FluidImage
                        alt={logo.alt || company}
                        image={logo.src} />
                    {
                        video != null &&
                        <ReactPlayer
                            url={video} />
                    }
                    {intro}
                </p>
            </div>
            <div>
                {participants.map((p) => {
                    return (
                        <p>{p.name}<br />{p.title}<br /><FluidImage alt={p.image.alt || p.name} image={p.image.src} /></p>
                    )
                })}
            </div>
            <div>
                {links.map((l) => {
                    if (l.link == null || l.link.url == null) {
                        return (null);
                    }
                    return (
                        <p>
                            <a href={l.link.url} rel={l.link.rel} target="_blank">
                                {l.name}<br />{l.category}
                            </a>
                        </p>
                    )
                })}
            </div>
        </section>
    )
}

VenturesPostTemplate.propTypes = {
    company: PropTypes.string,
    heading: PropTypes.string,
    timeframe: PropTypes.string,
    logo: types.imageProps,
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
            seo={frontmatter.seo}>
            <VenturesPostTemplate
                company={frontmatter.company}
                heading={frontmatter.heading}
                timeframe={frontmatter.timeframe}
                logo={frontmatter.logo}
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
        date(formatString: "MMMM DD, YYYY")
        company
        heading
        timeframe
        logo {
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
