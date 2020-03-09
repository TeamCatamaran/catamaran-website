import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import ActionCallout from '../components/ActionCallout'
import Header from '../components/Header'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'

import { types } from '../types/types';

export const ExperimentsPageTemplate = ({
    tab,
    section,
    heading,
    overview,
    expect,
    examples,
    launch,
    action,
}) => {

    return (
        <div>
            <Header
                collageType="experiments"
                heading={heading}
                section={section}
            />
            <div>
                Selected Tab: {tab}
            </div>
            <div>
                {overview.intro}<br />{overview.leftContent}<br />{overview.rightContent}
            </div>
            {
                expect != null &&
                <div>
                    {expect.heading}<br />{expect.intro}{expect.steps.map((s) => {
                        return (
                            <p>
                                {s.heading}<br />{s.intro}<br />{s.description}
                            </p>
                        )
                    })}
                </div>
            }
            {
                examples != null &&
                <div>
                    {examples.heading}<br />{examples.intro}{examples.steps.map((s) => {
                        return (
                            <p>
                                {s.heading}<br />{s.description}<br /><FluidImage alt={s.image.alt || s.heading} image={s.image.src} />
                            </p>
                        )
                    })}
                </div>
            }
            {
                launch != null &&
                <div>
                    {launch.content}<br />{launch.text}<br />{launch.link.url}<br />{launch.link.rel}
                </div>
            }
            {
                action != null &&
                <ActionCallout
                    heading={action.heading}
                    pages={action.pages} />
            }
        </div>
    )
}

ExperimentsPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    overview: PropTypes.shape({
        intro: PropTypes.string,
        leftContent: PropTypes.string,
        rightContent: PropTypes.string,
    }),
    expect: PropTypes.shape({
        heading: PropTypes.string,
        intro: PropTypes.string,
        steps: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                intro: PropTypes.string,
                description: PropTypes.string,
            }),
        ),
    }),
    examples: PropTypes.shape({
        heading: PropTypes.string,
        intro: PropTypes.string,
        steps: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                description: PropTypes.string,
                image: types.imageProps,
            }),
        ),
    }),
    launch: PropTypes.shape({
        content: PropTypes.string,
        text: PropTypes.string,
        link: types.linkProps,
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
}

const ExperimentsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-green">
            <ExperimentsPageTemplate
                tab={frontmatter.tab}
                section={frontmatter.section}
                heading={frontmatter.heading}
                overview={frontmatter.overview}
                expect={frontmatter.expect}
                examples={frontmatter.how}
                launch={frontmatter.launch}
                action={frontmatter.action}
            />
        </Layout>
    )
}

ExperimentsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ExperimentsPage;

export const experimentsPageQuery = graphql`
query ExperimentsPage($id: String!) {
  markdownRemark(id: {eq: $id }) {
  html
    frontmatter {
      tab
      section
      heading
      overview {
        intro
        leftContent
        rightContent
      }
      expect {
        heading
        intro
        steps {
          heading
          intro
          description
        }
      }
      examples {
        heading
        intro
        steps {
          heading
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
        }
      }
      launch {
        content
        text
        link {
          url
          rel
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
    }
  }
}
`
