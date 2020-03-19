import React from 'react'

import notFound1 from '../img/headers/404-layer-1.png'
import notFound2 from '../img/headers/404-layer-2.png'
import notFound3 from '../img/headers/404-layer-3.png'
import notFound4 from '../img/headers/404-layer-4.png'

import about1 from '../img/headers/about-layer-1.png'
import about2 from '../img/headers/about-layer-2.png'
import about3 from '../img/headers/about-layer-3.png'
import about4 from '../img/headers/about-layer-4.png'

import experiments1 from '../img/headers/experiments-layer-1.png'
import experiments2 from '../img/headers/experiments-layer-2.png'
import experiments3 from '../img/headers/experiments-layer-3.png'
import experiments4 from '../img/headers/experiments-layer-4.png'

import home1 from '../img/headers/home-layer-1.png'
import home2 from '../img/headers/home-layer-2.png'
import home3 from '../img/headers/home-layer-3.png'
import home4 from '../img/headers/home-layer-4.png'

import journal1 from '../img/headers/journal-layer-1.png'
import journal2 from '../img/headers/journal-layer-2.png'
import journal3 from '../img/headers/journal-layer-3.png'
import journal4 from '../img/headers/journal-layer-4.png'

import network1 from '../img/headers/network-layer-1.png'
import network2 from '../img/headers/network-layer-2.png'
import network3 from '../img/headers/network-layer-3.png'
import network4 from '../img/headers/network-layer-4.png'

import studio1 from '../img/headers/studio-layer-1.png'
import studio2 from '../img/headers/studio-layer-2.png'
import studio3 from '../img/headers/studio-layer-3.png'
import studio4 from '../img/headers/studio-layer-4.png'

import ventures1 from '../img/headers/ventures-layer-1.png'
import ventures2 from '../img/headers/ventures-layer-2.png'
import ventures3 from '../img/headers/ventures-layer-3.png'
import ventures4 from '../img/headers/ventures-layer-4.png'

const HeaderCollage = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.type === "none") {
            return (null);
        }

        if (this.props.type === "404") {
            return (
                <div className="c-header__background -notFound">
                    <img className="notFound-layer-four" src={notFound4} alt="Not Found Collage Layer 4" />
                    <img className="notFound-layer-three" src={notFound3} alt="Not Found Collage Layer 3" />
                    <img className="notFound-layer-two" src={notFound2} alt="Not Found Collage Layer 2" />
                    <img className="notFound-layer-one" src={notFound1} alt="Not Found Collage Layer 1" />
                </div>
            );
        }

        if (this.props.type === "about") {
            return (
                <div className="c-header__background -about">
                    <img className="about-layer-four" src={about4} alt="About Collage Layer 4" />
                    <img className="about-layer-three" src={about3} alt="About Collage Layer 3" />
                    <img className="about-layer-two" src={about2} alt="About Collage Layer 2" />
                    <img className="about-layer-one" src={about1} alt="About Collage Layer 1" />
                </div>
            );
        }

        if (this.props.type === "experiments") {
            return (
                <div className="c-header__background -experiments">
                    <img className="experiments-layer-four" src={experiments4} alt="Experiments Collage Layer 4" />
                    <img className="experiments-layer-three" src={experiments3} alt="Experiments Collage Layer 3" />
                    <img className="experiments-layer-two" src={experiments2} alt="Experiments Collage Layer 2" />
                    <img className="experiments-layer-one" src={experiments1} alt="Experiments Collage Layer 1" />
                </div>
            );
        }

        if (this.props.type === "journal") {
            return (
                <div className="c-header__background -journal">
                    <img className="journal-layer-four" src={journal4} alt="Journal Collage Layer 4" />
                    <img className="journal-layer-three" src={journal3} alt="Journal Collage Layer 3" />
                    <img className="journal-layer-two" src={journal2} alt="Journal Collage Layer 2" />
                    <img className="journal-layer-one" src={journal1} alt="Journal Collage Layer 1" />
                </div>
            );
        }

        if (this.props.type === "network") {
            return (
                <div className="c-header__background -network">
                    <img className="network-layer-four" src={network4} alt="Network Collage Layer 4" />
                    <img className="network-layer-three" src={network3} alt="Network Collage Layer 3" />
                    <img className="network-layer-two" src={network2} alt="Network Collage Layer 2" />
                    <img className="network-layer-one" src={network1} alt="Network Collage Layer 1" />
                </div>
            );
        }

        if (this.props.type === "studio") {
            return (
                <div className="c-header__background -studio">
                    <img className="studio-layer-four" src={studio4} alt="Studio Collage Layer 4" />
                    <img className="studio-layer-three" src={studio3} alt="Studio Collage Layer 3" />
                    <img className="studio-layer-two" src={studio2} alt="Studio Collage Layer 2" />
                    <img className="studio-layer-one" src={studio1} alt="Studio Collage Layer 1" />
                </div>
            );
        }

        if (this.props.type === "ventures") {
            return (
                <div className="c-header__background -ventures">
                    <img className="ventures-layer-four" src={ventures4} alt="Ventures Collage Layer 4" />
                    <img className="ventures-layer-three" src={ventures3} alt="Ventures Collage Layer 3" />
                    <img className="ventures-layer-two" src={ventures2} alt="Ventures Collage Layer 2" />
                    <img className="ventures-layer-one" src={ventures1} alt="Ventures Collage Layer 1" />
                </div>
            );
        }

        return (
            <div className="c-header__background -home">
                <img className="home-layer-four" src={home4} alt="Home Collage Layer 4" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" />
                <img className="home-layer-three" src={home3} alt="Home Collage Layer 3" data-aos="fade-right" data-aos-duration="1500" />
                <img className="home-layer-two" src={home2} alt="Home Collage Layer 2" data-aos="fade-down" data-aos-duration="1500" />
                <img className="home-layer-one" src={home1} alt="Home Collage Layer 1" data-aos="fade-left" data-aos-duration="1500" />
            </div>
        );
    }
}

export default HeaderCollage;
