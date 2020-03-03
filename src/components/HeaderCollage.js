import React from 'react'

import studio1 from '../img/headers/studio-layer-1.png'
import studio2 from '../img/headers/studio-layer-2.png'
import studio3 from '../img/headers/studio-layer-3.png'
import studio4 from '../img/headers/studio-layer-4.png'

const HeaderCollage = class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.type === "none") {
            return (null);
        }

        if (this.props.type === "studio") {
            return (
                <div className="c-header__background -studio">
                    <img className="studio-layer-four" src={studio4} alt="Studio Collage Layer 4" />
                    <img className="studio-layer-three" src={studio3} alt="Studio Collage Layer 3" />
                    <img className="studio-layer-two" src={studio2} alt="Studio Collage Layer 2" />
                    <img className="studio-layer-one" src={studio1} alt="Studio Collage Layer 1" />
                </div>
            );
        }

        return (
            <div className="c-header__background -studio">
                <img className="studio-layer-four" src={studio4} alt="Studio Collage Layer 4" />
                <img className="studio-layer-three" src={studio3} alt="Studio Collage Layer 3" />
                <img className="studio-layer-two" src={studio2} alt="Studio Collage Layer 2" />
                <img className="studio-layer-one" src={studio1} alt="Studio Collage Layer 1" />
            </div>
        );
    }
}

export default HeaderCollage;
