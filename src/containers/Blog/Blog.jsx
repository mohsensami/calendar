import React from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import './Blog.css';

class Blog extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };
    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map((item) => {
                    return {
                        ...item,
                        author: 'Admin',
                    };
                });
                this.setState({ posts: updatedPosts });
            })
            .catch((err) => this.setState({ error: true }));
    }
    selectedPostHandler = (id) => {
        this.setState({ selectedPostId: id });
    };
    render() {
        let posts = <p>Fetching data failed!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((item) => {
                return <Post key={item.id} title={item.title} author={item.author} click={() => this.selectedPostHandler(item.id)} />;
            });
        }
        return (
            <div>
                <section className="posts">{posts}</section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
