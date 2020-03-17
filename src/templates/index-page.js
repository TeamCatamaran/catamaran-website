import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import AOS from 'aos';
import 'aos/dist/aos.css';

import FluidImage from '../components/FluidImage'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Breakdown from '../components/Breakdown'
import Testimonials from '../components/Testimonials'
import spiral from '../img/home-spiral.png'

import { types } from '../types/types';

AOS.init();

export const IndexPageTemplate = ({
  section,
  heading,
  focus,
  intro,
  process,
  testimonials,
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
            if (f.link == null) {
              return (null);
            }
            return (
              <Link to={f.link.url} rel={f.link.rel} className="c-focus__item" data-aos="fade-up" data-aos-duration="2000" key={key}>
                {
                  f.image != null &&
                  <FluidImage
                    className="-default"
                    alt={f.image.alt || f.title}
                    image={f.image.src} />
                }
                {
                  f.hover != null &&
                  <FluidImage
                    className="-hover"
                    alt={f.hover.alt || f.title}
                    image={f.hover.src} />
                }
                <div className="c-focus__content">
                  <label className="-large">{f.title}</label>
                  <p>{f.description}</p>
                  {
                    f.link != null &&
                    <div className="c-button">Lets Go</div>
                  }
                </div>
              </Link>
            )
          })}
          <div className="c-focus__image">
            <img className="c-focus__image__asset" src={spiral} alt="abstract design element" />
          </div>
        </div>
      </div>
      <div className="c-intro container" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
        <p className="intro">{intro}</p>
      </div>
      <Breakdown
        content={process} />
      <Testimonials
        items={testimonials} />
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
      link: types.linkProps,
      image: types.imageProps,
    }),
  ),
  intro: PropTypes.string,
  process: PropTypes.shape({
    heading: PropTypes.string,
    image: types.imageProps,
    steps: PropTypes.arrayOf(
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
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout
      bodyClass="-purple"
      footerHasShapes={true}
      seo={frontmatter.seo}>
      <IndexPageTemplate
        section={frontmatter.section}
        heading={frontmatter.heading}
        focus={frontmatter.focus}
        intro={frontmatter.intro}
        process={frontmatter.process}
        testimonials={frontmatter.testimonials}
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
            src {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          hover {
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
        intro
        process {
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
