import PropTypes from 'prop-types'

export const seoProps = PropTypes.shape({
    title: PropTypes.PropTypes.string,
    description: PropTypes.PropTypes.string,
    ogTitle: PropTypes.PropTypes.string,
    ogType: PropTypes.PropTypes.string,
    ogDescription: PropTypes.PropTypes.string,
    ogImage: PropTypes.PropTypes.string,
    robots: PropTypes.PropTypes.string,
    canonical: PropTypes.PropTypes.string,
});
