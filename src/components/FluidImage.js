import React from 'react'

const FluidImage = ({
    alt,
    className,
    image,
}) => {
    const cssClassName = className != null ? className : "";

    if (image != null && !!image.childImageSharp) {
        return (
            <img className={className} src={image.childImageSharp.fluid.src} alt={alt} />
        );
    }

    return (
        <img className={cssClassName} src={image} alt={alt} />
    );
}

export default FluidImage
