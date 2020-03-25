import React from 'react'
import PropTypes from 'prop-types'
import { JournalPageTemplate } from '../../templates/journal-page'

const JournalPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <JournalPageTemplate
                    section={data.section}
                    heading={data.heading}
                    journals={[]}
                    action={data.action}
                />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

JournalPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default JournalPagePreview
