import React from 'react'
import { Link } from 'gatsby'
import Logo from '../components/Logo'
import defaultImg from '../img/default.jpg'
import close from '../img/icon-close.png'
import menuDark from '../img/icon-menu.png'
import menuLight from '../img/icon-menu-light.png'
import searchDark from '../img/icon-search.png'
import searchLight from '../img/icon-search-light.png'
import waterworks from '../img/waterworks.jpg'
import arrowDark from '../img/icon-arrow-dark.png'
import { gsap, Power1, Power3, Power4 } from 'gsap';


const Navbar = class extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            DOM: null,
            isActive: false,
            isAnimating: false,
            totalItems: null,
        }
    }

    componentDidMount() {
        return;
        const DOM = {
            el: document.querySelector('.c-multibox'),
        };
        DOM.closeCtrl = DOM.el.querySelector('.action--close');
        DOM.items = Array.from(DOM.el.querySelectorAll('.c-multibox__item'));
        DOM.menulink = DOM.el.querySelector('.menu__item-link');

        this.setState({
            DOM: DOM,
            totalItems: DOM.items.length,
        })
    }

    render() {
        const navbarActiveClass = this.state.isActive ? '-active' : ''
        const navClass = this.props.className || ''
        const isDark = navClass.indexOf('dark') > -1
        const menu = isDark ? menuLight : menuDark
        const search = isDark ? searchLight : searchDark

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

    animationEnd = (pos) => {
        if (pos === this.state.totalItems - 1) {
            this.setState({
                isAnimating: false,
            });
        }
    }

    toggleMenu = (action) => {
        if (this.state.isAnimating) {
            return;
        }

        // toggle the active boolean in the state
        this.setState(
            {
                isActive: action === 'open',
                isAnimating: true,
            },
            // after state has been updated,
            () => {
                // set the class on body for page overflow
                document.body.style.overflow = this.state.isActive ? 'hidden' : '';

                // Going through each menu´s item.
                this.state.DOM.items.forEach((el, pos) => {
                    // The inner wrapper.
                    const innerEl = el.querySelector('.c-multibox__inner');
                    // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
                    const config = {};
                    const configInner = {};
                    // Direction defined in the HTML data-direction.
                    // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
                    const direction = el.dataset.direction;
                    // Using 101% instead of 100% to avoid rendering problems.
                    // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
                    if (direction === 'bt') {
                        config.y = '101%';
                        configInner.y = '-101%';
                        configInner.x = '0%';
                    }
                    else if (direction === 'tb') {
                        config.y = '-101%';
                        configInner.y = '101%';
                        configInner.x = '0%';
                    }
                    else if (direction === 'lr') {
                        config.x = '-101%';
                        configInner.x = '101%';
                    }
                    else if (direction === 'rl') {
                        config.x = '101%';
                        configInner.x = '-101%';
                    }
                    else {
                        config.x = '101%';
                        config.y = '101%';
                        configInner.x = '-101%';
                        configInner.y = '-101%';
                    }

                    if (this.state.isActive) {
                        // Setting the initial values.
                        gsap.set(el, config);
                        gsap.set(innerEl, configInner);

                        // Animate.
                        gsap.to([el, innerEl], {
                            duration: 0.9,
                            ease: Power4.easeOut,
                            x: '0%',
                            y: '0%',
                            onComplete: () => this.animationEnd(pos)
                        });
                    }
                    else {
                        gsap.to(el, {
                            duration: 0.6,
                            ease: Power3.easeInOut,
                            x: config.x || 0,
                            y: config.y || 0
                        });
                        gsap.to(innerEl, {
                            duration: 0.6,
                            ease: Power3.easeInOut,
                            x: configInner.x || 0,
                            y: configInner.y || 0,
                            onComplete: () => this.animationEnd(pos)
                        });
                    }
                });

                // Show/Hide open and close ctrls.
                gsap.to(this.state.DOM.closeCtrl, {
                    duration: 0.6,
                    ease: this.state.isActive ? Power4.easeOut : Power3.easeInOut,
                    startAt: this.state.isActive ? { rotation: 0 } : null,
                    opacity: this.state.isActive ? 1 : 0,
                    rotation: this.state.isActive ? 180 : 270
                });
            }
        )
    }
}

export default Navbar
