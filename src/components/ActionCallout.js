import React from 'react'
import { Link } from 'gatsby'

const ActionCallout = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="c-action container -footer-overlay">
                    <div className="c-action__item">
                        <h2>{this.props.heading} <span>></span></h2>
                    </div>
                    {
                        this.props.pages != null &&
                        <div>
                            {this.props.pages.map((item, key) => (
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
                            ))}
                        </div>
                    }
                </div>
                <div className="c-action__footer"></div>
            </div>
        )
    }
}

export default ActionCallout
