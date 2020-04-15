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
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const { bodyClass, footerHasShapes, footerHasPadding, children } = this.props
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
                    <title>Catamaran - We invest creative capital in startups</title>
                    <meta name="description" content="Think of us as your co-founder for hire. We partner tech startup founders and entrepreneurs with a hands-on team to ideate, validate, and launch your startup." />

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
                    <meta property="og:title" content="Catamaran - We invest creative capital in startups" />
                    <meta property="og:description" content="Think of us as your co-founder for hire. We partner tech startup founders and entrepreneurs with a hands-on team to ideate, validate, and launch your startup." />
                    <meta property="og:url" content={seo.ogUrl || url} />
                    <meta
                        property="og:image"
                        content={`${url}img/og.jpg`}
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
                    hasShapes={footerHasShapes}
                    hasPadding={footerHasPadding} />
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
