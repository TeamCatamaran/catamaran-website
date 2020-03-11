import React from 'react'

import FluidImage from './FluidImage'

import spiral from '../img/spiral.png'
import absorb from '../img/studio-absorb.png'

const ProcessSlider = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0
        };
    }

    render() {
        if (this.props.content.steps == null || this.props.content.steps.length === 0) {
            return (null);
        }

        return (
            <div className="c-processSlider container">
                <div className="c-processSlider__fill container-overflow"></div>
                <div className="c-processSlider__header">
                    <h2 className="c-processSlider__header__title">{this.props.content.heading}</h2>
                    <p className="c-processSlider__header__intro">{this.props.content.intro}</p>
                </div>
                <div className="c-processSlider__content">
                    <div className="c-processSlider__image">
                        <img
                            className="c-processSlider__image__asset"
                            alt="geometric design"
                            src={absorb} />
                    </div>
                    <div className="c-processSlider__steps">
                        <div className="c-processSlider__count">
                            <span className="c-processSlider__count__current">{(this.state.selectedIndex + 1).toString().padStart(2, '0')}</span> / {this.props.content.steps.length.toString().padStart(2, '0')}
                        </div>
                        {
                            this.props.content.steps.map((s, key) => {
                                let className = "c-processSlider__step";
                                if (key === this.state.selectedIndex) {
                                    className += " -selected";
                                }
                                return (
                                    <div
                                        className={className}
                                        key={"quote-" + key}>
                                        <h3 className="c-processSlider__step__title">{s.heading}</h3>
                                        <p className="c-processSlider__step__description">{s.description}</p>
                                    </div>
                                );
                            })
                        }
                        <div className="c-processSlider__controls">
                            <button onClick={this.prevSlide.bind(this)} className="c-processSlider__controls__button -prev">&#60;</button>
                            <button onClick={this.nextSlide.bind(this)} className="c-processSlider__controls__button -next">&#62;</button>
                        </div>
                    </div>
                    <img
                        className="c-processSlider__spiral"
                        alt="geometric design"
                        src={spiral} />
                </div>
            </div>
        )
    }

    resetSelected() {
        this.setState({
            selectedIndex: 0
        });
    }

    nextSlide() {
        const total = this.props.content.steps.length;
        if (this.state.selectedIndex === total - 1) {
            this.setState({
                selectedIndex: 0,
            });
        } else {
            const next = this.state.selectedIndex + 1;
            this.setState({
                selectedIndex: next,
            });
        }

    }

    prevSlide() {
        if (this.state.selectedIndex === 0) {
            this.setState({
                selectedIndex: this.props.content.steps.length - 1,
            });
        } else {
            const next = this.state.selectedIndex - 1;
            this.setState({
                selectedIndex: next,
            });
        }
    }
}

export default ProcessSlider
