import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/features/postSlice';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
// import LoadingCard from './LoadingCard';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, posts } = useSelector((state) => ({ ...state.app }));
    console.log('post', posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Container maxWidth="xl">
            <h1 style={{ textAlign: 'center' }}>Fetch Post</h1>

            <br />
            <br />
            {loading ? (
                // <LoadingCard count={1} />
                <p>Loading</p>
            ) : (
                <>
                    {posts.length > 0 && (
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {posts.map((item) => {
                                return (
                                    <Grid key={item.id} item xs={4}>
                                        <Card>
                                            {/* <CardMedia sx={{ height: 140 }} image="" title="green iguana" /> */}
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.body}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </>
            )}
        </Container>
    );
};

export default Home;
