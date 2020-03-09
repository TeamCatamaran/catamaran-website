import React from 'react'
import PropTypes from 'prop-types'
import { VenturesPostTemplate } from '../../templates/ventures-post'

const VenturesPostPreview = ({ entry, widgetFor }) => (
    <VenturesPostTemplate
        company={entry.getIn(['data', 'company'])}
        heading={entry.getIn(['data', 'heading'])}
        timeframe={entry.getIn(['data', 'timeframe'])}
        intro={entry.getIn(['data', 'intro'])}
        participants={entry.getIn(['data', 'participants'])}
        links={entry.getIn(['data', 'links'])}
    />
)

VenturesPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default VenturesPostPreview
