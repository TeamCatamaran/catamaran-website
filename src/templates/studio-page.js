import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import ActionCallout from '../components/ActionCallout'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Breakdown from '../components/Breakdown'
import Cta from '../components/Cta'
import FluidImage from '../components/FluidImage'
import ProcessSlider from '../components/ProcessSlider'

import angles from '../img/angles.png'
import circlelines from '../img/circlelines.png'
import diamonds from '../img/diamonds.png'
import dots from '../img/dots.png'
import scribble from '../img/scribble.png'
import triangle from '../img/triangle.png'
import warpbox from '../img/warpbox.png'
import waves from '../img/waves.png'
import { types } from '../types/types'
import Tabs from '../components/Tabs'

export const StudioPageTemplate = ({
    tab,
    section,
    heading,
    overview,
    photos,
    process,        // How we do it
    services,
    upstarts,       // Logos
    criteria,
    expect,
    testimonials,
    launch,
    action,
}) => {

    const pages = [{
        name: "startup",
        label: "Startup Launch Program",
        url: "studio/startup",
        rel: "",
    }, {
        name: "upstarts",
        label: "Upstarts",
        url: "studio/upstarts",
        rel: "",
    }, {
        name: "cofounder",
        label: "Be a Co-Founder",
        url: "studio/cofounder",
        rel: "",
    }]

    return (
        <div >
            <Header
                collageType="studio"
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
                {
                    overview.details != null && overview.details.length > 0 &&
                    <div className="c-overview__details">
                        {overview.details.map((d) => {
                            return (
                                <div className="c-overview__detail">
                                    <label className="c-overview__detail__title">{d.heading}</label>
                                    <p className="c-overview__detail__description">{d.description}</p>
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
                        {
                            photos[0] != null &&
                            <FluidImage
                                alt={photos[0].alt || "upstart-photo"}
                                image={photos[0].src} />
                        }
                    </div>
                    <div className="c-studioPhotos__photo2">
                        {
                            photos[1] != null &&
                            <FluidImage
                                alt={photos[1].alt || "upstart-photo"}
                                image={photos[1].src} />
                        }
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
                process != null &&
                <ProcessSlider content={process} />
            }
            {
                criteria != null &&
                <Breakdown
                    content={criteria} />
            }
            {
                services != null &&
                <div className={"c-services container " + "tab-" + tab}>
                    <div className="c-services__header">
                        <div className="c-services__header__wrapper">
                            <h2 className="c-services__heading">{services.heading}</h2>
                            <p className="c-services__intro">{services.intro}</p>
                        </div>
                        {
                            tab == "startup" &&
                            <div className="c-services__header__images">
                                <img
                                    className="c-services__header__images__circlelines"
                                    alt="circlelines"
                                    src={circlelines} />
                                <img
                                    className="c-services__header__images__warpbox"
                                    alt="warpbox"
                                    src={warpbox} />
                            </div>
                        }
                    </div>
                    <div className="c-services__list">
                        {
                            services.list.map((i, key) => {
                                return (
                                    <div className="c-services__listItem" key={"listItem-" + key}>
                                        {
                                            i.heading != null &&
                                            <h3 className="c-services__listItem__heading">{i.heading}</h3>
                                        }
                                        {
                                            i.intro != null &&
                                            <p className="c-services__listItem__intro">{i.intro}</p>
                                        }
                                        {
                                            i.description != null &&
                                            <p className="c-services__listItem__description">{i.description}</p>
                                        }
                                    </div>
                                )
                            })
                        }
                        {
                            tab == "upstarts" &&
                            <img
                                className="c-services__list__image"
                                alt="diamonds"
                                src={diamonds} />
                        }
                    </div>
                </div>
            }
            {
                upstarts != null &&
                <div className="c-upstartLogos container">
                    <h2 className="c-upstartLogos__heading">{upstarts.heading}</h2>
                    <div className="c-upstartLogos__list">
                        {
                            upstarts.logos.map((logo, key) => {
                                return (
                                    <div className="c-upstartLogos__logo" key={"logo-" + key}>
                                        <FluidImage
                                            className="c-upstartLogos__logo__image"
                                            alt={logo.alt}
                                            image={logo.src} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            <Testimonials
                items={testimonials} />
            <Cta
                content={launch}
                variant={tab} />
            {
                action != null &&
                <ActionCallout
                    heading={action.heading}
                    pages={action.pages} />
            }
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
    process: PropTypes.shape({
        heading: PropTypes.string,
        intro: PropTypes.string,
        steps: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                description: PropTypes.string,
            }),
        ),
    }),
    services: PropTypes.shape({
        heading: PropTypes.string,
        intro: PropTypes.string,
        list: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string,
                intro: PropTypes.string,
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
    seo: types.seoProps,
}

const StudioPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-orange"
            seo={frontmatter.seo}>
            <StudioPageTemplate
                tab={frontmatter.tab}
                section={frontmatter.section}
                heading={frontmatter.heading}
                overview={frontmatter.overview}
                photos={frontmatter.photos}
                process={frontmatter.process}
                services={frontmatter.services}
                services={frontmatter.services}
                upstarts={frontmatter.upstarts}
                criteria={frontmatter.criteria}
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
      process {
        heading
        intro
        steps {
          heading
          description
        }
      }
      services {
        heading
        intro
        list {
            heading
            intro
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
        logoDark {
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
