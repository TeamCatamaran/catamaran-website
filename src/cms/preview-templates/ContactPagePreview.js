import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <ContactPageTemplate
                    section={data.section}
                    heading={data.heading}
                    intro={data.intro}
                    type={data.type}
                    embed={data.embed}
                    social={data.social}
                    map={data.map}
                    locations={data.locations}
                />
            </div>
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
