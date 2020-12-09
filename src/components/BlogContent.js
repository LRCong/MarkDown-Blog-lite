import React from 'react'
import ReactMarkDown from 'react-markdown'
import axios from 'axios'

import './BlogContent.css'

export default class BlogContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: '', date: '' };
    }

    componentDidMount() {
        axios.get('/data/' + this.props.match.params.name + '.md')
            .then((data) => {
                console.log(data.data)
                this.setState({
                    content: data.data
                });
            });
        axios.get('/data/bloglist.json')
            .then((data) => {
                this.setState({
                    date: data.data.data.filter((data) => data.title === this.props.match.params.name)[0].date
                });
            });
    }

    render() {
        return (
            <div className="blog-conatiner">
                <div className="blog-title">
                    <h1>{this.props.match.params.name}</h1>
                    <h3>{this.state.date}</h3>
                </div>
                <div className="blog-content">
                    <ReactMarkDown source={this.state.content}> </ReactMarkDown>
                </div>
            </div>
        );
    }
}