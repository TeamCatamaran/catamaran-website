import React from 'react'
import PropTypes from 'prop-types'
import { StudioCofounderPageTemplate } from '../../templates/studio-cofounder-page'

const StudioCofounderPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <StudioCofounderPageTemplate
                section={data.section}
                heading={data.heading}
                action={data.action}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

StudioCofounderPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default StudioCofounderPagePreview
