import React from 'react'
import { Link } from 'gatsby'
import Logo from '../components/Logo'
import { gsap, Power3, Power4 } from 'gsap';


const Navbar = class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const navClass = this.props.className || ''
        const isDark = navClass.indexOf('dark') > -1

        return (
            <nav
                className={`c-navbar ${navClass}`}
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <Link to="/" className="c-navbar__logo" title="Logo">
                        <Logo fill={isDark ? "#ffffff" : "#3e3d3f"} weight="heavy" />
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Navbar
