import React from 'react'
import { Link } from 'gatsby'

import Cta from '../components/Cta'
import Layout from '../components/Layout'
import Header from '../components/Header'

const NotFoundPage = () => (
    <Layout
        bodyClass="-purple -interior"
        footerHasShapes={true}>
        <div className="c-notFound container">
            <Header
                collageType="404"
                section="404"
                heading="We can't find what you're looking for." />
        </div>

        <div className="c-notFound container">
            <div className="c-notFound__link">
                <span className="c-label">Studio</span>
                <p>
                    Lorem ipsum
                </p>
                <Link to="/studio/startup" className="c-button -outline">Learn More</Link>
            </div>
            <div className="c-notFound__link">
                <span className="c-label">Experiments</span>
                <p>
                    Lorem ipsum
                </p>
                <Link to="/experiments/lab" className="c-button -outline">Learn More</Link>
            </div>
            <div className="c-notFound__link">
                <span className="c-label">Journal</span>
                <p>
                    Lorem ipsum
                </p>
                <Link to="/blog" className="c-button -outline">Read More</Link>
            </div>
        </div>
        <div className="c-notFound">
            <Cta
                content={{ content: "How can we help?", text: "Contact", link: { rel: "", url: "\contact" } }}
                variant="startup" />
        </div>
    </Layout>
)

export default NotFoundPage
