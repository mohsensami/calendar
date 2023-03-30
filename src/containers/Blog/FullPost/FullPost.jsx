import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './FullPost.css';
import { useParams } from 'react-router-dom';

function FullPost() {
    const { id } = useParams();
    // state = {
    //     loadedPost: null,
    // };
    const [loadedPost, setLoadedPost] = useState(null);
    useEffect(() => {
        if (id) {
            if (!loadedPost || (loadedPost && loadedPost.id !== id)) {
                axios.get(`/posts/${id}`).then((res) => setLoadedPost(res.data));
            }
        }
    }, []);
    const deletePostHandler = () => {
        axios.delete(`/posts/${id}`).then((res) => console.log(res));
    };
    let post = <p style={{ textAlign: 'center' }}>Please select a Post</p>;
    if (id) {
        post = <p style={{ textAlign: 'center' }}>Loading</p>;
    }
    if (loadedPost) {
        post = (
            <div className="full-post">
                <h2>{loadedPost.title}</h2>
                <p>{loadedPost.body}</p>
                <div>
                    <button onClick={() => deletePostHandler()} className="delete">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
    return post;
}

export default FullPost;
