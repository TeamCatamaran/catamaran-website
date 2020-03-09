import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import ReactPlayer from 'react-player'

export const VenturesPostTemplate = ({
    company,
    heading,
    timeframe,
    logo,
    logoAlt,
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
                        alt={logoAlt || company}
                        image={logo} />
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
                        <p>{p.name}<br />{p.title}<br /><FluidImage alt={p.imageAlt || p.name} image={p.image} /></p>
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
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const VenturesPost = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    console.log(data);

    return (
        <Layout
            seo={frontmatter.seo}>
            <VenturesPostTemplate
                company={frontmatter.company}
                heading={frontmatter.heading}
                timeframe={frontmatter.timeframe}
                logo={frontmatter.logo}
                logoAlt={frontmatter.logoAlt}
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
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logoAlt
        video
        intro
        participants {
          name
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
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
