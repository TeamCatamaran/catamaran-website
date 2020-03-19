import React from 'react'
import FluidImage from '../components/FluidImage'

import absorb from '../img/icon-absorb.png'
import concept from '../img/icon-concept.png'
import create from '../img/icon-create.png'
import learn from '../img/icon-learn.png'

const Breakdown = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.content == null) {
            return (null);
        }

        const icons = {
            absorb: absorb,
            concept: concept,
            create: create,
            learn: learn,
        };

        return (
            <div className="c-breakdown container">
                <div className="c-breakdown__title" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
                    <h3>{this.props.content.heading}</h3>
                    {
                        this.props.content.image != null &&
                        <FluidImage
                            className="c-breakdown__image"
                            image={this.props.content.image.src}
                            alt={this.props.content.image.alt || "Our Process Collage"} />
                    }
                </div>
                {
                    this.props.content.items != null &&
                    <div className="c-breakdown__wrapper">
                        <div className="container -collapse">
                            {this.props.content.items.map((item, key) => {
                                return (
                                    <div className="c-breakdown__item" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500" key={key}>
                                        <img src={icons[item.icon]} alt={`${item.icon} icon`} />
                                        <label className="">{item.title}</label>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Breakdown
