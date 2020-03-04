import React from 'react'
import { Link } from 'gatsby'
import SocialIcons from '../components/SocialIcons'

import logo from '../img/footer-logo.png'

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="c-footer">
                <div className="c-footer__row">
                    <div className="c-footer__section">
                        <section>
                            <ul className="c-footer__menu -primary">
                                <li>
                                    <Link className="navbar-item" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to="/studio/startup">
                                        Studio
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to="/experiments/lab">
                                        Experiments
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to="/ventures">
                                        Ventures
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to="/blog">
                                        Journal
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="c-footer__section">
                        <section>
                            <ul className="c-footer__menu -secondary">
                                <li>
                                    <Link className="navbar-item" to="/network">
                                        Network
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to="/faqs">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to="/jobs">
                                        Jobs
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navbar-item" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div className="c-footer__section -newsletter">
                        <label className="-large">
                            Who needs inbox zero?
                        </label>
                    </div>
                </div>
                <div className="c-footer__row">
                    <div className="c-footer__section">
                        <Link to="/" title="Catamaran">
                            <img src={logo} alt="Catamaran" style={{ width: '170px' }} />
                        </Link>
                    </div>
                    <SocialIcons className="c-footer__section -social" />
                    <div className="c-footer__section">
                        <p className="c-footer__family">
                            part of the <a title="andculture family" href="https://andculture.com" target="_blank">andculture</a> family
                        </p>
                    </div>
                    <div className="c-footer__section -copyright">
                        <p>&copy; Catamaran. All rights reserved. Partner work and information are copyrighted and the property of respective partners.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
