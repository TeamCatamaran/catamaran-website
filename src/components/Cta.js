import React from 'react'
import FluidImage from '../components/FluidImage'
import { Link } from 'gatsby'

import ctaBG from '../img/cta-bg.png'

import asterick from '../img/asterick.png'
import tube from '../img/tube.png'
import halfdonut from '../img/halfdonut.png'
import wavylines from '../img/wavylines.png'
import triangle from '../img/triangle.png'
import dots from '../img/dots.png'

const Cta = ({
    content,
    variant,
}) => {

    if (content == null) {
        return (null);
    }

    return (
        <div className="c-cta" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
            <div className="c-cta__wrapper" style={{ backgroundImage: `url(${ctaBG})` }}>
                <div className="c-cta__content">
                    <p>{content.content}</p>
                </div>
                <div className="c-cta__link">
                    <Link to={content.link.url} rel={content.link.rel} className="c-cta__link__button">{content.text}</Link>
                </div>
            </div>
            <div className="c-cta__images">
                {
                    variant === "startup" &&
                    <React.Fragment>
                        <FluidImage
                            className="c-cta__asterick"
                            alt={"abstract geometric design element"}
                            image={asterick} />
                        <FluidImage
                            className="c-cta__tube"
                            alt={"abstract geometric design element"}
                            image={tube} />
                    </React.Fragment>
                }
                {
                    variant === "upstarts" &&
                    <React.Fragment>
                        <FluidImage
                            className="c-cta__halfdonut"
                            alt={"abstract geometric design element"}
                            image={halfdonut} />
                        <FluidImage
                            className="c-cta__wavylines"
                            alt={"abstract geometric design element"}
                            image={wavylines} />
                    </React.Fragment>
                }
                {
                    variant === "cofounder" &&
                    <React.Fragment>
                        <FluidImage
                            className="c-cta__triangle"
                            alt={"abstract geometric design element"}
                            image={triangle} />
                        <FluidImage
                            className="c-cta__dots"
                            alt={"abstract geometric design element"}
                            image={dots} />
                    </React.Fragment>
                }
            </div>
        </div>
    )
}

export default Cta
