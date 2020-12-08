import React from 'react'

import axios from 'axios'

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
        return <div>
            {this.state.userName}后台管理页面
        </div>;
    }
}