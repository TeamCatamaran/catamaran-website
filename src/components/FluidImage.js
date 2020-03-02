import React from 'react'

const FluidImage = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const className = this.props.className != null ? this.props.className : "";

        if (this.props.image != null && !!this.props.image.childImageSharp) {
            return (
                <img className={className} src={this.props.image.childImageSharp.fluid.src} alt={this.props.alt} />
            );
        }

        return (
            <img className={className} src={this.props.image} alt={this.props.alt} />
        );
    }
}

export default FluidImage
