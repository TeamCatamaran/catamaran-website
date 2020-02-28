import React from 'react'

const ActionCallout = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="c-action container -footer-overlay">
                    <div className="c-action__item">
                        <h2>{this.props.heading}<span>></span></h2>
                    </div>
                    {
                        this.props.pages != null &&
                        <div>
                            {action.pages.map((item, key) => (
                                <Link key={key} className="c-action__item -background" to={item.link} style={{
                                    backgroundImage: `url(${
                                        !!item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image
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
