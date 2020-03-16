import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from '../components/Layout'
import Header from '../components/Header'
import FluidImage from '../components/FluidImage'
import ActionCallout from '../components/ActionCallout'

import aboutIntroCollage from '../img/about-intro-collage.png'
import aboutValuesCollage from '../img/about-values-collage.png'
import donut from '../img/donut.png'
import plus from '../img/plus.png'
import { types } from '../types/types';

AOS.init();

export const AboutPageTemplate = ({
    section,
    heading,
    intro,
    mission,
    values,
    team,
    leadership,
    action,
}) => {

    return (
        <div >
            <Header
                collageType="about"
                heading={heading}
                section={section}
            />
            <div className="c-intro container">
                <p data-aos="fade-down">{intro}</p>
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
                    <div className="c-values__image"> 
                        <img
                            className="c-values__image__asset"
                            alt={values.heading}
                            src={aboutValuesCollage} />
                    </div>
                </div>
                {
                    values.values != null &&
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
                }
            </div>
            <div className="c-team container">
                <div className="c-team__header">
                    <h2 className="c-team__heading">{team.heading}</h2>
                    <p className="c-team__description">{team.description}</p>
                    <div className="c-team__topImage">
                        <img
                            className="c-team__topImage__asset"
                            alt={team.heading}
                            src={donut} />
                    </div>
                </div>
                {
                    team.people != null &&
                    <div className="c-team__list">
                        {team.people.map((p) => {
                            let className = "c-team__member";
                            return (
                                <div className={className}>
                                    {
                                        p.photo != null &&
                                        <FluidImage
                                            className="c-team__member__photo -default"
                                            alt={p.photo.alt || p.name}
                                            image={p.photo.src} />
                                    }
                                    <label className="c-team__member__name">{p.name}</label>
                                    <label className="c-team__member__title">{p.title}</label>
                                </div>
                            );
                        })}
                    </div>
                }
                <img
                    className="c-team__bottomImage"
                    alt={team.heading}
                    image={plus} />
            </div>
            <div className="c-leadership container">
                <div className="c-leadership__header">
                    <h2 className="c-leadership__heading">{leadership.heading}</h2>
                    <p className="c-leadership__description">{leadership.description}</p>
                </div>
                {
                    leadership.people != null &&
                    <div className="c-leadership__list">
                        {leadership.people.map((p) => {
                            let className = "c-leadership__member";
                            return (
                                <div className={className}>
                                    {
                                        p.photo != null &&
                                        <FluidImage
                                            className="c-leadership__member__photo -default"
                                            alt={p.photo.alt || p.name}
                                            image={p.photo.src} />
                                    }
                                    <label className="c-leadership__member__name">{p.name}</label>
                                    <label className="c-leadership__member__title">{p.title}</label>
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
            {
                action != null &&
                <ActionCallout
                    heading={action.heading}
                    pages={action.pages} />
            }
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
        description: PropTypes.string,
        people: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                title: PropTypes.string,
                photo: types.imageProps,
            })
        )
    }),
    leadership: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        people: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                title: PropTypes.string,
                photo: types.imageProps,
            })
        )
    }),
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
    seo: types.seoProps,
}

const AboutPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-pink -interior"
            seo={frontmatter.seo}>
            <AboutPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                intro={frontmatter.intro}
                mission={frontmatter.mission}
                values={frontmatter.values}
                team={frontmatter.team}
                leadership={frontmatter.leadership}
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
          description
          people {
            name
            title
            photo {
              src {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
        leadership {
            heading
            description
            people {
              name
              title
              photo {
                src {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
          }
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
