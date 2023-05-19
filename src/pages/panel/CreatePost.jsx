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
                        {/* <Card type="inner" title={post[0].title}>
                            <p>User ID: {post[0].id}</p>
                            <span>{post[0].body}</span>
                        </Card> */}
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
                <Button type="submit" variant="outlined">
                    Submit
                </Button>
                {/* <Space style={{ margin: 10 }}>
                    <Button onClick={() => navigate('/')}>Go Back</Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Space> */}
            </form>
            <br />
            <br />
            {showPost && <div>{showPostBlog()}</div>}
        </Container>
    );
};

export default CreatePost;
