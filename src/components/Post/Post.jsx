import React from 'react';

import './Post.css';

const post = (props) => (
    <article onClick={props.click} className="post">
        <h1>{props.title}</h1>
        <div>
            <div className="author">{props.author}</div>
        </div>
    </article>
);

export default post;
