import React from 'react'
import PropTypes from 'prop-types'
import { JournalPostTemplate } from '../../templates/journal-post'

const JournalPostPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <JournalPostTemplate
                    title={data.title}
                    category={data.category}
                    heading={data.heading}
                    subheading={data.subheading}
                    image={data.image}
                    intro={data.introduction}
                    content={widgetFor('body')}
                />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

JournalPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default JournalPostPreview
