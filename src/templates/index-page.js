import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Link, graphql } from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'
import circle from '../img/accent-circle.png'
import triangle from '../img/accent-triangle.png'

export const IndexPageTemplate = ({
  image,
  heading,
  section,
  intro,
  action,
}) => {
  const icons = {
    circle: circle,
    triangle: triangle
  };

  return (
    <div>
      <Header
        heading = { heading }
        image = { image }
        section = { section }
      />
      <div className="c-intro container">
        <div className="c-intro__heading">
          <h3>{ intro.heading }</h3>
        </div>
        <div className="c-intro__item__wrapper">
          {
            intro.sections != null &&
              <div>
                {intro.sections.map((item, key) => (
                  <section key={key} className="c-intro__item">
                    <img src={icons[item.icon]} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </section>
                ))}
              </div>
          }
        </div>
        <div className="c-intro__watermark">
          <p>{ intro.watermark }</p>
        </div>
      </div>
      <div className="c-action container -footer-overlay">
        <div className="c-action__item">
          <h2>{ action.heading }<span>></span></h2>
        </div>
        {
          action.pages != null &&
            <div>
              {action.pages.map((item, key) => (
                <Link key={key} className="c-action__item -background" to={item.link} style={{
                  backgroundImage: `url(${
                      !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
                  })`,
                }}>
                  <div className="c-action__item__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
        }
      </div>
      <div className="c-action__footer"></div>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    heading: PropTypes.string,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        icon: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    watermark: PropTypes.string
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

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout
      bodyClass = "-purple">
        <IndexPageTemplate
          image = { frontmatter.image }
          title = { frontmatter.title }
          heading = { frontmatter.heading }
          section = { frontmatter.section }
          intro = { frontmatter.intro }
          action = { frontmatter.action }
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          heading
          sections {
            title
            icon
            description
          }
          watermark
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
