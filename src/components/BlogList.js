import React from 'react'
import axios from 'axios'

import './BlogList.css'

import BlogView from './BlogView'

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { blogListData: [] };
    }

    componentDidMount() {
        axios.get("/data/bloglist.json")
            .then((value) => this.setState({ blogListData: value.data.data }));
    }

    render() {
        const { blogListData } = this.state;
        const { blogType } = this.props;
        const list = blogType === 'All' ? blogListData : blogListData.filter((value) => value.type === blogType);
        return (
            <div className='list-container'>
                {list.map(value =>
                    <BlogView
                        imgUrl={value.imgUrl}
                        BlogTitle={value.title}
                        subTitle={value.date}
                        viewWidth={'30%'}
                        viewHeight={'100px'}
                        titleSize={'15px'}
                        key={value.id}
                    ></BlogView>
                )}
            </div>
        );
    }
}