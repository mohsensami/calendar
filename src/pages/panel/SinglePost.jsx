import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../redux/features/postSlice';
import { useEffect } from 'react';
import { Container, Paper, Typography } from '@mui/material';

const SinglePost = () => {
    const { loading, post } = useSelector((state) => ({ ...state.app }));
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost({ id }));
    }, []);
    console.log(post);
    return (
        <Paper>
            <Container maxWidth="xl" sx={{ marginTop: 2 }}>
                <Typography variant="h3" component="h1">
                    {post.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {post.body}
                </Typography>
            </Container>
        </Paper>
    );
};

export default SinglePost;
