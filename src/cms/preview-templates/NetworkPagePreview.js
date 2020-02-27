import React from 'react'
import PropTypes from 'prop-types'
import { NetworkPageTemplate } from '../../templates/network-page'

const NetworkPagePreview = ({ entry, widgetFor }) => (
  <NetworkPageTemplate
    heading={data.heading}
    section={data.section}
    intro={data.intro}
    partners={data.partners || []}
  />
)

NetworkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NetworkPagePreview
