import React from 'react'


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

        console.log(this.props.content.image);

        const icons = {
            absorb: absorb,
            concept: concept,
            create: create,
            learn: learn,
        };

        return (
            <div className="c-breakdown container">
                <div className="c-breakdown__title">
                    <h3>{this.props.content.heading}</h3>
                    <img className="c-breakdown__collage" src={this.props.content.image} alt="Our Process Collage" />
                </div>
                {
                    this.props.content.items != null &&
                    <div className="c-breakdown__wrapper">
                        <div className="container -collapse">
                            {this.props.content.items.map((item, key) => {
                                return (
                                    <div className="c-breakdown__item" key={key}>
                                        <img src={icons[item.icon]} alt={item.title} />
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
