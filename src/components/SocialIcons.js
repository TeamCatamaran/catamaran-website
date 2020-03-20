import React from 'react'
import facebookDark from '../img/social/facebook-dark.png'
import facebook from '../img/social/facebook.png'
import instagramDark from '../img/social/insta-dark.png'
import instagram from '../img/social/instagram.png'
import linkedin from '../img/social/linkedin.png'
import linkedinDark from '../img/social/linkedin-dark.png'
import twitter from '../img/social/twitter.png'
import twitterDark from '../img/social/twitter-dark.png'
import dribbble from '../img/social/dribbble.png'
import dribbbleDark from '../img/social/dribbble-dark.png'

const SocialIcons = ({
    className,
    isDark,
}) => {
    let cssClass = "c-social";

    if (className != null && className.length > 0) {
        cssClass += ` ${className}`;
    }
    let dribbbleIcon = dribbble
    let twitterIcon = twitter;
    let facebookIcon = facebook;
    let instagramIcon = instagram;
    let linkedinIcon = linkedin;

    if (isDark) {
        dribbbleIcon = dribbbleDark;
        twitterIcon = twitterDark;
        facebookIcon = facebookDark;
        instagramIcon = instagramDark;
        linkedinIcon = linkedinDark;
    }

    return (
        <div className={cssClass}>
            <a className="c-social__link" title="dribbble" rel="noopener noreferrer" href="https://dribbble.com/" target="_blank">
                <img
                    src={dribbbleIcon}
                    alt="Dribbble"
                />
            </a>
            <a className="c-social__link" title="twitter" rel="noopener noreferrer" href="https://twitter.com" target="_blank">
                <img
                    src={twitterIcon}
                    alt="Twitter"
                />
            </a>
            <a className="c-social__link" title="facebook" rel="noopener noreferrer" href="https://facebook.com" target="_blank">
                <img
                    src={facebookIcon}
                    alt="Facebook"
                />
            </a>
            <a className="c-social__link" title="instagram" rel="noopener noreferrer" href="https://instagram.com" target="_blank">
                <img
                    src={instagramIcon}
                    alt="Instagram"
                />
            </a>
            <a className="c-social__link" title="linkedin" rel="noopener noreferrer" href="https://www.linkedin.com" target="_blank">
                <img
                    src={linkedinIcon}
                    alt="Linkedin"
                />
            </a>
        </div>
    )
}

export default SocialIcons
