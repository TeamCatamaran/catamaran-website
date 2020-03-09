import React from 'react'

import facebook from '../img/social/facebook.png'
import instagram from '../img/social/instagram.png'
import linkedin from '../img/social/linkedin.png'
import twitter from '../img/social/twitter.png'


const SocialIcons = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let cssClass = "c-social";

        if (this.props.className != null && this.props.className.length > 0) {
            cssClass += ` ${this.props.className}`;
        }

        return (
            <div className={cssClass}>
                <a className="c-social__link" title="twitter" rel="noopener noreferrer" href="https://twitter.com" target="_blank">
                    <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
                <a className="c-social__link" title="facebook" rel="noopener noreferrer" href="https://facebook.com" target="_blank">
                    <img
                        src={facebook}
                        alt="Facebook"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
                <a className="c-social__link" title="instagram" rel="noopener noreferrer" href="https://instagram.com" target="_blank">
                    <img
                        src={instagram}
                        alt="Instagram"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
                <a className="c-social__link" title="linkedin" rel="noopener noreferrer" href="https://www.linkedin.com" target="_blank">
                    <img
                        src={linkedin}
                        alt="Linkedin"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
            </div>
        )
    }
}

export default SocialIcons
