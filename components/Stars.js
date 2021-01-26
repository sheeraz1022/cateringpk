import React, {Fragment} from 'react';


export function Stars({star}) {
    // const classes = useStyles();
    star = (star > 5 || star < 1) ? 5 : star;

    // const FIVE_STAR = 535;
    const width = ((5 - star) * 106);

    return (
    <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="48" viewBox={`${width} 0 535 110`}>
            <defs><radialGradient id="A" cx="80" cy="243" r="97" gradientTransform="matrix(.54 0 0 .51 14 -70)" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fc0" offset="0"/><stop stop-color="#ff6e00" offset="1"/>
                </radialGradient>
            </defs>
                <path id="B" d="M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z" fill="url(#A)" fill-rule="evenodd"/>
                <use width="535" height="48" href="#B" x="105"/>
                <use width="535" height="48" href="#B" x="211"/>
                <use width="535" height="48" href="#B" x="316"/>
                <use width="535" height="48" href="#B" x="421"/>
        </svg>
    </Fragment>
    )
}

export default Stars;
