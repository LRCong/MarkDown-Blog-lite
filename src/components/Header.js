import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header(props) {
    return (
        <div className='header'>

            <div className='nav'>
                <hr />
                <ul>
                    <li><a href="https://www.baidu.com">React</a></li>
                    <li><a href="https://www.baidu.com">node.js</a></li>
                    <li><a href="https://www.baidu.com">Algorithm</a></li>
                    <li><a href="https://www.baidu.com">ECMAScript</a></li>
                    <li><a href="https://www.baidu.com">HTML5</a></li>
                    <li><a href="https://www.baidu.com">CSS3</a></li>
                </ul>
                <hr />
            </div>

        </div>
    );
}