import React from 'react'
import FluidImage from '../components/FluidImage'
import { Link } from 'gatsby'

import ctaBG from '../img/cta-bg.png'

const Cta = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.content == null) {
            return (null);
        }

        console.log("Variant: ");
        console.log(this.props.variant);

        return (
            <div className="c-cta">
                <div className="c-cta__wrapper" style={{backgroundImage: `url(${ctaBG})`}}>
                    <div className="c-cta__content">
                        <p>{this.props.content.content}</p>
                    </div>
                    <div className="c-cta__link">
                        <Link to={this.props.content.link} className="c-cta__link__button">{this.props.content.text}</Link>
                    </div>
                </div>
                <div className="c-cta__images">
                {
                    this.props.variant === "startup" &&
                    <React.Fragment>
                        <FluidImage
                            className="c-cta__asterick"
                            alt={"abstract geometric design element"}
                            image={"/img/asterick.png"} />
                        <FluidImage
                            className="c-cta__tube"
                            alt={"abstract geometric design element"}
                            image={"/img/tube.png"} />
                    </React.Fragment>
                }
                {
                    this.props.variant === "upstarts" &&
                    <React.Fragment>
                        <FluidImage
                            className="c-cta__halfdonut"
                            alt={"abstract geometric design element"}
                            image={"/img/halfdonut.png"} />
                        <FluidImage
                            className="c-cta__wavylines"
                            alt={"abstract geometric design element"}
                            image={"/img/wavylines.png"} />
                    </React.Fragment>
                }
                {
                    this.props.variant === "cofounder" &&
                    <React.Fragment>
                        <FluidImage
                            className="c-cta__triangle"
                            alt={"abstract geometric design element"}
                            image={"/img/triangle.png"} />
                        <FluidImage
                            className="c-cta__dots"
                            alt={"abstract geometric design element"}
                            image={"/img/dots.png"} />
                    </React.Fragment>

                }
                </div>
            </div>
        )
    }
}

export default Cta
