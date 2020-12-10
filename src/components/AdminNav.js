import React from 'react'
import { Link } from 'react-router-dom'

import './AdminNav.css'

export default class AdminNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="nav-container">
            <span>简单博客</span>
            <span><Link to="/admin">用户主页</Link></span>
            <span><Link to="/admin/write">去写文章</Link></span>
            <span style={{ float: 'right' }}><Link to="/home">返回主页</Link></span>
        </div>;
    }
}