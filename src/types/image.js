import PropTypes from 'prop-types'

export const imageProps = PropTypes.shape({
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
});
