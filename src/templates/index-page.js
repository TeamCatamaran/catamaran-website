import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import FluidImage from '../components/FluidImage'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Breakdown from '../components/Breakdown'
import Testimonials from '../components/Testimonials'

export const IndexPageTemplate = ({
  section,
  heading,
  focus,
  intro,
  process,
  slider,
}) => {
  return (
    <div>
      <Header
        collageType="home"
        heading={heading}
        section={section}
      />
      <div className="c-focus">
        <div className="c-focus__overlay"></div>
        <div className="container">
          {focus.map((f, key) => {
            return (
              <Link to={f.link.url} rel={f.link.rel} className="c-focus__item" key={key}>
                <FluidImage
                  className="-default"
                  alt={f.title}
                  image={f.image} />
                <FluidImage
                  className="-hover"
                  alt={f.title}
                  image={f.hover} />
                <div className="c-focus__content">
                  <label className="-large">{f.title}</label>
                  <p>{f.description}</p>
                  <Link className="c-button" to={f.link.url} rel={f.link.rel}>Lets Go</Link>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="c-intro container">
        <p className="intro">{intro}</p>
      </div>
      <Breakdown
        content={process} />
      <Testimonials
        items={slider} />
      <div className="c-indexFooterShapes container">
        <FluidImage
          className="c-indexFooterShapes__image"
          alt={"decorative geometric shapes"}
          image={"/img/footer-shapes.png"} />
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
      link: PropTypes.shape({
        url: PropTypes.string,
        rel: PropTypes.string,
      }),
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
  intro: PropTypes.string,
  process: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
      logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  ),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout
      bodyClass="-purple"
      seo={frontmatter.seo}>
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
          link {
            url
            rel
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hover {
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
