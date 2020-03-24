import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionCallout from '../components/ActionCallout'
import FluidImage from '../components/FluidImage'

import dots from '../img/journal-dots.png'
import squares from '../img/journal-squares.png'
import waves from '../img/journal-waves.png'
import { types } from '../types/types';

export const JournalPageTemplate = class extends React.Component {
    constructor(props) {
        super(props)

        this.categories = ['All', 'Thoughts', 'Startup Stories', 'Press', 'Sandbox', 'Events']

        this.state = {
            count: 6,
            journals: this.props.journals,
            totalCount: this.props.journals.length,
            selectedCategory: 0
        }

        this._handleCategoryClick = this._handleCategoryClick.bind(this)
        this._handleSeeMoreClick = this._handleSeeMoreClick.bind(this)
    }

    render() {
        const { section, heading, action } = this.props

        let journals = this.props.journals
        if (this.state.selectedCategory > 0) {
            journals = this.props.journals.filter((j) => j.category === this.categories[this.state.selectedCategory])
        }
        journals = journals.slice(0, this.state.count);

        const activeCategories = [...new Set(this.props.journals.map((j) => j.category))].map((c) => {
            return {
                key: this.categories.indexOf(c),
                category: c
            }
        })
        activeCategories.unshift({
            key: 0,
            category: this.categories[0]
        })

        const icons = {
            dots: dots,
            squares: squares,
            waves: waves,
        };

        return (
            <div>
                <Header
                    collageType="journal"
                    heading={heading}
                    section={section}
                />
                <div className="c-journal -category container">
                    <div className="c-journal__category__wrapper">
                        {activeCategories.map((c) => {
                            return (
                                <button
                                    className="c-journal__category"
                                    key={`journal-category-${c.key}`}
                                    onClick={(e) => this._handleCategoryClick(e, c.key)}>
                                    <span
                                        className={`c-button -outline ${c.key === this.state.selectedCategory ? '' : '-deselected'}`}>
                                        {c.category}
                                    </span>
                                </button>
                            )
                        }, this)}
                    </div>
                </div>
                {
                    journals != null && journals.length > 0 &&
                    <ul className="c-journal -list container">
                        {journals.map((b, key) => {
                            return (
                                <li className="c-journal__post" key={`journal-post-${key}`} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                                    <Link className="c-journal__post__link" to={b.url} rel={""}>
                                        <FluidImage className="c-journal__post__asset" alt={b.index.image.alt} image={b.index.image.src} />
                                        <label>{b.category}</label>
                                        <h2>{b.index.title}</h2>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                }
                {
                    (journals == null || journals.length === 0) &&
                    <div className="c-journal container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                        <p className="c-journal__post -no-results">
                            No Entries
                        </p>
                    </div>
                }
                {
                    this.state.totalCount > this.state.count &&
                    <div className="c-journal -more container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                        <button className="c-journal__more" onClick={this._handleSeeMoreClick}>
                            <span className="c-button -outline">See More</span>
                        </button>
                    </div>
                }
                {
                    action != null &&
                    <ActionCallout
                        heading={action.heading}
                        pages={action.pages} />
                }
            </div>
        )
    }

    _handleCategoryClick(e, key) {
        e.preventDefault()

        let totalCount = this.state.journals.length
        if (key > 0) {
            totalCount = this.props.journals.filter((j) => j.category === this.categories[key]).length
        }

        this.setState({
            count: 6,
            selectedCategory: key,
            totalCount: totalCount
        })
    }

    _handleSeeMoreClick(e) {
        e.preventDefault()

        this.setState({
            count: this.state.count + 6
        })
    }
}

JournalPageTemplate.propTypes = {
    section: PropTypes.string,
    heading: PropTypes.string,
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
    seo: types.seoProps
}

const JournalPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    const journals = data.journals.edges.map((e) => {
        const content = e.node.frontmatter
        content.url = `/${e.node.fields.collection}${e.node.fields.slug}`
        return content;
    });

    return (
        <Layout
            bodyClass="-dark"
            seo={frontmatter.seo}>
            <JournalPageTemplate
                section={frontmatter.section}
                heading={frontmatter.heading}
                journals={journals}
                action={frontmatter.action}
            />
        </Layout>
    )
}

JournalPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default JournalPage;

export const journalPageQuery = graphql`
query JournalPage($id: String!) {
  journals: allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          index {
            title
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
          category
        }
        fields {
          collection
          slug
        }
      }
    }
  }
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      section
      heading
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
