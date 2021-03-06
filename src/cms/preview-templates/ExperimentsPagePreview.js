import React from 'react'
import PropTypes from 'prop-types'
import { ExperimentsPageTemplate } from '../../templates/experiments-page'

const ExperimentsPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <ExperimentsPageTemplate
                    tab={data.tab}
                    section={data.section}
                    heading={data.heading}
                    overview={data.overview}
                    process={data.process}
                    examples={data.examples}
                    launch={data.launch}
                    action={data.action}
                />
            </div>
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
