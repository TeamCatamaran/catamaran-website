import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content, { HTMLContent } from '../components/Content'
import FluidImage from '../components/FluidImage'

export const AboutPageTemplate = ({
    section,
    heading,
    image,
    intro,
    mission,
    values,
    team,
    action,
}) => {

    return (
        <div>
            <Header
                heading={heading}
                image={image}
                section={section}
            />
            <div className="c-intro container">
                <p>{intro.heading}</p>
            </div>
            <div className="c-mission container">
                <div className="c-mission__leftCol">
                    <h2>{mission.heading}</h2>
                    <FluidImage
                        className="-default"
                        alt={mission.heading}
                        image={mission.image} />
                </div>
                <div className="c-mission__rightCol">
                    { mission.sections.map((s) => {
                        return (
                            <div className="c-mission__section">
                                <h3 className="c-mission__section__title">{s.title}</h3>
                                <p className="c-mission__section__body">{s.body}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="c-action container -footer-overlay">
                <div className="c-action__item">
                    <h2>{action.heading}<span>></span></h2>
                </div>
                {
                    action.pages != null &&
                    <div>
                        {action.pages.map((item, key) => (
                            <Link key={key} className="c-action__item -background" to={item.link} style={{
                                backgroundImage: `url(${
                                    !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
                                    })`,
                            }}>
                                <div className="c-action__item__content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
            <div className="c-action__footer"></div>
        </div>
    )
}

AboutPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    intro: PropTypes.string,
    mission: PropTypes.shape({
        heading: PropTypes.string,
        sections: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                body: PropTypes.string,
            })
        )
    }),
    values: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        values: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                body: PropTypes.string,
            })
        )
    }),
    team: PropTypes.shape({
        heading: PropTypes.string,
        people: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            })
        )
    }),
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

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <AboutPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                image={frontmatter.image}
                intro={frontmatter.intro}
                mission={frontmatter.mission}
                values={frontmatter.values}
                team={frontmatter.team}
                action={frontmatter.action}
            />
        </Layout>
    )
}

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        section
        heading
        image {
            childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        intro
        mission {
            heading
            image {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sections {
                title
                body
            }
        }
        values {
            heading
            description
            image {
                childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            values {
                title
                body
            }
        }
        team {
            heading
            people {
                name
                photo {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
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
