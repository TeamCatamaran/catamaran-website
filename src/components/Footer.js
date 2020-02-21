import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/footer-logo.png'
import facebook from '../img/social/facebook.png'
import instagram from '../img/social/instagram.png'
import twitter from '../img/social/twitter.png'
import linkedin from '../img/social/linkedin.png'

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
                  <Link className="navbar-item" to="/about">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/about">
                    Experiments
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/about">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/about">
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
                  <Link className="navbar-item" to="/blog">
                    Ventures
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/contact">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/contact">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/contact">
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
          <div className="c-footer__section -social">
              <a className="c-footer__social" title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ maxWidth: '1em', maxHeight: '1em' }}
                />
              </a>
              <a className="c-footer__social" title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ maxWidth: '1em', maxHeight: '1em' }}
                />
              </a>
              <a className="c-footer__social" title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ maxWidth: '1em', maxHeight: '1em' }}
                />
              </a>
              <a className="c-footer__social" title="linkedin" href="https://www.linkedin.com">
                <img
                  src={linkedin}
                  alt="Linkedin"
                  style={{ maxWidth: '1em', maxHeight: '1em' }}
                />
              </a>
            </div>
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
