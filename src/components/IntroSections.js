import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const IntroSectionsGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {
      gridItems.sections != null &&
        <div>
          {gridItems.sections.map((item, key) => (
            <div key={key} className="column is-6">
              <section className="section">
                <div className="has-text-centered">
                  <div
                    style={{
                      width: '240px',
                      display: 'inline-block',
                    }}
                  >
                    {/* <PreviewCompatibleImage imageInfo={item} /> */}
                  </div>
                </div>
                <p>{item.text}</p>
              </section>
            </div>
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
