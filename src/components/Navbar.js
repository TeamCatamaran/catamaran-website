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
        const DOM = {
            el: document.querySelector('.c-multibox'),
        };
        // DOM.openCtrl = DOM.el.querySelector('.action--menu');
        DOM.closeCtrl = DOM.el.querySelector('.action--close');
        DOM.items = Array.from(DOM.el.querySelectorAll('.c-multibox__item'));
        DOM.mainLinks = DOM.el.querySelectorAll('.c-multibox__item.-primary > a.c-navbar__menu__item');
        DOM.sidemenuLinks = DOM.el.querySelectorAll('.c-multibox__item.-secondary > a.c-navbar__menu__item');
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
                        <Logo fill={isDark ? "#ffffff" : "#3e3d3f"} />
                    </Link>
                    <div className="c-navbar__navigation">
                        {/* <button
                            className={`c-navbar__search`}
                        >
                            <img src={search} alt="Search" style={{ width: '25px' }} />
                        </button> */}
                        <button
                            className={`c-navbar__burger action--menu ${navbarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleMenu('open')}>
                            <img src={menu} alt="Menu" style={{ width: '25px' }} />
                        </button>
                    </div>
                    <div
                        id="navMenu"
                        className={`c-navbar__menu c-multibox ${navbarActiveClass}`}>
                        <div className="c-navbar__menu__section -primary c-multibox__item" data-menu="item1" data-direction="bt">
                            <div className="c-multibox__inner">
                                <Link className="c-navbar__menu__item -logo" to="/">
                                    <Logo fill="white" />
                                </Link>
                                <Link className="c-navbar__menu__item" to="/about">
                                    <span className="-index">01</span>
                                    <span className="-underline">About</span>
                                </Link>
                                <Link className="c-navbar__menu__item" to="/studio/startup">
                                    <span className="-index">02</span>
                                    <span className="-underline">Studio</span>
                                </Link>
                                <Link className="c-navbar__menu__item" to="/experiments/lab">
                                    <span className="-index">03</span>
                                    <span className="-underline">Experiments</span>
                                </Link>
                                <Link className="c-navbar__menu__item" to="/ventures">
                                    <span className="-index">04</span>
                                    <span className="-underline">Ventures</span>
                                </Link>
                                <Link className="c-navbar__menu__item" to="/blog">
                                    <span className="-index">05</span>
                                    <span className="-underline">Journal</span>
                                </Link>
                            </div>
                        </div>
                        <div className="c-multibox__item" data-direction="lr" data-menu="item4">
                            <div className="c-multibox__inner">
                                <div className="c-multibox__inner__image" style={{
                                    backgroundImage: `url(${waterworks})`,
                                }}>
                                    <div className="c-navbar__menu__coordinates c-multibox__inner__content">
                                        <p>
                                            39.<br />738449&deg; N<br />
                                            -76.<br />889830&deg; W
                                        </p>
                                        <p>
                                            40.<br />263570&deg; N<br />
                                            -104.<br />984848&deg; W
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="c-navbar__menu__section -secondary c-multibox__item" data-menu="item2" data-direction="bt">
                            <div className="c-multibox__inner">
                                <Link className="c-navbar__menu__item" to="/network">
                                    <span className="-underline">Network</span>
                                </Link>
                                <span className="-divider">-</span>
                                <Link className="c-navbar__menu__item" to="/faqs">
                                    <span className="-underline">FAQs</span>
                                </Link>
                                <span className="-divider">-</span>
                                <Link className="c-navbar__menu__item" to="/jobs">
                                    <span className="-underline">Jobs</span>
                                </Link>
                                <span className="-divider">-</span>
                                <Link className="c-navbar__menu__item" to="/contact">
                                    <span className="-underline">Contact</span>
                                </Link>
                            </div>
                        </div>
                        <div className="c-multibox__item" data-menu="item3" data-direction="rl">
                            <div className="c-multibox__inner">
                                <Link className="c-navbar__menu__item -fill" to="/contact">
                                    <p>Shoot us a message so we can connect</p>
                                    <img src={arrowDark} alt="Connect With Us" />
                                </Link>
                            </div>
                        </div>
                        <div className="c-multibox__item" data-direction="tb" data-menu="item5">
                            <div className="c-multibox__inner">
                                <div className="c-multibox__inner__image" style={{
                                    backgroundImage: `url(${defaultImg})`,
                                }}></div>
                            </div>
                        </div>
                        <button
                            className={`c-navbar__menu__close action--close ${navbarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleMenu('close')}>
                            <img
                                src={close}
                                alt="Close Menu action--close"
                                style={{ width: '25px' }} />
                        </button>
                    </div>
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
                // gsap.to(this.state.DOM.openCtrl, {
                //     duration: this.state.isActive ? 0.6 : 0.3,
                //     delay: this.state.isActive ? 0 : 0.3,
                //     ease: this.state.isActive ? Power4.easeOut : Power1.easeOut,
                //     opacity: this.state.isActive ? 0 : 1
                // });

                // Main links animation.
                gsap.to(this.state.DOM.mainLinks, {
                    duration: this.state.isActive ? 0.9 : 0.2,
                    ease: this.state.isActive ? Power4.easeOut : Power3.easeInOut,
                    startAt: this.state.isActive ? { y: '50%', opacity: 0 } : null,
                    y: this.state.isActive ? '0%' : '50%',
                    opacity: this.state.isActive ? 1 : 0
                }, this.state.isActive ? 0.1 : -0.1);

                // Sidemenu links animation.
                gsap.to(this.state.DOM.sidemenuLinks, {
                    duration: this.state.isActive ? 0.5 : 0.2,
                    ease: this.state.isActive ? Power4.easeInOut : Power3.easeInOut,
                    startAt: this.state.isActive ? { y: '100%' } : null,
                    y: this.state.isActive ? '0%' : '100%'
                }, this.state.isActive ? 0.05 : -0.05);

                // The "Learn how to participate" menu link.
                // gsap.to(this.state.DOM.menulink, {
                //     duration: this.state.isActive ? 0.9 : 0.6,
                //     ease: this.state.isActive ? Power4.easeOut : Power3.easeInOut,
                //     startAt: this.state.isActive ? { x: '10%' } : null,
                //     x: this.state.isActive ? '0%' : '10%'
                // });
            }
        )
    }
}

export default Navbar
