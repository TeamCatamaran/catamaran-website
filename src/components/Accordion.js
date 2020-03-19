import React from 'react'

import upArrow from '../img/arrow-up.png'
import downArrow from '../img/arrow-down.png'

const Accordion = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: null
        };
    }

    render() {
        if (this.props.items == null || this.props.items.length === 0) {
            return (null);
        }

        return (
            <div className="c-accordion container" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                <ul className="c-accordion__list">
                {
                    this.props.items.map((i, key) => {
                        let className = "c-accordion__item";
                        let button = downArrow;
                        if (key === this.state.selectedIndex) {
                            className += " -active";
                            button = upArrow;
                        }
                        return (
                            <li className={className}>
                                <button className="c-accordion__item__header" onClick={this.open.bind(this, key)}>
                                    <h3 className="c-accordion__item__title" key={"item-" + key}>{i.heading}</h3>
                                    <div className="c-accordion__item__button">
                                        <img src={button} alt="arrow toggle button" />
                                    </div>
                                </button>
                                <p className="c-accordion__item__body">{ i.body }</p>
                            </li>
                        );
                    })
                }
            </ul>
            </div>
        )
    }

    close() {
        this.setState({
            selectedIndex: null,
        });

    }

    open(index) {
        if (index === this.state.selectedIndex) {
            this.setState({
                selectedIndex: null,
            });
        } else {
            this.setState({
                selectedIndex: index,
            });
        }
    }
}

export default Accordion
