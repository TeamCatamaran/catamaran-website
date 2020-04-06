import React from 'react'

const Logo = (props) => {
    const fill = props.fill == null ? '#3e3d3f' : props.fill
    const weight = props.weight == null ? 'medium' : props.weight

    let svg;
    switch (weight) {
        case "heavy":
            svg = (
                <svg xmlns="http://www.w3.org/2000/svg" className={"c-logo -heavy"} viewBox="0 0 50 50">
                    <path fill={fill} d="M49.42,40.19 L9.37,0.14 C9.30154809,0.0654163647 9.20994702,0.0160927101 9.11,0 C9,0 8.92,0.11 8.92,0.33 L8.92,17.53 L0.45,9.06 C0.381548093,8.98541636 0.28994702,8.93609271 0.19,8.92 C0.08,8.92 0,9 0,9.25 L0,48.93 C0,49.2779394 0.282060608,49.56 0.63,49.56 L40.31,49.56 C40.66,49.56 40.74,49.36 40.5,49.11 L32,40.64 L49.2,40.64 C49.58,40.64 49.66,40.44 49.42,40.19 Z M36.59,47.75 L1.8,47.75 L1.8,13 L8.92,20.11 L8.92,40 C8.92,40.1670864 8.98637481,40.3273294 9.10452273,40.4454773 C9.22267065,40.5636252 9.38291361,40.63 9.55,40.63 L29.48,40.63 L36.59,47.75 Z" />
                </svg>
            );
            break;
        case "light":
            svg = (
                <svg xmlns="http://www.w3.org/2000/svg" className={"c-logo -light"} viewBox="0 0 98 98">
                    <path fill={fill} d="M96.75,78.69 L18.34,0.28 C18.2131599,0.123561281 18.0300761,0.0230446846 17.83,0 C17.61,0 17.46,0.22 17.46,0.64 L17.46,34.33 L0.88,17.74 C0.75315987,17.5835613 0.57007607,17.4830447 0.37,17.46 C0.15,17.46 0,17.69 0,18.1 L0,95.79 C0.021458558,96.460825 0.568850747,96.9949738 1.24,97 L78.93,97 C79.61,97 79.77,96.6 79.29,96.12 L62.7,79.57 L96.39,79.57 C97.07,79.57 97.23,79.17 96.75,78.69 Z M75.68,95.17 L1.86,95.17 L1.86,21.35 L17.46,37 L17.46,78.33 C17.465439,79.0125675 18.0174325,79.564561 18.7,79.57 L60.07,79.57 L75.68,95.17 Z" />
                </svg>
            );
            break;
        default:
            svg = (
                <svg xmlns="http://www.w3.org/2000/svg" className={"c-logo -medium"} viewBox="0 0 62 62">
                    <path fill={fill} d="M60.86,49.5 L11.53,0.17 C11.4514233,0.0767294555 11.3408885,0.0161136107 11.22,0 C11.08,0 10.98,0.14 10.98,0.4 L10.98,21.59 L0.55,11.16 C0.466718553,11.0690237 0.352749894,11.0120394 0.23,11 C0.09,11 0,11.14 0,11.41 L0,60.25 C0.0161280908,60.6690231 0.36066677,61 0.78,61 L49.64,61 C50.07,61 50.18,60.75 49.87,60.45 L39.44,50.05 L60.63,50.05 C61.06,50.05 61.16,49.8 60.86,49.5 Z M45.86,59.16 L1.86,59.16 L1.86,15.16 L11,24.24 L11,49.24 C11,49.4468689 11.0821783,49.6452649 11.2284567,49.7915433 C11.3747351,49.9378217 11.5731311,50.02 11.78,50.02 L36.78,50.02 L45.86,59.16 Z" />
                </svg>
            );
            break;
    }

    return svg;
}

export default Logo;