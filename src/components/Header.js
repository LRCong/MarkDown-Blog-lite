import React from 'react'

import './Header.css'

export default function Header(props) {
    return (
        <div className='header'>
            <div className='nav'>
                <hr />
                <ul>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'All'); }}>All</a></li>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'React'); }}>React</a></li>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'node.js'); }}>node.js</a></li>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'Algorithm'); }}>Algorithm</a></li>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'ECMAScript'); }}>ECMAScript</a></li>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'HTML5'); }}>HTML5</a></li>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'CSS3'); }}>CSS3</a></li>
                    <li><a href="https://www.baidu.com" onClick={(e) => { props.handleNavClick(e, 'network'); }}>network</a></li>
                </ul>
                <hr />
            </div>
        </div>
    );
}