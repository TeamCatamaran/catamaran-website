import React from 'react'

const FluidImage = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!!this.props.image.childImageSharp) {
            return (
                <img src={this.props.image.childImageSharp.fluid.src} alt={this.props.alt} />
            );
        }

        return (
            <img src={this.props.image} alt={this.props.alt} />
        );
    }
}

export default FluidImage
