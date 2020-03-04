import React from 'react'
import PropTypes from 'prop-types'
import { ExperimentsPageTemplate } from '../../templates/experiments-page'

const ExperimentsPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <ExperimentsPageTemplate
                section={data.section}
                heading={data.heading}
                action={data.action}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

ExperimentsPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default ExperimentsPagePreview
