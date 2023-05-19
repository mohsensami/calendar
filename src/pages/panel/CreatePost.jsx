import { useState } from 'react';
// import { Input, Button, Space, Card } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../redux/features/postSlice';
import { Button, Container, TextField } from '@mui/material';
// import LoadingCard from './LoadingCard';

const CreatePost = () => {
    const [values, setValues] = useState({ title: '', body: '' });
    const [showPost, setShowPost] = useState(false);
    const { post, loading } = useSelector((state) => ({ ...state.app }));
    const { title, body } = values;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost({ values }));
        setValues({ title: '', body: '' });
        setShowPost(true);
    };

    const showPostBlog = () => {
        return (
            <>
                {loading ? (
                    // <LoadingCard count={1} />
                    <p>Loading</p>
                ) : (
                    <div className="site-card-border-less-wrapper">
                        {post[0].id} -- {post[0].body}
                    </div>
                )}
            </>
        );
    };
    return (
        <Container maxWidth="md" sx={{ marginTop: 2 }}>
            <form onSubmit={handleSubmit}>
                <h1>Create Post</h1>
                <TextField
                    label="Title"
                    fullWidth
                    onChange={(e) => setValues({ ...values, title: e.target.value })}
                    value={title}
                />
                <br />
                <br />
                <TextField
                    multiline
                    fullWidth
                    onChange={(e) => setValues({ ...values, body: e.target.value })}
                    value={body}
                    label="Body"
                    rows={4}
                />
                <br />
                <br />
                <Button onClick={() => navigate('/panel')} variant="outlined">
                    Go Back
                </Button>
                <Button type="submit" variant="outlined">
                    Submit
                </Button>
            </form>
            <br />
            <br />
            {showPost && <div>{showPostBlog()}</div>}
        </Container>
    );
};

export default CreatePost;
