import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import ActionCallout from '../components/ActionCallout'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Breakdown from '../components/Breakdown'
import FluidImage from '../components/FluidImage'
import ProcessSlider from '../components/ProcessSlider'

import angles from '../img/angles.png'
import dots from '../img/dots.png'
import scribble from '../img/scribble.png'
import triangle from '../img/triangle.png'
import waves from '../img/waves.png'
import { types } from '../types/types'

export const StudioPageTemplate = ({
    tab,
    section,
    heading,
    overview,
    photos,
    how,        // How we can help
    upstarts,   // Logos
    criteria,    // Criteria
    expect,
    testimonials,
    launch,
    action,
}) => {

    const pages = [{
        name: "startup",
        label: "Startup Launch Program",
        link: "studio/startup"
    }, {
        name: "upstarts",
        label: "Upstarts",
        link: "studio/upstarts"
    }, {
        name: "cofounder",
        label: "Be a Co-Founder",
        link: "studio/cofounder"
    }]

    return (
        <div>
            <Header
                collageType="studio"
                heading={heading}
                section={section}
            />
            <div className="c-tabset">
                <div className="container">
                    <div className="c-tabset__wrapper">
                        {
                            pages.map((p, key) => {
                                let className = "c-tabset__tab";
                                if (tab === p.name) {
                                    className += " -active";
                                }
                                return (
                                    <Link key={"tab-" + key} to={p.link.url} rel={p.link.rel} className={className}>{p.label}</Link>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="c-studioOverview container">
                <div className="c-studioOverview__intro">
                    <p className="c-studioOverview__intro__p">{overview.intro}</p>
                </div>
                <div className="c-studioOverview__row">
                    <div className="c-studioOverview__row__col">
                        <p>{overview.leftContent}</p>
                    </div>
                    <div className="c-studioOverview__row__col">
                        <p>{overview.rightContent}</p>
                    </div>
                </div>
                {
                    overview.details != null && overview.details.length > 0 &&
                    <div className="c-studioOverview__details">
                        {overview.details.map((d) => {
                            return (
                                <div className="c-studioOverview__detail">
                                    <label className="c-studioOverview__detail__title">{d.heading}</label>
                                    <p className="c-studioOverview__detail__description">{d.description}</p>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
            {
                photos != null &&
                <div className="c-studioPhotos container">
                    <div className="c-studioPhotos__photo1">
                        <FluidImage
                            alt={photos[0].alt || "upstart-photo"}
                            image={photos[0].src} />
                    </div>
                    <div className="c-studioPhotos__photo2">
                        <FluidImage
                            alt={photos[1].alt || "upstart-photo"}
                            image={photos[1].src} />
                    </div>
                    <div className="c-studioPhotos__element1">
                        <img
                            alt={"abstract geometric design element"}
                            src={waves} />
                    </div>
                    <div className="c-studioPhotos__element2">
                        <img
                            alt={"abstract geometric design element"}
                            src={angles} />
                    </div>
                    <div className="c-studioPhotos__element3">
                        <img
                            alt={"abstract geometric design element"}
                            src={scribble} />
                    </div>
                </div>
            }
            {
                how != null &&
                <ProcessSlider content={how} />
            }
            {
                upstarts != null &&
                <div>
                    {upstarts.heading}
                    {upstarts.logos.map((l) => {
                        return (
                            <p>
                                <FluidImage
                                    alt={l.alt}
                                    image={l.src} />
                            </p>
                        )
                    })}
                </div>
            }
            {
                criteria != null &&
                <Breakdown
                    content={criteria} />
            }
            {
                expect != null &&
                <div className="c-expect container">

                    {expect.heading}<br />{expect.intro}{expect.steps.map((s) => {
                        return (
                            <p>
                                {s.heading}<br />{s.intro}<br />{s.description}
                            </p>
                        )
                    })}
                </div>
            }
            <Testimonials
                items={testimonials} />
            <div className="c-cta">
                <img
                    className="c-cta__triangle"
                    alt={"abstract geometric design element"}
                    src={triangle} />
                <img
                    className="c-cta__dots"
                    alt={"abstract geometric design element"}
                    src={dots} />
                <div className="c-cta__wrapper">
                    <div className="c-cta__content">
                        <p>{launch.content}</p>
                    </div>
                    <div className="c-cta__link">
                        <Link to={launch.link.to} rel={launch.link.rel} className="c-focus__item">{launch.text}</Link>
                    </div>
                </div>
            </div>
            <ActionCallout
                heading={action.heading}
                pages={action.pages} />
        </div>
    )
}

StudioPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
    overview: PropTypes.shape({
        intro: PropTypes.string,
        leftContent: PropTypes.string,
        rightContent: PropTypes.string,
        details: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                description: PropTypes.string,
            }),
        ),
    }),
    photos: PropTypes.arrayOf(
        types.imageProps
    ),
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
    upstarts: PropTypes.shape({
        heading: PropTypes.string,
        logos: PropTypes.arrayOf(
            types.imageProps
        ),
    }),
    criteria: PropTypes.shape({
        heading: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        items: PropTypes.arrayOf(
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
    testimonials: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            title: PropTypes.string,
            quote: PropTypes.string,
            logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            image: types.imageProps,
        }),
    ),
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

const StudioPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-orange">
            <StudioPageTemplate
                tab={frontmatter.tab}
                section={frontmatter.section}
                heading={frontmatter.heading}
                overview={frontmatter.overview}
                photos={frontmatter.photos}
                how={frontmatter.how}
                upstarts={frontmatter.upstarts}
                criteria={frontmatter.criteria}
                expect={frontmatter.expect}
                testimonials={frontmatter.testimonials}
                launch={frontmatter.launch}
                action={frontmatter.action}
            />
        </Layout>
    )
}

StudioPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StudioPage;

export const studioPageQuery = graphql`
query StudioPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      tab
      section
      heading
      overview {
        intro
        leftContent
        rightContent
        details {
          heading
          description
        }
      }
      photos {
        src {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      how {
        heading
        intro
        steps {
          heading
          description
        }
      }
      upstarts {
        heading
        logos {
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
      criteria {
        heading
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
        items {
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
      testimonials {
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
