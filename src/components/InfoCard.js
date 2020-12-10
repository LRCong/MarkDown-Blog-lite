import React from 'react'

import './InfoCard.css'

export default function InfoCard(props) {
    return (
        <div className='infocard-container'>
            <div className="info-img">
                <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3608345974,1022498256&fm=26&gp=0.jpg' alt='图片'></img>
            </div>
            <div className='info-content'>
                <h2>{props.name}</h2>
                <h4>{props.info}</h4>
            </div>
        </div>
    );
}