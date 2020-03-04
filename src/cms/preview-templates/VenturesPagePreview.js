import React from 'react'
import PropTypes from 'prop-types'
import { VenturesPageTemplate } from '../../templates/ventures-page'

const VenturesPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <VenturesPageTemplate
                section={data.section}
                heading={data.heading}
                action={data.action}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

VenturesPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default VenturesPagePreview
