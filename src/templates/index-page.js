import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import FluidImage from '../components/FluidImage'
import Header from '../components/Header'
import Layout from '../components/Layout'

import absorb from '../img/icon-absorb.png'
import concept from '../img/icon-concept.png'
import create from '../img/icon-create.png'
import learn from '../img/icon-learn.png'

export const IndexPageTemplate = ({
    section,
    heading,
    focus,
    intro,
    process,
    slider,
}) => {
    const icons = {
        absorb: absorb,
        concept: concept,
        create: create,
        learn: learn,
    };

    return (
        <div>
            <Header
                collageType="home"
                heading={heading}
                section={section}
            />
            <div>
                {focus.map((f) => {
                    return (
                        <div>
                            {f.title}
                            {f.description}
                            {f.link}
                            <FluidImage
                                alt={f.title}
                                image={f.image} />
                        </div>
                    )
                })}
            </div>
            <div className="c-intro container">
                <div className="c-intro__heading">
                    <h3>{intro}</h3>
                </div>
            </div>
            <div>
                <h3>{process.heading}</h3>
                {process.steps.map((s) => {
                    return (
                        <div>
                            {s.title}
                            {s.icon}
                            {s.description}
                        </div>
                    )
                })}
            </div>
            <div>
                {slider.map((s) => {
                    return (
                        <div>
                            {s.name}
                            {s.title}
                            {s.quote}
                            {s.logo}
                            <FluidImage
                                alt={s.name}
                                image={s.image} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

IndexPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    focus: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            link: PropTypes.string,
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        }),
    ),
    intro: PropTypes.string,
    process: PropTypes.shape({
        heading: PropTypes.string,
        steps: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                icon: PropTypes.string,
                description: PropTypes.string,
            }),
        ),
    }),
    slider: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            title: PropTypes.string,
            quote: PropTypes.string,
            logo: PropTypes.string,
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        }),
    ),
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple">
            <IndexPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                focus={frontmatter.focus}
                intro={frontmatter.intro}
                process={frontmatter.process}
                slider={frontmatter.slider}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        section
        heading
        focus {
          title
          description
          link
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        intro
        process {
          heading
          steps {
            title
            icon
            description
          }
        }
        slider {
          name
          title
          quote
          logo
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
