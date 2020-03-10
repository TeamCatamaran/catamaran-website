import React from 'react'

const TypeformContact = class extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const script = document.getElementById('typeformScript');
        if (script != null) {
            window.eval(script.innerHTML);
        }
    }

    render() {
        return (
            <div className="c-contact__chat">
                <p className="c-contact__heading">{this.props.heading}</p>
                <div dangerouslySetInnerHTML={this._createScript(this.props.embed)} />
                {this.props.types.map((t, key) => {
                    return (
                        <div className="c-contact__chat__formHeading" key={`chatkey-${key}`}>
                            <a
                                className="typeform-share button"
                                data-mode="drawer_right"
                                target="_blank"
                                href={`https://catamaran.typeform.com/to/${t.id}`}>
                                {t.name}
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }

    _createScript(embed) {
        return {
            __html: `<script id="typeformScript">${embed}</script>`
        }
    }
}

export default TypeformContact
