import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import ActionCallout from '../components/ActionCallout'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import Process from '../components/Process'
import FluidImage from '../components/FluidImage'
import { Link } from 'gatsby'

export const StudioPageTemplate = ({
  tab,
  section,
  heading,
  startup,
  upstarts,
  cofounder,
}) => {
  const pages = [{
    name: "startup",
    label: "Startup Launch Program",
    link: "studio#startup"
  }, {
    name: "upstarts",
    label: "Upstarts",
    link: "studio#upstarts"
  }, {
    name: "cofounder",
    label: "Be a Co-Founder",
    link: "studio#cofounder"
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
      <StartupTabTemplate
        overview={startup.overview}
        photos={startup.photos}
        how={startup.how}
        upstarts={startup.upstarts}
        process={startup.process}
        expect={startup.expect}
        slider={startup.slider}
        launch={startup.launch}
        action={startup.action} />
    </div>
  )
}

export const StartupTabTemplate = ({
  overview,
  photos,
  how,        // How we can help
  upstarts,   // Logos
  process,    // Criteria
  expect,
  slider,
  launch,
  action,
}) => {
  return (
    <div>
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
      </div>
      {
        photos != null &&
        <div className="c-studioPhotos">

        </div>
      }
      {
        how != null &&
        <div>
          {how.heading}<br />{how.intro}<br />{how.steps.map((s) => {
            return (
              <p>
                {s.heading}<br />{s.description}
              </p>
            )
          })}
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
      <Process
        process={process} />
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

StudioPageTemplate.propTypes = {
  section: PropTypes.string,
  heading: PropTypes.string,
  overview: PropTypes.shape({
    intro: PropTypes.string,
    leftContent: PropTypes.string,
    rightContent: PropTypes.string,
  }),
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
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
      PropTypes.shape({
        photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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

const StudioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  let startup = {};
  try {
    startup = data.startup.edges[0].node.childMarkdownRemark.frontmatter;
  } catch (ex) { }

  console.log(data);
  console.log(startup);
  return (
    <Layout
      bodyClass="-orange">
      <StudioPageTemplate
        tab={frontmatter.tab}
        section={frontmatter.section}
        heading={frontmatter.heading}
        startup={startup}
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
      section
      heading
    }
  }
  startup: allFile(filter: {name: {eq: ".startup"}}) {
    edges {
      node {
        id
        name
        absolutePath
        childMarkdownRemark {
          frontmatter {
            overview {
              intro
              leftContent
              rightContent
            }
            photos {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            how {
              heading
              steps {
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
    }
  }
}
`
