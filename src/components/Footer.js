import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/catamaran-logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer__row">
          <div className="c-footer__section">
            <section>
              <ul className="menu-list">
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
              <ul className="menu-list">
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
          <div className="c-footer__section">
            Who needs inbox zero?
          </div>
        </div>
        <div className="c-footer__row">
          <div className="c-footer__section">
            <img
              src={logo}
              alt="Kaldi"
              style={{ width: '14em', height: '10em' }}
            />
          </div>
          <div className="c-footer__section">
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="facebook" href="https://facebook.com">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title="linkedin" href="https://www.linkedin.com">
                <img
                  src={linkedin}
                  alt="Linkedin"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
            <div className="c-footer__section">
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
