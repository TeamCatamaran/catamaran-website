import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content, { HTMLContent } from '../components/Content'
import FluidImage from '../components/FluidImage'
import ActionCallout from '../components/ActionCallout'

import aboutIntroCollage from '../img/about-intro-collage.png'
import aboutValuesCollage from '../img/about-values-collage.png'

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
        <div >
            <Header
                collageType="about"
                heading={heading}
                section={section}
            />
            <div className="c-interiorPage">
                <div className="c-intro container">
                    <p>{intro}</p>
                </div>
                <div className="c-mission container">
                    <div className="c-mission__leftCol">
                        <h2 className="c-mission__heading">{mission.heading}</h2>
                        <img
                            className="c-mission__image -default"
                            alt="todo"
                            src={aboutIntroCollage} />
                    </div>
                    <div className="c-mission__rightCol">
                        {mission.sections.map((s) => {
                            return (
                                <div className="c-mission__section">
                                    <h3 className="c-mission__section__title">{s.title}</h3>
                                    <p className="c-mission__section__body">{s.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="c-values container">
                    <div className="c-values__header">
                        <h2 className="c-values__heading">{values.heading}</h2>
                        <p className="c-values__description">{values.description}</p>
                    </div>
                    <div className="c-values__header">
                        <img
                            className="c-values__image -default"
                            alt={values.heading}
                            src={aboutValuesCollage} />
                    </div>
                    <div className="c-values__list">
                        <div className="c-values__list__container">
                            {values.values.map((v) => {
                                return (
                                    <div className="c-values__list__item">
                                        <label>{v.title}</label>
                                        <p>{v.body}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="c-team container">
                    <div className="c-team__header">
                        <h2 className="c-team__heading">{team.heading}</h2>
                        <FluidImage
                            className="c-team__topImage -default"
                            alt={team.heading}
                            image={"/img/donut.png"} />
                    </div>
                    <div className="c-team__list">
                        {team.people.map((p) => {
                            let className = "c-team__member";
                            if (p.large) {
                                className += " -large"
                            }
                            return (
                                <div className={className}>
                                    <label className="c-team__member__name">{p.name}</label>
                                    <FluidImage
                                        className="c-team__member__photo -default"
                                        alt={p.name}
                                        image={p.photo} />
                                </div>
                            );
                        })}
                    </div>
                    <FluidImage
                        className="c-team__bottomImage -default"
                        alt={team.heading}
                        image={"/img/plus.png"} />
                </div>
                <ActionCallout
                    heading={action.heading}
                    pages={action.pages} />
            </div>
        </div>
    )
}

AboutPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
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
                large: PropTypes.bool,
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
        <Layout
            bodyClass="-pink">
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
        intro
        mission {
          heading
          sections {
            title
            body
          }
        }
        values {
          heading
          description
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
            large
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
