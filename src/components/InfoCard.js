import React from 'react'

import './InfoCard.css'

export default function InfoCard(props) {
    return (
        <div className='infocard-container'>
            <div className="info-img">
                <img src='https://avatars3.githubusercontent.com/u/48516864?s=460&u=f0f5f2f6c3ea9844b7a86495d72469002696b173&v=4' alt='图片'></img>
            </div>
            <div className='info-content'>
                <h2>{props.name}</h2>
                <h4>{props.info}</h4>
            </div>
        </div>
    );
}