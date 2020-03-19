import React from 'react'

import HeaderCollage from './HeaderCollage'

const Header = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className={`c-header ${this.props.collageType === "none" ? "-collapse" : ""}`}>
                <HeaderCollage
                    type={this.props.collageType} />
                <div className="container">
                    <div className="c-header__text" data-aos="fade-up" data-aos-duration="1000" >
                        <label className="-large">{this.props.section}</label>
                        <h1>{this.props.heading}</h1>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
