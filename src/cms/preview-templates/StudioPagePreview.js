import React from 'react'
import PropTypes from 'prop-types'
import { StudioPageTemplate } from '../../templates/studio-page'

const StudioPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <StudioPageTemplate
                    tab={data.tab}
                    section={data.section}
                    heading={data.heading}
                    overview={data.overview}
                    photos={data.photos}
                    how={data.how}
                    upstarts={data.upstarts}
                    criteria={data.criteria}
                    expect={data.expect}
                    testimonials={data.testimonials}
                    launch={data.launch}
                    action={data.action}
                />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

StudioPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default StudioPagePreview
