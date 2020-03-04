import React from 'react'
import PropTypes from 'prop-types'
import { StudioPageTemplate } from '../../templates/studio-page'

const StudioPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <StudioPagePreview
                section={data.section}
                heading={data.heading}
                action={data.action}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

StudioPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default StudioPagePreview
