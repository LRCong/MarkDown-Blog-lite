import React from 'react'

import './BlogList.css'

import BlogView from './BlogView'

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='list-container'>
                <BlogView
                    imgUrl={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2199477428,615827370&fm=26&gp=0.jpg'}
                    BlogTitle={"useEffect与函数组件生命周期"}
                    subTitle={'2020/12/06'}
                    viewWidth={'30%'}
                    viewHeight={'100px'}
                    titleSize={'15px'}></BlogView>
                <BlogView
                    imgUrl={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2199477428,615827370&fm=26&gp=0.jpg'}
                    BlogTitle={"useEffect与函数组件生命周期"}
                    subTitle={'2020/12/06'}
                    viewWidth={'30%'}
                    viewHeight={'50px'}
                    titleSize={'15px'}></BlogView>
                <BlogView
                    imgUrl={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2199477428,615827370&fm=26&gp=0.jpg'}
                    BlogTitle={"useEffect与函数组件生命周期"}
                    subTitle={'2020/12/06'}
                    viewWidth={'30%'}
                    viewHeight={'50px'}
                    titleSize={'15px'}></BlogView>
                <BlogView
                    imgUrl={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2199477428,615827370&fm=26&gp=0.jpg'}
                    BlogTitle={"useEffect与函数组件生命周期"}
                    subTitle={'2020/12/06'}
                    viewWidth={'30%'}
                    viewHeight={'50px'}
                    titleSize={'15px'}></BlogView>
                <BlogView
                    imgUrl={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2199477428,615827370&fm=26&gp=0.jpg'}
                    BlogTitle={"useEffect与函数组件生命周期"}
                    subTitle={'2020/12/06'}
                    viewWidth={'30%'}
                    viewHeight={'50px'}
                    titleSize={'15px'}></BlogView>
                <BlogView
                    imgUrl={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2199477428,615827370&fm=26&gp=0.jpg'}
                    BlogTitle={"useEffect与函数组件生命周期"}
                    subTitle={'2020/12/06'}
                    viewWidth={'30%'}
                    viewHeight={'50px'}
                    titleSize={'15px'}></BlogView>
                <BlogView
                    imgUrl={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2199477428,615827370&fm=26&gp=0.jpg'}
                    BlogTitle={"useEffect与函数组件生命周期"}
                    subTitle={'2020/12/06'}
                    viewWidth={'30%'}
                    viewHeight={'50px'}
                    titleSize={'15px'}></BlogView>
            </div>
        );
    }
}