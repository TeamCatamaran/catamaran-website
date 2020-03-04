import React from 'react'
import PropTypes from 'prop-types'
import { StudioStartupPageTemplate } from '../../templates/studio-startup-page'

const StudioStartupPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <StudioStartupPageTemplate
                section={data.section}
                heading={data.heading}
                action={data.action}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

StudioStartupPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default StudioStartupPagePreview
