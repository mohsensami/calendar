import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="post">
        <h1>{props.title}</h1>
        <div>
            <div className="author">Author</div>
        </div>
    </article>
);

export default post;
