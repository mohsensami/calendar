import React from 'react';

import './NewPost.css';

class NewPost extends React.Component {
    state = {
        title: '',
        content: '',
        author: 'Masood',
    };

    render() {
        return (
            <div className="new-post">
                <h2>Add a Post</h2>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Masood">Masood</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
