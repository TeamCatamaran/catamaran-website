import React from 'react'

const Header = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="c-header" style={{
                backgroundImage: `url(${
                    !!this.props.image.childImageSharp ? this.props.image.childImageSharp.fluid.src : this.props.image
                })`,
            }}>
                <div className="container">
                    <div className="c-header__text">
                        <h2>{this.props.section}</h2>
                        <h1>{this.props.heading}</h1>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
