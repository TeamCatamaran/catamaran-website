import React from 'react'

import HeaderCollage from './HeaderCollage'

const Header = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="c-header">
                <HeaderCollage
                    type={this.props.collageType} />
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
