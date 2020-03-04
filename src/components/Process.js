import React from 'react'

import processCollage from '../img/process-collage.png'

import absorb from '../img/icon-absorb.png'
import concept from '../img/icon-concept.png'
import create from '../img/icon-create.png'
import learn from '../img/icon-learn.png'

const Process = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.process == null) {
            return (null);
        }

        const icons = {
            absorb: absorb,
            concept: concept,
            create: create,
            learn: learn,
        };

        return (
            <div className="c-process container">
                <div className="c-process__title">
                    <h3>{this.props.process.heading}</h3>
                    <img className="c-process__collage" src={processCollage} alt="Our Process Collage" />
                </div>
                {
                    this.props.process.steps != null &&
                    <div className="c-process__wrapper">
                        <div className="container -collapse">
                            {this.props.process.steps.map((s, key) => {
                                return (
                                    <div className="c-process__item" key={key}>
                                        <img src={icons[s.icon]} alt={s.title} />
                                        <label className="">{s.title}</label>
                                        <p>{s.description}</p>
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

export default Process
