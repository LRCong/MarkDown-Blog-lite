import React from 'react'
import { useHistory } from 'react-router-dom'

import './BlogView.css'

export default function BlogView(props) {
    const history = useHistory();
    return (
        <div className='blog-view'
            style={{ width: props.viewWidth, height: props.viewHeight }}>
            <a href="https://www.baidu.com" onClick={e => {
                e.preventDefault();
                history.push('/home/blog/' + props.BlogTitle)
            }}>
                <div className='view-img'>
                    <img src={props.imgUrl} alt={props.BlogTitle}></img>
                </div>
                <div className='view-title'>
                    <h1
                        style={{ fontSize: props.titleSize }}>{props.BlogTitle}</h1>
                    <p>{props.subTitle}</p>
                </div>
            </a>
        </div>
    );
}