import React from 'react'
import PropTypes from 'prop-types'
import { JournalPostTemplate } from '../../templates/journal-post'

const JournalPostPreview = ({ entry, widgetFor }) => (
    <JournalPostTemplate
        title={entry.getIn(['data', 'title'])}
        category={entry.getIn(['data', 'category'])}
        heading={entry.getIn(['data', 'heading'])}
        subheading={entry.getIn(['data', 'subheading'])}
        introduction={entry.getIn(['data', 'introduction'])}
        description={entry.getIn(['data', 'description'])}
        content={widgetFor('body')}
    />
)

JournalPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default JournalPostPreview
