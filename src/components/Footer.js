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
                        <div className="c-footer__section -logo">
                            <Link to="/" title="Catamaran">
                                <img src={logo} alt="Catamaran" style={{ width: '170px' }} />
                            </Link>
                        </div>
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
