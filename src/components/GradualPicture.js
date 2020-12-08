import React, { useEffect, useState } from 'react'

import './GradualPicture.css'

export default function GradualPicture(props) {

    const [state, setState] = useState({ cnt: 0, max: props.words.length });

    useEffect(() => {
        const id = setInterval(() => {
            setState(state => ({
                cnt: state.cnt < state.max ? state.cnt + 1 : 0,
                max: state.max
            }));
        }, 500);
        return () => clearInterval(id);
    }, []);

    return <div className='container'>
        <img
            src={props.imgUrl}
            alt={props.words}
            style={{ height: props.imgHeight, width: props.imgWidth }}>
        </img>
        <h1 style={{ fontSize: props.wordsSize, color: props.wordsColor }}>
            {props.words.substr(0, state.cnt) + '_'}
        </h1>
    </div >;
}