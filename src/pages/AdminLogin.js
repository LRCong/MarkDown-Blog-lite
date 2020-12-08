import React from 'react'
import axios from 'axios'

import './AdminLogin.css'

export default class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwd: '',
            info: ''
        };
    }

    handlePwdChange = (e) => {
        this.setState({
            pwd: e.target.value
        });
    };

    handleUserNameChange = (e) => {
        this.setState({
            userName: e.target.value
        });
    };

    handleSubmit = (e) => {
        axios.get('/data/login.json')
            .then((data) => {
                if (data.data.data.userName === this.state.userName && data.data.data.pwd === this.state.pwd) {
                    sessionStorage.setItem('userName', this.state.userName);
                    this.props.history.push('/admin');
                }
                else
                    alert('密码错误或者没有这个账户');
            });

    };

    render() {
        return <div className='login-container'>
            <div className='side-img'>
                <img src='/logo512.png' alt="React"></img>
            </div>
            <div className='side-login'>
                <div className='login-form'>
                    <h1>Login in</h1>
                    <input type='text' placeholder='USERNAME' onChange={this.handleUserNameChange} />
                    <input type='password' placeholder='PASSWD' onChange={this.handlePwdChange} />
                    <input type='submit' onClick={this.handleSubmit} />
                </div>
            </div>
        </div>;
    }
}