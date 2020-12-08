import React from 'react'

import './Home.css'

import GradualPicture from '../components/GradualPicture'
import Header from '../components/Header'
import BlogList from '../components/BlogList'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { blogType: "All" };
    }

    handleNavClick = (e, type) => {
        e.preventDefault();
        this.setState({
            blogType: type
        });
    };

    render() {
        return <div className='app'>
            <GradualPicture
                words="吾将上下而求索"
                wordsSize={'35px'}
                wordsColor={'black'}
                imgUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607428413945&di=7221b1de845e609e354875fab83d7602&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9345d688d43f8794fc510cfbd51b0ef41ad53abc.jpg'
                imgHeight={'125px'}
                imgWidth={'90%'}
            ></GradualPicture>
            <div className="content-container">
                <Header handleNavClick={this.handleNavClick}></Header>
                <BlogList blogType={this.state.blogType}></BlogList>
            </div>
        </div>;
    }
}