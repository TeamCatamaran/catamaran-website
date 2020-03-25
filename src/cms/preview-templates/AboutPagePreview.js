import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <div className="-editor">
                <AboutPageTemplate
                    heading={data.heading}
                    section={data.section}
                    intro={data.intro}
                    image={data.image}
                    mission={data.mission}
                    values={data.values}
                    team={data.team}
                    action={data.action}
                />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

AboutPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default AboutPagePreview
