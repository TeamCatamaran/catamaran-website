import React from 'react'

import FluidImage from '../components/FluidImage'

const Slider = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.items == null || this.props.items.length === 0) {
            return (null);
        }

        const totalItems = this.props.items.length;

        return (
            <div className="c-slider -quotes container">
                {this.props.items.map((s, key) => {
                    return (
                        <div className="c-slider__item" key={key}>
                            <div className="c-slider__count">
                                <span>{(key + 1).toString().padStart(2, '0')}</span> / {totalItems.toString().padStart(2, '0')}
                            </div>
                            {s.name}
                            {s.title}
                            {s.quote}
                            {/* {s.logo} */}
                            <FluidImage
                                alt={s.name}
                                image={s.image} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Slider
