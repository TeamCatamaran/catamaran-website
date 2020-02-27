import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/catamaran-logo.svg'
import menu from '../img/icon-menu.png'
import search from '../img/icon-search.png'

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }

    toggleMenu = () => {
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: '-active',
                    })
                    : this.setState({
                        navBarActiveClass: '',
                    })
            }
        )
    }

    render() {
        return (
            <nav
                className="c-navbar"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <Link to="/" className="c-navbar__logo" title="Logo">
                        <img src={logo} alt="Catamaran" style={{ width: '38px' }} />
                    </Link>
                    <div className="c-navbar__navigation">
                        <div
                            className={`c-navbar__search`}
                        >
                            <img src={search} alt="Search" style={{ width: '25px' }} />
                        </div>
                        <div
                            className={`c-navbar__burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleMenu()}
                        >
                            <img src={menu} alt="Menu" style={{ width: '25px' }} />
                        </div>
                    </div>
                    <div
                        id="navMenu"
                        className={`c-navbar__menu ${this.state.navBarActiveClass}`}
                    >
                        <div className="navbar-start has-text-centered">
                            <Link className="navbar-item" to="/about">
                                About
              </Link>
                            <Link className="navbar-item" to="/products">
                                Products
              </Link>
                            <Link className="navbar-item" to="/blog">
                                Blog
              </Link>
                            <Link className="navbar-item" to="/contact">
                                Contact
              </Link>
                            <Link className="navbar-item" to="/contact/examples">
                                Form Examples
              </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
