import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Link, graphql } from 'gatsby'

import Header from '../components/Header'
import Layout from '../components/Layout'

export const NetworkPageTemplate = ({
    heading,
    section,
    intro,
    partners,
}) => {
    const sortedPartners = {
        "community contacts": [],
        "coworking": [],
        "economic dev": [],
        "mentorship": [],
    };
    const logoPartners = [];
    partners.forEach((p) => {
        sortedPartners[p.category].push(p);
        if (p.image != null) {
            logoPartners.push(p);
        }
    });

    return (
        <div>
            {/* <Header
                heading = { heading }
                section = { section }
            /> */}
            <div className="c-intro container">
                <div className="c-intro__heading">
                    <h3>{intro}</h3>
                </div>
            </div>
            <div className="c-partners container">
                <div className="c-partners__logos">
                    {logoPartners.map((p) => {
                        return (
                            <Link className="c-partner__logos__item" to={p.link}>
                                <img src={p.image} alt={p.name} />
                            </Link>
                        );
                    })}
                </div>
                <div className="c-partners__list">
                    <div className="c-partners__list__section">
                        <h4>Coworking</h4>
                        {sortedPartners["coworking"].map((p) => <Link to={p.link} target="_blank">{p.name}</Link>)}
                        <h4>Mentorship</h4>
                        {sortedPartners["mentorship"].map((p) => <Link to={p.link} target="_blank">{p.name}</Link>)}
                    </div>
                    <div className="c-partners__list__section">
                        <h4>Economic Dev</h4>
                        {sortedPartners["economic dev"].map((p) => <Link to={p.link} target="_blank">{p.name}</Link>)}
                    </div>
                    <div className="c-partners__list__section">
                        <h4>Community Contacts</h4>
                        {sortedPartners["community contacts"].map((p) => <Link to={p.link} target="_blank">{p.name}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

NetworkPageTemplate.propTypes = {
    title: PropTypes.string,
    heading: PropTypes.string,
    intro: PropTypes.string,
    partners: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string,
            name: PropTypes.string,
            logo: PropTypes.string,
            link: PropTypes.string,
        })
    )
}

const NetworkPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout
            bodyClass="-purple">
            <NetworkPageTemplate
                heading={frontmatter.heading}
                section={frontmatter.section}
                intro={frontmatter.intro}
                partners={frontmatter.partners}
            />
        </Layout>
    )
}

NetworkPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default NetworkPage

export const pageQuery = graphql`
  query NetworkPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "network-page" } }) {
      frontmatter {
        section
        heading
        intro
        partners {
          category
          name
          logo
          link
        }
      }
    }
  }
`
