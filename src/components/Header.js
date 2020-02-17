import React from 'react'

const Header = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.image);
        return (
            <header className="c-header" style={{
                backgroundImage: `url(${
                    !!this.props.image.childImageSharp ? this.props.image.childImageSharp.fluid.src : this.props.image
                })`,
                backgroundPosition: `center right`,
            }}>
                <div className="container">
                    <h2>{this.props.section}</h2>
                    <h1>{this.props.heading}</h1>
                </div>
            </header>
        )
    }
}

export default Header
