import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const IntroSectionsGrid = ({ gridItems }) => (
  <div className="c-intro container">
    <div className="c-intro__heading">
      <h2>{ gridItems.heading }</h2>
    </div>
    {
      gridItems.sections != null &&
        <div>
          {gridItems.sections.map((item, key) => (
            <section key={key} className="c-intro__item">
              {/* <PreviewCompatibleImage imageInfo={item} /> */}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </section>
          ))}
        </div>
    }

  </div>
)

IntroSectionsGrid.propTypes = {
  gridItems: PropTypes.shape({
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    )
  }),
  heading: PropTypes.string,
}

export default IntroSectionsGrid
