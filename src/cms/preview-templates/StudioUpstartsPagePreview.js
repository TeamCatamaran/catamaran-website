import React from 'react'
import PropTypes from 'prop-types'
import { StudioUpstartsPageTemplate } from '../../templates/studio-upstarts-page'

const StudioUpstartsPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <StudioUpstartsPageTemplate
                section={data.section}
                heading={data.heading}
                action={data.action}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

StudioUpstartsPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default StudioUpstartsPagePreview
