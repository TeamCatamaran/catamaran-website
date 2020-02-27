import React from 'react'

const Logo = (props) => {
    const fill = props.fill == null ? '#3e3d3f' : props.fill

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="c-logo" viewBox="0 0 61.03 61.03"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill={fill} d="M60.86,49.5,11.53.17A.49.49,0,0,0,11.22,0c-.14,0-.24.14-.24.4V21.59L.55,11.16A.5.5,0,0,0,.23,11c-.14,0-.23.14-.23.41V60.25A.78.78,0,0,0,.78,61H49.64c.43,0,.54-.25.23-.55L39.44,50.05H60.63C61.06,50.05,61.16,49.8,60.86,49.5Zm-15,9.66h-44v-44L11,24.24v25a.78.78,0,0,0,.78.78h25Z" /></g></g></svg>
    );
}

export default Logo;