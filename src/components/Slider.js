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

        const companies = [];
        let currentCompany = this.state.selectedIndex;
        for (let i = 0; i < totalItems; i++) {
            const company = this.props.items[currentCompany];
            company.isSelected = currentCompany === this.state.selectedIndex;
            companies.push(company);
            currentCompany++;
            if (currentCompany >= totalItems) {
                currentCompany = 0;
            }
        }
        companies.push(companies.shift());

        return (
            <div className="c-slider -quotes container">
                <div className="c-slider__companies">
                    <div className="c-slider__count">
                        <span className="c-slider__count__current">{(this.state.selectedIndex + 1).toString().padStart(2, '0')}</span> / {totalItems.toString().padStart(2, '0')}
                    </div>
                    <div className="c-slider__logos">
                    {
                        companies.map((c, key) => {
                            let className = "c-slider__logo";
                            if (c.isSelected) {
                                className += " -selected";
                            }
                            return (
                                <div 
                                    className={className}
                                    key={"logo-" + key}>
                                    <FluidImage
                                        alt={c.name}
                                        className="c-slider__logo__image"
                                        image={c.logo} />
                                </div>
                            );
                        })
                    }
                    </div>
                    <div className="c-slider__images">
                    {
                        companies.map((c, key) => {
                            let className = "c-slider__image";
                            if (c.isSelected) {
                                className += " -selected";
                            }
                            return (
                                <FluidImage
                                    alt={c.name}
                                    className={className}
                                    key={"image-" + key}
                                    image={c.image} />
                            );
                        })
                    }
                    </div>
                </div>
                <div className="c-slider__content">
                    <div className="c-slider__quotes">
                    {
                        companies.map((c, key) => {
                            let className = "c-slider__quote";
                            if (c.isSelected) {
                                className += " -selected";
                            }
                            return (
                                <div 
                                    className={className}
                                    key={"quote-" + key}>
                                        <h4 className="c-slider__quote__name">{c.name}</h4>
                                        <label className="c-slider__quote__title">{c.title}</label>
                                        <p className="c-slider__quote__body">{c.quote}</p>
                                </div>
                            );
                        })
                    }
                    </div>
                    <div className="c-slider__controls">
                        <button onClick={this.prevSlide.bind(this)} className="c-slider__controls__button -prev">&#60;</button>
                        <button onClick={this.nextSlide.bind(this)}className="c-slider__controls__button -next">&#62;</button>
                        <div className="c-slider__controls__zebra"></div>
                    </div>
                </div>
            </div>
        )
    }

    resetSelected() {
        this.setState({
            selectedIndex: 0
        });
    }

    prevSlide() {
        const total = this.props.items.length;
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

    nextSlide() {
        if (this.state.selectedIndex === 0) {
            this.setState({
                selectedIndex: this.props.items.length - 1,
            });
        } else {
            const next = this.state.selectedIndex - 1;
            this.setState({
                selectedIndex: next,
            });
        }
    }
}

export default Slider
