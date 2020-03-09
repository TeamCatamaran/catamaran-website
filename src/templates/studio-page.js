import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import ActionCallout from '../components/ActionCallout'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Breakdown from '../components/Breakdown'
import Cta from '../components/Cta'
import FluidImage from '../components/FluidImage'
import ProcessSlider from '../components/ProcessSlider'
import { Link } from 'gatsby'

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
                                    <Link key={"tab-" + key} to={p.link} className={className}>{p.label}</Link>
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
                            alt={"upstart-photo"}
                            image={photos[0]} />
                    </div>
                    <div className="c-studioPhotos__photo2">
                        <FluidImage
                            alt={"upstart-photo"}
                            image={photos[1]} />
                    </div>
                    <div className="c-studioPhotos__element1">
                        <FluidImage
                            alt={"abstract geometric design element"}
                            image={"/img/waves.png"} />
                    </div>
                    <div className="c-studioPhotos__element2">
                        <FluidImage
                            alt={"abstract geometric design element"}
                            image={"/img/angles.png"} />
                    </div>
                    <div className="c-studioPhotos__element3">
                        <FluidImage
                            alt={"abstract geometric design element"}
                            image={"/img/scribble.png"} />
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
                <div className="c-services container">
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
                                    src="/img/circlelines.png" />
                                <img
                                    className="c-services__header__images__warpbox"
                                    src="/img/warpbox.png" />
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
                            src="/img/diamonds.png" />
                    }
                    </div>
                </div>
            }
            {
                upstarts != null &&
                <div>
                    {upstarts.heading}
                    {upstarts.logos.map((l) => {
                        return (
                            <p>
                                <FluidImage
                                    image={l.logo} />
                            </p>
                        )
                    })}
                </div>
            }
            <Testimonials
                items={testimonials} />
            <Cta
                content={launch}
                variant={tab}/>
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
        PropTypes.shape({
            photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        }),
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
            PropTypes.shape({
                photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            }),
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
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
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
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      criteria {
        heading
        image {
            childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
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
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
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
