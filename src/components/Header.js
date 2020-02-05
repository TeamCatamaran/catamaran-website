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
            backgroundPosition: `center right`,
        }}>
            <div className="container">
                <h2 style={{ color: this.props.titleColor }}>{this.props.pageName}</h2>
                <h1>{this.props.pageTitle}</h1>
            </div>
        </header>
        )
    }
}

export default Header
