import React from 'react'
import PropTypes from 'prop-types'
import { PrivacyPageTemplate } from '../../templates/privacy-page'

const PrivacyPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <PrivacyPageTemplate
                section={data.section}
                heading={data.heading}
                intro={data.intro}
                content={widgetFor('body')}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

PrivacyPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default PrivacyPagePreview
