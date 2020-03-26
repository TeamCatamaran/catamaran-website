import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CookieNotice from '../components/CookieNotice'
import '../sass/app.scss'
import { localStorageUtils } from '../utilities/localStorage';
import { withPrefix } from 'gatsby'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TemplateWrapper = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            highContrast: false
        }

        this._toggleContrast = this._toggleContrast.bind(this)
    }

    componentDidMount() {
        AOS.init();

        this.setState({
            highContrast: localStorageUtils.getUserPreferences().highContrast,
        })
    }

    render() {
        const { bodyClass, footerHasShapes, children } = this.props
        const title = 'Catamaran'
        const description = 'Facilitating a tightly-knit, vibrant, and dynamic community of flourishing startups in Central PA.'
        let { seo } = this.props
        if (seo == null) {
            seo = {}
        }

        return (
            <div>
                <Helmet
                    bodyAttributes={{
                        class: `${bodyClass}${this.state.highContrast ? ' -contrast' : ''}`
                    }}>
                    <html lang="en" />
                    <title>{seo.title || title}</title>
                    <meta name="description" content={seo.description || description} />

                    <link
                        rel="icon"
                        type="image/png"
                        href={`${withPrefix('/')}img/favicon/favicon-196.png`}
                        sizes="196x196"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={`${withPrefix('/')}img/favicon/favicon-192.png`}
                        sizes="192x192"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`${withPrefix('/')}img/favicon/apple-touch-icon.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={`${withPrefix('/')}img/favicon/favicon-167.png`}
                        sizes="167x167"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={`${withPrefix('/')}img/favicon/favicon-152.png`}
                        sizes="152x152"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={`${withPrefix('/')}img/favicon/favicon-128.png`}
                        sizes="128x128"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={`${withPrefix('/')}img/favicon/favicon-32.png`}
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href={`${withPrefix('/')}img/favicon/favicon-16.png`}
                        sizes="16x16"
                    />

                    <meta name="theme-color" content="#fff" />

                    <meta property="og:type" content={seo.ogType || "business.business"} />
                    <meta property="og:title" content={seo.ogTitle || seo.title || title} />
                    <meta property="og:url" content={seo.ogUrl || "/"} />
                    <meta
                        property="og:image"
                        content={`${withPrefix('/')}img/og-image.jpg`}
                    />
                </Helmet>
                <Navbar
                    className={bodyClass}
                    highContrast={this.state.highContrast}
                    toggleContrast={this._toggleContrast} />
                <main role="main">
                    {children}
                </main>
                <CookieNotice />
                <Footer
                    hasShapes={footerHasShapes} />
            </div>
        )
    }

    _toggleContrast = () => {
        const newState = !this.state.highContrast;

        this.setState({ highContrast: newState });
        localStorageUtils.saveUserPreferences({ highContrast: newState, })
    }
}

export default TemplateWrapper
