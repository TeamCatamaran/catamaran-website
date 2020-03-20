import React from 'react'

import HeaderCollage from './HeaderCollage'

const Header = ({
    collageType,
    heading,
    section,
}) => {
    return (
        <header className={`c-header ${collageType === "none" ? "-collapse" : ""}`}>
            <HeaderCollage
                type={collageType} />
            <div className="container">
                <div className="c-header__text" data-aos={collageType === "404" ? "" : "fade-up"} data-aos-duration="1500" >
                    <label className="-large">{section}</label>
                    <h1>{heading}</h1>
                </div>
            </div>
        </header>
    )
}

export default Header
