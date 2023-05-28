import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, setEdit, updatePost } from '../../redux/features/postSlice';
import { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const SinglePost = () => {
    const { id } = useParams();
    const [values, setValues] = useState({ titleText: '', bodyText: '' });
    const { titleText, bodyText } = values;
    const dispatch = useDispatch();
    const { loading, title, post, edit, body } = useSelector((state) => ({ ...state.app }));

    useEffect(() => {
        if (body) {
            setValues({ ...values, titleText: title, bodyText: body });
        }
    }, [body]);

    useEffect(() => {
        dispatch(getPost({ id }));
    }, []);

    return (
        <Container maxWidth="lg" sx={{ marginTop: 2 }}>
            {edit ? (
                <div>
                    <TextField
                        label="Title"
                        fullWidth
                        onChange={(e) => setValues({ ...values, titleText: e.target.value })}
                        value={titleText}
                    />
                    <br />
                    <br />
                    <TextField
                        multiline
                        fullWidth
                        onChange={(e) => setValues({ ...values, bodyText: e.target.value })}
                        value={bodyText}
                        label="Body"
                    />
                    <Button
                        variant="contained"
                        onClick={() => {
                            dispatch(
                                updatePost({
                                    id: post[0].id,
                                    title: post[0].title,
                                    body: bodyText,
                                })
                            );
                            dispatch(setEdit({ edit: false, body: '' }));
                        }}
                    >
                        Save
                    </Button>
                    <Button variant="outlined" onClick={() => dispatch(setEdit({ edit: false, body: '' }))}>
                        Cancel
                    </Button>
                </div>
            ) : (
                <div>
                    <Typography variant="h3" component="h1">
                        {post.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {post.body}
                    </Typography>
                </div>
            )}

            {!edit && (
                <Button onClick={() => dispatch(setEdit({ edit: true, body: post.body }))} variant="contained">
                    Edit
                </Button>
            )}
        </Container>
    );
};

export default SinglePost;
