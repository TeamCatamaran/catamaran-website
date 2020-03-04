import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import ActionCallout from '../components/ActionCallout'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Process from '../components/Process'

export const StudioStartupPageTemplate = ({
    section,
    heading,
    overview,
    how,
    process,
    expect,
    slider,
    launch,
    action,
}) => {

    return (
        <div>
            <Header
                collageType="studio"
                heading={heading}
                section={section}
            />
            <div>
                {overview.intro}<br />{overview.leftContent}<br />{overview.rightContent}
            </div>
            <div>
                {how.heading}<br />{how.intro}<br />{how.steps.map((s) => {
                    return (
                        <p>
                            {s.heading}<br />{s.description}
                        </p>
                    )
                })}
            </div>
            <Process
                process={process} />
            <div>
                {expect.heading}<br />{expect.intro}{expect.steps.map((s) => {
                    return (
                        <p>
                            {s.heading}<br />{s.intro}<br />{s.description}
                        </p>
                    )
                })}
            </div>
            <Slider
                items={slider} />
            <div>
                {launch.content}<br />{launch.text}<br />{launch.link}
            </div>
            <ActionCallout
                heading={action.heading}
                pages={action.pages} />
        </div>
    )
}

StudioStartupPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    overview: PropTypes.shape({
        intro: PropTypes.string,
        leftContent: PropTypes.string,
        rightContent: PropTypes.string,
    }),
    how: PropTypes.shape({
        heading: PropTypes.string,
        intro: PropTypes.string,
        steps: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                description: PropTypes.string,
            }),
        ),
    }),
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
    slider: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            title: PropTypes.string,
            quote: PropTypes.string,
            logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        }),
    ),
    launch: PropTypes.shape({
        content: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.string,
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

const StudioStartupPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-orange">
            <StudioStartupPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                overview={frontmatter.overview}
                how={frontmatter.how}
                process={frontmatter.process}
                expect={frontmatter.expect}
                slider={frontmatter.slider}
                launch={frontmatter.launch}
                action={frontmatter.action}
            />
        </Layout>
    )
}

StudioStartupPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StudioStartupPage;

export const studioStartupPageQuery = graphql`
query StudioStartupPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      section
      heading
      overview {
        intro
        leftContent
        rightContent
      }
      how {
        heading
        steps {
          heading
          description
        }
      }
      process {
        heading
        steps {
          title
          icon
          description
        }
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
      slider {
        name
        title
        quote
        logo {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      launch {
        content
        text
        link
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
