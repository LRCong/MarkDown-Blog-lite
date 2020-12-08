import React from 'react'

import './BlogView.css'

export default function BlogView(props) {
    return (
        <div className='blog-view'
            style={{ width: props.viewWidth, height: props.viewHeight }}>
            <div className='view-img'>
                <img src={props.imgUrl} alt={props.BlogTitle}></img>
            </div>
            <div className='view-title'>
                <h1
                    style={{ fontSize: props.titleSize }}>{props.BlogTitle}</h1>
                <p>{props.subTitle}</p>
            </div>
        </div>
    );
}