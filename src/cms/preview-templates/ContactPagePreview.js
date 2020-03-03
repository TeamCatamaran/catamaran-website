import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <ContactPageTemplate
                section={data.section}
                heading={data.heading}
                intro={data.intro}
                type={data.type}
                coordinates={data.coordinates}
                harrisburg={data.harrisburg}
                harrisburgNumber={data.harrisburgNumber}
                denver={data.denver}
                denverNumber={data.denverNumber}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

ContactPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default ContactPagePreview
