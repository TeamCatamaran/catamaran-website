import React from 'react'
import PropTypes from 'prop-types'
import { FAQPageTemplate } from '../../templates/faq-page'

const FAQPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <FAQPageTemplate
                    section={data.section}
                    heading={data.heading}
                    faqs={data.faqs}
                />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

FAQPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default FAQPagePreview
