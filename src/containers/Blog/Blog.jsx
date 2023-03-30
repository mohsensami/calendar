import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/new-post">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route exact path="/" element={<Posts />} />
                    <Route path="/new-post" element={<NewPost />} />
                    <Route exact path="/:id" element={<FullPost />} />
                    <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Not Found</h2>} />
                </Routes>
            </div>
        );
    }
}

export default Blog;
