import React from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends React.Component {
    state = {
        loadedPost: null,
    };
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then((res) => this.setState({ loadedPost: res.data }));
            }
        }
    }
    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`).then((res) => console.log(res));
    };
    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="full-post">
                    <h2>{this.state.loadedPost.title}</h2>
                    <p>{this.state.loadedPost.body}</p>
                    <div>
                        <button onClick={this.deletePostHandler} className="delete">
                            Delete
                        </button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
