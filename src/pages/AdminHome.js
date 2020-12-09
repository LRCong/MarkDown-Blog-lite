import React from 'react'
import axios from 'axios'

import AdminNav from '../components/AdminNav.js'
import InfoCard from '../components/InfoCard.js'
import InfoList from '../components/InfoList.js'

import './AdminHome.css'


export default class AdminHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }

    componentDidMount() {
        const storageName = sessionStorage.getItem('userName');
        axios.get('/data/login.json')
            .then((data) => {
                if (data.data.data.userName === storageName)
                    this.setState({ userName: data.data.data.userName })
                else
                    this.props.history.replace('/admin/login');
            });
    }

    render() {
        return <div className="admin-container">
            <div className="admin-header">
                <AdminNav></AdminNav>
            </div>
            <div className="admin-content">
                <div className="user-info">
                    <InfoCard name={this.state.userName} info={'爱前端的大学生'}></InfoCard>
                </div>
                <div className="blog-info">
                    <InfoList></InfoList>
                </div>
            </div>
        </div>;
    }
}