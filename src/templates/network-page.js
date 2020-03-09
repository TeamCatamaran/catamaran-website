import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import FluidImage from '../components/FluidImage'
import Header from '../components/Header'
import Layout from '../components/Layout'

import { types } from '../types/types';

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
        if (p.image != null) {
            logoPartners.push(p);
        } else if (p.category != null) {
            sortedPartners[p.category].push(p);
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
                        {logoPartners.map((p, key) => {
                            return (
                                <a
                                    className="c-partners__logos__item"
                                    key={"logoPartner-" + key}
                                    href={p.link.url}
                                    rel={p.link.rel}
                                    target="_blank"
                                >
                                    <FluidImage
                                        className="c-partners__logos__item__image"
                                        alt={p.image.alt || p.name}
                                        image={p.image.src} />
                                </a>
                            );
                        })}
                    </div>
                    <div className="c-partners__list">
                        <div className="c-partners__list__section">
                            <h4 className="c-partners__list__section__heading">Coworking</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["coworking"].map((p, key) => {
                                    return (
                                        <li key={"coworking-" + key}>
                                            <a href={p.link.url} rel={p.link.rel} target="_blank">{p.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                            <h4 className="c-partners__list__section__heading">Mentorship</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["mentorship"].map((p, key) => {
                                    return (
                                        <li key={"mentorship-" + key}>
                                            <a href={p.link.url} rel={p.link.rel} target="_blank">{p.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="c-partners__list__section">
                            <h4 className="c-partners__list__section__heading">Economic Dev</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["economic dev"].map((p, key) => {
                                    return (
                                        <li key={"economic-" + key}>
                                            <a href={p.link.url} rel={p.link.rel} target="_blank">{p.name}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="c-partners__list__section">
                            <h4 className="c-partners__list__section__heading">Community Contacts</h4>
                            <ul className="c-partners__list__section__list">
                                {sortedPartners["community contacts"].map((p, key) => {
                                    return (
                                        <li key={"community-" + key}>
                                            <a href={p.link.url} rel={p.link.rel} target="_blank">{p.name}</a>
                                        </li>
                                    );
                                })}
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
            image: types.imageProps,
            link: types.linkProps,
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
        }
      }
    }
  }
`
