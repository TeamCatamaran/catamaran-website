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
                social={data.social}
                map={data.map}
                locations={data.locations}
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
