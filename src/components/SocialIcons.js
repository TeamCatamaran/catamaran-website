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

        let twitterIcon = twitter;
        let facebookIcon = facebook;
        let instagramIcon = instagram;
        let linkedinIcon = linkedin;

        if (this.props.style === "dark") {
            // twitterIcon = twitterDark;
            // facebookIcon = facebookDark;
            // instagramIcon = instagramDark;
            // linkedinIcon = linkedinDark;
        }

        return (
            <div className={cssClass}>
                <a className="c-social__link" title="twitter" rel="noopener noreferrer" href="https://twitter.com" target="_blank">
                    <img
                        className="fas fa-lg"
                        src={twitterIcon}
                        alt="Twitter"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
                <a className="c-social__link" title="facebook" rel="noopener noreferrer" href="https://facebook.com" target="_blank">
                    <img
                        src={facebookIcon}
                        alt="Facebook"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
                <a className="c-social__link" title="instagram" rel="noopener noreferrer" href="https://instagram.com" target="_blank">
                    <img
                        src={instagramIcon}
                        alt="Instagram"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
                <a className="c-social__link" title="linkedin" rel="noopener noreferrer" href="https://www.linkedin.com" target="_blank">
                    <img
                        src={linkedinIcon}
                        alt="Linkedin"
                        style={{ maxWidth: '1em', maxHeight: '1em' }}
                    />
                </a>
            </div>
        )
    }
}

export default SocialIcons
