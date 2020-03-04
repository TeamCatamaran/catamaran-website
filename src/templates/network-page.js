import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import FluidImage from '../components/FluidImage'
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
        if (p.logo != null) {
            logoPartners.push(p);
        }
    });

    return (
        <div>
            <Header
                collageType="network"
                heading={heading}
                section={section}
            />
            <div className="c-interiorPage">
                <div className="c-intro container">
                    <p>{intro}</p>
                </div>
                <div className="c-partners container">
                    <div className="c-partners__logos">
                        {logoPartners.map((p) => {
                            return (
                                <Link className="c-partner__logos__item" to={p.link}>
                                    <FluidImage
                                        className="c-partner__logos__item__image -default"
                                        alt={p.name}
                                        image={p.logo} />
                                </Link>
                            );
                        })}
                    </div>
                    <div className="c-partners__list">
                        <div className="c-partners__list__section">
                            <h4 className="c-partners__list__section__heading">Coworking</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["coworking"].map((p) => <li><Link to={p.link} target="_blank">{p.name}</Link></li>)}
                            </ul>
                            <h4 className="c-partners__list__section__heading">Mentorship</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["mentorship"].map((p) => <li><Link to={p.link} target="_blank">{p.name}</Link></li>)}
                            </ul>
                        </div>
                        <div className="c-partners__list__section">
                            <h4 className="c-partners__list__section__heading">Economic Dev</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["economic dev"].map((p) => <li><Link to={p.link} target="_blank">{p.name}</Link></li>)}
                            </ul>
                        </div>
                        <div className="c-partners__list__section">
                            <h4 className="c-partners__list__section__heading">Community Contacts</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["community contacts"].map((p) => <li><Link to={p.link} target="_blank">{p.name}</Link></li>)}
                            </ul>
                        </div>
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
            logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
          link
        }
      }
    }
  }
`
