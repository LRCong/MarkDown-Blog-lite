import React from 'react'
import { Link } from 'react-router-dom'

import './BlogListItem.css'

export default function BlogListItem(props) {
    return <Link to={'home/blog/' + props.itemTitle}>
        <div className='item-container' style={{ width: props.itemWidth, height: props.itemHeight }}>
            <div className="item-img" style={{ width: props.itemHeight }}>
                <img src={props.itemImgUrl} alt="itemImg"></img>
            </div>
            <div className='item-info'>
                <h1>
                    {props.itemTitle}
                </h1>
            </div>
        </div>
    </Link>;
}