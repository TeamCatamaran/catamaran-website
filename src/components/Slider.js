import React from 'react'

import FluidImage from '../components/FluidImage'

const Slider = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0
        };
    }

    render() {
        if (this.props.items == null || this.props.items.length === 0) {
            return (null);
        }

        const totalItems = this.props.items.length;

        const logos = [];
        let currentLogo = this.state.selectedIndex;
        for (let i = 0; i < totalItems; i++) {
            const logo = this.props.items[currentLogo];
            logo.isSelected = currentLogo === this.state.selectedIndex;
            logos.push(logo);
            currentLogo++;
            if (currentLogo >= totalItems) {
                currentLogo = 0;
            }
        }
        logos.push(logos.shift());

        return (
            <div className="c-slider -quotes container">
                <div className="c-slider__count">
                    <span>{(this.state.selectedIndex + 1).toString().padStart(2, '0')}</span> / {totalItems.toString().padStart(2, '0')}
                </div>
                <div className="c-slider__section -logos">
                    <div className="container -collapse">
                        {logos.map((l, key) => {
                            let backgroundImage = null;
                            if (l.isSelected) {
                                backgroundImage = {
                                    backgroundImage: `url(${
                                        l.image != null && !!l.image.childImageSharp ? l.image.childImageSharp.fluid.src : l.image
                                        })`,
                                }
                            }
                            return (
                                <div className="c-slider__logo" key={key} style={backgroundImage}>
                                    <FluidImage
                                        alt={l.name}
                                        className="c-slider__logo__item"
                                        image={l.logo} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="c-slider__section -quote">
                    {this.props.items.map((s, key) => {
                        return (
                            <div className="c-slider__item" key={key}>
                                {s.name}
                                {s.title}
                                {s.quote}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    resetSelected() {
        this.setState({
            selectedIndex: 0
        });
    }
}

export default Slider
