import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Link, graphql } from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  heading,
  section,
  intro,
  action,
}) => (
  <div>
    <Header
      heading = { heading }
      image = { image }
      section = { section }
    />
    <div className="c-intro container">
      <div className="c-intro__heading">
        <h2>{ intro.heading }</h2>
      </div>
      {
        intro.sections != null &&
          <div>
            {intro.sections.map((item, key) => (
              <section key={key} className="c-intro__item">
                {/* <PreviewCompatibleImage imageInfo={item} /> */}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </section>
            ))}
          </div>
      }
    </div>
    <div className="c-action container">
      <div className="c-action__item">
        <h2>{ action.heading }</h2>
        >
      </div>
      {
        action.pages != null &&
          <div>
            {action.pages.map((item, key) => (
              <section key={key} className="c-action__item">
                {/* <PreviewCompatibleImage imageInfo={item} /> */}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </section>
            ))}
          </div>
      }
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    heading: PropTypes.string,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    )
  }),
  action: PropTypes.shape({
    heading: PropTypes.string,
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    )
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  console.log(frontmatter.intro);

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
            description
          }
        }
        action {
          heading
          pages {
            title
            description
            link
          }
        }
      }
    }
  }
`
