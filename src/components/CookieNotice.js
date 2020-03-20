import React from 'react'
import { Link } from 'gatsby'

import Logo from '../components/Logo'
import { localStorageUtils } from '../utilities/localStorage'

import iconClose from '../img/icon-close.png'

const CookieNotice = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            acceptGdpr: this._getPreferences().acceptGdpr,
        }

        console.log(this._getPreferences())

        this._getPreferences = this._getPreferences.bind(this)
        this._handleAcceptNoticeClick = this._handleAcceptNoticeClick.bind(this)
        this._handleRejectNoticeClick = this._handleRejectNoticeClick.bind(this)
    }

    render() {
        if (this.state.acceptGdpr) {
            return (null)
        }

        return (
            <div className="c-gdpr">
                <div className="c-gdpr__content">
                    <Logo fill="#ffffff" />
                    <div className="c-gdpr__content__text">
                        <p>
                            This website uses cookies to ensure you<br />get the best experience. <Link to="/privacy" title="Our Privacy Policy">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
                <div className="c-gdpr__actions">
                    <button className="c-gdpr__action__accept c-button -outline" onClick={this._handleAcceptNoticeClick}>
                        Accept
                    </button>
                    <button className="c-gdpr__action__reject" onClick={this._handleRejectNoticeClick}>
                        <img src={iconClose} alt="Close" />
                    </button>
                </div>
            </div>
        )
    }

    _getPreferences() {
        return localStorageUtils.getUserPreferences()
    }

    _handleAcceptNoticeClick(e) {
        e.preventDefault()

        localStorageUtils.saveUserPreferences({
            acceptGdpr: true,
        })

        this.setState({
            acceptGdpr: true
        })
    }

    _handleRejectNoticeClick(e) {
        e.preventDefault()

        window.history.back()
    }


}

export default CookieNotice
