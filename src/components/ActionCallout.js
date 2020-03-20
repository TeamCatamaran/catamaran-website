import React from 'react'
import { Link } from 'gatsby'

const ActionCallout = ({
    heading,
    pages,
}) => {
    return (
        <div>
            <div className="c-action container -footer-overlay">
                <div className="c-action__heading">
                    <h2>{heading} <span>></span></h2>
                </div>
                {
                    pages != null &&
                    <div>
                        {pages.map((item, key) => {
                            if (item.link == null) {
                                return (null);
                            }
                            return (
                                <Link key={key} className="c-action__item -background" to={item.link.url} rel={item.link.rel} style={{
                                    backgroundImage: `url(${
                                        !!item.image.src.childImageSharp ? item.image.src.childImageSharp.fluid.src : item.image.src
                                        })`,
                                }}>
                                    <div className="c-action__item__content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                }
            </div>
            <div className="c-action__footer"></div>
        </div>
    )
}

export default ActionCallout
