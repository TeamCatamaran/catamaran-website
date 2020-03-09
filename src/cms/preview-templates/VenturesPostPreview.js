import React from 'react'
import PropTypes from 'prop-types'
import { VenturesPostTemplate } from '../../templates/ventures-post'

const VenturesPostPreview = ({ entry, widgetFor }) => (
    <VenturesPostTemplate
        company={entry.getIn(['data', 'company'])}
        heading={entry.getIn(['data', 'heading'])}
        timeframe={entry.getIn(['data', 'timeframe'])}
        logo={entry.getIn(['data', 'logo']).toJS()}
        video={entry.getIn(['data', 'video'])}
        intro={entry.getIn(['data', 'intro'])}
        participants={entry.getIn(['data', 'participants']).toJS()}
        links={entry.getIn(['data', 'links']).toJS()}
    />
)

VenturesPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default VenturesPostPreview
