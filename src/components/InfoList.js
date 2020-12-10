import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import BlogListItem from './BlogListItem.js'

import './InfoList.css'

export default class InfoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogList: []
        };
    }

    componentDidMount() {
        axios.get('/data/bloglist.json')
            .then((data) => {
                this.setState({
                    blogList: data.data.data
                });
            });
    }

    render() {
        const list = this.state.blogList.map((value) => {
            return (
                <BlogListItem
                    itemWidth={'100%'}
                    itemHeight={'200px'}
                    itemTitle={value.title}
                    itemImgUrl={value.imgUrl}
                >
                </BlogListItem>
            )
        });
        return <div className="infolist-container">
            <div className='info-nav'>
                <span>
                    <Link to='/admin'>全部文章</Link>
                </span>
                <hr />
            </div>
            <div className='info-list'>
                {list}
            </div>
        </div>;
    }
}