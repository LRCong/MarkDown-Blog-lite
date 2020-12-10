import React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

import './AdminWriteBlog.css'

export default class AdminWriteBLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingTitle: false,
            title: "标题"
        };
        this.mdParser = new MarkdownIt(/* Markdown-it options */);
    }

    handleEditorChange = ({ html, text }) => {
        console.log('handleEditorChange', html, text)
    }

    handleEditing = () => {
        this.setState({
            editingTitle: !this.state.editingTitle
        });
    };

    handleEdit = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.setState({
                editingTitle: !this.state.editingTitle
            });
        }
    }

    handleComplete = (e) => {
        e.preventDefault();
        alert("成功保存文章");
        this.props.history.replace('/admin');
    }

    render() {

        return <div className='write-container'>
            <div className='title'>
                {this.state.editingTitle
                    ? <input
                        type='text'
                        value={this.state.title}
                        onChange={this.handleEdit}
                        onKeyUp={this.handleKeyUp}></input>
                    : <h1 onClick={this.handleEditing}>{this.state.title}</h1>}
                <input type='submit' value="保存" onClick={this.handleComplete}></input>
            </div>
            <MdEditor
                // value="Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."
                style={{ minHeight: "90vh" }}
                renderHTML={(text) => this.mdParser.render(text)}
                onChange={this.handleEditorChange}
            />
        </div>
    }
}