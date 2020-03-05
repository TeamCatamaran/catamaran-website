import React from 'react'
import PropTypes from 'prop-types'
import { ExperimentsPageTemplate } from '../../templates/experiments-page'

const ExperimentsPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <ExperimentsPageTemplate
                tab={data.tab}
                section={data.section}
                heading={data.heading}
                overview={data.overview}
                expect={data.expect}
                examples={data.how}
                launch={data.launch}
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
