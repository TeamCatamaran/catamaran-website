import React from 'react'
import PropTypes from 'prop-types'
import { VenturesPostTemplate } from '../../templates/ventures-post'

const VenturesPostPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <VenturesPostTemplate
                company={data.company}
                heading={data.heading}
                timeframe={data.timeframe}
                logo={data.logo}
                video={data.video}
                intro={data.intro}
                participants={data.participants}
                links={data.links}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

VenturesPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default VenturesPostPreview
