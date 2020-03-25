import React from 'react'
import PropTypes from 'prop-types'
import { NetworkPageTemplate } from '../../templates/network-page'

const NetworkPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <NetworkPageTemplate
                    heading={data.heading}
                    section={data.section}
                    intro={data.intro}
                    partners={data.partners || []}
                />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

NetworkPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default NetworkPagePreview
