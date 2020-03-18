import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import ActionCallout from '../components/ActionCallout'
import Header from '../components/Header'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import ProcessSlider from '../components/ProcessSlider'

import { types } from '../types/types';
import Tabs from '../components/Tabs'

export const ExperimentsPageTemplate = ({
    tab,
    section,
    heading,
    overview,
    process,
    examples,
    launch,
    action,
}) => {
    const pages = [{
        name: "lab",
        label: "The Lab",
        url: "experiments/lab",
        rel: "",
    }, {
        name: "enterprise",
        label: "Enterprise Innovation",
        url: "experiments/enterprise",
        rel: "",
    }]

    return (
        <div>
            <Header
                collageType="experiments"
                heading={heading}
                section={section}
            />
            <Tabs
                activeTab={tab}
                pages={pages} />
            <div className="c-overview container">
                <div className="c-overview__intro">
                    <p className="c-overview__intro__p">{overview.intro}</p>
                </div>
                <div className="c-overview__row">
                    <div className="c-overview__row__col">
                        <p>{overview.leftContent}</p>
                    </div>
                    <div className="c-overview__row__col">
                        <p>{overview.rightContent}</p>
                    </div>
                </div>
            </div>
            {
                process != null &&
                <ProcessSlider
                    content={process}
                    type='experiments' />
            }
            {
                examples != null &&
                <div className="c-examples container">
                    <div className="c-examples__header">
                        <h2>{examples.heading}</h2>
                        <p>{examples.intro}</p>
                    </div>
                    {examples.steps.map((s, key) => {
                        return (
                            <div className="c-examples__item" key={`experiments-${key}`}>
                                <FluidImage alt={s.image.alt || s.heading} image={s.image.src} />
                                <div className="c-examples__content">
                                    <label>
                                        <span>{(key + 1).toString().padStart(2, '0')}</span> / {examples.steps.length.toString().padStart(2, '0')}
                                    </label>
                                    <p>
                                        {s.content}<br />
                                    </p>
                                </div>
                            </div>
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
                content: PropTypes.string,
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
    seo: types.seoProps,
}

const ExperimentsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-green"
            seo={frontmatter.seo}>
            <ExperimentsPageTemplate
                tab={frontmatter.tab}
                section={frontmatter.section}
                heading={frontmatter.heading}
                overview={frontmatter.overview}
                process={frontmatter.process}
                examples={frontmatter.examples}
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
      process {
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
          content
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
