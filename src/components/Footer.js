import React from 'react'
import { Link } from 'gatsby'
import SocialIcons from '../components/SocialIcons'

import footerShapes from '../img/footer-shapes.png';
import logo from '../img/footer-logo.png'

const Footer = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
        };
    }

    render() {
        const className = this.props.hasPadding ? " -padding" : "";
        return (
            <div>
                {
                    this.props.hasShapes &&
                    <div className="c-footer__shapes">
                        <div className="container">
                            <img
                                className="c-footer__shapes__image container-overflow"
                                alt="decorative geometric shapes"
                                src={footerShapes} />
                        </div>
                    </div>
                }
                <footer className={"c-footer" + className}>
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
                                        <Link className="navbar-item" to="/faq">
                                            FAQs
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link className="navbar-item" to="/jobs">
                                            Jobs
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link className="navbar-item" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="navbar-item" to="/privacy">
                                            Privacy
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="c-footer__section -newsletter">
                            <label className="-large">
                                Who needs inbox zero?
                            </label>
                            <form action="https://catamaran.us16.list-manage.com/subscribe/post?u=5443918b57c58841e377aa056&amp;id=45b4713f88" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                <div id="mc_embed_signup_scroll">
                                    <div>
                                        <input type="email" value={this.state.email} name="EMAIL" placeholder="Enter your email" className="required email" id="mce-EMAIL" onChange={(e) => this._handleEmailChange(e)} />
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                    </div>
                                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                        <input type="text" name="b_5443918b57c58841e377aa056_45b4713f88" tabIndex="-1" value="" readOnly />
                                    </div>
                                    <div className="clear">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="c-button" readOnly />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="c-footer__row">
                        <div className="c-footer__section -logo">
                            <Link to="/" title="Catamaran">
                                <img src={logo} alt="Catamaran" style={{ width: '170px' }} />
                            </Link>
                        </div>
                        <SocialIcons className="c-footer__section -social" />
                        <div className="c-footer__section -family">
                            <p className="c-footer__family">
                                part of the <a title="andculture family" href="https://andculture.com" target="_blank" rel="noopener noreferrer">andculture</a> family
                            </p>
                        </div>
                        <div className="c-footer__section -copyright">
                            <p>&copy; Catamaran. All rights reserved. Partner work and information are copyrighted and the property of respective partners.</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

    _handleEmailChange(e) {
        this.setState({
            email: e.target.value,
        });
    }
}

export default Footer
